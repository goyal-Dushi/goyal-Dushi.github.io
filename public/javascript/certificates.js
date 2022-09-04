const coursesContainer = document.querySelector(".courses-container");

// GETTING BADGES AND TASKS -----------------------------
function getBadges(badge) {
  return `<span class="badge badge-pill badge-secondary p-2 mt-3">${badge}</span>`;
}
function getTask(task) {
  return `<li class="list-group-item">${task}</li>`;
}

// GETTING COURSES ----------------------------
const getCourses = async () => {
  const courses = await fetch("../data/courses.json")
    .then((res) => res.json())
    .then((data) => data.courseData);
  const courseList = courses
    ?.map((course) => {
      return `

    <div class="certi-img">
      <img src=${course.imgSrc} height="170px" width="220px" />
      <button type="button" class="course-modal-btn" name=${
        course.id_name
      } value=${course.id} > OPEN </button>
    </div>

    <div class="modal-wrapper" data-id=${course.id}>
      
      <div class="dialog">
        
        <div class="dialog_header">
          <div class="modal-title"> ${course.name} </div>
          <div class="modal-close" data-modal=${course.id}>
            <div class="close-line"></div>
          </div>
        </div>
        
        <div class="dialog_body">
            <div class="modal-content">
                <div class="badges-wrapper">
                  <h3>skills i gained</h3>
                  <div class="badges">
                    ${course.badges.map(getBadges).join("")}  
                  </div>
                </div>
                <div class="learning-list">
                  <h3>what i learned</h3>
                    <ol>
                      ${course.tasks.map(getTask).join("")}
                    </ol>
                </div>
            </div>
            <div class="certi-ext">
              <a type="button" class="certi-ext_link" href=${course.source}> View Certificate </a>
            </div>
        </div>
        
        <div class="dialog_footer">
          <div class="modal-close" data-modal=${course.id}>
            <p> Close </p>
          </div>
        </div>
      </div>
    </div>
  `;
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
};
getCourses();

const body = document.querySelector("body");

// HANDLING SKILL ICONS CONTAINER
const iconContainer = document.querySelector(".icons-container");


const getSkills = async () => {
  const skills = await fetch("../data/skills.json").then((res) => res.json());
  const skillList = skills
    .map((item) => {
      return `<li>
                <abbr title=${item.name}>
                <img src=${item.imgSrc} alt=${item.name} />
                </abbr>
              </li>`;
    }, [])
    .join("");
  iconContainer.innerHTML = skillList;
};
getSkills();

// HANDLING Co-Curricular CERTIFICATES
const sportsContainer = document.querySelector(".sports-container");

const getCocurrucular = async () => {
  const cocurricular = await fetch("../data/extras.json").then((res) => res.json());
  const extrasList = cocurricular
    .map((sport) => {
      return `
    <div class="certi-img">
      <img src=${sport.imgSrc} height="170px" width="220px" >
      <button type="button" class="sport-modal-btn" name=${sport.id_name} value=${sport.id} > OPEN </button>
    </div>

    <div class="modal-wrapper" data-id=${sport.id}>
      
      <div class="dialog">
        
        <div class="dialog_header">
          <div class="modal-title" > ${sport.name} </div>
          <div class="modal-close" data-modal=${sport.id}>
            <div class="close-line"></div>
          </div>
        </div>
        
        <div class="dialog_body">
          <div class="modal-content">
            <div class="modal-img">
              <img  src=${sport.imgSrc} alt=${sport.id_name}>
            </div>
          </div>
        </div>

        <div class="dialog_footer">
          <div class="modal-close" data-modal=${sport.id}>
            <p> Close </p>
          </div>
        </div>

      </div>
   </div>
  `;
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
};

getCocurrucular();
