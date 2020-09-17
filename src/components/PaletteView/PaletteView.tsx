import React from 'react';
import { contrast } from '../../utlis';

import './PaletteView.scss';
import ColorCode from '../ColorCode/ColorCode';
import { codeTyped, paletteNameType, paletteType } from '../../types';


interface Props {
  palette: paletteType | undefined; 
  colorCode: boolean; 
  codeType: codeTyped; 
  togglePalette?: boolean;
}
const PaletteView: React.FC<Props> = ({ palette, colorCode, codeType, togglePalette }) => {

  const isAAA: any = ((colour: paletteNameType) => contrast( palette && palette[colour].hsl, [0, 1, 1], true ) )
      
  return (
  <>  
  { palette?.Vibrant &&
    <section className="paletteView">
        <div className="paletteView__svg-container top">
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path d="M0,40 C150,200 350,0 500,40 L500,00 L0,0 Z" 
                  style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}>
                </path>
            </svg>
        </div>

        { Object.keys(palette).map((colour, i) => (
          <div 
            key={i}
            className="paletteView__color"  
            style={{
              backgroundColor: 
                togglePalette 
                ? `hsl(${palette[colour].hsl.toString()})`
                : `${palette[colour].hex}`,

              color: `${palette[colour].titleTextColor}`
            }}
          >
            <ColorCode 
              palette={palette}
              paletteName={colour}
              colorCode={colorCode}
              codeType={codeType}
              isAAA={isAAA(colour)}
            />
          </div>
          ))
        }

        <div className="paletteView__svg-container bottom">
            <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                <path d="M0,40 C150,200 350,0 500,40 L500,00 L0,0 Z" 
                    style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}>
                </path>
            </svg>
        </div>
    </section>
  }
  </>
  )
};

export default PaletteView;