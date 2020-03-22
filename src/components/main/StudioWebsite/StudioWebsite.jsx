import React from 'react';
import './StudioWebsite.scss'

export default function StudioWebsite({ hslToRgb, palette, roundHue, roundSl }) {

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
                    <p>{hslToRgb(palette.Vibrant.hsl[0],palette.Vibrant.hsl[1],palette.Vibrant.hsl[2])}</p>
                </header>
                <main className="website__main" style={{
                  backgroundColor: 'hsl('+roundHue(palette.LightVibrant.hsl[0])+','+roundSl(palette.LightVibrant.hsl[1])+','+roundSl(palette.LightVibrant.hsl[2])+')',
                  color: `${palette.LightVibrant.titleTextColor}`,
                }}>
                    {/*<p>I'm baby in messenger bag neutra 3 wolf moon succulents. Banh mi snackwave unicorn, vice gluten-free hot chicken sed commodo keytar woke. Fam drinking vinegar man bun try-hard put a bird on it heirloom etsy celiac vinyl. Consectetur kogi chartreuse, vape quinoa la croix DIY incididunt est semiotics next level ethical austin.</p>*/}
                </main>
                <footer className="website__footer" style={{
                  backgroundColor: 'hsl('+roundHue(palette.DarkVibrant.hsl[0])+','+roundSl(palette.DarkVibrant.hsl[1])+','+roundSl(palette.DarkVibrant.hsl[2])+')',
                  color: `${palette.DarkVibrant.titleTextColor}`,
                }}>
                </footer>
                <header className="website__header" style={{
                  backgroundColor: 'hsl('+roundHue(palette.Muted.hsl[0])+','+roundSl(palette.Muted.hsl[1])+','+roundSl(palette.Muted.hsl[2])+')',
                  color: `${palette.Muted.titleTextColor}`,
                }}>
                </header>
                <main className="website__main" style={{
                  backgroundColor: 'hsl('+roundHue(palette.LightMuted.hsl[0])+','+roundSl(palette.LightMuted.hsl[1])+','+roundSl(palette.LightMuted.hsl[2])+')',
                  color: `${palette.LightMuted.titleTextColor}`,
                }}>
                    {/*<p>Labore fanny pack veniam adipisicing etsy selfies, eu la croix nostrud cornhole. Pickled ut PBR&B 90's single-origin coffee pariatur ut ipsum chicharrones. Umami letterpress hashtag, nostrud readymade consequat forage chia selvage ullamco ex non laboris taiyaki tumeric. Cupidatat mumblecore laborum everyday carry venmo bicycle rights tote bag retro tbh labore minim pickled next level.</p>*/}
                </main>
                <footer className="website__footer" style={{
                  backgroundColor:  'hsl('+roundHue(palette.DarkMuted.hsl[0])+','+roundSl(palette.DarkMuted.hsl[1])+','+roundSl(palette.DarkMuted.hsl[2])+')',
                  color: `${palette.DarkMuted.titleTextColor}`,
                }}>
                </footer>
            </div>
            : null
        }
        </>
    )
} 