import React from 'react';
import './StyleBar.scss';
import Button from '../Button/Button';

export default function StyleBar({ palette, handleChange, paletteType, roundHue, roundSl }) {
    return (
    <>
        { palette  ?
        <div className="button">
            <Button 
            palette={palette} 
            buttonText="Click Me" 
            roundHue={roundHue}
            roundSl={roundSl}
            />

            <Button 
            palette={palette} 
            buttonText="Click Me" 
            roundHue={roundHue}
            roundSl={roundSl}
            />

            <Button 
            palette={palette} 
            buttonText="Click Me" 
            roundHue={roundHue}
            roundSl={roundSl}
            />

            <Button 
            palette={palette} 
            buttonText="Click Me" 
            roundHue={roundHue}
            roundSl={roundSl}
            />
        </div>
        : null
        }
    </>
    )
} 