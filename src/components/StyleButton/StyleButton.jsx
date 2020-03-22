import React from 'react';
import './StyleButton.scss'

export default function StyleButton({ handleToggle, toggleType, buttonText }) {
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