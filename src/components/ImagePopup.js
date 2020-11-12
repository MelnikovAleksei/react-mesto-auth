import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup-photos ${props.card && props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup-photos__container">
        <figure className="photos__figure popup-photos__figure">
          <img alt={`Фотография ${props.card.name}`} src={`${props.card.link}`} className="popup-photos__image" />
          <figcaption className="popup-photos__figcaption">{props.card.name}</figcaption>
        </figure>
        <button onClick={props.onClose} className="popup__close-button" aria-label="закрыть просмотр фотографии" />
      </div>
    </div>
  )
}

export default ImagePopup;
