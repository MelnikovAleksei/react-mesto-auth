import React from 'react';
import Card from './Card';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) =>  {
        const newCards = cards.map((currentCard) => currentCard._id === card._id ? newCard : currentCard)
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((elem) => elem !== card);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  React.useEffect(() => {
    api.getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <main>
        <section className="profile">
          <div className="profile__container-info">
            <div className="profile__container-avatar">
              <img alt={`Аватар пользователя ${currentUser.name}`} src={currentUser.avatar} className="profile__avatar" />
              <button
                className="profile__avatar-edit-button"
                aria-label="открыть форму обновления аватара профиля"
                onClick={props.onEditAvatar}>
              </button>
            </div>
            <div className="profile__bio">
              <div className="profile__info">
                <h1 className="profile__name">{currentUser.name}</h1>
                <p className="profile__caption">{currentUser.about}</p>
              </div>
              <button
                className="profile__edit-button button-open-form"
                aria-label="редактировать профиль"
                onClick={props.onEditProfile}>
              </button>
            </div>
          </div>
          <button
            className="profile__add-button button-open-form"
            aria-label="добавить фотографии"
            onClick={props.onAddPlace}>
          </button>
        </section>
        <section className="photos">
          <ul className="photos__list">
            {cards.map(card =>
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            )}
          </ul>
        </section>
      </main>
  )
}

export default Main;
