import React from 'react';

function Main() {
  return (
    <main>
        <section className="profile">
          <div className="profile__container-info">
            <div className="profile__container-avatar">
              <img alt="" className="profile__avatar" />
              <button className="profile__avatar-edit-button" aria-label="открыть форму обновления аватара профиля"></button>
            </div>
            <div className="profile__bio">
              <div className="profile__info">
                <h1 className="profile__name"></h1>
                <p className="profile__caption"></p>
              </div>
              <button className="profile__edit-button button-open-form" aria-label="редактировать профиль"></button>
            </div>
          </div>
          <button className="profile__add-button button-open-form" aria-label="добавить фотографии"></button>
        </section>
        <section className="photos">
          <ul className="photos__list">
          </ul>
        </section>
      </main>
  )
}

export default Main;
