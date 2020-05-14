import React from 'react';
import './StyleButton.scss'

export default function StyleButton({ handleToggle, toggleType, buttonText, isAAA }) {

  return (
  <> 
    <div>
      <button className={isAAA && isAAA !== undefined ? "style-button white" : "style-button"}
        name="style-button" 
        onClick={() => handleToggle(toggleType)}
        >{buttonText}
      </button>
    </div>
  </>
  )
} 