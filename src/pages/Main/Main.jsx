import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';
import './Main.scss';
import Hero from '../../components/Hero/Hero'
import PaletteView from '../../components/PaletteView/PaletteView'
import Studio from '../../components/main/Studio/Studio'

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: {},
            palette: [] 
        }
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

    render() {

    return (
    <> 
        <section> 
            <Hero fetchImgData={this.fetchImgData} />
        </section>
        <main className="main">
            <PaletteView palette={this.state.palette} />
            <Studio palette={this.state.palette} handlePaletteUpdate={this.handlePaletteUpdate} image={this.state.img} />
        </main>
    </>
    )
    }
} 