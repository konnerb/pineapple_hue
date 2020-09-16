import React from 'react';
import './InputPercent.scss';

interface Props {
  percents: number,
  nameInput: string,
  defaultInputValue: string,
  isAAA: string
  handlePercentChange: any
}

const InputPercent: React.FC<Props> = (

  { 
    handlePercentChange,
    percents,
    nameInput,
    defaultInputValue,
    isAAA
  }) => (

  <>
    <div className="input">
      <label 
        className={isAAA === 'AAA' && isAAA !== undefined ? "input__opacity" : "input__opacity white"}
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
);

export default InputPercent;