import React from 'react';
import './Icons.scss';

export default function Icons({ iconName, icon, percent, toggleIconsBorder, toggleIconsShadow }) {

    return (
    <>  
        <div className="icon">
            <img 
            src={icon} 
            alt={`A ${iconName} icon with an opacity of ${percent ? percent * 100 + " percent" : "80 percent"}, ${toggleIconsBorder ? "a 3 pixel solid black border" : "no border"}, and ${toggleIconsShadow ? "a 5 pixel by 10 pixel light-grey shadow" : "no shadow"}`}
            className="icon__svg"
            style={{
                opacity: `${percent}`,
                boxShadow: toggleIconsShadow ? `5px 10px #888888` : `none`,
                border: toggleIconsBorder ? `3px solid black` : `none`
            }}
            />
        </div>
    </>
    )
} 