import React from 'react';
import './StyleBar.scss';
import StyleButton from '../StyleButton/StyleButton';

export default function StyleBar({ palette, handleClick }) {
    return (
    <>
        <div className="buttons">

            <StyleButton buttonText="Shadow" />

            <StyleButton buttonText="Opacity" />

            <StyleButton buttonText="Click Me" />

            <StyleButton buttonText="Click Me" />
            
        </div>
    </>
    )
} 