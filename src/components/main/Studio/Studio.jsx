import React, { Component } from 'react';
import './Studio.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import StudioColours from '../StudioColours/StudioColours'

export default class Studio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPalette: {},

      toggle: {
        Virbant: false,
        LightVibrant: false,
        DarkVibrant: false,
        Muted: false,
        LightMuted: false,
        DarkMuted: false
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.toggleStudioPalette = this.toggleStudioPalette.bind(this);
  }

  /*Handles Palette Change From InputScrub, updates Studio State, then handlePaletteUpdate fetches the newPalette Data and
  updates the Main Component palette state
  */

  handleChange(event, paletteType) {
    const { target: { value} } = event;
    let newPalette = {};
    newPalette[paletteType] = value;
    this.setState({
      newPalette
    }, () => this.props.handlePaletteUpdate(this.state.newPalette) );
  }

  //Toggles StudioWebsite Componets color palette to adjust InputScrub Component
  
  toggleStudioPalette(toggleType) {
    let toggleStatus = this.state.toggle[toggleType]
    this.setState({
      toggle: {
        [toggleType] : !toggleStatus
      }
    }); 
  }

  render() {
    const modifiedPalette = { ...this.state, ...this.props }
  return (
    <>
    { this.props.palette.Vibrant && 
      <section className="studio">
        <StudioPaletteBar 
          { ...modifiedPalette } 
        />

        <StudioColours 
          { ...modifiedPalette }  
          handleChange={this.handleChange} 
          toggleStudioPalette={this.toggleStudioPalette}
        />
      </section>
    }
  </>
  )
  }
} 