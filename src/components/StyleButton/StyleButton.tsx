import React from 'react';

import './StyleButton.scss';
import { isAAAType } from '../../types';

interface Props {
  handleToggle: any; 
  toggleType?: string; 
  buttonText: string; 
  isAAA: isAAAType;
}

const StyleButton: React.FC<Props> = ({ handleToggle, toggleType, buttonText, isAAA }) => (

  <> 
    <div>
      <button className={isAAA === 'AAA' && isAAA !== undefined ? "style-button" : "style-button white"}
        name="style-button" 
        onClick={() => handleToggle(toggleType)}
        >{buttonText}
      </button>
    </div>
  </>
  
);

export default StyleButton;