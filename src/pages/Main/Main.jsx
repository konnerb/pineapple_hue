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
    console.log(newPaletteKey)
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
        const { target: { name, value} } = event;
        let percents = {};
        percents[nameInput] = value;
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

    hslToRgb(h, s, l) {
        
        let r = null;
        let g = null;
        let b = null;

        if(s == 0){
            r = g = b = l; // achromatic
        }else{
            let hue2rgb = function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
            
        return console.log([Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]);
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
    
    contrast = (rgb1, rgb2) => {
        let lum1 = rgb1 ? this.luminanace(rgb1[0], rgb1[1], rgb1[2]) : [];
        let lum2 = rgb2 ? this.luminanace(rgb2[0], rgb2[1], rgb2[2]) : [];
        let brightest = Math.max(lum1, lum2);
        let darkest = Math.min(lum1, lum2);
        return console.log((brightest + 0.05) / (darkest + 0.05));
    }

    //hslLuminance(hsl) {
    //    let color = [hsl].map(value => {
    //        value /= 255;
    //        return value <= 0.03928
    //            ? value / 12.92
    //            : Math.pow( (value + 0.055) / 1.055, 2.4 );
    //    });
    //    return color    
    //}
    
    
    contrastHsl = (hsl1, hsl2) => {
        let lum1 = (((hsl1[0] * 360) * hsl1[1]) * hsl1[2] );
        let lum2 = (((hsl2[0] * 360) * hsl2[1]) * hsl2[2] );

        
        console.log(lum1, lum2)
        let brightest = Math.max(lum1, lum2)
        let darkest = Math.min(lum1, lum2)
        return Math.round( (brightest / darkest) * 100 ) / 100;
    }

//hslToRgb(h, s, l) {
//    h /= 360;
//    s /= 100;
//    l /= 100;
//    let r;
//    let g;
//    let b;
//    if (s === 0) {
//    r = g = b = l; // achromatic
//    } else {
//    const hue2rgb = (p, q, t) => {
//        if (t < 0) t += 1;
//        if (t > 1) t -= 1;
//        if (t < 1 / 6) return p + (q - p) * 6 * t;
//        if (t < 1 / 2) return q;
//        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
//        return p;
//    };
//    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//    const p = 2 * l - q;
//    r = hue2rgb(p, q, h + 1 / 3);
//    g = hue2rgb(p, q, h);
//    b = hue2rgb(p, q, h - 1 / 3);
//    }
//    const toHex = x => {
//    const hex = Math.round(x * 255).toString(16);
//    return hex.length === 1 ? '0' + hex : hex;
//    };
//    return console.log(`#${toHex(r)}${toHex(g)}${toHex(b)}`);
//
    //RoundHue converts the a HSL hue value into a whole number

    roundHue = (hue) => { return Math.round( (hue) * 360) }

    //RoundSL converts the a HSL saturation or lumanicty value into a whole number percentage

    roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

    render() {
    //this.palette.Vibrant && {
    //colorAdjust = {
    //    colorVibrant: 
    //        'hsl('
    //            +this.roundHue(this.palette.Vibrant.hsl[0])+','
    //            +this.roundSl(this.palette.Vibrant.hsl[1])+','
    //            +this.roundSl(this.palette.Vibrant.hsl[2])+')',
    //
    //    colorLightVibrant: 
    //        'hsl('
    //            +this.roundHue(this.palette.LightVibrant.hsl[0])+','
    //            +this.roundSl(this.palette.LightVibrant.hsl[1])+','
    //            +this.roundSl(this.palette.LightVibrant.hsl[2])+')',
    //
    //    colorDarkVibrant: 
    //        'hsl('
    //            +this.roundHue(this.palette.DarkVibrant.hsl[0])+','
    //            +this.roundSl(this.palette.DarkVibrant.hsl[1])+','
    //            +this.roundSl(this.palette.DarkVibrant.hsl[2])+')',
    //
    //    colorMuted: 
    //        'hsl('
    //            +this.roundHue(this.palette.Muted.hsl[0])+','
    //            +this.roundSl(this.palette.Muted.hsl[1])+','
    //            +this.roundSl(this.palette.Muted.hsl[2])+')',
    //
    //    colorLightMuted: 
    //        'hsl('
    //            +this.roundHue(this.palette.LightMuted.hsl[0])+','
    //            +this.roundSl(this.palette.LightMuted.hsl[1])+','
    //            +this.roundSl(this.palette.LightMuted.hsl[2])+')',
    //
    //    colorDarkMuted:
    //        'hsl('
    //            +this.roundHue(this.palette.DarkMuted.hsl[0])+','
    //            +this.roundSl(this.palette.DarkMuted.hsl[1])+','
    //            +this.roundSl(this.palette.DarkMuted.hsl[2])+')'
    //}
    //}
    //console.log(colorAdjust)
    return (
    <> 
        <section className="hero-component"> 
            <Hero fetchImgData={this.fetchImgData} />
        </section>

        <main className="main">
            <PaletteView 
                contrast={this.contrast}
                contrastHsl={this.contrastHsl}
                palette={this.state.palette} 
                roundHue={this.roundHue}
            />
            <Studio 
                hslToRgb={this.hslToRgb}
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
            >{this.state.togglePalette ? `Whoa!` : `What's your pineapplehue!?`}</button>
            { this.state.togglePalette &&
                < PaletteView 
                    contrast={this.contrast}
                    contrastHsl={this.contrastHsl}
                    palette={this.state.palette} 
                    togglePalette={this.state.togglePalette}
                    roundHue={this.roundHue}
                    roundSl={this.roundSl}
                />
            }
        </div>
        }
        </main>
        <footer className="hero">
            <Footer  />
        </footer>
    </>
    )
    }
} 