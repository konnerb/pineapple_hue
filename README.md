[![Netlify Status](https://api.netlify.com/api/v1/badges/85030c5b-8ee9-466a-97d9-63de54a9329c/deploy-status)](https://app.netlify.com/sites/pineapplehue/deploys)

## Welcome to the repo of pinapplehue!

pinapplehue is a visual colour tool developed in React that utilizes [react-dropzone](https://www.npmjs.com/package/react-dropzone) for handling the image uploads and [vibrant.js](https://www.npmjs.com/package/node-vibrant) to parse the image data into colour palettes. 

Once an image is uploaded, the person can scroll down to discover what their new scheme could look like on a variety of elements. If they don't like a colour, they can adjust it to their liking, but not too much! What's unique is colour can only be adjusted according to the "Lightness" of the HSL value.

If the person is happy with their new colour scheme, they can scroll towards the bottom of the website and click on "What's your pineapplehue". Once clicked, they'll have access to their new palette and Hex, Rgb, or Hsl colour codes.

### What's next? 

In the near future, contrast ratio helpers will be implemented to guide the person in choosing the right colour combinations under the WCAG standards.

Additionally, more elements could be added, such as cards, Loti animations, and even an option to view uploaded images amongst different backgrounds.

## How to run locally

```bash
git clone https://github.com/konnerb/pineapple_hue.git
cd pineapple_hue
npm i && npm start
```


