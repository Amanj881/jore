import React, { useState, useEffect } from 'react';
import "./Stepper.css";

function Stepper(props) {
  const [steps, setStepState] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const stepsState = (props.steps).map((step, index) => {
      const stepObj = {};
      stepObj.description = step;
      stepObj.completed = false ;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index ===0 ? true : false;

      return stepObj;
    });

    const currentSteps = updateSteps((props.currentStepNumber) - 1, stepsState);

    setStepState(currentSteps);
  }, [props.currentStepNumber, props.steps]);

  const updateSteps = (stepNumber, steps) => {
    const newSteps = [...steps];

    let stepCounter = 0;
    while(stepCounter < newSteps.length) {
      //Current Step
      if(stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false
        };
        stepCounter++;
      }

      //Previous Step
      else if(stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true
        };
        stepCounter++;
      }

      //Next Step
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false
        };
        stepCounter++;
      }
    }

    return newSteps;
  }

  const stepsToDisplay = (steps).map((step, index) => {
    return (
      <div className="step-wrapper" key={index}>
        {
          step.completed ? (
            <div className="mr-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM8 12.17L14.59 5.58L16 7L8 15L3 10L4.41 8.59L8 12.17Z" fill="#40BF77"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10Z" fill="#40BF77"/>
              </svg>
            </div>
          ) : (
          <>
          <div className="">
          {props.module==="post" ?
            (<div className={`${step.selected ? "step-border" :  "step-number-disabled"}`}>
              <div className={`step-number flex items-center  ${step.selected ? "ml-6 step-number-active " : "step-number-disabled"}`}>
                <span className="mx-1">{index + 1}</span>  
              </div>
            </div>)
            :
            (<div className={`step-number flex items-center  ${step.selected ? "step-number-active " : "step-number-disabled"}`}>
              <span className="mx-1">{index + 1}</span>
            </div>)
          }
          </div>
          </>
          )
        }
        {props.module==="post" ?
          (<div className={`self-start  step-description ${step.highlighted ? "ml-8 step-description-active" : "step-description-disabled"}`}>
          {step.description}
        </div>)
          :
        (<div className={`step-description ${step.highlighted ? "step-description-active" : "step-description-disabled"}`}>
          {step.description}
        </div>)
        }
        
      </div>
    )
  })
  return (
    <>
      <div>
        <div>
          {stepsToDisplay}
        </div>
        
      </div>
    </>
  );
}

export default Stepper;
