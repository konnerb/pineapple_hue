
//Luminanace is a helper function for breaking down the required values for comparison in the contrast function

const luminanace = (r: number | string, g: number | string, b: number | string): number => {
  let color = [r, g, b].map((value: any) => {
    value /= 255;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow( (value + 0.055) / 1.055, 2.4 );
  });
  return color[0] * 0.2126 + color[1] * 0.7152 + color[2] * 0.0722;
}

//findRating is a helpter function that returns a string value of AAA, AA, or fail when contrast rating is enabled.

const findRating = ((ratio: number) => ratio >= 7.00 ? 'AAA' : ratio >= 5.00 && ratio <= 7.00 ? 'AA' : 'fail')

//Converts HSL values to RGB

  export const hslToRgb = (h: number, s: number, l: number, isComa: boolean = true ): string | number[] => {
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
    r = Math.floor((r + m) * 256); //, 255)
    g = Math.floor((g + m) * 256); //, 255)
    b = Math.floor((b + m) * 256); //, 255)
    
    return isComa 
        ? r + ", " + g + ", " + b 
        : [r, g, b ];
  }

//Converts HSL values to HEX
  
  export const hslToHex = (h: number, s: number, l: number): string => {

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
    let stringR = Math.round((r + m) * 255).toString(16);
    let stringG = Math.round((g + m) * 255).toString(16);
    let stringB = Math.round((b + m) * 255).toString(16);
  
    // Prepend 0s, if necessary
    if (stringR.length === 1)
      stringR = "0" + stringR;
    if (stringG.length === 1)
      stringG = "0" + stringG;
    if (stringB.length === 1)
      stringB = "0" + stringB;
  
    return "#" + stringR + stringG + stringB;
  }

//Contrast function returns the WCAG contrast ratio between colors
  
  export const contrast = (hsl1: any, hsl2: any, rating: boolean = false) => {
    let lumHsl1 = hsl1 ? hslToRgb(hsl1[0], ( (parseFloat(hsl1[1]) * 1000) / 1000), ( (parseFloat(hsl1[2]) * 1000) / 1000), false) : [];
    let lumHsl2 = hsl2 ? hslToRgb(hsl2[0], ( (parseFloat(hsl2[1]) * 1000) / 1000), ( (parseFloat(hsl2[2]) * 1000) / 1000), false) : [];

    let lum1: any = lumHsl1 ? luminanace(lumHsl1[0], lumHsl1[1], lumHsl1[2]) : [];
    let lum2: any = lumHsl2 ? luminanace(lumHsl2[0], lumHsl2[1], lumHsl2[2]) : [];

    let brightest = Math.max(lum1, lum2);
    let darkest = Math.min(lum1, lum2);

    let ratio = Math.round( (brightest + 0.05) / (darkest + 0.05) * 100 ) / 100;

    return rating ? findRating(ratio) : ratio;
  }

//RoundHue converts the a HSL hue value into a whole number

  export const roundHue = (hue: number): number => { return Math.round( (hue) * 360) }

//RoundSL converts the a HSL saturation or lumanicty value into a whole number percentage

  export const roundSl = (sl: number): string => { return Math.round( (sl) * 100) + "%" }