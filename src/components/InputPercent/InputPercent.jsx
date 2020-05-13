import React from 'react';
import './InputPercent.scss'

export default function InputPercent({ handlePercentChange, percents, nameInput, defaultInputValue }) {
  console.log(percents >= 0)
  return (
  <>
    <div className="input">
      <label className="input__opacity">{percents >= 0 ? percents : defaultInputValue}</label>
      <input 
          className="input__percent"
          type="range" 
          name={nameInput}
          step="any" 
          min="0.0" 
          max="1.0" 
          defaultValue={defaultInputValue} 
          onChange={defaultValue => handlePercentChange(defaultValue, nameInput)}>
      </input>
    </div>
  </>
  )
} 