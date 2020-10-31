import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup-photos">
      <div className="popup__container popup-photos__container">
        <figure className="photos__figure popup-photos__figure">
          <img alt="" className="popup-photos__image" />
          <figcaption className="popup-photos__figcaption"></figcaption>
        </figure>
        <button className="popup__close-button" aria-label="закрыть просмотр фотографии"></button>
      </div>
    </div>
  )
}

export default ImagePopup;
