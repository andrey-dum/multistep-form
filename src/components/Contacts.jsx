import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate/validate'
import renderField from './renderField'

let Contacts = props => {
  const { handleSubmit, pristine, submitting  } = props
  return (
    <form className="form" onSubmit={handleSubmit}>

      <div className="form__control">
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
      </div>
      <div className="form__control">
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
      </div>
      <div className="form__control">
        <Field
          name="password2"
          type="password"
          component={renderField}
          label="Password confirm"
        />
      </div>
      <button className="form__btn" type="submit" disabled={pristine || submitting}>NEXT</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Contacts)