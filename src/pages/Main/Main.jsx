import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero';
import PaletteView from '../../components/PaletteView/PaletteView';
import Studio from '../../components/main/Studio/Studio';
import StudioComponents from '../../components/main/StudioComponents/StudioComponents';
import Footer from '../../components/Footer/Footer';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: {},
      palette: [], 
      percents: {},
      newRgb: [],
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
          img, 
          palette 
      })
      }
    })
  }

  //Updates Palette HSL colors from InputScrub Component and updates state

  handlePaletteUpdate = (newPalette) => {
  const newPaletteKey = Object.keys(newPalette)[0]; //Vibrant
  this.setState({
    palette: {
      ...this.state.palette,
      [newPaletteKey]: {
        ...this.state.palette[newPaletteKey],
        hsl: [this.state.palette[newPaletteKey].hsl[0], 
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
  )
  }
} 