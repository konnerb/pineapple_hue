import React from 'react';
import './StyleBar.scss';
import StyleButton from '../StyleButton/StyleButton';

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
    isImage,
    isAAA
  }) {

  return (
  <>
    <div className="buttons" style={{
        backgroundColor: `hsl(${palette.Vibrant.hsl.toString()})`,
        borderRadius: isImage && `25px 25px 0px 0px`,
        flexDirection: isImage && `row`,
        padding: isImage && `20px 0px`
        }}
    >

      <StyleButton 
        toggleType={borderType}
        buttonText={ toggleBorder ? "- Border" : "+ Border" }
        handleToggle={handleToggle}
        isAAA={isAAA}
      />
      
      <StyleButton 
        toggleType={shadowType}
        buttonText={ toggleShadow ? "- Shadow" : "+ Shadow" }
        handleToggle={handleToggle}
        isAAA={isAAA}
      />

      <StyleButton 
        toggleType={opacityType}
        buttonText={ toggleOpacity ? "- Opacity" : "+ Opacity" }
        handleToggle={handleToggle}
        isAAA={isAAA}
      />

      <StyleButton 
        buttonText="Reset" 
        handleToggle={handleToggle}
        isAAA={isAAA}
      />
  
    </div>
  </>
  )
} 