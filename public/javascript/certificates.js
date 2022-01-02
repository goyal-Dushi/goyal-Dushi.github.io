const coursesContainer = document.querySelector(".courses-container");

// GETTING BADGES AND TASKS
function getBadges(badge) {
  return `<span class="badge badge-pill badge-secondary p-2 mt-3">${badge}</span>`;
}
function getTask(task) {
  return `<li class="list-group-item">${task}</li>`;
}

let courses;
const getCourses = async () => {
  courses = await fetch("../data/courses.json")
    .then((res) => res.json())
    .then((data) => data.courseData);
  let courseList = courses
    ?.map((course) => {
      return `

    <div class="certi-img">
      <img src=${course.imgSrc} height="170px" width="220px" />
      <button type="button" class="img-modal-btn" name=${
        course.id_name
      } value=${course.id} > OPEN </button>
    </div>

    <div class="modal-wrapper" data-id=${course.id}>
        
        <div class="modal-close" data-modal=${course.id}>
            <div class="close-line"></div>
        </div>
        
        <div class="modal-container">
          <div class="modal-title"> ${course.name} </div>
          <a type="button" class="certi-link" href=${
            course.source
          }> View Certificate </a>
            <div class="modal-content">
              <h3>skills i gained</h3>
              <div class="badges">
                ${course.badges.map(getBadges).join("")}  
              </div>
              <h3>what i learned</h3>
              <div class="learning-list">
                <ol>
                  ${course.tasks.map(getTask).join("")}
                </ol>
            </div>
          </div>
        </div>

    </div>
  `;
    }, [])
    .join("");
  coursesContainer.innerHTML = courseList;
  const openCourseModal = document.querySelectorAll(".img-modal-btn");
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
          modal.style.display = "block";
          body.style.overflowY = "hidden";
          // break;
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
};
getCourses();

const body = document.querySelector("body");

// HANDLING SKILL ICONS CONTAINER
const iconContainer = document.querySelector(".icons-container");

let skills;
const getSkills = async () => {
  skills = await fetch("../data/skills.json").then((res) => res.json());
  let skillList = skills
    .map((item) => {
      return `<li><img src=${item.imgSrc} alt=${item.name} /></li>`;
    }, [])
    .join("");
  iconContainer.innerHTML = skillList;
};
getSkills();

// HANDLING Co-Curricular CERTIFICATES
const sportsContainer = document.querySelector(".sports-container");

let cocurricular;
const getCocurrucular = async () => {
  cocurricular = await fetch("../data/extras.json").then((res) => res.json());
  let extrasList = cocurricular
    .map((sport) => {
      return `
    <div class="certi-img">
      <img src=${sport.imgSrc} height="170px" width="220px" >
      <button type="button" class="img-modal-btn" name=${sport.id_name} value=${sport.id} > OPEN </button>
    </div>
    <div class="modal-wrapper" data-id=${sport.id}>
    <div class="modal-close" data-modal=${sport.id}>
          <div class="close-line"></div>
        </div>
      <div class="modal-container">
        <div class="modal-title" > ${sport.name} </div>
        <div class="modal-img">
          <img  src=${sport.imgSrc} alt=${sport.id_name}>
        </div>
      </div>
    </div>
  `;
    }, [])
    .join("");
  sportsContainer.innerHTML = extrasList;

  const openSportModal = document.querySelectorAll(
    ".sports-container .img-modal-btn"
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
          modal.style.display = "block";
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
};

getCocurrucular();
