import React from 'react';
import './Palette.scss'

export default function Palette({ palette }) {
    return (
        <>
        {palette.Vibrant ?
            <div>
              <div className="palette">
                <div className="palette__color" style={{
                  backgroundColor: `${palette.Vibrant.hex}`,
                  color: `${palette.Vibrant.titleTextColor}`,
                }}>
                <p>Vibrant</p>
                <p>Hex:{palette.Vibrant.hex}</p>
                <p>Rgb:{palette.Vibrant.hex}</p>
                <p>Hsl:{palette.Vibrant.hex}</p>
                </div>

                <div className="palette__color" style={{
                  backgroundColor: `${palette.LightVibrant.hex}`,
                  color: `${palette.LightVibrant.titleTextColor}`,
                }}>
                <p>LighVibrant</p>
                <p>Hex: {palette.LightVibrant.hex}</p>
                <p>Rgb: {palette.LightVibrant.hex}</p>
                <p>Hsl: {palette.LightVibrant.hex}</p>
                </div>
                
                <div className="palette__color" style={{
                  backgroundColor: `${palette.DarkVibrant.hex}`,
                  color: `${palette.DarkVibrant.titleTextColor}`,
                }}>
                <p>DarkVibrant</p>
                <p>Hex: {palette.DarkVibrant.hex}</p>
                <p>Rgb: {palette.DarkVibrant.hex}</p>
                <p>Hsl: {palette.DarkVibrant.hex}</p>
                </div>

                <div className="palette__color" style={{
                  backgroundColor: `${palette.Muted.hex}`,
                  color: `${palette.Muted.titleTextColor}`,
                }}>
                <p>Muted</p>
                <p>Hex: {palette.Muted.hex}</p>
                <p>Rgb: {palette.Muted.hex}</p>
                <p>Hsl: {palette.Muted.hex}</p>
                </div>

                <div className="palette__color" style={{
                  backgroundColor: `${palette.LightMuted.hex}`,
                  color: `${palette.LightMuted.titleTextColor}`,
                }}>
                <p>LightMuted</p>
                <p>Hex: {palette.LightMuted.hex}</p>
                <p>Rgb: {palette.LightMuted.hex}</p>
                <p>Hsl: {palette.LightMuted.hex}</p>
                </div>

                <div className="palette__color" style={{
                  backgroundColor: `${palette.DarkMuted.hex}`,
                  color: `${palette.DarkMuted.titleTextColor}`,
                }}>
                <p>DarkMuted</p>
                <p>Hex: {palette.DarkMuted.hex}</p>
                <p>Rgb: {palette.DarkMuted.hex}</p>
                <p>Hsl: {palette.DarkMuted.hex}</p>
                </div>
            </div>
            </div>
        : <p>Loading your palette...</p>
        }
    </>
    )
} 