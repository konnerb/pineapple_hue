import React from 'react';
import './InputPercent.scss';
import { isAAAType } from '../../types';

interface Props {
  opacity: number | undefined;
  nameInput: string;
  defaultInputValue: string;
  isAAA: isAAAType;
  handlePercentChange: (defaultValue: React.ChangeEvent<HTMLInputElement>, paletteType: string) => void;
}

const InputPercent: React.FC<Props> = (

  { 
    handlePercentChange,
    opacity,
    nameInput,
    defaultInputValue,
    isAAA
  }) => (

  <>
    <div className="input">
      <label 
        className={isAAA === 'AAA' && isAAA !== undefined ? "input__opacity" : "input__opacity white"}
        >{opacity && opacity >= 0 ? opacity : defaultInputValue}
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