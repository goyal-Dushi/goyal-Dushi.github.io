import courseComponent from "./course";
import sportsComponent from "./sports";
import skillComponent from "./skills";

const body = document.querySelector("body");
const coursesContainer = document.querySelector(".courses-container");
const iconContainer = document.querySelector(".icons-container");
const sportsContainer = document.querySelector(".sports-container");

(async () => {
  const courses = await fetch("../data/courses.json")
    .then((res) => res.json())
    .then((data) => data.courseData);
  const courseList = courses
    ?.map((course) => {
      return courseComponent(course);
    }, [])
    .join("");
  coursesContainer.innerHTML = courseList;
  const openCourseModal = document.querySelectorAll(".course-modal-btn");
  const courseModal = document.querySelectorAll(
    ".courses-container .modal-wrapper"
  );
  const closeCourseModal = document.querySelectorAll(
    ".courses-container .modal-close"
  );

  openCourseModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      courseModal.forEach((modal) => {
        if (modal.dataset.id == e.currentTarget.value) {
          modal.style.display = "flex";
          body.style.overflowY = "hidden";
        }
      });
    });
  });

  closeCourseModal.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
      courseModal.forEach((modal) => {
        if (modal.dataset.id === e.currentTarget.dataset.modal) {
          modal.style.display = "none";
          body.style.overflowY = "scroll";
        }
      });
    });
  });
})();

(async () => {
  const skills = await fetch("../data/skills.json").then((res) => res.json());
  const skillList = skills
    .map((item) => {
      return skillComponent(item);
    }, [])
    .join("");
  iconContainer.innerHTML = skillList;
})();

(async () => {
  const cocurricular = await fetch("../data/extras.json").then((res) => res.json());
  const extrasList = cocurricular
    .map((sport) => {
      return sportsComponent(sport);
    }, [])
    .join("");
  sportsContainer.innerHTML = extrasList;

  const openSportModal = document.querySelectorAll(
    ".sports-container .sport-modal-btn"
  );
  const sportModal = document.querySelectorAll(
    ".sports-container .modal-wrapper"
  );
  const closeSportModal = document.querySelectorAll(
    ".sports-container .modal-close"
  );

  openSportModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      sportModal.forEach((modal) => {
        if (modal.dataset.id == e.currentTarget.value) {
          modal.style.display = "flex";
          body.style.overflowY = "hidden";
        }
      });
    });
  });

  closeSportModal.forEach((closeBtn) => {
    closeBtn.addEventListener("click", (e) => {
      sportModal.forEach((modal) => {
        if (modal.dataset.id === e.currentTarget.dataset.modal) {
          modal.style.display = "none";
          body.style.overflowY = "scroll";
        }
      });
    });
  });
})();

console.log('certificates loading complete');