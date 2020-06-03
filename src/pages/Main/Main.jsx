import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero';
import PaletteView from '../../components/PaletteView/PaletteView';
import Studio from '../../components/main/Studio/Studio';
import StudioComponents from '../../components/main/StudioComponents/StudioComponents';
import Footer from '../../components/Footer/Footer';
import { roundHue, roundSl } from '../../utlis';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palette: [], 
      percents: {},
      togglePalette: false
    }
    this.handlePercentChange = this.handlePercentChange.bind(this);
  }

  //Fetches Image Data from React-DropZone UploadPage Component and sets state

  fetchImgData = (img) => {
    if (!img) return;
    Vibrant.from(img)
    .getPalette((err, palette) => {
      if(err) {
      console.log(err);
      } else {
        this.setState({ 
          palette 
        }, () => this.modifyPalette() )
      }
    })
  }

  //Safely updates original Vibrant.js HSL values to whole numbers

  modifyPalette = () => {

    const clonePalette = this.state.palette
    let newPalette = {}

      newPalette = {
        ...clonePalette,
        Vibrant: {
          ...clonePalette.Vibrant,
          hsl: 
            [roundHue(clonePalette.Vibrant.hsl[0]), 
            roundSl(clonePalette.Vibrant.hsl[1]), 
            roundSl(clonePalette.Vibrant.hsl[2])]
        },
        LightVibrant: {
          ...clonePalette.LightVibrant,
          hsl: 
            [roundHue(clonePalette.LightVibrant.hsl[0]), 
            roundSl(clonePalette.LightVibrant.hsl[1]), 
            roundSl(clonePalette.LightVibrant.hsl[2])]
        },
        DarkVibrant: {
          ...clonePalette.DarkVibrant,
          hsl: 
            [roundHue(clonePalette.DarkVibrant.hsl[0]), 
            roundSl(clonePalette.DarkVibrant.hsl[1]), 
            roundSl(clonePalette.DarkVibrant.hsl[2])]
        },
        Muted: {
          ...clonePalette.Muted,
          hsl: 
            [roundHue(clonePalette.Muted.hsl[0]), 
            roundSl(clonePalette.Muted.hsl[1]), 
            roundSl(clonePalette.Muted.hsl[2])]
        },
        LightMuted: {
          ...clonePalette.LightMuted,
          hsl: 
            [roundHue(clonePalette.LightMuted.hsl[0]), 
            roundSl(clonePalette.LightMuted.hsl[1]), 
            roundSl(clonePalette.LightMuted.hsl[2])]
        },
        DarkMuted: {
          ...clonePalette.DarkMuted,
          hsl: 
            [roundHue(clonePalette.DarkMuted.hsl[0]), 
            roundSl(clonePalette.DarkMuted.hsl[1]), 
            roundSl(clonePalette.DarkMuted.hsl[2])]
        }
      }

    this.setState({
      palette: newPalette
    })
  }

  //Safely updates Palette HSL colors from InputScrub Component and updates state

  handlePaletteUpdate = (paletteName) => {
  const clonePalette = this.state.palette
  const key = Object.keys(paletteName)[0]; 
  this.setState({
    palette: {
      ...clonePalette,
      [key]: {
        ...clonePalette[key],
        hsl: 
          [clonePalette[key].hsl[0], 
          clonePalette[key].hsl[1], 
          paletteName[key]]
      }
    }
  })
  }

  //Handles opacity percent change on Icon, Button, and Image Components

  handlePercentChange(event, nameInput) {
    const { target: { value} } = event;
    let percents = {};
    percents[nameInput] = Math.round(value * 100) / 100;
    this.setState({
      percents
    });
  }

  //Toggles PaletteView Component on or off
  
  handleTogglePalette() {
    let toggleStatus = this.state.togglePalette
    this.setState({
      togglePalette: !toggleStatus
    });     
  }

  render() {
  return (
  <> 
    <section className="hero-component"> 
      <Hero 
      fetchImgData={this.fetchImgData} 
      palette={this.state.palette} 
      />
    </section>

    <main className="main">
      <PaletteView 
        palette={this.state.palette} 
        colorCode={false}
        codeType='hex'
      />
      <Studio 
        palette={this.state.palette} 
        handlePaletteUpdate={this.handlePaletteUpdate} 
        image={this.state.img}
      />
      <StudioComponents 
        palette={this.state.palette} 
        percents={this.state.percents}
        image={this.state.img} 
        handlePercentChange={this.handlePercentChange}
      />  
      { this.state.palette.Vibrant &&
        <div className="new-palette__container">
          <button 
            className="new-palette__button"
            onClick={() => this.handleTogglePalette()}
          > {this.state.togglePalette ? `Whoa!` : `What's your pineapplehue!?`}
          </button>

          { this.state.togglePalette &&
            <PaletteView 
              contrast={this.contrast}
              palette={this.state.palette} 
              togglePalette={this.state.togglePalette}
              colorCode={true}
              codeType=''
            />
          }
        </div>
      }
    </main>

    <footer className="hero">
      <Footer />
    </footer>
    
  </>
  )}
}; 