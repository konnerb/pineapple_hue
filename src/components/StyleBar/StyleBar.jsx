import React from 'react';
import './StyleBar.scss';
import StyleButton from '../StyleButton/StyleButton';

export default function StyleBar({ handleToggle, palette, handleClick }) {
    return (
    <>
        <div className="buttons">

            <StyleButton 
            buttonText="Shadow" 
            handleToggle={handleToggle}
            />

            <StyleButton 
            buttonText="Opacity" 
            handleToggle={handleToggle}
            />

            <StyleButton 
            buttonText="Click Me" 
            handleToggle={handleToggle}
            />

            <StyleButton 
            buttonText="Click Me" 
            handleToggle={handleToggle}
            />
            
        </div>
    </>
    )
} 