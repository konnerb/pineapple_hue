import React from 'react';
import './StyleButton.scss'

export default function StyleButton({handleClick,buttonText }) {
    return (
    <> 
        <div>
                <button className="style-button" 
                    name="style-button" 
                    onClick={() => handleClick()}
                    >{buttonText}
                </button>
        </div>
    </>
    )
} 