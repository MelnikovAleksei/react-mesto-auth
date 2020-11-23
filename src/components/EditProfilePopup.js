import React from 'react';
import PopupWithForm from './PopupWithForm';

import { useInput } from '../hooks/useInput';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const {
    value: name,
    bind: bindName,
    reset: resetName,
    isValid: isValidName,
    validationMessage: nameValidationMessage,
    inputClassName: nameClassName,
    errorClassName: nameErrorClassName
  } = useInput(currentUser.name);

  const {
    value: about,
    bind: bindAbout,
    reset: resetAbout,
    isValid: isValidAbout,
    validationMessage: aboutValidationMessage,
    inputClassName: aboutClassName,
    errorClassName: aboutErrorClassName
  } = useInput(currentUser.about);

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true)

  const resetFields = () => {
    resetName();
    resetAbout();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name: name,
      about: about,
    }, resetFields);
  }

  React.useEffect(() => {
    setIsSubmitDisabled(!isValidName || !isValidAbout)
  }, [isValidName, isValidAbout])

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <input
        className={nameClassName}
        type="text"
        id="profile-name"
        aria-label="имя"
        placeholder="Имя"
        name="name"
        required
        minLength="2"
        maxLength="40"
        {...bindName}
      />
      <span
        className={nameErrorClassName}
        id='profile-name-error'
      >
        {nameValidationMessage}
      </span>
      <input
        className={aboutClassName}
        type="text"
        id="profile-about"
        aria-label="подпись"
        placeholder="Подпись"
        name="about"
        required
        minLength="2"
        maxLength="200"
        {...bindAbout}
      />
      <span
        className={aboutErrorClassName}
        id='profile-about-error'
      >
        {aboutValidationMessage}
      </span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
