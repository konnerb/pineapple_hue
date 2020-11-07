import React, {useState} from 'react'

const importAll = (r:any) => {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));


const loadImages = (paths: any, whenLoaded: any) => {
  const imgs = [];
  const img0: any = [];
  paths.forEach((path:any) => {
    const img = new Image();
    img.onload = () => {
      imgs.push(img);
      img0.push({path, img});
      if (imgs.length === paths.length) whenLoaded(img0)
    };
    img.src = path;
  });
}

export const loadImage = (imagesFolder: any): Boolean => {
  const [image, setImage] = useState(false);
  if(imagesFolder) {
    loadImages(imagesFolder, () => setImage(true)) 
  } 
  return image && image;
}