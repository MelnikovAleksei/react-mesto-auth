import React from 'react';
import './index.css';
import logo from './images/logo/mesto-logo.svg';

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="логотип сайта" />
      </header>
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
      <footer className="footer">
        <p className="footer__author">&copy; Mesto Russia</p>
      </footer>
      <div className="popup popup-edit">
        <div className="popup__container">
          <form className="form edit-form" name="info" noValidate>
            <h3 className="form__header">Редактировать профиль</h3>
            <fieldset className="form__fieldset">
              <input className="form__input" type="text" id="profile-name" aria-label="имя" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
              <span className='form__input-error' id='profile-name-error'></span>
              <input className="form__input" type="text" id="profile-caption" aria-label="подпись" placeholder="Подпись" name="about" required minLength="2" maxLength="200" />
              <span className='form__input-error' id='profile-caption-error'></span>
              <button className="form__save-button popup__save-button">Сохранить</button>
            </fieldset>
            <button type="reset" className="popup__close-button popup-edit__close-button" aria-label="закрыть форму"></button>
          </form>
        </div>
      </div>
      <div className="popup popup-add">
        <div className="popup__container">
          <form className="form add-form" name="photo" noValidate>
            <h3 className="form__header">Новое место</h3>
            <fieldset className="form__fieldset">
              <input className="form__input" type="text" id="photo-name" aria-label="подпись" placeholder="Название" name="name" required minLength="1" maxLength="30" />
              <span className='form__input-error' id='photo-name-error' role="status" aria-live="polite"></span>
              <input className="form__input" type="url" id="photo-link" aria-label="ссылка" placeholder="Ссылка на картинку" name="link" required />
              <span className='form__input-error' id='photo-link-error' role="status" aria-live="polite"></span>
              <button className="form__save-button popup__save-button">Создать</button>
            </fieldset>
            <button type="reset" className="popup__close-button popup-add__close-button" aria-label="закрыть форму"></button>
          </form>
        </div>
      </div>
      <div className="popup popup-photos">
        <div className="popup__container popup-photos__container">
          <figure className="photos__figure popup-photos__figure">
            <img alt="" className="popup-photos__image" />
            <figcaption className="popup-photos__figcaption"></figcaption>
          </figure>
          <button className="popup__close-button popup-photos__close-button" aria-label="закрыть просмотр фотографии"></button>
        </div>
      </div>
      <div className="popup popup-confirm">
        <div className="popup__container">
          <form className="form confirm-form" name="confirm" noValidate>
            <h3 className="form__header">Вы уверены?</h3>
            <fieldset className="form__fieldset">
              <button className="form__save-button">Да</button>
            </fieldset>
            <button type="reset" className="popup__close-button popup-confirm__close-button" aria-label="закрыть форму"></button>
          </form>
        </div>
      </div>
      <div className="popup popup-update-avatar">
        <div className="popup__container">
          <form className="form update-avatar-form" name="avatar" noValidate>
            <h3 className="form__header">Обновить аватар</h3>
            <fieldset className="form__fieldset">
              <input className="form__input" type="url" id="avatar-link" aria-label="ссылка" placeholder="Ссылка на картинку" name="avatar" required />
              <span className='form__input-error' id='avatar-link-error' role="status" aria-live="polite"></span>
              <button className="form__save-button popup__save-button">Сохранить</button>
            </fieldset>
            <button type="reset" className="popup__close-button popup-update-avatar__close-button" aria-label="закрыть форму"></button>
          </form>
        </div>
      </div>
      <template id="photos-element">
        <li className="photos__card">
          <figure className="photos__figure">
            <img alt="" className="photos__image" />
            <figcaption className="photos__figcaption"></figcaption>
          </figure>
          <button className="photos__delete-button" aria-label="удалить фотографию"></button>
          <div className="photos__like-container">
            <button className="photos__like-button" aria-label="поставить лайк"></button>
            <span className="photos__like-count">0</span>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
