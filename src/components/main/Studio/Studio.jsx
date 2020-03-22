import React, { Component } from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioWebsite from '../StudioWebsite/StudioWebsite'

export default class Studio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPalette: {},
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

    render() {

        const modifiedPalette = { ...this.state, ...this.props }
        
    return (
        <section className="studio">
            <StudioPaletteBar { ...modifiedPalette } handleChange={this.handleChange} />
            <StudioWebsite { ...modifiedPalette } />
        </section>
    )
    }
} 