import React from 'react';
import './Palette.scss'

export default function Palette({ palette, borderRadiusType  }) {
    return (
        <>
        {palette ?
              <div className="palette">
                <div className="palette__color" style={{
                    backgroundColor: `${palette.hex}`,
                    borderRadius: 
                      `${borderRadiusType === 'topLeft' ? '25px 0px 0px 0px' : 
                          borderRadiusType === 'bottomLeft' ? '0px 0px 0px 25px' : 'none'}`,
                    color: `${palette.titleTextColor}`,
                  }}>
                  <p>Hex:{palette._hex}</p>
                </div>
              </div>
        : <p>Loading your palette...</p>
        }
    </>
    )
} 