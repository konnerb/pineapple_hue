import React from 'react';
import './BarPalette.scss'

export default function BarPalette({ palette, borderRadiusType  }) {
  return (
  <>
    { palette &&
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
    }
  </>
  )
} 