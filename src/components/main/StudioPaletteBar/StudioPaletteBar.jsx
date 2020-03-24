import React from 'react';
import './StudioPaletteBar.scss'
import Palette from '../../Palette/Palette'
import InputScrub from '../../InputScrub/InputScrub'

export default function StudioPaletteBar({ palette, image, roundHue }) {
    return (
    <>
        { palette.Vibrant ?  
            <div className="bar">
                {/*<img src={image} className="bar__uploadImg"></img>*/}
                <div className="bar__container">
                    <div className="bar__palette-container">
                        <Palette 
                        palette={palette.Vibrant} 
                        borderRadiusType='topLeft'
                        />
                    </div>

                    <div className="bar__palette-container">
                        <Palette palette={palette.LightVibrant} />
                    </div>

                    <div className="bar__palette-container">
                        <Palette palette={palette.DarkVibrant} />
                    </div>

                    <div className="bar__palette-container">
                        <Palette palette={palette.Muted} />
                    </div>

                    <div className="bar__palette-container">
                        <Palette palette={palette.LightMuted} />
                    </div>

                    <div className="bar__palette-container">    
                        <Palette 
                        palette={palette.DarkMuted} 
                        borderRadiusType='bottomLeft'
                        />
                    </div>
                </div>
                </div>
            : null 
            }
    </>
    )
} 