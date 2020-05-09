import React from 'react';
import './StyleBar.scss';
import StyleButton from '../StyleButton/StyleButton';
import { roundHue, roundSl } from '../../utlis';

export default function StyleBar(

  {   
    opacityType, 
    shadowType, 
    borderType, 
    handleToggle, 
    toggleShadow, 
    toggleBorder, 
    toggleOpacity, 
    palette, 
    isImage
  }) {

  return (
  <>
    <div className="buttons" style={{
        backgroundColor: 
            'hsl('
                +roundHue(palette.Vibrant.hsl[0])+','
                +roundSl(palette.Vibrant.hsl[1])+','
                +roundSl(palette.Vibrant.hsl[2])+')',
        borderRadius: isImage && `25px 25px 0px 0px`,
        flexDirection: isImage && `row`,
        padding: isImage && `20px 0px`
        }}
    >

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