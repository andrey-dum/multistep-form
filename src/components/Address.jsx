import React from 'react'
import validate from '../validate/validate'
import { Field, reduxForm } from 'redux-form'
import renderField from './renderField'


let Address = props => {
  const { handleSubmit, handlePreviousStep, pristine, submitting} = props
  return (
    <form className="form" onSubmit={handleSubmit}>

      <div className="form__control">
        <Field
          name="country"
          type="text"
          component={renderField}
          label="Country"
        />
      </div>
      <div className="form__control">
        <Field
          name="city"
          type="text"
          component={renderField}
          label="City"
        />
      </div>
      <div className="form__control">
        <Field
          name="address"
          type="text"
          component={renderField}
          label="Address"
        />
      </div>

      <button className="form__btn" type="button" onClick={handlePreviousStep}>BACK</button>
      <button className="form__btn" type="submit" disabled={pristine || submitting}>NEXT</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Address)