import React from 'react';
import './StudioWebsite.scss';
import StyleButton from '../../StyleButton/StyleButton'
import InputScrub from '../../InputScrub/InputScrub'
import ColorCode from '../../ColorCode/ColorCode'
import { roundHue, roundSl } from '../../../utlis';

export default function StudioWebsite(

  { 
    handleChange, 
    toggleStudioPalette, 
    toggleVibrant, 
    toggleLightVibrant, 
    toggleDarkVibrant, 
    toggleMuted, 
    toggleLightMuted, 
    toggleDarkMuted, 
    palette
  }) {
  
  //Coverts Hsl palette values into vairables 
  
  const colorVibrant = 
    'hsl('
      +roundHue(palette.Vibrant.hsl[0])+','
      +roundSl(palette.Vibrant.hsl[1])+','
      +roundSl(palette.Vibrant.hsl[2])+')';

  const colorLightVibrant = 
    'hsl('
      +roundHue(palette.LightVibrant.hsl[0])+','
      +roundSl(palette.LightVibrant.hsl[1])+','
      +roundSl(palette.LightVibrant.hsl[2])+')';

  const colorDarkVibrant = 
    'hsl('
      +roundHue(palette.DarkVibrant.hsl[0])+','
      +roundSl(palette.DarkVibrant.hsl[1])+','
      +roundSl(palette.DarkVibrant.hsl[2])+')';

  const colorMuted = 
    'hsl('
      +roundHue(palette.Muted.hsl[0])+','
      +roundSl(palette.Muted.hsl[1])+','
      +roundSl(palette.Muted.hsl[2])+')';

  const colorLightMuted = 
    'hsl('
      +roundHue(palette.LightMuted.hsl[0])+','
      +roundSl(palette.LightMuted.hsl[1])+','
      +roundSl(palette.LightMuted.hsl[2])+')';

  const colorDarkMuted = 
    'hsl('
      +roundHue(palette.DarkMuted.hsl[0])+','
      +roundSl(palette.DarkMuted.hsl[1])+','
      +roundSl(palette.DarkMuted.hsl[2])+')';

  return (
        <> 
        { colorVibrant &&
            <div className="website">
              
                <div className="website__color color_top-right" style={{
                  backgroundColor: colorVibrant,
                  color: `${palette.Vibrant.titleTextColor}`,
                }}>
                { !toggleVibrant &&
                  <div className="website__toggle-button">
                    <StyleButton 
                      toggleType="toggleVibrant"
                      buttonText="+ Adjust Lightness"
                      handleToggle={toggleStudioPalette}
                    />
                  </div>
                }
                { toggleVibrant &&
                  <div className="website__toggle-lightness">
                      <StyleButton 
                        toggleType="toggleVibrant"
                        buttonText="X"
                        handleToggle={toggleStudioPalette}
                      />
                      <InputScrub 
                        handleChange={handleChange} 
                        paletteType="Vibrant" 
                        palette={palette.Vibrant} 
                      />
                    <div className="website__toggle-code">
                      < ColorCode
                        palette={palette}
                        paletteName='Vibrant'
                        colorCode={false}
                        isToggled={toggleVibrant}
                        codeType='hex'
                      />
                      < ColorCode
                        palette={palette}
                        paletteName='Vibrant'
                        isToggled={toggleVibrant}
                        colorCode={false}
                        codeType='contrast'
                      />
                    </div>
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: colorLightVibrant,
                  color: `${palette.LightVibrant.titleTextColor}`,
                }}>
                { !toggleLightVibrant &&
                  <div className="website__toggle-button">
                    <StyleButton 
                      toggleType="toggleLightVibrant"
                      buttonText="+ Adjust Lightness"
                      handleToggle={toggleStudioPalette}
                    />
                  </div>
                }
                { toggleLightVibrant &&
                  <div className="website__toggle-lightness">
                    <StyleButton 
                      toggleType="toggleLightVibrant"
                      buttonText="X"
                      handleToggle={toggleStudioPalette}
                    />
                    <InputScrub 
                      handleChange={handleChange} 
                      paletteType="LightVibrant" 
                      palette={palette.LightVibrant} 
                    />
                    <div className="website__toggle-code">
                      < ColorCode
                        palette={palette}
                        paletteName='LightVibrant'
                        isToggled={toggleLightVibrant}
                        colorCode={false}
                        codeType='hex'
                      />
                      < ColorCode
                        palette={palette}
                        paletteName='LightVibrant'
                        isToggled={toggleLightVibrant}
                        colorCode={false}
                        codeType='contrast'
                      />
                    </div>
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: colorDarkVibrant,
                  color: `${palette.DarkVibrant.titleTextColor}`,
                }}>
                { !toggleDarkVibrant &&
                  <div className="website__toggle-button">
                    <StyleButton 
                      toggleType="toggleDarkVibrant"
                      buttonText="+ Adjust Lightness"
                      handleToggle={toggleStudioPalette}
                    />
                  </div>
                }
                { toggleDarkVibrant &&
                  <div className="website__toggle-lightness">
                    <StyleButton 
                      toggleType="toggleDarkVibrant"
                      buttonText="X"
                      handleToggle={toggleStudioPalette}
                    />
                    <InputScrub 
                      handleChange={handleChange} 
                      paletteType="DarkVibrant" 
                      palette={palette.DarkVibrant} 
                    />
                    <div className="website__toggle-code">
                      < ColorCode
                        palette={palette}
                        paletteName='DarkVibrant'
                        isToggled={toggleDarkVibrant}
                        colorCode={false}
                        codeType='hex'
                      />
                      < ColorCode
                        palette={palette}
                        paletteName='DarkVibrant'
                        isToggled={toggleDarkVibrant}
                        colorCode={false}
                        codeType='contrast'
                      />
                    </div>
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: colorMuted,
                  color: `${palette.Muted.titleTextColor}`,
                }}>
                { !toggleMuted &&
                  <div className="website__toggle-button">
                    <StyleButton 
                      toggleType="toggleMuted"
                      buttonText="+ Adjust Lightness"
                      handleToggle={toggleStudioPalette}
                    />
                  </div>
                }
                { toggleMuted &&
                  <div className="website__toggle-lightness">
                    <StyleButton 
                      toggleType="toggleMuted"
                      buttonText="X"
                      handleToggle={toggleStudioPalette}
                    />
                    <InputScrub 
                      handleChange={handleChange} 
                      paletteType="Muted" 
                      palette={palette.Muted} 
                    />
                    <div className="website__toggle-code">
                      < ColorCode
                        palette={palette}
                        paletteName='Muted'
                        isToggled={toggleMuted}
                        colorCode={false}
                        codeType='hex'
                      />
                      < ColorCode
                        palette={palette}
                        paletteName='Muted'
                        isToggled={toggleMuted}
                        colorCode={false}
                        codeType='contrast'
                      />
                    </div>
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: colorLightMuted,
                  color: `${palette.LightMuted.titleTextColor}`,
                }}>
                { !toggleLightMuted &&
                  <div className="website__toggle-button">
                    <StyleButton 
                      toggleType="toggleLightMuted"
                      buttonText="+ Adjust Lightness"
                      handleToggle={toggleStudioPalette}
                    />
                  </div>
                }
                { toggleLightMuted &&
                  <div className="website__toggle-lightness">
                    <StyleButton 
                      toggleType="toggleLightMuted"
                      buttonText="X"
                      handleToggle={toggleStudioPalette}
                    />
                    <InputScrub 
                      handleChange={handleChange} 
                      paletteType="LightMuted" 
                      palette={palette.LightMuted} 
                    />
                    <div className="website__toggle-code">
                      < ColorCode
                        palette={palette}
                        paletteName='LightMuted'
                        isToggled={toggleLightMuted}
                        colorCode={false}
                        codeType='hex'
                      />
                      < ColorCode
                        palette={palette}
                        paletteName='LightMuted'
                        isToggled={toggleLightMuted}
                        colorCode={false}
                        codeType='contrast'
                      />
                    </div>
                  </div>
                }
                </div>
                <div className="website__color color_bottom-right" style={{
                  backgroundColor: colorDarkMuted,
                  color: `${palette.DarkMuted.titleTextColor}`,
                }}>
                { !toggleDarkMuted &&
                  <div className="website__toggle-button">
                    <StyleButton 
                      toggleType="toggleDarkMuted"
                      buttonText="+ Adjust Lightness"
                      handleToggle={toggleStudioPalette}
                    />
                  </div>
                }
                { toggleDarkMuted &&
                  <div className="website__toggle-lightness">
                    <StyleButton 
                      toggleType="toggleDarkMuted"
                      buttonText="X"
                      handleToggle={toggleStudioPalette}
                    />
                    <InputScrub 
                      handleChange={handleChange} 
                      paletteType="DarkMuted" 
                      palette={palette.DarkMuted} 
                    />
                    <div className="website__toggle-code">
                      < ColorCode
                        palette={palette}
                        paletteName='DarkMuted'
                        isToggled={toggleDarkMuted}
                        colorCode={false}
                        codeType='hex'
                      />
                      < ColorCode
                        palette={palette}
                        paletteName='DarkMuted'
                        isToggled={toggleDarkMuted}
                        colorCode={false}
                        codeType='contrast'
                      />
                    </div>
                  </div>
                }
                </div>
            </div>
        }
        </>
    )
} 