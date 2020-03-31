import React from 'react';
import './PaletteView.scss';
import ColorCode from '../ColorCode/ColorCode'

export default function PaletteView({ palette, contrast, hslToRgb, hslToHex, colorCode, codeType, contrastHsl, togglePalette, roundHue, roundSl }) {
    //if (palette.Vibrant) {
    //console.log( hslToRgb('hsl('+roundHue(palette.Vibrant.hsl[0])+','+roundSl(palette.Vibrant.hsl[1])+','+roundSl(palette.Vibrant.hsl[2])+')'))
    //} 
    return (
    <>  { palette.Vibrant ?
        <section className="paletteView">
            <div className="paletteView__svg-container top">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,40 C150,200 350,0 500,40 L500,00 L0,0 Z" 
                        style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}>
                    </path>
                </svg>
            </div>
            <div className="paletteView__color"  style={{
                    backgroundColor: 
                        togglePalette 
                        ? 'hsl('
                            +roundHue(palette.Vibrant.hsl[0])+','
                            +roundSl(palette.Vibrant.hsl[1])+','
                            +roundSl(palette.Vibrant.hsl[2])+')'
                        : `${palette.Vibrant.hex}`,

                        color: `${palette.Vibrant.titleTextColor}`
                    }}
            >
                < ColorCode 
                    palette={palette}
                    roundHue={roundHue}
                    roundSl={roundSl}
                    contrast={contrast}
                    hslToRgb={hslToRgb}
                    hslToHex={hslToHex}
                    paletteName='Vibrant'
                    colorCode={colorCode}
                    codeType={codeType}
                />
            </div>
            <div className="paletteView__color"  style={{
                    backgroundColor: 
                        togglePalette 
                        ? 'hsl('
                            +roundHue(palette.LightVibrant.hsl[0])+','
                            +roundSl(palette.LightVibrant.hsl[1])+','
                            +roundSl(palette.LightVibrant.hsl[2])+')'
                        : `${palette.LightVibrant.hex}`,

                        color: `${palette.LightVibrant.titleTextColor}`
                    }}
                >
                < ColorCode 
                    palette={palette}
                    roundHue={roundHue}
                    roundSl={roundSl}
                    contrast={contrast}
                    hslToRgb={hslToRgb}
                    hslToHex={hslToHex}
                    paletteName='LightVibrant'
                    colorCode={colorCode}
                    codeType={codeType}
                />
            </div>
            <div className="paletteView__color"  style={{
                    backgroundColor: 
                        togglePalette 
                        ? 'hsl('
                            +roundHue(palette.DarkVibrant.hsl[0])+','
                            +roundSl(palette.DarkVibrant.hsl[1])+','
                            +roundSl(palette.DarkVibrant.hsl[2])+')'
                        : `${palette.DarkVibrant.hex}`,

                        color: `${palette.DarkVibrant.titleTextColor}`
                    }}
                >
                < ColorCode 
                    palette={palette}
                    roundHue={roundHue}
                    roundSl={roundSl}
                    contrast={contrast}
                    hslToRgb={hslToRgb}
                    hslToHex={hslToHex}
                    paletteName='DarkVibrant'
                    colorCode={colorCode}
                    codeType={codeType}
                />
            </div>
            <div className="paletteView__color"  style={{
                    backgroundColor: 
                        togglePalette 
                        ? 'hsl('
                            +roundHue(palette.Muted.hsl[0])+','
                            +roundSl(palette.Muted.hsl[1])+','
                            +roundSl(palette.Muted.hsl[2])+')'
                        : `${palette.Muted.hex}`,
                    
                    color: `${palette.Muted.titleTextColor}`,
                    }}
                >
                < ColorCode 
                    palette={palette}
                    roundHue={roundHue}
                    roundSl={roundSl}
                    contrast={contrast}
                    hslToRgb={hslToRgb}
                    hslToHex={hslToHex}
                    paletteName='Muted'
                    colorCode={colorCode}
                    codeType={codeType}
                />
            </div>
            <div className="paletteView__color"  style={{
                    backgroundColor: 
                        togglePalette 
                        ? 'hsl('
                            +roundHue(palette.LightMuted.hsl[0])+','
                            +roundSl(palette.LightMuted.hsl[1])+','
                            +roundSl(palette.LightMuted.hsl[2])+')'
                        : `${palette.LightMuted.hex}`,

                        color: `${palette.LightMuted.titleTextColor}`,
                    }}
                >
                < ColorCode 
                    palette={palette}
                    roundHue={roundHue}
                    roundSl={roundSl}
                    contrast={contrast}
                    hslToRgb={hslToRgb}
                    hslToHex={hslToHex}
                    paletteName='LightMuted'
                    colorCode={colorCode}
                    codeType={codeType}
                />
            </div>
            <div className="paletteView__color"  style={{
                    backgroundColor: 
                        togglePalette 
                        ? 'hsl('
                            +roundHue(palette.DarkMuted.hsl[0])+','
                            +roundSl(palette.DarkMuted.hsl[1])+','
                            +roundSl(palette.DarkMuted.hsl[2])+')'
                        : `${palette.DarkMuted.hex}`,
                        
                    color: `${palette.DarkMuted.titleTextColor}`,
                    }}
                > 
                < ColorCode 
                    palette={palette}
                    roundHue={roundHue}
                    roundSl={roundSl}
                    contrast={contrast}
                    hslToRgb={hslToRgb}
                    hslToHex={hslToHex}
                    paletteName='DarkMuted'
                    colorCode={colorCode}
                    codeType={codeType}
                />
            </div>
            <div className="paletteView__svg-container bottom">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,40 C150,200 350,0 500,40 L500,00 L0,0 Z" 
                        style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}>
                    </path>
                </svg>
            </div>
        </section>
        : null
        }
    </>
    )
}