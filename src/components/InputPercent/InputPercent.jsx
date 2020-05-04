import React from 'react';
import './InputPercent.scss'

export default function InputPercent({ handlePercentChange, percents, isImage, nameInput, defaultInputValue }) {
    return (
    <>
        <div className="input">
            <label className="input__opacity">Opacity: {percents || defaultInputValue}</label>
            <input 
                className={nameInput === "imageOpacity" ? "input__percent-image" : "input__percent"}
                //style={{transform: nameInput === "imageOpacity" && "none"}}
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