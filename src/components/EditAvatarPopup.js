import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

  const avatarRef = React.useRef('');

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        type="url"
        id="avatar-url"
        aria-label="ссылка"
        placeholder="Ссылка на картинку"
        name="url"
        required
        ref={avatarRef}
      />
      <span className='form__input-error' id='avatar-url-error' role="status" aria-live="polite"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
