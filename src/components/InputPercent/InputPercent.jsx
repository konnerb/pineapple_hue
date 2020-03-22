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
                step="1" 
                min="0" 
                max="100" 
                defaultValue={defaultInputValue} 
                onChange={defaultValue => handlePercentChange(defaultValue, nameInput)}>
            </input>
        </div>
    </>
    )
} 