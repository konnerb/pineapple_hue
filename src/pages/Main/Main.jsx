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

   handlePercentChange(event, nameInput) {
        const { target: { name, value} } = event;
        let percents = {};
        percents[nameInput] = value;
        this.setState({
            percents
        });
    }
    
    handleTogglePalette() {
    let toggleStatus = this.state.togglePalette
    this.setState({
                togglePalette: !toggleStatus
    });
        
    }
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

   roundHue = (hue) => { return Math.round( (hue) * 360) }
   roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

    render() {
    return (
    <> 
        <section className="hero"> 
            <Hero fetchImgData={this.fetchImgData} />
        </section>

        <main className="main">
            <PaletteView 
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
                    palette={this.state.palette} 
                    roundHue={this.roundHue}
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