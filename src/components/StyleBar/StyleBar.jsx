import React from 'react';
import './StyleBar.scss';
import StyleButton from '../StyleButton/StyleButton';

export default function StyleBar({ opacityType, shadowType, borderType, handleToggle, toggleShadow, toggleBorder, toggleOpacity, palette, handleClick }) {
    return (
    <>
        <div className="buttons">

            <StyleButton 
            toggleType={borderType}
            buttonText={ toggleBorder ? "- Border" : "+ Border" }
            handleToggle={handleToggle}
            />
            <StyleButton 
            toggleType={shadowType}
            buttonText={ toggleShadow ? "- Shadow" : "+ Shadow" }
            handleToggle={handleToggle}
            />

            <StyleButton 
            toggleType={opacityType}
            buttonText={ toggleOpacity ? "- Opacity" : "+ Opacity" }
            handleToggle={handleToggle}
            />

            <StyleButton 
            buttonText="Reset" 
            handleToggle={handleToggle}
            />
            
        </div>
    </>
    )
} 