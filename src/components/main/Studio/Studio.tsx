import React, { useState, useEffect } from 'react';

import './Studio.scss';
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar';
import StudioColours from '../StudioColours/StudioColours';
import { paletteType } from '../../../types';

interface Props {
  palette: paletteType | undefined;
  handlePaletteUpdate: any;
}

const Studio: React.FC<Props> = ({ palette, handlePaletteUpdate }) => {
  
  const [updatedColourPalette, setUpdatedPalette] = useState({})
  const [toggle, setToggle] = useState({
    Virbant: false,
    LightVibrant: false,
    DarkVibrant: false,
    Muted: false,
    LightMuted: false,
    DarkMuted: false
  })

  useEffect(() => {
    handlePaletteUpdate(updatedColourPalette)
    // eslint-disable-next-line
  }, [updatedColourPalette])
  
  /*Handles Palette Change From InputScrub, updates Studio State, then handlePaletteUpdate fetches the newPalette Data and
  updates the Main Component palette state
  */

  const handleColourChange = (event: React.ChangeEvent<HTMLInputElement>, paletteName: string) => {
    const { target: { value } } = event;
    let newColourPalette = {} ;
    newColourPalette[paletteName] = value + "%";
    setUpdatedPalette(newColourPalette)
  }

  //Toggles StudioWebsite Componets color palette to adjust InputScrub Component
  
  const toggleStudioPalette = (toggleType: any) => {
    let toggleStatus = toggle[toggleType]
    setToggle({...toggle, [toggleType]: !toggleStatus}); 
  }

  return (
    <>
    { palette?.Vibrant && 
      <section className="studio">
        <StudioPaletteBar 
          palette={palette}
        />

        <StudioColours 
          palette={palette}
          toggle={toggle}
          handleColourChange={handleColourChange} 
          toggleStudioPalette={toggleStudioPalette}
        />
      </section>
    }
  </>
  )
};

export default Studio;