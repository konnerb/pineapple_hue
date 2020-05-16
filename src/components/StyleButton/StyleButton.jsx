import React from 'react';
import './StyleButton.scss'

export default function StyleButton({ handleToggle, toggleType, buttonText, isAAA }) {

  return (
  <> 
    <div>
      <button className={isAAA === 'AAA' && isAAA !== undefined ? "style-button" : "style-button white"}
        name="style-button" 
        onClick={() => handleToggle(toggleType)}
        >{buttonText}
      </button>
    </div>
  </>
  )
} 