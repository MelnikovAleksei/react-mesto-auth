import React from 'react';
import PopupWithForm from './PopupWithForm';

import { useFormWithValidation } from '../hooks/useFormWithValidation';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser(values);
  }

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm, props.isOpen]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <input
        className={errors.name ? 'form__input form__input_error' : 'form__input'}
        type="text"
        id="profile-name"
        aria-label="имя"
        placeholder="Имя"
        name="name"
        required
        minLength="2"
        maxLength="40"
        value={values.name || ''}
        onChange={handleChange}
      />
      <span
        className={errors.name ? 'form__input-error form__input-error_active' : 'form__input-error'}
        id='profile-name-error'
      >
        {errors.name}
      </span>
      <input
        className={errors.about ? 'form__input form__input_error' : 'form__input'}
        type="text"
        id="profile-about"
        aria-label="подпись"
        placeholder="Подпись"
        name="about"
        required
        minLength="2"
        maxLength="200"
        value={values.about || ''}
        onChange={handleChange}
      />
      <span
        className={errors.about ? 'form__input-error form__input-error_active' : 'form__input-error'}
        id='profile-about-error'
      >
        {errors.about}
      </span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
