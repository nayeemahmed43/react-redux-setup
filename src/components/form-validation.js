const FormValidate = values => {
    const errors = {}
    const requiredFields = [
      'Email',
    ]
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    })
    if (
      values.Email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = 'Invalid email address'
    }
    return errors
  }
  
  export default FormValidate