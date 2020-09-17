import React from 'react';

import './StyleBar.scss';
import StyleButton from '../StyleButton/StyleButton';
import { isAAAType, paletteType } from '../../types';


interface Props {
  opacityType: string; 
  shadowType: string; 
  borderType: string; 
  handleToggle: any; 
  toggleShadow: boolean; 
  toggleBorder: boolean; 
  toggleOpacity: boolean;
  palette: paletteType; 
  isImage?: boolean;
  isAAA: isAAAType;
}
const StyleBar: React.FC<Props> = (

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
  }) => (
    
  <>
    <div 
      className="buttons" 
      style={{
        backgroundColor: `hsl(${palette.Vibrant.hsl.toString()})`,
        borderRadius: `${isImage && '25px 25px 0px 0px'}`,
        flexDirection: isImage ? 'row' : 'column',
        padding: `${isImage && '20px 0px'}`
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
);

export default StyleBar;