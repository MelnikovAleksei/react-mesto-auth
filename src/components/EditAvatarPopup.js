import React from 'react';
import PopupWithForm from './PopupWithForm';

import { useInput } from '../hooks/useInput';

function EditAvatarPopup(props) {

  const avatarRef = React.useRef('');

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
    resetLink();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    }, resetFields);
  }

  React.useEffect(() => {
    setIsSubmitDisabled(!isValidLink)
  }, [isValidLink])

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    >
      <input
        className={linkClassName}
        type="url"
        id="avatar-url"
        aria-label="ссылка"
        placeholder="Ссылка на картинку"
        name="url"
        required
        ref={avatarRef}
        {...bindLink}
      />
      <span
        className={linkErrorClassName}
        id='avatar-url-error'
        role="status"
        aria-live="polite"
      >
        {linkValidationMessage}
      </span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
