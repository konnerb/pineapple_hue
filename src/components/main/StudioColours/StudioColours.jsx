import React from 'react';
import './StudioColours.scss';
import StyleButton from '../../StyleButton/StyleButton'
import InputScrub from '../../InputScrub/InputScrub'
import ColorCode from '../../ColorCode/ColorCode'
import { roundHue, roundSl, contrast } from '../../../utlis';

export default function StudioColours(

  { 
    handleChange, 
    toggleStudioPalette, 
    toggle,
    palette
  }) {

  return (
    <> 
      { palette.Vibrant &&
        <div className="website">
          {Object.keys(palette).map((colour, i) => (
            <div 
              key={i}
              className={ 
                i === 0 ? "website__color color_top-right" 
                : i === 5 ? "website__color color_bottom-right" 
                : "website__color"}
                style={{
                  backgroundColor:'hsl('
                    +roundHue(palette[colour].hsl[0])+','
                    +roundSl(palette[colour].hsl[1])+','
                    +roundSl(palette[colour].hsl[2])+')',
                  color: palette[colour].titleTextColor
              }}>
              { !toggle[colour] &&
                <div className="website__toggle-button">
                  <StyleButton 
                    toggleType={colour}
                    buttonText="+ Adjust Lightness"
                    handleToggle={toggleStudioPalette}
                  />
                </div>
              }
              { toggle[colour] &&
                <div className="website__toggle-lightness">
                  <StyleButton 
                    toggleType={colour}
                    buttonText="X"
                    handleToggle={toggleStudioPalette}
                  />
                  <InputScrub 
                    handleChange={handleChange} 
                    paletteType={colour} 
                    palette={palette[colour]}
                  />
                  <div className="website__toggle-code">
                    <ColorCode
                      palette={palette}
                      paletteName={colour}
                      colorCode={false}
                      isToggled={toggle[colour]}
                      codeType='hex'
                    />
                    <ColorCode
                      palette={palette}
                      paletteName={colour}
                      isToggled={toggle[colour]}
                      colorCode={false}
                      codeType='contrast'
                    />
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      }
    </>
  )
} 