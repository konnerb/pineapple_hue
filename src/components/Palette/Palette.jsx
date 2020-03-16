import React from 'react';
import './Palette.scss'

export default function Palette({ palette }) {
    return (
        <>
        {palette.Vibrant ?
            <div>
              <div style={{display: 'flex'}}>
                <div style={{
                  backgroundColor: `${palette.Vibrant.hex}`,
                  color: `${palette.Vibrant.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>Vibrant</p>
                <p>Hex:{palette.Vibrant.hex}</p>
                <p>Rgb:{palette.Vibrant.hex}</p>
                <p>Hsl:{palette.Vibrant.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.LightVibrant.hex}`,
                  color: `${palette.LightVibrant.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>LighVibrant</p>
                <p>Hex: {palette.LightVibrant.hex}</p>
                <p>Rgb: {palette.LightVibrant.hex}</p>
                <p>Hsl: {palette.LightVibrant.hex}</p>
                </div>
                
                <div style={{
                  backgroundColor: `${palette.DarkVibrant.hex}`,
                  color: `${palette.DarkVibrant.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>DarkVibrant</p>
                <p>Hex: {palette.DarkVibrant.hex}</p>
                <p>Rgb: {palette.DarkVibrant.hex}</p>
                <p>Hsl: {palette.DarkVibrant.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.Muted.hex}`,
                  color: `${palette.Muted.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>Muted</p>
                <p>Hex: {palette.Muted.hex}</p>
                <p>Rgb: {palette.Muted.hex}</p>
                <p>Hsl: {palette.Muted.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.LightMuted.hex}`,
                  color: `${palette.LightMuted.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>LightMuted</p>
                <p>Hex: {palette.LightMuted.hex}</p>
                <p>Rgb: {palette.LightMuted.hex}</p>
                <p>Hsl: {palette.LightMuted.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.DarkMuted.hex}`,
                  color: `${palette.DarkMuted.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>DarkMuted</p>
                <p>Hex: {palette.DarkMuted.hex}</p>
                <p>Rgb: {palette.DarkMuted.hex}</p>
                <p>Hsl: {palette.DarkMuted.hex}</p>
                </div>
            </div>
            </div>
        : <p>Loading palette...</p>
        }
    </>
    )
} 