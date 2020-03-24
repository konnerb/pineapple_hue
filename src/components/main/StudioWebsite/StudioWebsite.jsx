import React from 'react';
import './StudioWebsite.scss';
import StyleButton from '../../StyleButton/StyleButton'
import InputScrub from '../../InputScrub/InputScrub'

export default function StudioWebsite({ hslToRgb, handleChange, toggleStudioPalette, toggleVibrant, toggleLightVibrant, toggleDarkVibrant, toggleMuted, toggleLightMuted, toggleDarkMuted, palette, roundHue, roundSl }) {

    //{console.log(palette.Vibrant._hsl[0])}
    //const newColor = palette
    //backgroundColor: 'rgb('+palette.Vibrant.r+','+palette.Vibrant.g+','+Object.values(newPalette)+')'
    return (
        <> 
        { palette.Vibrant ?
            <div className="website">
              
                <div className="website__color color_top-right" style={{
                  backgroundColor: 'hsl('+roundHue(palette.Vibrant.hsl[0])+','+roundSl(palette.Vibrant.hsl[1])+','+roundSl(palette.Vibrant.hsl[2])+')',
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
                      roundHue={roundHue} 
                      paletteType="Vibrant" 
                      palette={palette.Vibrant} 
                    />
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: 'hsl('+roundHue(palette.LightVibrant.hsl[0])+','+roundSl(palette.LightVibrant.hsl[1])+','+roundSl(palette.LightVibrant.hsl[2])+')',
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
                      roundHue={roundHue} 
                      paletteType="LightVibrant" 
                      palette={palette.LightVibrant} 
                    />
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: 'hsl('+roundHue(palette.DarkVibrant.hsl[0])+','+roundSl(palette.DarkVibrant.hsl[1])+','+roundSl(palette.DarkVibrant.hsl[2])+')',
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
                      roundHue={roundHue} 
                      paletteType="DarkVibrant" 
                      palette={palette.DarkVibrant} 
                    />
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: 'hsl('+roundHue(palette.Muted.hsl[0])+','+roundSl(palette.Muted.hsl[1])+','+roundSl(palette.Muted.hsl[2])+')',
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
                      roundHue={roundHue} 
                      paletteType="Muted" 
                      palette={palette.Muted} 
                    />
                  </div>
                }
                </div>
                <div className="website__color" style={{
                  backgroundColor: 'hsl('+roundHue(palette.LightMuted.hsl[0])+','+roundSl(palette.LightMuted.hsl[1])+','+roundSl(palette.LightMuted.hsl[2])+')',
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
                      roundHue={roundHue} 
                      paletteType="LightMuted" 
                      palette={palette.LightMuted} 
                    />
                  </div>
                }
                </div>
                <div className="website__color color_bottom-right" style={{
                  backgroundColor:  'hsl('+roundHue(palette.DarkMuted.hsl[0])+','+roundSl(palette.DarkMuted.hsl[1])+','+roundSl(palette.DarkMuted.hsl[2])+')',
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
                      roundHue={roundHue} 
                      paletteType="DarkMuted" 
                      palette={palette.DarkMuted} 
                    />
                  </div>
                }
                </div>
            </div>
            : null
        }
        </>
    )
} 