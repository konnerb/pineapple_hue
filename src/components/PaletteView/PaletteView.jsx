import React from 'react';
import './PaletteView.scss';

export default function PaletteView({ palette }) {
    return (
    <>  { palette.Vibrant ?
        <section className="paletteView">
            <div className="paletteView__svg-container">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: 'rgb(10, 10, 10)' }}></path>
                </svg>
            </div>
            <div className="paletteView__color"  style={{
                  backgroundColor: `${palette.Vibrant.hex}`,
                  color: `${palette.Vibrant.titleTextColor}`,
                }}>
                <p>Hex: {palette.Vibrant._hex}</p>
                <p>RGB: {'rgb('+palette.Vibrant.r+','+palette.Vibrant.g+','+palette.Vibrant.b+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.Vibrant.titleTextColor}</p>
            </div>
            <div className="paletteView__color"  style={{
                  backgroundColor: `${palette.LightVibrant.hex}`,
                  color: `${palette.LightVibrant.titleTextColor}`,
                }}>
                <p>Hex: {palette.LightVibrant._hex}</p>
                <p>RGB: {'rgb('+palette.LightVibrant.r+','+palette.LightVibrant.g+','+palette.LightVibrant.b+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.LightVibrant.titleTextColor}</p>
            </div>
            <div className="paletteView__color"  style={{
                  backgroundColor: `${palette.DarkVibrant.hex}`,
                  color: `${palette.DarkVibrant.titleTextColor}`,
                }}>
                <p>Hex:{ palette.DarkVibrant._hex}</p>
                <p>RGB: {'rgb('+palette.DarkVibrant.r+','+palette.DarkVibrant.g+','+palette.DarkVibrant.b+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.DarkVibrant.titleTextColor}</p>
            </div>
            <div className="paletteView__color"  style={{
                  backgroundColor: `${palette.Muted.hex}`,
                  color: `${palette.Muted.titleTextColor}`,
                }}>
                <p>Hex: {palette.Muted._hex}</p>
                <p>RGB: {'rgb('+palette.Muted.r+','+palette.Muted.g+','+palette.Muted.b+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.Muted.titleTextColor}</p>
            </div>
            <div className="paletteView__color"  style={{
                  backgroundColor: `${palette.LightMuted.hex}`,
                  color: `${palette.LightMuted.titleTextColor}`,
                }}>
                <p>Hex: {palette.LightMuted._hex}</p>
                <p>RGB: {'rgb('+palette.LightMuted.r+','+palette.LightMuted.g+','+palette.LightMuted.b+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.LightMuted.titleTextColor}</p>
            </div>
            <div className="paletteView__color"  style={{
                  backgroundColor: `${palette.DarkMuted.hex}`,
                  color: `${palette.DarkMuted.titleTextColor}`,
                }}> 
                <p>Hex: {palette.DarkMuted._hex}</p>
                <p>RGB: {'rgb('+palette.DarkMuted.r+','+palette.DarkMuted.g+','+palette.DarkMuted.b+')'}</p>
                <p>HSL:</p>
                <p>Text Colour: {palette.DarkMuted.titleTextColor}</p>
            </div>
        </section>
        : null
        }
    </>
    )
}