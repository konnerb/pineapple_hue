import React from 'react';
import './StyleButton.scss';

const StyleButton = ({ handleToggle, toggleType, buttonText, isAAA }) => (

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

export default StyleButton;