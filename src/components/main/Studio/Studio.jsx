import React, { Component } from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioWebsite from '../StudioWebsite/StudioWebsite'

export default class Studio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPalette: {},
            //oldPalette: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, paletteType) {
        const { target: { name, value} } = event;
        let newPalette = {};
        newPalette[paletteType] = value;
        this.setState({
             newPalette
        }, () => this.props.handlePaletteUpdate(this.state.newPalette) );
        
    }

    roundHue = (hue) => { return Math.round( (hue) * 360) }

    roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

    render() {

        const modifiedPalette = { ...this.state, ...this.props }
        
    return (
        <div className="studio">
            <StudioPaletteBar { ...modifiedPalette } handleChange={this.handleChange} roundHue={this.roundHue} />
            <StudioWebsite { ...modifiedPalette } roundHue={this.roundHue} roundSl={this.roundSl} />
        </div>
    )
    }
} 