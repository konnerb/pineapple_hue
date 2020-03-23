import React, { Component } from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioWebsite from '../StudioWebsite/StudioWebsite'

export default class Studio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPalette: {},

            toggleVirbant: false,
            toggleLightVibrant: false,
            toggleDarkVibrant: false,
            toggleMuted: false,
            toggleLightMuted: false,
            toggleDarkMuted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.toggleStudioPalette = this.toggleStudioPalette.bind(this);
    }

    handleChange(event, paletteType) {
        const { target: { name, value} } = event;
        let newPalette = {};
        newPalette[paletteType] = value;
        this.setState({
             newPalette
        }, () => this.props.handlePaletteUpdate(this.state.newPalette) );
        
    }

    toggleStudioPalette(toggleType) {
        console.log(toggleType)
        let toggleStatus = this.state[toggleType]
        this.setState({
                 [toggleType]: !toggleStatus
        });
        
    }

    render() {

        const modifiedPalette = { ...this.state, ...this.props }
        
    return (
        <>
            { this.props.palette.Vibrant ?  
            <section className="studio">
                <StudioPaletteBar 
                { ...modifiedPalette } 
                />

                <StudioWebsite 
                { ...modifiedPalette }  
                handleChange={this.handleChange} 
                toggleStudioPalette={this.toggleStudioPalette}
                />
            </section>
            : null 
            }
        </>
    )
    }
} 