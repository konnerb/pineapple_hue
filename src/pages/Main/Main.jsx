import React, { useState, useEffect } from 'react';
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
    const [fetchImgBoolean, setfetchImgBoolean] = useState(false)
    const [percents, setPercents] = useState({})
    const [togglePalette, setTogglePalette] = useState(false)

    useEffect(() => {
      const data = localStorage.getItem("my-palette")
      if(data) {
        setPalette(JSON.parse(data))
      }
    }, [])

    useEffect(() => {
      modifyPalette(palette)
    }, [fetchImgBoolean])

    useEffect(() => {
      localStorage.setItem("my-palette", JSON.stringify(palette))
    }, [palette])

  //Fetches Image Data from React-DropZone UploadPage Component and sets state
  
  const fetchImgData = (img) => {
    if (!img) return;
    Vibrant.from(img)
    .getPalette((err, newPalette) => {
      if(err) {
      console.log(err);
      } else {
        setPalette(newPalette)
        if (palette) {
          setfetchImgBoolean(!fetchImgBoolean)
        }
      }
    })
  }
  
  //Safely updates original Vibrant.js HSL values to whole numbers

const modifyPalette = (modPalette) => {   
  if (modPalette.Vibrant) {
    const clonePalette = modPalette
    let newPalette = {}
    newPalette = {
      ...clonePalette,
      Vibrant: {
        ...clonePalette.Vibrant,
        _titleTextColor: clonePalette.Vibrant._titleTextColor,
        hex: clonePalette.Vibrant.hex,
        _hex: clonePalette.Vibrant._hex,
        _hsl: clonePalette.Vibrant._hsl,
        hsl: 
        [roundHue(clonePalette.Vibrant.hsl[0]), 
        roundSl(clonePalette.Vibrant.hsl[1]), 
        roundSl(clonePalette.Vibrant.hsl[2])]
      },
      LightVibrant: {
        ...clonePalette.LightVibrant,
        _titleTextColor: clonePalette.LightVibrant._titleTextColor,
        hex: clonePalette.LightVibrant.hex,
        _hex: clonePalette.LightVibrant._hex,
        _hsl: clonePalette.LightVibrant._hsl,
        hsl: 
        [roundHue(clonePalette.LightVibrant.hsl[0]), 
        roundSl(clonePalette.LightVibrant.hsl[1]), 
        roundSl(clonePalette.LightVibrant.hsl[2])]
      },
      DarkVibrant: {
        ...clonePalette.DarkVibrant,
        _titleTextColor: clonePalette.DarkVibrant._titleTextColor,
        hex: clonePalette.DarkVibrant.hex,
        _hex: clonePalette.DarkVibrant._hex,
        _hsl: clonePalette.DarkVibrant._hsl,
        hsl: 
        [roundHue(clonePalette.DarkVibrant.hsl[0]), 
        roundSl(clonePalette.DarkVibrant.hsl[1]), 
        roundSl(clonePalette.DarkVibrant.hsl[2])]
      },
      Muted: {
        ...clonePalette.Muted,
        _titleTextColor: clonePalette.Muted._titleTextColor,
        hex: clonePalette.Muted.hex,
        _hex: clonePalette.Muted._hex,
        _hsl: clonePalette.Muted._hsl,
        hsl: 
        [roundHue(clonePalette.Muted.hsl[0]), 
        roundSl(clonePalette.Muted.hsl[1]), 
        roundSl(clonePalette.Muted.hsl[2])]
      },
      LightMuted: {
        ...clonePalette.LightMuted,
        _titleTextColor: clonePalette.LightMuted._titleTextColor,
        hex: clonePalette.LightMuted.hex,
        _hex: clonePalette.LightMuted._hex,
        _hsl: clonePalette.LightMuted._hsl,
        hsl: 
        [roundHue(clonePalette.LightMuted.hsl[0]), 
        roundSl(clonePalette.LightMuted.hsl[1]), 
        roundSl(clonePalette.LightMuted.hsl[2])]
      },
      DarkMuted: {
        ...clonePalette.DarkMuted,
        _titleTextColor: clonePalette.DarkMuted._titleTextColor,
        hex: clonePalette.DarkMuted.hex,
        _hex: clonePalette.DarkMuted._hex,
        _hsl: clonePalette.DarkMuted._hsl,
        hsl: 
        [roundHue(clonePalette.DarkMuted.hsl[0]), 
        roundSl(clonePalette.DarkMuted.hsl[1]), 
        roundSl(clonePalette.DarkMuted.hsl[2])]
      }
    }
    setPalette(newPalette)
  }}

  //Safely updates Palette HSL colors from InputScrub Component and updates state

  const handlePaletteUpdate = (paletteName) => {
    if (palette.Vibrant ) {
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