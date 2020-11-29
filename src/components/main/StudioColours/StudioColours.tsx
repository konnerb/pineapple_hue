import React from 'react';
import { contrast } from '../../../utlis';

import './StudioColours.scss';
import StyleButton from '../../StyleButton/StyleButton';
import InputScrub from '../../InputScrub/InputScrub';
import ColorCode from '../../ColorCode/ColorCode';
import { paletteType, paletteNameType } from '../../../types';

interface Props {
  palette: paletteType;
  toggle: any;
  handleColourChange: (defaultValue: React.ChangeEvent<HTMLInputElement>, paletteType: string) => void;
  toggleStudioPalette: any;
}

const StudioColours: React.FC<Props> = ({ palette, toggle, handleColourChange, toggleStudioPalette }) => {

  const isAAA: any = ((colour: paletteNameType) => contrast( palette && palette[colour].hsl, [0, 1, 1], true ) )

  return (
    <> 
    { palette?.Vibrant &&
      <div className="website">
        {Object.keys(palette).map((colour, i) => (
          <div 
            key={colour + '_' + i}
            className={ 
              i === 0 ? "website__color color_top-right" 
              : i === 5 ? "website__color color_bottom-right" 
              : "website__color"}
              style={{
                backgroundColor: `hsl(${palette[colour].hsl.toString()})`,
                color: palette[colour].titleTextColor
            }}>
            { !toggle[colour] &&
              <div className="website__toggle-button">
                <StyleButton 
                  toggleType={colour}
                  buttonText="+ Adjust Lightness"
                  handleToggle={toggleStudioPalette}
                  isAAA={isAAA(colour)}
                />
              </div>
            }
            { toggle[colour] &&
              <div className="website__toggle-lightness">
                <StyleButton 
                  toggleType={colour}
                  buttonText="X"
                  handleToggle={toggleStudioPalette}
                  isAAA={isAAA(colour)}
                />
                <InputScrub 
                  handleColourChange={handleColourChange} 
                  paletteType={colour} 
                  palette={palette[colour]}
                  isAAA={isAAA(colour)}
                />
                <div className="website__toggle-code">
                  <ColorCode
                    palette={palette}
                    paletteName={colour}
                    colorCode={false}
                    isToggled={toggle[colour]}
                    codeType='hex'
                    isAAA={isAAA(colour)}
                  />
                  <ColorCode
                    palette={palette}
                    paletteName={colour}
                    isToggled={toggle[colour]}
                    colorCode={false}
                    codeType='contrast'
                    isAAA={isAAA(colour)}
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
};

export default StudioColours;