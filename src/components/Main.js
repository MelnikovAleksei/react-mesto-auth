import React from 'react';
import Card from './Card';
import api from '../utils/api';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialData()
      .then((data) => {
        const [userData, cardsData] = data;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
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
              <img alt={`Аватар пользователя ${userName}`} src={userAvatar} className="profile__avatar" />
              <button
                className="profile__avatar-edit-button"
                aria-label="открыть форму обновления аватара профиля"
                onClick={props.onEditAvatar}
              />
            </div>
            <div className="profile__bio">
              <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <p className="profile__caption">{userDescription}</p>
              </div>
              <button
                className="profile__edit-button button-open-form"
                aria-label="редактировать профиль"
                onClick={props.onEditProfile}
              />
            </div>
          </div>
          <button
            className="profile__add-button button-open-form"
            aria-label="добавить фотографии"
            onClick={props.onAddPlace}
          />
        </section>
        <section className="photos">
          <ul className="photos__list">
            {cards.map(card =>
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            )}
          </ul>
        </section>
      </main>
  )
}

export default Main;
