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
  }
];

const guidedProjects = [{
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

const otherCerti = [{
    id: 1,
    id_name: "Hackathon",
    name: "Hackathon",
    imgSrc: courseURL + "Hackathon.jpg"
  },
  {
    id: 2,
    id_name: "Robotic",
    name: "Step Into Robotic Process Automation",
    imgSrc: courseURL + "GuviCertification.png"
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

const posterContainer = document.querySelector(".posters");
const sportsContainer = document.querySelector(".sports");
const otherContainer = document.querySelector(".others");
const coursesContainer = document.querySelector(".courses-container");
const guidedContainer = document.querySelector(".guided-container");
const iconContainer = document.querySelector('.icons-container');

let skillList = skills.map(item => {
  return `<div class="col-lg-3 col-md-4 pb-3 pt-2">
      <img class="row1" src=${item.imgSrc} alt=${item.name} />
  </div>`;
},[]).join("");
iconContainer.innerHTML = skillList;

function getBadges(badge) {
  return `<span class="badge badge-pill badge-secondary p-2 mt-3">${badge}</span>`;
}

function getTask(task) {
  return `<li class="list-group-item">${task}</li>`
}

let courseList = courses.map(course => {
  return `
  <div class="col-lg-3 col-md-4 pb-4">

    <img src=${course.imgSrc} height="170px" width="220px" data-toggle="modal" data-target=${"#"+course.id_name}>

        <div class="modal fade" id=${course.id_name} tabindex="-1" role="dialog" aria-labelledby=${course.id_name} aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id=${course.id_name}>${course.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col">
                    <h5>Skills I Developed</h5>
                    ${course.badges.map(getBadges).join("")}
                  </div>
                  <div class="col">
                    <h5>What I Did</h5>
                    <ul class="list-group list-group-flush">
                      ${course.tasks.map(getTask).join("")}
                    </ul>
                  </div>
                </div>
                  <img src=${course.imgSrc} alt=${course.id_name} height="100%" width="100%">
              </div>
            </div>
          </div>
        </div>

  </div>
  `
}, []).join("");
coursesContainer.innerHTML = courseList;

let guidedList = guidedProjects.map(project => {
  return `
  <div class="col-lg-3 col-md-4 pb-4">

    <img src=${project.imgSrc} height="170px" width="220px" data-toggle="modal" data-target=${"#"+project.id_name}>

        <div class="modal fade" id=${project.id_name} tabindex="-1" role="dialog" aria-labelledby=${project.id_name} aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id=${project.id_name}>${project.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col">
                    <h5>Skills I Developed</h5>
                    ${project.badges.map(getBadges).join("")}
                  </div>
                  <div class="col">
                    <h5>What I Did</h5>
                    <ul class="list-group list-group-flush">
                    ${project.tasks.map(getTask).join("")}
                    </ul>
                  </div>
                </div>
                  <img src=${project.imgSrc} alt=${project.name} height="100%" width="100%">
              </div>
            </div>
          </div>
        </div>

  </div>
  `;
}, []).join("");
guidedContainer.innerHTML = guidedList;

let otherList = otherCerti.map(certi => {
  return `
  <div class="col-lg-3 col-md-4 pb-4">

    <img src=${certi.imgSrc} height="170px" width="220px" data-toggle="modal" data-target=${"#"+certi.id_name}>

      <div class="modal fade" id=${certi.id_name} tabindex="-1" role="dialog" aria-labelledby=${certi.id_name} aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id=${certi.id_name}>${certi.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <img src=${certi.imgSrc} alt=${certi.id_name} height="100%" width="100%">
            </div>
          </div>
        </div>
      </div>

  </div>
  `;
}, []).join("");
otherContainer.innerHTML = otherList;

let sportsList = sports.map(sport => {
  return `
  <div class="col-lg-3 col-md-4 pb-4">

    <img src=${sport.imgSrc} height="210px" width="200px" data-toggle="modal" data-target=${"#"+sport.id_name}>

        <div class="modal fade" id=${sport.id_name} tabindex="-1" role="dialog" aria-labelledby=${sport.id_name} aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id=${sport.id_name}>${sport.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <img src=${sport.imgSrc} alt=${sport.name} height="100%" width="100%">
              </div>
            </div>
          </div>
        </div>

  </div>
  `;
}, []).join("");
sportsContainer.innerHTML = sportsList;

let artsList = arts.map(item => {
  return `<div class="col-lg-3 col-md-4 pb-4">

      <img src=${item.imgSrc} height="170px" width="220px" data-toggle="modal" data-target=${"#"+item.id_name}>

        <div class="modal fade" id=${item.id_name} tabindex="-1" role="dialog" aria-labelledby=${item.id_name} aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id=${item.id_name}>${item.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <img src=${item.imgSrc} alt=${item.name} height="100%" width="100%">
              </div>
            </div>
          </div>
        </div>

    </div>`;
}, []).join("");
posterContainer.innerHTML = artsList;
