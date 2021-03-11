import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from '../validate/validate'
import renderField from './renderField'
const colors = ['Arts', 'JS', 'PHP', 'Java', 'TS']


const renderColorSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a category...</option>
      {colors.map(val => (
        <option value={val} key={val}>
          {val}
        </option>
      ))}
    </select>
    {touched && error && <span className="error">{error}</span>}
  </div>
)


const Categories = props => {
  const { handleSubmit, handlePreviousStep, pristine, submitting } = props
  return (
    <form className="form" onSubmit={handleSubmit}>

      <div className="form__control">
        <label>Favorite Color</label>
        <Field name="category1" component={renderColorSelector} />
      </div>

      <div className="form__control">
        <Field
          name="category2"
          type="text"
          component={renderField}
          label="Category 2"
        />
      </div>

      <button className="form__btn" type="button" onClick={handlePreviousStep}>BACK</button>
      <button className="form__btn" type="submit" disabled={pristine || submitting}>NEXT</button>
    </form>
  )
}

export default reduxForm({
  form: 'contact', // <------ same form name
  destroyOnUnmount: true, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Categories)