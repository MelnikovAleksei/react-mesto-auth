import React from 'react';
import PopupWithForm from './PopupWithForm';

import { useInput } from '../hooks/useInput';

function AddPlacePopup(props) {

  const {
    value: name,
    bind: bindName,
    reset: resetName,
    isValid: isValidName,
    validationMessage: nameValidationMessage,
    inputClassName: nameClassName,
    errorClassName: nameErrorClassName
  } = useInput('');

  const {
    value: link,
    bind: bindLink,
    reset: resetLink,
    isValid: isValidLink,
    validationMessage: linkValidationMessage,
    inputClassName: linkClassName,
    errorClassName: linkErrorClassName
  } = useInput('');

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true)

  const resetFields = () => {
    resetName();
    resetLink();
  }

  function handleSubmit(evt) {
    evt.preventDefault(evt);
    props.onAddPlace({
      name: name,
      link: link,
    }, resetFields)
  }

  React.useEffect(() => {
    setIsSubmitDisabled(!isValidName || !isValidLink)
  }, [isValidName, isValidLink])

  return (
    <PopupWithForm
      name="photo"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <input
        className={nameClassName}
        type="text"
        id="photo-title"
        aria-label="подпись"
        placeholder="Название"
        name="name"
        required
        minLength="1"
        maxLength="30"
        {...bindName}
      />
      <span
        className={nameErrorClassName}
        id='photo-title-error'
        role="status"
        aria-live="polite"
      >
        {nameValidationMessage}
      </span>
      <input
        className={linkClassName}
        type="url"
        id="photo-url"
        aria-label="ссылка"
        placeholder="Ссылка на картинку"
        name="link"
        required
        {...bindLink}
      />
      <span
        className={linkErrorClassName}
        id='photo-url-error'
        role="status"
        aria-live="polite"
      >
        {linkValidationMessage}
      </span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
