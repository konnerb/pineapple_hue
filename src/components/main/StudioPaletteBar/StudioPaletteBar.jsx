import React from 'react';
import './StudioPaletteBar.scss';
import BarPalette from '../../BarPalette/BarPalette';

const StudioPaletteBar = ({ palette }) => (
  <>
  { palette.Vibrant &&  
    <div className="bar">
      <div className="bar__container">
        <div className="bar__palette-container">
          <BarPalette 
          palette={palette.Vibrant} 
          borderRadiusType='topLeft'
          />
        </div>

        <div className="bar__palette-container">
          <BarPalette palette={palette.LightVibrant} />
        </div>

        <div className="bar__palette-container">
          <BarPalette palette={palette.DarkVibrant} />
        </div>

        <div className="bar__palette-container">
          <BarPalette palette={palette.Muted} />
        </div>

        <div className="bar__palette-container">
          <BarPalette palette={palette.LightMuted} />
        </div>

        <div className="bar__palette-container">    
          <BarPalette 
          palette={palette.DarkMuted} 
          borderRadiusType='bottomLeft'
          />
        </div>
      </div>
    </div>
  }
  </>
);

export default StudioPaletteBar;