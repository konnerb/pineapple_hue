import React from 'react';
import './InputPercent.scss'

export default function InputPercent({ handlePercentChange, percents, nameInput, defaultInputValue, isAAA}) {

  return (
  <>
    <div className="input">
      <label 
          className={isAAA && isAAA !== undefined ? "input__opacity white" : "input__opacity"}
          >{percents >= 0 ? percents : defaultInputValue}
        </label>
      <input 
          className="input__percent"
          type="range" 
          name={nameInput}
          step="any" 
          min="0.01" 
          max="1.00" 
          defaultValue={defaultInputValue} 
          onChange={defaultValue => handlePercentChange(defaultValue, nameInput)}>
      </input>
    </div>
  </>
  )
} 