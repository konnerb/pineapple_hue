
export interface paletteTypeInt  {
  Vibrant?: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hslVibrantBackground: string[];
    hsl: string[];
  },
  LightVibrant?: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  DarkVibrant?: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  Muted?: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  LightMuted?: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  DarkMuted?: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  }
};


export type paletteType = {
  Vibrant: {
    titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hslVibrantBackground: string[];
    hsl: any[];
  },
  LightVibrant: {
    titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: any[];
  },
  DarkVibrant: {
    titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: any[];
  },
  Muted: {
    titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: any[];
  },
  LightMuted: {
    titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: any[];
  },
  DarkMuted: {
    titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: any[];
  } 
};

export type opacityType = {
  opacityButton?: number | undefined;
  iconOpacity?: number | undefined;
  imageOpacity?: number | undefined;
  }

export type isAAAType = "AAA" | "AA" | "fail";
export type codeTyped = "hex" | "rgb" | "hsl" | "contrast" | undefined;
export type paletteNameType = "Vibrant" | "LightVibrant" | "DarkVibrant" | "Muted" | "LightMuted" | "DarkMuted";