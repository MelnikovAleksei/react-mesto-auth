const addPlaceFormValidator = {
  name: {
    required: (value) => { return value.length === 0 },
    minLength: (value) => { return value.length < 1 },
    maxLength: (value) => { return value.length > 30 },
  },
  link: {
    required: (value) => { return value.length === 0 },
    isInvalidUrl: (value) => { return !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(value) }
  }
}

export default addPlaceFormValidator;
