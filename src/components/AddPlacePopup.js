import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault(evt);
    props.onAddPlace({
      name: name,
      link: link,
    })
  }

  return (
    <PopupWithForm
      name="photo"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="form__input"
        type="text"
        id="photo-title"
        aria-label="подпись"
        placeholder="Название"
        name="title"
        required
        minLength="1"
        maxLength="30"
        value={name}
        onChange={handleChangeName}
      />
      <span className='form__input-error' id='photo-title-error' role="status" aria-live="polite"></span>
      <input
        className="form__input"
        type="url"
        id="photo-url"
        aria-label="ссылка"
        placeholder="Ссылка на картинку"
        name="url"
        required
        value={link}
        onChange={handleChangeLink}
      />
      <span className='form__input-error' id='photo-url-error' role="status" aria-live="polite"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
