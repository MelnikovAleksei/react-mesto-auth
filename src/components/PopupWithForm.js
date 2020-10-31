import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <form className="form" name={props.name} noValidate>
        <h3 className="form__header">{props.title}</h3>
          <fieldset className="form__fieldset">
            {props.children}
            <button type="submit" className="form__save-button">{props.buttonText}</button>
          </fieldset>
          <button onClick={props.onClose} type="reset" className="popup__close-button" aria-label="закрыть форму"></button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
