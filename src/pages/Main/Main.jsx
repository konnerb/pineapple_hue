import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero';
import PaletteView from '../../components/PaletteView/PaletteView';
import Studio from '../../components/main/Studio/Studio';
import StudioComponents from '../../components/main/StudioComponents/StudioComponents';
import Footer from '../../components/Footer/Footer';
import { roundHue, roundSl } from '../../utlis'

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
        }, () => this.modifyState() )
      }
    })
  }

  modifyState = () => {
    
    let newState = {}
    const cloneState = this.state.palette

      newState = {
        ...cloneState,
        Vibrant: {
          ...cloneState.Vibrant,
          hsl: 
            [roundHue(cloneState.Vibrant.hsl[0]), 
            roundSl(cloneState.Vibrant.hsl[1]), 
            roundSl(cloneState.Vibrant.hsl[2])]
        },
        LightVibrant: {
          ...cloneState.LightVibrant,
          hsl: 
            [roundHue(cloneState.LightVibrant.hsl[0]), 
            roundSl(cloneState.LightVibrant.hsl[1]), 
            roundSl(cloneState.LightVibrant.hsl[2])]
        },
        DarkVibrant: {
          ...cloneState.DarkVibrant,
          hsl: 
            [roundHue(cloneState.DarkVibrant.hsl[0]), 
            roundSl(cloneState.DarkVibrant.hsl[1]), 
            roundSl(cloneState.DarkVibrant.hsl[2])]
        },
        Muted: {
          ...cloneState.Muted,
          hsl: 
            [roundHue(cloneState.Muted.hsl[0]), 
            roundSl(cloneState.Muted.hsl[1]), 
            roundSl(cloneState.Muted.hsl[2])]
        },
        LightMuted: {
          ...cloneState.LightMuted,
          hsl: 
            [roundHue(cloneState.LightMuted.hsl[0]), 
            roundSl(cloneState.LightMuted.hsl[1]), 
            roundSl(cloneState.LightMuted.hsl[2])]
        },
        DarkMuted: {
          ...cloneState.DarkMuted,
          hsl: 
            [roundHue(cloneState.DarkMuted.hsl[0]), 
            roundSl(cloneState.DarkMuted.hsl[1]), 
            roundSl(cloneState.DarkMuted.hsl[2])]
        }
      }

    this.setState({
      palette: newState
    })
  }

  //Updates Palette HSL colors from InputScrub Component and updates state

  handlePaletteUpdate = (newPalette) => {
  const newPaletteKey = Object.keys(newPalette)[0]; 
  this.setState({
    palette: {
      ...this.state.palette,
      [newPaletteKey]: {
        ...this.state.palette[newPaletteKey],
        hsl: 
          [this.state.palette[newPaletteKey].hsl[0], 
          this.state.palette[newPaletteKey].hsl[1], 
          newPalette[newPaletteKey]]
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
} 