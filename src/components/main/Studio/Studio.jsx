import React, { Component } from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioWebsite from '../StudioWebsite/StudioWebsite'

export default class Studio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Scrub: [] 
        }
    }
    
    handleChange(value) {
        console.log(value)
        //this.setState({value: event.target.value});
    }
    render() {
    return (
        <div className="studio">
            <StudioPaletteBar palette={this.props.palette} image={this.props.image} handleChange={this.handleChange}  />
            <StudioWebsite palette={this.props.palette} />
        </div>
    )
    }
} 