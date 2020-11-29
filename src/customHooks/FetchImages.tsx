import React from 'react'

const importAll = (r:any) => {
  return r.keys().map(r);
}

//Imports required images from assets from folder
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

//Loads all images and when finihsed new images array
const loadImages = (whenLoaded: any) => {
  const imgs = [];
  const img0: any = [];
  images.forEach((path:any) => {
    const img = new Image();
    img.onload = () => {
      imgs.push(img);
      img0.push({path, img});
      if (imgs.length === images.length) whenLoaded(img0)
    };
    img.src = path;
  });
}

const FetchImages = (): Boolean => {
  const [image, setImage] = React.useState(false);
  loadImages(() => setImage(true)) 
  return image && image;
}

export default FetchImages;