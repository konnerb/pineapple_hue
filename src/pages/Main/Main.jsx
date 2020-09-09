import React, { useState } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero';
import PaletteView from '../../components/PaletteView/PaletteView';
import Studio from '../../components/main/Studio/Studio';
import StudioComponents from '../../components/main/StudioComponents/StudioComponents';
import Footer from '../../components/Footer/Footer';
import { roundHue, roundSl } from '../../utlis';

const Main = () => {

    const [palette, setPalette] = useState([])
    const [percents, setPercents] = useState({})
    const [togglePalette, setTogglePalette] = useState(false)

  //Fetches Image Data from React-DropZone UploadPage Component and sets state

  const fetchImgData = (img) => {
    if (!img) return;
    Vibrant.from(img)
    .getPalette((err, palette) => {
      if(err) {
      console.log(err);
      } else {
        setPalette(palette)
        modifyPalette()
      }
    })
  }

  //Safely updates original Vibrant.js HSL values to whole numbers

  const modifyPalette = () => {

    const clonePalette = palette
    let newPalette = {}
    if (palette.Vibrant) {
      newPalette = {
        ...clonePalette,
        Vibrant: {
          ...clonePalette.Vibrant,
          hsl: 
            [roundHue(clonePalette.Vibrant.hsl[0]), 
            roundSl(clonePalette.Vibrant.hsl[1]), 
            roundSl(clonePalette.Vibrant.hsl[2])]
        },
        LightVibrant: {
          ...clonePalette.LightVibrant,
          hsl: 
            [roundHue(clonePalette.LightVibrant.hsl[0]), 
            roundSl(clonePalette.LightVibrant.hsl[1]), 
            roundSl(clonePalette.LightVibrant.hsl[2])]
        },
        DarkVibrant: {
          ...clonePalette.DarkVibrant,
          hsl: 
            [roundHue(clonePalette.DarkVibrant.hsl[0]), 
            roundSl(clonePalette.DarkVibrant.hsl[1]), 
            roundSl(clonePalette.DarkVibrant.hsl[2])]
        },
        Muted: {
          ...clonePalette.Muted,
          hsl: 
            [roundHue(clonePalette.Muted.hsl[0]), 
            roundSl(clonePalette.Muted.hsl[1]), 
            roundSl(clonePalette.Muted.hsl[2])]
        },
        LightMuted: {
          ...clonePalette.LightMuted,
          hsl: 
            [roundHue(clonePalette.LightMuted.hsl[0]), 
            roundSl(clonePalette.LightMuted.hsl[1]), 
            roundSl(clonePalette.LightMuted.hsl[2])]
        },
        DarkMuted: {
          ...clonePalette.DarkMuted,
          hsl: 
            [roundHue(clonePalette.DarkMuted.hsl[0]), 
            roundSl(clonePalette.DarkMuted.hsl[1]), 
            roundSl(clonePalette.DarkMuted.hsl[2])]
        }
      }
    setPalette(newPalette)
  }
  }

  //Safely updates Palette HSL colors from InputScrub Component and updates state

  const handlePaletteUpdate = (paletteName) => {
    const clonePalette = palette
    const key = Object.keys(paletteName)[0]; 
    setPalette({
      ...clonePalette,
      [key]: {
        ...clonePalette[key],
        hsl: 
          [clonePalette[key].hsl[0], 
          clonePalette[key].hsl[1], 
          paletteName[key]]
      }  
    })
  }

  //Handles opacity percent change on Icon, Button, and Image Components

  const handlePercentChange = (event, nameInput) => {
    const { target: { value} } = event;
    let percents = {};
    percents[nameInput] = Math.round(value * 100) / 100;
    setPercents(percents);
  }

  //Toggles PaletteView Component on or off
  
  const handleTogglePalette = () => {
    let toggleStatus = togglePalette
    setTogglePalette(!toggleStatus);     
  }
  
  return (
  <> 
    <section className="hero-component"> 
      <Hero 
      fetchImgData={fetchImgData} 
      palette={palette} 
      />
    </section>

    <main className="main">
      <PaletteView 
        palette={palette} 
        colorCode={false}
        codeType='hex'
      />
      <Studio 
        palette={palette} 
        handlePaletteUpdate={handlePaletteUpdate} 
      />
      <StudioComponents 
        palette={palette} 
        percents={percents}
        handlePercentChange={handlePercentChange}
      />  
      { palette.Vibrant &&
        <div className="new-palette__container">
          <button 
            className="new-palette__button"
            onClick={() => handleTogglePalette()}
          > {togglePalette ? `Whoa!` : `What's your pineapplehue!?`}
          </button>

          { togglePalette &&
            <PaletteView 
              palette={palette} 
              togglePalette={togglePalette}
              colorCode={true}
              codeType=''
            />
          }
        </div>
      }
    </main>

    <footer className="hero">
      <Footer />
    </footer>
    
  </>
  );
}

export default Main;