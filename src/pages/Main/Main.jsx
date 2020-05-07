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
    this.hslToRgb = this.hslToRgb.bind(this);
    this.hslToHex = this.hslToHex.bind(this);
    this.contrast = this.contrast.bind(this);
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

  //Converts HSL values to RGB

  hslToRgb (h, s, l, isComa = true ) {
    s /= 100;
    l /= 100;
  
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;
    
    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }
    r = Math.floor(((r + m) * 256), 255);
    g = Math.floor(((g + m) * 256), 255);
    b = Math.floor(((b + m) * 256), 255);
    //console.log(r,g,b)
    return isComa 
        ? r + "," + g + "," + b 
        : [r, g, b ];
  }

  //Converts HSL values to HEX
  
  hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    
    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;
    
    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;
  
    return "#" + r + g + b;
  }

  //Luminanace is a helper function for breaking down the required values for comparison in the contrast function

  luminanace(r, g, b) {
    let color = [r, g, b].map(value => {
      value /= 255;
      return value <= 0.03928
        ? value / 12.92
        : Math.pow( (value + 0.055) / 1.055, 2.4 );
    });
    return color[0] * 0.2126 + color[1] * 0.7152 + color[2] * 0.0722;
  }

  //Contrast function declares the WCAG contrast ratio between colors
  
  contrast = (hsl1, hsl2) => {
    let lumHsl1 = hsl1 ? this.hslToRgb(hsl1[0], hsl1[1], hsl1[2], false) : [];
    let lumHsl2 = hsl2 ? this.hslToRgb(hsl2[0], hsl2[1], hsl2[2], false) : [];

    let lum1 = lumHsl1 ? this.luminanace(lumHsl1[0], lumHsl1[1], lumHsl1[2]) : [];
    let lum2 = lumHsl2 ? this.luminanace(lumHsl2[0], lumHsl2[1], lumHsl2[2]) : [];

    let brightest = Math.max(lum1, lum2);
    let darkest = Math.min(lum1, lum2);
    return Math.round( (brightest + 0.05) / (darkest + 0.05) * 100 ) / 100;
  }

  //RoundHue converts the a HSL hue value into a whole number

  roundHue = (hue) => { return Math.round( (hue) * 360) }

  //RoundSL converts the a HSL saturation or lumanicty value into a whole number percentage

  roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

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
        contrast={this.contrast}
        contrastHsl={this.contrastHsl}
        palette={this.state.palette} 
        roundHue={this.roundHue}
        roundSl={this.roundSl}
        hslToRgb={this.hslToRgb}
        hslToHex={this.hslToHex}
        colorCode={false}
        codeType='hex'
      />
      <Studio 
        hslToRgb={this.hslToRgb}
        hslToHex={this.hslToHex}
        contrast={this.contrast}
        palette={this.state.palette} 
        handlePaletteUpdate={this.handlePaletteUpdate} 
        image={this.state.img}
        roundHue={this.roundHue}
        roundSl={this.roundSl}
      />
      <StudioComponents 
        hslToRgb={this.hslToRgb}
        palette={this.state.palette} 
        percents={this.state.percents}
        image={this.state.img} 
        handlePercentChange={this.handlePercentChange}
        roundHue={this.roundHue}
        roundSl={this.roundSl}
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
            contrastHsl={this.contrastHsl}
            palette={this.state.palette} 
            togglePalette={this.state.togglePalette}
            roundHue={this.roundHue}
            roundSl={this.roundSl}
            hslToRgb={this.hslToRgb}
            hslToHex={this.hslToHex}
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