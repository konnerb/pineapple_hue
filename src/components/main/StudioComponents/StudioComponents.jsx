import React, { Component } from 'react';
import './StudioComponents.scss'
import StudioPaletteBar from '../StudioPaletteBar/StudioPaletteBar'
import Button from '../../Button/Button'
import StyleBar from '../../StyleBar/StyleBar'
import Icons from '../../Icons/Icons'

export default class StudioComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        //this.handleChange = this.handleChange.bind(this);
    }

    //handleChange(event, paletteType) {
    //    const { target: { name, value} } = event;
    //    let newPalette = {};
    //    newPalette[paletteType] = value;
    //    this.setState({
    //         newPalette
    //    }, () => this.props.handlePaletteUpdate(this.state.newPalette) );
    //    
    //}

    //roundHue = (hue) => { return Math.round( (hue) * 360) }

    //roundSl = (sl) => { return Math.round( (sl) * 100) + "%" }

    render() {

        
    return (
        <section className="studio-components">
            <article className="studio-components__buttons-section">
                <div className="studio-components__button-preview">
                    <h3>here</h3>
                    <StyleBar 
                    palette={this.props.palette.Vibrant}
                    roundHue={this.props.roundHue}
                    roundSl={this.props.roundSl} 
                    />
                    <div>
                        <Button 
                        palette={this.props.palette.Vibrant} 
                        buttonText="Click Me" 
                        roundHue={this.props.roundHue}
                        roundSl={this.props.roundSl}
                        />
                    </div>
                </div>
            </article>
        </section>
    )
    }
} 