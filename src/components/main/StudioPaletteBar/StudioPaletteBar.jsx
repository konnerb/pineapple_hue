import React from 'react';
import './StudioPaletteBar.scss'
import Palette from '../../Palette/Palette'
import InputScrub from '../../InputScrub/InputScrub'

export default function StudioPaletteBar({ palette, image, handleChange, handleValue }) {
    return (
        <div className="bar">
            <p>Studio Bar</p>
            {<img src={image} className="bar__uploadImg"></img>}
            <div>
                <div className="bar__palette-container">
                    <Palette palette={palette.Vibrant} />
                    <InputScrub handleChange={handleChange} handleValue={handleValue} palette={palette.Vibrant} />
                </div>

                <div className="bar__palette-container">
                    <Palette palette={palette.LightVibrant} />
                    <InputScrub handleChange={handleChange} handleValue={handleValue} palette={palette.LightVibrant} />
                </div>

                <div className="bar__palette-container">
                    <Palette palette={palette.DarkVibrant} />
                    <InputScrub handleChange={handleChange} handleValue={handleValue} palette={palette.DarkVibrant} />
                </div>

                <div className="bar__palette-container">
                    <Palette palette={palette.Muted} />
                    <InputScrub handleChange={handleChange} handleValue={handleValue} palette={palette.Muted} />
                </div>

                <div className="bar__palette-container">
                    <Palette palette={palette.LightMuted} />
                    <InputScrub handleChange={handleChange} handleValue={handleValue} palette={palette.LightMuted} />
                </div>

                <div className="bar__palette-container">    
                    <Palette palette={palette.DarkMuted} />
                    <InputScrub handleChange={handleChange} handleValue={handleValue} palette={palette.DarkMuted} />
                </div>
            </div>
        </div>
    )
} 