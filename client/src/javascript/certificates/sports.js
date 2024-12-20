const sportsComponent = (sport) => {
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
          <div>
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
}

export default sportsComponent;