const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.password2) {
    errors.password2 = 'Required'
  }
  if (values.password !== values.password2) {
    errors.password2 = 'Password are not equal'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.country) {
    errors.country = 'Required'
  }
  if (!values.city) {
    errors.city = 'Required'
  }
  if (!values.address) {
    errors.address = 'Required'
  }
  if (!values.category1) {
    errors.category1 = 'Required'
  }
  if (!values.category2) {
    errors.category2 = 'Required'
  }
  return errors
}

export default validate