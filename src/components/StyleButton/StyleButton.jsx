import React from 'react';
import './StyleButton.scss'

export default function StyleButton({ handleToggle, buttonText }) {
    return (
    <> 
        <div>
                <button className="style-button" 
                    name="style-button" 
                    onClick={() => handleToggle(buttonText)}
                    >{buttonText}
                </button>
        </div>
    </>
    )
} 