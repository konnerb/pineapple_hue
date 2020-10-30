import React, { useState, useEffect } from 'react';
import * as Vibrant from 'node-vibrant';
import { roundHue, roundSl } from '../../utlis';

import './Main.scss';
import Hero from '../../components/Hero/Hero';
import PaletteView from '../../components/PaletteView/PaletteView';
import Studio from '../../components/main/Studio/Studio';
import StudioComponents from '../../components/main/StudioComponents/StudioComponents';
import Footer from '../../components/Footer/Footer';
import { opacityType, paletteType } from '../../types';

const Main: React.FC = () => {

  const [originalPalette, setOriginalPalette] = useState<paletteType>()
  const [palette, setPalette] = useState<paletteType>()
  const [opacity, setOpacity] = useState<opacityType>({})
  const [togglePalette, setTogglePalette] = useState(false)

  //Sets palette state if 'my-palette' exists in sessionStorage when page mounts
  useEffect(() => {
    try {
      const data = sessionStorage.getItem("my-palette")
      if(data) {
        setPalette(JSON.parse(data))
      }
    } catch (error) {
        console.error("Denied access To Local Storage", error)
    }
  }, [])

  //Runs modifyPalette function when originalPalette is updated 
  useEffect(() => {
    const timer = setTimeout(() => {
      modifyPalette(originalPalette)
    }, 1000)
    return () => clearTimeout(timer)
  }, [originalPalette])

  //Updated Palette to sessionStorage every two seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if(palette) {
        try {
          sessionStorage.setItem("my-palette", JSON.stringify(palette))
        } catch (error) {
            console.error("Denied access To Local Storage", error)
        }
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [palette])

  //Fetches Image Data from React-DropZone UploadPage Component and sets state
  const fetchImgData = (img: any) => {
    if (!img) return;
    Vibrant.from(img)
    .getPalette((err: string, newPalette: any) => {
      if(err) {
      console.log(err);
      } else {
        setPalette(undefined)
        setOriginalPalette(newPalette)
      }
    })
  }
  
  //Safely updates original Vibrant.js HSL values to whole number
  const modifyPalette = (orgPalette: any) => {   
    if (orgPalette?.Vibrant) {
      const clonePalette = { ...orgPalette }
      let newPalette: any = {}
      newPalette = {
        ...clonePalette,
        Vibrant: {
          ...clonePalette.Vibrant,
          _titleTextColor: clonePalette.Vibrant.titleTextColor,
          hex: clonePalette.Vibrant.hex,
          _hex: clonePalette.Vibrant._hex,
          _hsl: clonePalette.Vibrant.hsl,
          hslVibrantBackground:
            [roundHue(clonePalette.Vibrant.hsl[0]), 
            roundSl(clonePalette.Vibrant.hsl[1]), 
            roundSl(clonePalette.Vibrant.hsl[2] * 1.25)],
          hsl: 
            [roundHue(clonePalette.Vibrant.hsl[0]), 
            roundSl(clonePalette.Vibrant.hsl[1]), 
            roundSl(clonePalette.Vibrant.hsl[2])]
        },
        LightVibrant: {
          ...clonePalette.LightVibrant,
          _titleTextColor: clonePalette.LightVibrant.titleTextColor,
          hex: clonePalette.LightVibrant.hex,
          _hex: clonePalette.LightVibrant._hex,
          _hsl: clonePalette.LightVibrant.hsl,
          hsl: 
            [roundHue(clonePalette.LightVibrant.hsl[0]), 
            roundSl(clonePalette.LightVibrant.hsl[1]), 
            roundSl(clonePalette.LightVibrant.hsl[2])]
        },
        DarkVibrant: {
          ...clonePalette.DarkVibrant,
          _titleTextColor: clonePalette.DarkVibrant.titleTextColor,
          hex: clonePalette.DarkVibrant.hex,
          _hex: clonePalette.DarkVibrant._hex,
          _hsl: clonePalette.DarkVibrant.hsl,
          hsl: 
            [roundHue(clonePalette.DarkVibrant.hsl[0]), 
            roundSl(clonePalette.DarkVibrant.hsl[1]), 
            roundSl(clonePalette.DarkVibrant.hsl[2])]
        },
        Muted: {
          ...clonePalette.Muted,
          _titleTextColor: clonePalette.Muted.titleTextColor,
          hex: clonePalette.Muted.hex,
          _hex: clonePalette.Muted._hex,
          _hsl: clonePalette.Muted.hsl,
          hsl: 
            [roundHue(clonePalette.Muted.hsl[0]), 
            roundSl(clonePalette.Muted.hsl[1]), 
            roundSl(clonePalette.Muted.hsl[2])]
        },
        LightMuted: {
          ...clonePalette.LightMuted,
          _titleTextColor: clonePalette.LightMuted.titleTextColor,
          hex: clonePalette.LightMuted.hex,
          _hex: clonePalette.LightMuted._hex,
          _hsl: clonePalette.LightMuted.hsl,
          hsl: 
            [roundHue(clonePalette.LightMuted.hsl[0]), 
            roundSl(clonePalette.LightMuted.hsl[1]), 
            roundSl(clonePalette.LightMuted.hsl[2])]
        },
        DarkMuted: {
          ...clonePalette.DarkMuted,
          _titleTextColor: clonePalette.DarkMuted.titleTextColor,
          hex: clonePalette.DarkMuted.hex,
          _hex: clonePalette.DarkMuted._hex,
          _hsl: clonePalette.DarkMuted.hsl,
          hsl: 
            [roundHue(clonePalette.DarkMuted.hsl[0]), 
            roundSl(clonePalette.DarkMuted.hsl[1]), 
            roundSl(clonePalette.DarkMuted.hsl[2])]
        }
      }
    setPalette(newPalette)
  }}

  //Safely updates Palette HSL colors from InputScrub Component and updates state
  const handlePaletteUpdate = (paletteName: string) => {
    if (Object.keys(paletteName).length !== 0 && palette?.Vibrant ) {
      const clonePalette = { ...palette };
      const key = Object.keys(paletteName)[0]; 
      const newVibrantKey = Math.round((paletteName[key].replace(/[%]/g, "")) * 1.25) + "%";
      console.log({
        ...clonePalette,
        [key]: {
          ...clonePalette[key],
          hslVibrantBackground:
            [clonePalette[key].hsl[0], 
            clonePalette[key].hsl[1], 
            newVibrantKey],
          hsl: 
            [clonePalette[key].hsl[0], 
            clonePalette[key].hsl[1], 
            paletteName[key]]
        }  
      })
      if(clonePalette.Vibrant && key === "Vibrant") {
        setPalette({
          ...clonePalette,
          [key]: {
            ...clonePalette[key],
            hslVibrantBackground:
              [clonePalette[key].hsl[0], 
              clonePalette[key].hsl[1], 
              newVibrantKey],
            hsl: 
              [clonePalette[key].hsl[0], 
              clonePalette[key].hsl[1], 
              paletteName[key]]
          }  
        })
      } else {
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
  }

  //Handles opacity percent change on Icon, Button, and Image Components
  const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>, nameInput: string): void => {
    const { target: { value } }: any = event;
    let opacityPercent = {};
    opacityPercent[nameInput] = Math.round(value * 100) / 100;
    setOpacity(opacityPercent);
  }

  //Toggles PaletteView Component on or off
  const handleTogglePalette = () => {
    let toggleStatus = togglePalette
    setTogglePalette(!toggleStatus);     
  }

  return (
  <> 
      <Hero 
      fetchImgData={fetchImgData} 
      palette={palette}  
      ogPalette={originalPalette}
      />

    { palette?.Vibrant &&
      <main className="main" >
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
          opacity={opacity}
          handleOpacityChange={handleOpacityChange}
          />  
          <div className="main__palette-container">
            <button 
              className="main__palette-button"
              onClick={() => handleTogglePalette()}
            > {togglePalette ? `Whoa!` : `What's your pineapplehue!?`}
            </button>

            { togglePalette &&
              <PaletteView 
                palette={palette} 
                togglePalette={togglePalette}
                colorCode={true}
              />
            }
          </div>
      </main>
    }
    <Footer />
  </>
  );
}

export default Main;