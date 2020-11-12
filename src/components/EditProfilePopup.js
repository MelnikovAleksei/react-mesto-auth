import React from 'react';
import PopupWithForm from './PopupWithForm';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function hanldeChangeDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        type="text"
        id="profile-name"
        aria-label="имя"
        placeholder="Имя"
        name="name"
        required
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className='form__input-error' id='profile-name-error'></span>
      <input
        className="form__input"
        type="text"
        id="profile-about"
        aria-label="подпись"
        placeholder="Подпись"
        name="about"
        required
        minLength="2"
        maxLength="200"
        value={description || ""}
        onChange={hanldeChangeDescription}
      />
      <span className='form__input-error' id='profile-about-error'></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
