import React, { Component } from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioWebsite from '../StudioWebsite/StudioWebsite'

export default class Studio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newPalette: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { target: { name, value} } = event;
        let newPalette = { ...this.state.newPalette };
        newPalette[name] = value;
        this.setState({
             newPalette
        });
    }

    render() {
        const modifiedPalette = { ...this.state, ...this.props }
    return (
        <div className="studio">
            <StudioPaletteBar { ...modifiedPalette }  handleChange={this.handleChange} />
            <StudioWebsite { ...modifiedPalette } />
        </div>
    )
    }
} 