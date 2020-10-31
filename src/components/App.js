import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import '../index.css';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        children={
          <>
            <input className="form__input" type="text" id="profile-name" aria-label="имя" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
            <span className='form__input-error' id='profile-name-error'></span>
            <input className="form__input" type="text" id="profile-about" aria-label="подпись" placeholder="Подпись" name="about" required minLength="2" maxLength="200" />
            <span className='form__input-error' id='profile-about-error'></span>
          </>
        }
        buttonText="Сохранить"
      />
      <PopupWithForm
        name="photo"
        title="Новое место"
        children={
          <>
            <input className="form__input" type="text" id="photo-title" aria-label="подпись" placeholder="Название" name="title" required minLength="1" maxLength="30" />
            <span className='form__input-error' id='photo-title-error' role="status" aria-live="polite"></span>
            <input className="form__input" type="url" id="photo-url" aria-label="ссылка" placeholder="Ссылка на картинку" name="url" required />
            <span className='form__input-error' id='photo-url-error' role="status" aria-live="polite"></span>
          </>
        }
        buttonText="Создать"
      />
      <PopupWithForm
        name="confirm"
        title="Вы уверены?"
        children={
          <>
          </>
        }
        buttonText="Да"
      />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        children={
          <>
            <input className="form__input" type="url" id="avatar-url" aria-label="ссылка" placeholder="Ссылка на картинку" name="url" required />
            <span className='form__input-error' id='avatar-url-error' role="status" aria-live="polite"></span>
          </>
        }
        buttonText="Сохранить"
      />
      <div className="popup popup-photos">
        <div className="popup__container popup-photos__container">
          <figure className="photos__figure popup-photos__figure">
            <img alt="" className="popup-photos__image" />
            <figcaption className="popup-photos__figcaption"></figcaption>
          </figure>
          <button className="popup__close-button popup-photos__close-button" aria-label="закрыть просмотр фотографии"></button>
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
