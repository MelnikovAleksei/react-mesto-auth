import React from 'react';
import PopupWithForm from './PopupWithForm';

import addPlaceFormValidator from '../utils/addPlaceFormValidator';

function AddPlacePopup(props) {
  const [formValues, setFormValues] = React.useState({
    name: '',
    link: ''
  })

  const handleInputChange = React.useCallback(
    (evt) => {
      const { name, value } = evt.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setFormValues]
  );

  const [errors, setErrors] = React.useState({
    name: {
      required: true,
      minLength: true,
      maxLength: true,
    },
    link: {
      required: true,
      isInvalidUrl: true
    }
  });

  React.useEffect(() => {
    const { name, link } = formValues;

    const nameValidationResult = Object.keys(addPlaceFormValidator.name)
      .map((errorKey) => {
        const errorResult = addPlaceFormValidator.name[errorKey](name);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, elem) => ({...acc, ...elem}), {});

    const linkValidationResult = Object.keys(addPlaceFormValidator.link)
      .map((errorKey) => {
        const errorResult = addPlaceFormValidator.link[errorKey](link);
        return { [errorKey]: errorResult };
      })
      .reduce((acc, elem) => ({...acc, ...elem}), {});

    setErrors({
      name: nameValidationResult,
      link: linkValidationResult
    })

  }, [formValues, setErrors])

  function handleSubmit(evt) {
    evt.preventDefault(evt);
    const { name, link } = formValues;
    props.onAddPlace({
      name: name,
      link: link,
    })
  }

  const { name, link } = formValues;

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
        name="name"
        required
        minLength="1"
        maxLength="30"
        value={name}
        onChange={handleInputChange}
      />
      <span className='form__input-error' id='photo-title-error' role="status" aria-live="polite"></span>
      <input
        className="form__input"
        type="url"
        id="photo-url"
        aria-label="ссылка"
        placeholder="Ссылка на картинку"
        name="link"
        required
        value={link}
        onChange={handleInputChange}
      />
      <span className='form__input-error' id='photo-url-error' role="status" aria-live="polite"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
