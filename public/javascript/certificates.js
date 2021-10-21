const courseURL = "./images/skills/";
const extrasURL = "./images/cocurricular/";
const imgUrl = "./images/icons/";

const skills = [
  {
    id: 1,
    imgSrc: imgUrl + "c2.jpg",
    name: "C Programming",
  },
  {
    id: 2,
    imgSrc: imgUrl + "react.png",
    name: "React",
  },
  {
    id: 3,
    imgSrc: imgUrl + "java1.png",
    name: "Java",
  },
  {
    id: 4,
    imgSrc: imgUrl + "javascript.webp",
    name: "Javascript",
  },
  {
    id: 5,
    imgSrc: imgUrl + "html.webp",
    name: "HTML 5",
  },
  {
    id: 6,
    imgSrc: imgUrl + "css.webp",
    name: "CSS 3",
  },
  {
    id: 7,
    imgSrc: imgUrl + "bootstrap2.jpg",
    name: "Bootstrap",
  },
  {
    id: 8,
    imgSrc: imgUrl + "redux.png",
    name: "Redux",
  },
  {
    id: 9,
    imgSrc: imgUrl + "mongodb.webp",
    name: "MongoDB",
  },
  {
    id: 10,
    imgSrc: imgUrl + "nodejs.webp",
    name: "Node JS",
  },
  {
    id: 11,
    imgSrc: imgUrl + "sass.png",
    name: "SASS",
  },
  {
    id: 12,
    imgSrc: imgUrl + "next.png",
    name: "Next js",
  },
];

const courses = [
  {
    id: 1,
    id_name: "Cprogramming",
    name: "Programming Fundamentals : C",
    badges: [
      "Algorithms",
      "Programming Language Concepts",
      "Probelm Solving",
      "C Programming",
    ],
    tasks: [
      "Developed algorithms for various problem statements",
      "Gained knowledge of various core concets in C Programming",
      "Learned about memory usage and various data types in C",
    ],
    imgSrc: courseURL + "CourseraCprogram.jpg",
    source: "https://coursera.org/share/b04b4ef3f38273a276b0aa5c9aa103c3",
  },
  {
    id: 2,
    id_name: "Static",
    name: "Static Website using HTML5 AND CSS3",
    badges: ["CSS", "HTML", "Web Design", "Web Page", "Websites"],
    tasks: [
      "Gained understanding of infrastructure of hosting a website and web browsing",
      "Created web page contents with HTML (hypertext markup language)",
      "ustomized the format of web page contents with CSS (cascading style sheets) and hosted it using Github",
    ],
    imgSrc: courseURL + "CourseraHTML_CSS.jpg",
    source: "https://coursera.org/share/c7d08630720a12384837cfbae55b8dda",
  },
  {
    id: 3,
    id_name: "OOPS",
    name: "Coursera : OOPS Concepts Using Java",
    badges: [
      "OOP (Object Oriented Programming)",
      "Software Engineering",
      "Software Development",
      "Java",
    ],
    tasks: [
      "Gained understanding of four principles of object oriented programming paradigm.",
      "Developed applications with graphical user interface",
    ],
    imgSrc: courseURL + "CourseraJava.jpg",
    source: "https://coursera.org/share/5952ab8da98bbebab48c3ef1ef6ac0ee",
  },
  {
    id: 4,
    id_name: "JS",
    name: "Modern JavaScript: ES6 Basics",
    badges: ["Computer Programming", "ES6", "Javasctipt", "Front-end web"],
    tasks: [
      "Understood the major features of ES6.",
      "Applied ES6 in practical situations.",
      "Learned how to fix every problem caused by this.",
    ],
    imgSrc: courseURL + "ES6_js.jpg",
    source: "https://coursera.org/share/346d31785845973675b3cf75a95c9649",
  },
];

const cocurricular = [
  {
    id: 1,
    id_name: "National100",
    name: "100 mts : National Level",
    imgSrc: extrasURL + "100mts_national.jpg",
  },
  {
    id: 2,
    id_name: "National200",
    name: "200 mts : National Level",
    imgSrc: extrasURL + "200mt_national.jpg",
  },
  {
    id: 3,
    id_name: "National400",
    name: "4x100 mts : National Level",
    imgSrc: extrasURL + "relay_National.jpg",
  },
  {
    id: 4,
    id_name: "Spardha100",
    name: "100 mts : Spardha",
    imgSrc: extrasURL + "100mt_Spardha_1.jpg",
  },
  {
    id: 5,
    id_name: "Spardha200",
    name: "200 mts : Spardha",
    imgSrc: extrasURL + "200mt_Spardha.jpg",
  },
  {
    id: 6,
    id_name: "Vishwa400",
    name: "4x100 mts : Zonal Level",
    imgSrc: extrasURL + "relay_vishwasariya_zonal.jpg",
  },
  {
    id: 7,
    id_name: "RKGIT400",
    name: "4x100 mts : Zonal Level",
    imgSrc: extrasURL + "relay_RKGIT_Zonal.jpg",
  },
  {
    id: 8,
    id_name: "ABES_Poster",
    name: "Poster Making Zonal Level : ABES",
    imgSrc: extrasURL + "Poster_ABES_zonal.jpg",
  },
  {
    id: 9,
    id_name: "KEC_Poster",
    name: "Poster Making Zonal Level : KEC",
    imgSrc: extrasURL + "Poster_KEC_zonal.jpg",
  },
  {
    id: 10,
    id_name: "IMS_Poster",
    name: "Poster Making Zonal Level : IMS",
    imgSrc: extrasURL + "poster_IMS_zonal.jpg",
  },
];

const body = document.querySelector("body");

// HANDLING SKILL ICONS CONTAINER
const iconContainer = document.querySelector(".icons-container");

let skillList = skills
  .map((item) => {
    return `<li><img src=${item.imgSrc} alt=${item.name} /></li>`;
  }, [])
  .join("");
iconContainer.innerHTML = skillList;

// GETTING BADGES AND TASKS
function getBadges(badge) {
  return `<span class="badge badge-pill badge-secondary p-2 mt-3">${badge}</span>`;
}
function getTask(task) {
  return `<li class="list-group-item">${task}</li>`;
}

// HANDLING COURSE CONTAINER
const coursesContainer = document.querySelector(".courses-container");

let courseList = courses
  .map((course) => {
    return `
    <div class="certi-img">
    <img src=${course.imgSrc} height="170px" width="210px" >
    <button type="button" class="img-modal-btn" name=${course.id_name} value=${
      course.id
    } > OPEN </button>
    </div>
    <div class="modal-wrapper" data-id=${course.id}>
      <div class="modal-close" data-modal=${course.id}>
          <div class="close-line"></div>
        </div>
      <div class="modal-container">
      <div class="modal-title"> ${course.name} </div>
      <a type="button" class="certi-link" href=${
        course.source
      } > View Certificate </a>
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

// HANDLING Co-Curricular CERTIFICATES
const sportsContainer = document.querySelector(".sports-container");

let sportsList = cocurricular
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
sportsContainer.innerHTML = sportsList;
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
