import React from 'react';
import './InputScrub.scss';
import { isAAAType } from '../../types';

interface Props {
  palette: any;
  paletteType: string; 
  isAAA: isAAAType; 
  handleChange: (defaultValue: React.ChangeEvent<HTMLInputElement>, paletteType: string) => void;
}

const InputScrub: React.FC<Props> = ({ palette, paletteType, isAAA, handleChange}) => (

  <>
  { palette &&
    <div>
      <div className="input-scrub">
        <label 
          className={isAAA === 'AAA' && isAAA !== undefined ? "input-scrub__label" :"input-scrub__label white"}
          >Lightness: {palette.hsl[2]}
        </label>
        <input 
          className="input-scrub__lightness" 
          type="range" 
          name="Adjust Lightness" 
          step="1" 
          min="1" 
          max="100" 
          defaultValue={parseFloat(palette.hsl[2])} 
          onChange={defaultValue => handleChange(defaultValue, paletteType)}
        >
        </input>
      </div>
      {/*<div>
        <label>Staturation</label>
        <input className="input-scrub__saturation" 
            type="range" 
            name="Saturation" 
            step="any" 
            min="0" 
            max="1" 
            defaultValue={palette.hsl[1]} 
            onChange={defaultValue => handleChange(defaultValue, paletteType)}>
        </input>
      </div>*/}
    </div>
  }
  </>
);

export default InputScrub;