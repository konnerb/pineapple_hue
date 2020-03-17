import React from 'react';
import './Palette.scss'

export default function Palette({ palette }) {
    return (
        <>
        {palette ?
            <div>
              <div className="palette">
                <div className="palette__color" style={{
                    backgroundColor: `${palette.hex}`,
                    color: `${palette.titleTextColor}`,
                  }}>
                  <p>Vibrant</p>
                  <p>Hex:{palette.hex}</p>
                  <p>Rgb:{palette.hex}</p>
                  <p>Hsl:{palette.hex}</p>
                </div>
              </div>
            </div>
        : <p>Loading your palette...</p>
        }
    </>
    )
} 