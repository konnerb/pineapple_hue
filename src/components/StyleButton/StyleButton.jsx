import React from 'react';
import './StyleButton.scss'

export default function StyleButton({ handleToggle, toggleType, buttonText }) {
  //AAA color issue -> contrast < 7.00 ? "black" : "white"
  return (
  <> 
    <div>
      <button className="style-button" 
        name="style-button" 
        onClick={() => handleToggle(toggleType)}
        >{buttonText}
      </button>
    </div>
  </>
  )
} 