import React from 'react';
import './InputPercent.scss'

export default function InputPercent({ handlePercentChange, nameInput, defaultInputValue }) {
    return (
    <>
        <div>
            <label>Opacity</label>
            <input className="input-percent" 
                type="range" 
                name={nameInput}
                step="any" 
                min="0" 
                max="1" 
                defaultValue={defaultInputValue} 
                onChange={defaultValue => handlePercentChange(defaultValue, nameInput)}>
            </input>
        </div>
    </>
    )
} 