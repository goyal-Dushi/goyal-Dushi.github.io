function getBadges(badge) {
  return `<span class="badge badge-pill badge-secondary p-2 mt-3">${badge}</span>`;
}

function getTask(task) {
  return `<li class="list-group-item">${task}</li>`;
}

const courseComponent = (courseData) => {
    const { imgSrc, id, id_name, name, badges, tasks, source  } = courseData;

    return(
        `
          <div class="certi-img">
      <img src=${imgSrc} height="170px" width="220px" />
      <button type="button" class="course-modal-btn" name=${id_name
        } value=${id} > OPEN </button>
    </div>

    <div class="modal-wrapper" data-id=${id}>
      
      <div class="dialog">
        
        <div class="dialog_header">
          <div class="modal-title"> ${name} </div>
          <div class="modal-close" data-modal=${id}>
            <div class="close-line"></div>
          </div>
        </div>
        
        <div class="dialog_body">
            <div class="modal-content">
                <div class="badges-wrapper">
                  <h3>skills i gained</h3>
                  <div class="badges">
                    ${badges.map(getBadges).join("")}  
                  </div>
                </div>
                <div class="learning-list">
                  <h3>what i learned</h3>
                    <ol>
                      ${tasks.map(getTask).join("")}
                    </ol>
                </div>
            </div>
            <div class="certi-ext">
              <a type="button" class="certi-ext_link" href=${source}> View Certificate </a>
            </div>
        </div>
        
        <div class="dialog_footer">
          <div class="modal-close" data-modal=${id}>
            <p> Close </p>
          </div>
        </div>
      </div>
    </div>
        `
    )
};

export default courseComponent;