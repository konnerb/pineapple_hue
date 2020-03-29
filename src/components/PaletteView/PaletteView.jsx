import React from 'react';
import './PaletteView.scss';

export default function PaletteView({ palette, contrast, hslToRgb, hslToHex, contrastHsl, togglePalette, roundHue, roundSl }) {
    //if (palette.Vibrant) {
    //console.log( hslToRgb('hsl('+roundHue(palette.Vibrant.hsl[0])+','+roundSl(palette.Vibrant.hsl[1])+','+roundSl(palette.Vibrant.hsl[2])+')'))
    //} 
    return (
    <>  { palette.Vibrant ?
        <section className="paletteView">
            <div className="paletteView__svg-container top">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,40 C150,200 350,0 500,40 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}></path>
                </svg>
            </div>
            <div className="paletteView__color"  style={{
                backgroundColor: togglePalette ? 
                'hsl('+roundHue(palette.Vibrant.hsl[0])+','+roundSl(palette.Vibrant.hsl[1])+','+roundSl(palette.Vibrant.hsl[2])+')'
                :`${palette.Vibrant.hex}`,
                color: `${palette.Vibrant.titleTextColor}`,
                }}>
                <p>Hex: {palette.Vibrant._hex}</p>
            <p>Contrast Ratio: 
                {contrast(
                    [ roundHue(palette.Vibrant.hsl[0]), (Math.round(palette.Vibrant.hsl[1] * 100000) / 1000), (Math.round(palette.Vibrant.hsl[2] * 100000) / 1000) ],
                    [ roundHue(palette.DarkVibrant.hsl[0]), (Math.round(palette.DarkVibrant.hsl[1] * 100000) / 1000), (Math.round(palette.DarkVibrant.hsl[2] * 100000) / 1000) ]
                )+`:1`
                }</p>
            <p>RGB: ({hslToRgb(roundHue(palette.Vibrant.hsl[0]), (Math.round(palette.Vibrant.hsl[1] * 100000) / 1000), (Math.round(palette.Vibrant.hsl[2] * 100000) / 1000), true )})</p>
            <p>Hex: {hslToHex(roundHue(palette.Vibrant.hsl[0]), (Math.round(palette.Vibrant.hsl[1] * 100000) / 1000), (Math.round(palette.Vibrant.hsl[2] * 100000) / 1000) ) } </p>
            {/*<p>Text Colour: {palette.Vibrant.titleTextColor}</p>*/}
            </div>
            <div className="paletteView__color"  style={{
                backgroundColor: togglePalette ? 
                'hsl('+roundHue(palette.LightVibrant.hsl[0])+','+roundSl(palette.LightVibrant.hsl[1])+','+roundSl(palette.LightVibrant.hsl[2])+')'
                :`${palette.LightVibrant.hex}`,
                color: `${palette.LightVibrant.titleTextColor}`,
                }}>
                <p>Hex: {palette.LightVibrant._hex}</p>
                {/*<p>RGB: {'rgb('+palette.LightVibrant._rgb[0]+','+palette.LightVibrant._rgb[1]+','+palette.LightVibrant._rgb[2]+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.LightVibrant.titleTextColor}</p>*/}
            </div>
            <div className="paletteView__color"  style={{
                backgroundColor: togglePalette ? 
                'hsl('+roundHue(palette.DarkVibrant.hsl[0])+','+roundSl(palette.DarkVibrant.hsl[1])+','+roundSl(palette.DarkVibrant.hsl[2])+')'
                :`${palette.DarkVibrant.hex}`,
                color: `${palette.DarkVibrant.titleTextColor}`,
                }}>
                <p>Hex:{ palette.DarkVibrant._hex}</p>
                {/*<p>RGB: {'rgb('+palette.DarkVibrant._rgb[0]+','+palette.DarkVibrant._rgb[1]+','+palette.DarkVibrant._rgb[2]+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.DarkVibrant.titleTextColor}</p>*/}
            </div>
            <div className="paletteView__color"  style={{
                backgroundColor: togglePalette ? 
                'hsl('+roundHue(palette.Muted.hsl[0])+','+roundSl(palette.Muted.hsl[1])+','+roundSl(palette.Muted.hsl[2])+')'
                :`${palette.Muted.hex}`,
                color: `${palette.Muted.titleTextColor}`,
                }}>
                <p>Hex: {palette.Muted._hex}</p>
                {/*<p>RGB: {'rgb('+palette.Muted._rgb[0]+','+palette.Muted._rgb[1]+','+palette.Muted._rgb[2]+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.Muted.titleTextColor}</p>*/}
            </div>
            <div className="paletteView__color"  style={{
                backgroundColor: togglePalette ? 
                'hsl('+roundHue(palette.LightMuted.hsl[0])+','+roundSl(palette.LightMuted.hsl[1])+','+roundSl(palette.LightMuted.hsl[2])+')'
                :`${palette.LightMuted.hex}`,
                color: `${palette.LightMuted.titleTextColor}`,
                }}>
                <p>Hex: {palette.LightMuted._hex}</p>
                {/*<p>RGB: {'rgb('+palette.LightMuted._rgb[0]+','+palette.LightMuted._rgb[1]+','+palette.LightMuted._rgb[2]+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.LightMuted.titleTextColor}</p>*/}
            </div>
            <div className="paletteView__color"  style={{
                backgroundColor: togglePalette ? 
                'hsl('+roundHue(palette.DarkMuted.hsl[0])+','+roundSl(palette.DarkMuted.hsl[1])+','+roundSl(palette.DarkMuted.hsl[2])+')'
                :`${palette.DarkMuted.hex}`,
                color: `${palette.DarkMuted.titleTextColor}`,
                }}> 
                <p>Hex: {palette.DarkMuted._hex}</p>
                {/*<p>RGB: {'rgb('+palette.DarkMuted._rgb[0]+','+palette.DarkMuted._rgb[1]+','+palette.DarkMuted._rgb[2]+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.DarkMuted.titleTextColor}</p>*/}
            </div>
            <div className="paletteView__svg-container bottom">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,40 C150,200 350,0 500,40 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'rgb(250, 250, 250)' }}></path>
                </svg>
            </div>
        </section>
        : null
        }
    </>
    )
}