import React from 'react';
import './StyleBar.scss';
import StyleButton from '../StyleButton/StyleButton';

export default function StyleBar({ opacityType, shadowType, handleToggle, palette, handleClick }) {
    return (
    <>
        <div className="buttons">

            <StyleButton 
            toggleType={shadowType}
            buttonText="Shadow" 
            handleToggle={handleToggle}
            />

            <StyleButton 
            toggleType={opacityType}
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