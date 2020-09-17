
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
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hslVibrantBackground: string[];
    hsl: string[];
  },
  LightVibrant: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  DarkVibrant: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  Muted: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  LightMuted: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  },
  DarkMuted: {
    _titleTextColor: string;
    hex: string;
    _hex: string;
    _hsl: number[];
    hsl: string[];
  } 
};

export type isAAAType = "AAA" | "AA" | "fail";
export type codeTyped = "hex" | "rgb" | "hsl" | "contrast" | " ";
export type paletteNameType = "Vibrant" | "LightVibrant" | "DarkVibrant" | "Muted" | "LightMuted" | "DarkMuted";