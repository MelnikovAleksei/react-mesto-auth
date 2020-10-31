import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
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
