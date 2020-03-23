import React from 'react';
import './Palette.scss'

export default function Palette({ palette }) {
    return (
        <>
        {palette ?
              <div className="palette">
                <div className="palette__color" style={{
                    backgroundColor: `${palette.hex}`,
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