import React from 'react';

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
    <li className="photos__card">
      <figure className="photos__figure">
        <img onClick={handleCardClick} alt={`Фотография ${props.card.name}`} src={props.card.link} className="photos__image" />
        <figcaption className="photos__figcaption">{props.card.name}</figcaption>
      </figure>
      <button className="photos__delete-button" aria-label="удалить фотографию"></button>
      <div className="photos__like-container">
        <button className="photos__like-button" aria-label="поставить лайк"></button>
        <span className="photos__like-count">{props.card.likes.length}</span>
      </div>
    </li>
  )
}

export default Card;
