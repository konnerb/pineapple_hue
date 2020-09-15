import React, { useState, useEffect } from 'react';
import './Studio.scss';
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar';
import StudioColours from '../StudioColours/StudioColours';

const Studio = ({palette, handlePaletteUpdate}) => {
      const [updatedPalette, setUpdatePalette] = useState({})
      const [toggle, setToggle] = useState({
        Virbant: false,
        LightVibrant: false,
        DarkVibrant: false,
        Muted: false,
        LightMuted: false,
        DarkMuted: false
      })

  useEffect(() => {
    handlePaletteUpdate(updatedPalette)
  }, [updatedPalette])
  
  /*Handles Palette Change From InputScrub, updates Studio State, then handlePaletteUpdate fetches the newPalette Data and
  updates the Main Component palette state
  */

  const handleChange = (event, paletteName) => {
    const { target: { value} } = event;
    let newPalette = {};
    newPalette[paletteName] = value + "%";
    setUpdatePalette(newPalette)
  }

  //Toggles StudioWebsite Componets color palette to adjust InputScrub Component
  
  const toggleStudioPalette = (toggleType) => {
    let toggleStatus = toggle[toggleType]
    setToggle({[toggleType]: !toggleStatus}); 
  }

  return (
    <>
    { palette.Vibrant && 
      <section className="studio">
        <StudioPaletteBar 
          palette={palette}
        />

        <StudioColours 
          palette={palette}
          toggle={toggle}
          handleChange={handleChange} 
          toggleStudioPalette={toggleStudioPalette}
        />
      </section>
    }
  </>
  )
};

export default Studio;