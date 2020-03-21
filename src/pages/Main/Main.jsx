import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero';
import PaletteView from '../../components/PaletteView/PaletteView';
import Studio from '../../components/main/Studio/Studio';
import StudioComponents from '../../components/main/StudioComponents/StudioComponents';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: {},
            palette: [] 
        }
        //this.renderColor = this.renderColor.bind(this);
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
   roundHue = (hue) => { return Math.round( (hue) * 360) }
   roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

    render() {
    return (
    <> 
        <section> 
            <Hero fetchImgData={this.fetchImgData} />
        </section>

        <main className="main">
            <PaletteView 
                palette={this.state.palette} 
                roundHue={this.roundHue}
            />
            <Studio 
                palette={this.state.palette} 
                handlePaletteUpdate={this.handlePaletteUpdate} 
                image={this.state.img}
                roundHue={this.roundHue}
                roundSl={this.roundSl}
            />
            <StudioComponents 
                palette={this.state.palette} 
                image={this.state.img} 
                roundHue={this.roundHue}
                roundSl={this.roundSl}
            />
        </main>
    </>
    )
    }
} 