const courseURL = "./images/skills/";
const extrasURL = "./images/cocurricular/";
const imgUrl = "./images/icons/";

const skills = [
  { 
    id : 1,
    imgSrc : imgUrl+"c2.jpg",
    name : "C Programming"
  },
  {
    id : 2,
    imgSrc : imgUrl+"python2.png",
    name : "Python Programming"
  },
  {
    id : 3,
    imgSrc : imgUrl+"java1.png",
    name : "Java"
  },
  {
    id : 4,
    imgSrc : imgUrl+"javascript.png",
    name : "Javascript"
  },
  {
    id : 5,
    imgSrc : imgUrl+"html.jpg",
    name : "HTML 5"
  },
  {
    id : 6,
    imgSrc : imgUrl+"css.jpg",
    name : "CSS 3"
  },
  {
    id : 7,
    imgSrc : imgUrl+"bootstrap2.jpg",
    name : "Bootstrap"
  },
  {
    id : 8,
    imgSrc : imgUrl+"react.png",
    name : "React JS"
  },
  {
    id : 9,
    imgSrc : imgUrl+"mysql.png",
    name : "MySQL"
  },
  {
    id : 10,
    imgSrc : imgUrl+"mongodb.jpg",
    name : "MongoDB"
  },
  {
    id : 11,
    imgSrc : imgUrl+"nodejs.jpg",
    name : "Node JS"
  },
  {
    id : 12,
    imgSrc : imgUrl+"flask.png",
    name : "Flask"
  }
];

const courses = [{
    id: 1,
    id_name: "Cprogramming",
    name: "Programming Fundamentals : C",
    badges: [
      "Algorithms",
      "Programming Language Concepts",
      "Probelm Solving",
      "C Programming"
    ],
    tasks: [
      "Developed algorithms for various problem statements",
      "Gained knowledge of various core concets in C Programming",
      "Learned about memory usage and various data types in C"
    ],
    imgSrc: courseURL + "CourseraCprogram.jpg"
  },
  {
    id: 2,
    id_name: "Softskills",
    name: "TCS iON:Soft Skills",
    badges: [
      "Soft Skills",
      "Communication Skills",
      "Presentation Skills",
      "Verbal and Non Verbal Skills",
      "Accounting and IT",
      "Artificial Intelligence",
      "Interview Cracking Skills",
      "Group Discussions"
    ],
    tasks: [
      "Made best use of the lockdown to sharpen my soft and hard skills over 15 days",
      "Learned to write effective resumes and ace group discussions and interviews",
      "Understood Concepts of Fundamentals of Accounting and IT",
      "Learned business etiquette, both verbal and non-verbal, followed in a corporate setting",
      "Gained understanding of Communication, presentation and behavioural skills to create an impact in interviews and the workplace"
    ],
    imgSrc: courseURL + "TCS_lcokdown.jpg"
  },
  {
    id : 3,
    id_name : "Marketing",
    name : "MyCaptain : Digital Marketing",
    badges : [
      "Digital Marketing", "SEM","Google Ads","Customer Targeting","SMM", "Facebook Ads",
      "Instagram Ads", "Linkedin Marketing", "Email Marketing", "Mailchimp", "Copy Writing",
      "Google Analytics"
    ],
    tasks : [
      "Learned the basics and fundamentals of Digital Marketing",
      "Chose a Product for Marketing and ran Marketing Campaigns for the same (Practical Exposure)",
      "Understood the importance of Customer Targeting and gained deep insight into its working",
      "Managed and learned the bidding system on Google Ads",
      "Set up an Effective Email Drip Campaign",
      "Created account on Mailchimp and ran Demo Campaigns",
      "Did Wireframing for my Product to design Marketing Campaign",
      "Understood Google Analytics and its usage in Digital Marketing and Customer Targeting"
    ],
    imgSrc : courseURL + "DigitalMarket.jpg"
  },
  {
    id: 4,
    id_name: "GoogleAds",
    name: "Google Ads For Beginners",
    badges: [
      "PPC Advertising",
      "Digital Marketing",
      "Marketing",
      "Paid Search Advertising",
      "Keyword Research"
    ],
    tasks: [
      "Created ad groups, did keyword research, set up audience targeting, and wrote ads",
      "Learned to use the tools and settings available to optimize campaigns and make them profitable",
      "Set up Conversion Tracking , generate Conversions and make them profitable."
    ],
    imgSrc: courseURL + "CourseraGoogleAd.jpg"
  },
  {
    id: 5,
    id_name: "Static",
    name: "Static Website using HTML5 AND CSS3",
    badges: [
      "CSS", "HTML", "Web Design", "Web Page", "Websites"
    ],
    tasks: [
      "Gained understanding of infrastructure of hosting a website and web browsing",
      "Created web page contents with HTML (hypertext markup language)",
      "ustomized the format of web page contents with CSS (cascading style sheets) and hosted it using Github"
    ],
    imgSrc: courseURL + "CourseraHTML_CSS.jpg"
  },
  {
    id: 6,
    id_name: "Email",
    name: "Email Marketing Using Mailchimp",
    badges: [
      "Design", "Digital Marketing", "Marketing", "Email Marketing", "Business"
    ],
    tasks: [
      "Gained understanding of various features in Mailchimp.",
      "Developed an email marketing campaign using various design tools",
      "Prepared an Email Marketing Campagn for distribution"
    ],
    imgSrc: courseURL + "CourseraEmailMarketing.jpg"
  },
  {
    id: 7,
    id_name: "TCS_EMAIL",
    name: "TCS iON: Email Etiquette",
    badges: [
      "Coporate Email Writing", "Email Etiquette", "Do's and Dont's",
      "Email Marketing", "Formal Communication"
    ],
    tasks: [
      "Understood the art of writing professional and effective Emails",
      "Analysed and worked on various Case Studies"
    ],
    imgSrc: courseURL + "TCS_EMAIL.jpg"
  },
  {
    id: 8,
    id_name: "OOPS",
    name: "Coursera : OOPS Concepts Using Java",
    badges: [
      "OOP (Object Oriented Programming)", "Software Engineering", "Software Development",
      "Java"
    ],
    tasks: [
      "Gained understanding of four principles of object oriented programming paradigm.",
      "Developed applications with graphical user interface"
    ],
    imgSrc: courseURL + "CourseraJava.jpg"
  },
  {
    id: 9,
    id_name: "Flask",
    name: "Web App Using Python and Flask",
    badges: [
      "Web Development", "Pyhton Programming", "Application Development",
      "Software Development", "Computer Programming"
    ],
    tasks: [
      "Developed web applplications using Flask",
      "Gained knowledge and used WTForms and SQLAlchemy in Flask Applications",
      "Used Templates in Flask applications"
    ],
    imgSrc: courseURL + "Coursera_Flask.jpg"
  }
];

const sports = [{
    id: 1,
    id_name: "National100",
    name: "100 mts : National Level",
    imgSrc: extrasURL + "100mts_national.jpg"
  },
  {
    id: 2,
    id_name: "National200",
    name: "200 mts : National Level",
    imgSrc: extrasURL + "200mt_national.jpg"
  },
  {
    id: 3,
    id_name: "National400",
    name: "4x100 mts : National Level",
    imgSrc: extrasURL + "relay_National.jpg"
  },
  {
    id: 4,
    id_name: "Spardha100",
    name: "100 mts : Spardha",
    imgSrc: extrasURL + "100mt_Spardha_1.jpg"
  },
  {
    id: 5,
    id_name: "Spardha200",
    name: "200 mts : Spardha",
    imgSrc: extrasURL + "200mt_Spardha.jpg"
  },
  {
    id: 6,
    id_name: "Vishwa400",
    name: "4x100 mts : Zonal Level",
    imgSrc: extrasURL + "relay_vishwasariya_zonal.jpg"
  },
  {
    id: 7,
    id_name: "RKGIT400",
    name: "4x100 mts : Zonal Level",
    imgSrc: extrasURL + "relay_RKGIT_Zonal.jpg"
  }
];

const arts = [{
    id: 1,
    id_name: "ABES_Poster",
    name: "Poster Making Zonal Level : ABES",
    imgSrc: extrasURL + "Poster_ABES_zonal.jpg"
  },
  {
    id: 2,
    id_name: "KEC_Poster",
    name: "Poster Making Zonal Level : KEC",
    imgSrc: extrasURL + "Poster_KEC_zonal.jpg"
  },
  {
    id: 3,
    id_name: "IMS_Poster",
    name: "Poster Making Zonal Level : IMS",
    imgSrc: extrasURL + "poster_IMS_zonal.jpg"
  }
];

const body = document.querySelector('body');

// HANDLING SKILL ICONS CONTAINER
const iconContainer = document.querySelector('.icons-container');

let skillList = skills.map(item => {
  return `<li><img src=${item.imgSrc} alt=${item.name} /></li>`;
},[]).join("");
iconContainer.innerHTML = skillList;

// GETTING BADGES AND TASKS
function getBadges(badge) {
  return `<span class="badge badge-pill badge-secondary p-2 mt-3">${badge}</span>`;
}
function getTask(task) {
  return `<li class="list-group-item">${task}</li>`
}

// HANDLING COURSE CONTAINER
const coursesContainer = document.querySelector(".courses-container");

let courseList = courses.map(course => {
  return `

    <div class="certi-img">
    <img src=${course.imgSrc} height="170px" width="220px" >
    <button type="button" class="img-modal-btn" name=${course.id_name} value=${course.id} > OPEN </button>
    </div>
    <div class="modal-wrapper" data-id=${course.id}>
      <div class="modal-close" data-modal=${course.id}>
          <div class="close-line"></div>
        </div>
      <div class="modal-container">
      <div class="modal-title"> ${course.name} </div>
          <img  src=${course.imgSrc} alt=${course.id_name} />
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
  `
}, []).join("");
coursesContainer.innerHTML = courseList;
const openCourseModal = document.querySelectorAll('.img-modal-btn');
const courseModal = document.querySelectorAll('.courses-container .modal-wrapper');
const closeCourseModal = document.querySelectorAll('.courses-container .modal-close');

openCourseModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    courseModal.forEach((modal) => {
      if(modal.dataset.id == e.currentTarget.value){
        modal.style.display = "block";
        body.style.overflowY = "hidden";
        // break;
      }
    });
  });
});

closeCourseModal.forEach((closeBtn) => {
  closeBtn.addEventListener('click', (e) => {
    courseModal.forEach((modal) => {
      if(modal.dataset.id === e.currentTarget.dataset.modal){
        modal.style.display = "none";
        body.style.overflowY = "scroll";
      }
    });
  });
});

// HANDLING SPORTS CERTIFICATES
const sportsContainer = document.querySelector(".sports-container");

let sportsList = sports.map(sport => {
  return `
    <div class="certi-img">
      <img src=${sport.imgSrc} height="170px" width="220px" >
      <button type="button" class="img-modal-btn" name=${sport.id_name} value=${sport.id} > OPEN </button>
    </div>
    <div class="modal-wrapper" data-id=${sport.id}>
      <div class="modal-container">
        <h1> ${sport.name} </h1>
        <div class="modal-close" data-modal=${sport.id}>
          <div class="close-line"></div>
        </div>
        <div class="modal-img">
          <img  src=${sport.imgSrc} alt=${sport.id_name}>
        </div>
      </div>
    </div>
  `;
}, []).join("");
sportsContainer.innerHTML = sportsList;
const openSportModal = document.querySelectorAll('.sports-container .img-modal-btn');
const sportModal = document.querySelectorAll('.sports-container .modal-wrapper');
const closeSportModal = document.querySelectorAll('.sports-container .modal-close');

openSportModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    sportModal.forEach((modal) => {
      if(modal.dataset.id == e.currentTarget.value){
        modal.style.display = "block";
        body.style.overflowY = "hidden";
      }
    });
  });
});

closeSportModal.forEach((closeBtn) => {
  closeBtn.addEventListener('click', (e) => {
    sportModal.forEach((modal) => {
      if(modal.dataset.id === e.currentTarget.dataset.modal){
        modal.style.display = "none";
        body.style.overflowY = "scroll";
      }
    });
  });
});

// HANDLING ARTS CONTENT
const artsContainer = document.querySelector(".arts-container");
let artsList = arts.map(art => {
  return `
    <div class="certi-img">
    <img src=${art.imgSrc} height="170px" width="220px" >
    <button type="button" class="img-modal-btn" name=${art.id_name} value=${art.id} > OPEN </button>
    </div>
    <div class="modal-wrapper" data-id=${art.id}>
      <div class="modal-container">
        <h1> ${art.name} </h1>
        <div class="modal-close" data-modal=${art.id}>
          <div class="close-line"></div>
        </div>
        <div class="modal-img">
          <img  src=${art.imgSrc} alt=${art.id_name}>
        </div>
      </div>
    </div>
  `;
}, []).join("");
artsContainer.innerHTML = artsList;
const openArtModal = document.querySelectorAll('.arts-container .img-modal-btn');
const artsModal = document.querySelectorAll('.arts-container .modal-wrapper');
const closeArtModal = document.querySelectorAll('.arts-container .modal-close');

openArtModal.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    artsModal.forEach((modal) => {
      if(modal.dataset.id == e.currentTarget.value){
        modal.style.display = "block";
        body.style.overflowY = "hidden";
      }
    });
  });
});

closeArtModal.forEach((closeBtn) => {
  closeBtn.addEventListener('click', (e) => {
    artsModal.forEach((modal) => {
      if(modal.dataset.id === e.currentTarget.dataset.modal){
        modal.style.display = "none";
        body.style.overflowY = "scroll";
      }
    });
  });
});