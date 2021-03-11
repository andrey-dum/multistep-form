import './App.css';
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, useHistory,  } from 'react-router-dom'
import Contacts from './components/Contacts';
import Address from './components/Address';
import Categories from './components/Categories';
import cx from "classnames";
import Success from './components/Success';
import { setUser } from './store/userReducer';

const stepsNames = ["contacts", "address", "categories", "success"];

function App() {

  const history = useHistory();
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    setCurrentStep(stepsNames.indexOf(`${history.location.pathname.slice(1)}`) + 1 || 1)
  }, [history.location.pathname])


  const handlePreviousStep = () => {
    setCurrentStep(prev => prev - 1);
     history.push(`/${stepsNames[currentStep - 2]}`)
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    history.push(`/${stepsNames[currentStep]}`)

  };


  console.log(history.location.pathname.slice(1))

  const submitF = values => {
    dispatch(setUser(values))
    handleNextStep()
  }
  const reset = () => {
    setCurrentStep(1)
    history.push(`/${stepsNames[0]}`)
  }

  return (
    <div className="app">
      <div className="steps">
        {stepsNames.map((stepName, index) => (
          <div
            key={index}
            className={cx("step", {
              // "is-active": stepName === history.location.pathname.slice(1),
              "is-active": currentStep === index + 1,
              "is-completed": currentStep > index + 1
            })}
          >
            <div className="step__marker">{index + 1}</div>
            <div className="step__title mt-1">{stepName.toUpperCase()}</div>
          </div>
        ))}
      </div>

          <Route exact path={["/", "/contacts"]}>
            <Contacts onSubmit={handleNextStep}  />
          </Route>

           <Route exact path="/address" >
            <Address  onSubmit={handleNextStep} handlePreviousStep={handlePreviousStep} />
          </Route>

           <Route exact path="/categories" >
            <Categories onSubmit={submitF} handlePreviousStep={handlePreviousStep} />
          </Route>

           <Route exact path="/success" >
            <Success reset={reset} />
          </Route>

          <Route exact path="/" >
            <Redirect to="/contacts" />
          </Route>


    </div>

  );
}

export default App;
