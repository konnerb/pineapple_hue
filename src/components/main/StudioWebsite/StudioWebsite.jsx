import React from 'react';
import './StudioWebsite.scss'

export default function StudioWebsite({ palette, roundHue, roundSl }) {
    if(palette.Vibrant) {
        console.log('hsl('+roundHue(palette.Vibrant.hsl[0])+','+roundSl(palette.Vibrant.hsl[1])+','+roundSl(palette.Vibrant.hsl[2])+')')
    //console.log(palette.Vibrant)
    //console.log('hsl('+roundHue(palette.Vibrant.hsl[0])+','+roundSl(palette.Vibrant.hsl[1])+','+(Object.values(newPalette)+ "%")+')')
    }

    //{console.log(palette.Vibrant._hsl[0])}
    //const newColor = palette
    //backgroundColor: 'rgb('+palette.Vibrant.r+','+palette.Vibrant.g+','+Object.values(newPalette)+')'
    return (
        <> 
        {palette.Vibrant ?
            <div className="website">
                <header className="website__header" style={{
                  backgroundColor: 'hsl('+roundHue(palette.Vibrant.hsl[0])+','+roundSl(palette.Vibrant.hsl[1])+','+roundSl(palette.Vibrant.hsl[2])+')',
                  color: `${palette.Vibrant.titleTextColor}`,
                }}>
                    <p>Your Website!</p>
                </header>
                <main className="website__main" style={{
                  backgroundColor: 'hsl('+roundHue(palette.LightVibrant.hsl[0])+','+roundSl(palette.LightVibrant.hsl[1])+','+roundSl(palette.LightVibrant.hsl[2])+')',
                  color: `${palette.LightVibrant.titleTextColor}`,
                }}>
                    <h3>body</h3>
                    <div className="website__buttons-container">
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.Vibrant.hex}`,
                            color: `${palette.Vibrant.titleTextColor}`,
                        }}>Button One
                        </button>
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.DarkVibrant.hex}`,
                            color: `${palette.DarkVibrant.titleTextColor}`,
                        }}>Button Two
                        </button>
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.Muted.hex}`,
                            color: `${palette.Muted.titleTextColor}`,
                        }}>Button Three
                        </button>
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.DarkMuted.hex}`,
                            color: `${palette.DarkMuted.titleTextColor}`,
                        }}>Button Four
                        </button>
                    </div>
                    <div className="website__cards-container">
                        <card className="website__cards"></card>      
                        <card className="website__cards"></card>      
                    </div>
                    <p>I'm baby in messenger bag neutra 3 wolf moon succulents. Banh mi snackwave unicorn, vice gluten-free hot chicken sed commodo keytar woke. Fam drinking vinegar man bun try-hard put a bird on it heirloom etsy celiac vinyl. Consectetur kogi chartreuse, vape quinoa la croix DIY incididunt est semiotics next level ethical austin.</p>
                </main>
                <footer className="website__footer" style={{
                  backgroundColor: 'hsl('+roundHue(palette.DarkVibrant.hsl[0])+','+roundSl(palette.DarkVibrant.hsl[1])+','+roundSl(palette.DarkVibrant.hsl[2])+')',
                  color: `${palette.DarkVibrant.titleTextColor}`,
                }}>
                    <p>Footer</p>
                </footer>
                <header className="website__header" style={{
                  backgroundColor: 'hsl('+roundHue(palette.Muted.hsl[0])+','+roundSl(palette.Muted.hsl[1])+','+roundSl(palette.Muted.hsl[2])+')',
                  color: `${palette.Muted.titleTextColor}`,
                }}>
                    <p>Your Website!</p>
                </header>
                <main className="website__main" style={{
                  backgroundColor: 'hsl('+roundHue(palette.LightMuted.hsl[0])+','+roundSl(palette.LightMuted.hsl[1])+','+roundSl(palette.LightMuted.hsl[2])+')',
                  color: `${palette.LightMuted.titleTextColor}`,
                }}>
                    <h3>body</h3>
                    <div className="website__buttons-container">
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.Vibrant.hex}`,
                            color: `${palette.Vibrant.titleTextColor}`,
                        }}>Button One
                        </button>
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.DarkVibrant.hex}`,
                            color: `${palette.DarkVibrant.titleTextColor}`,
                        }}>Button Two
                        </button>
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.Muted.hex}`,
                            color: `${palette.Muted.titleTextColor}`,
                        }}>Button Three
                        </button>
                        <button className="website__buttons" style={{
                            backgroundColor: `${palette.DarkMuted.hex}`,
                            color: `${palette.DarkMuted.titleTextColor}`,
                        }}>Button Four
                        </button>
                    </div>
                    <div className="website__cards-container">
                        <card className="website__cards"></card>      
                        <card className="website__cards"></card>      
                    </div>
                    <p>Labore fanny pack veniam adipisicing etsy selfies, eu la croix nostrud cornhole. Pickled ut PBR&B 90's single-origin coffee pariatur ut ipsum chicharrones. Umami letterpress hashtag, nostrud readymade consequat forage chia selvage ullamco ex non laboris taiyaki tumeric. Cupidatat mumblecore laborum everyday carry venmo bicycle rights tote bag retro tbh labore minim pickled next level.</p>
                </main>
                <footer className="website__footer" style={{
                  backgroundColor:  'hsl('+roundHue(palette.DarkMuted.hsl[0])+','+roundSl(palette.DarkMuted.hsl[1])+','+roundSl(palette.DarkMuted.hsl[2])+')',
                  color: `${palette.DarkMuted.titleTextColor}`,
                }}>
                    <p>Footer</p>
                </footer>
            </div>
            : null
        }
        </>
    )
} 