//import React from 'react'
//import {useDropzone} from 'react-dropzone'
//
//function UploadImage(props) {
//    const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
//      accept: 'image/jpeg, image/png'
//    });
//    
//    const acceptedFilesItems = acceptedFiles.map(file => (
//      <li key={file.path}>
//        {file.path} - {file.size} bytes
//      </li>
//    ));
//  
//    const rejectedFilesItems = rejectedFiles.map(file => (
//      <li key={file.path}>
//        {file.path} - {file.size} bytes
//      </li>
//    ));
//  
//    return (
//      <section className="container">
//        <div {...getRootProps({className: 'dropzone'})}>
//          <input {...getInputProps()} />
//          <p>Drag 'n' drop some files here, or click to select files</p>
//          <em>(Only *.jpeg and *.png images will be accepted)</em>
//        </div>
//        <aside>
//          <h4>Accepted files</h4>
//          <ul>
//            {acceptedFilesItems}
//          </ul>
//          <h4>Rejected files</h4>
//          <ul>
//            {rejectedFilesItems}
//          </ul>
//        </aside>
//      </section>
//    );
//  }
//
//export default UploadImage;

import React, { useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import * as Vibrant from 'node-vibrant';
import pineapple from '../../assets/images/pineapple.jpg';
console.log(pineapple)

function UploadImage() {

const [img, setImg] = useState([null])
const [palette, setPalette] = useState([null])

    const onDrop = useCallback(acceptedFiles => {
      acceptedFiles.forEach((blob) => {
        const reader = new FileReader()
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            const binaryStr = reader
            console.log(binaryStr)
            setImg(reader.result)
          }
          reader.readAsDataURL(blob)
        })
    }, [])

    if (img === null || img === 0) { console.log('sorry')
    } else {
      Vibrant.from(img)
      .getPalette((err, palette) => {
        if(err) {
        console.log(err)
        } else {
        setPalette(palette)}
      })
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    console.log(img)
    console.log(palette)
//const vibrantRgb = palette.Vibrant._rgb
//const vibrantHsl = palette.Vibrant._hsl
//const lightVibrantRgb = palette.LightVibrant._rgb
//const lightVibrantHsl = palette.LightVibrant._hsl
//const darkVibrantHsl = palette.DarkVibrant._hsl
//const darkVibrantRgb = palette.DarkVibrant._rgb
//const mutedRgb = palette.Muted._rgb
//const mutedHsl = palette.Muted._hsl
//const lightMutedRgb = palette.LightMuted._rgb
//const lightMutedHsl = palette.LightMuted._hsl
//const darkMutedRgb = palette.DarkMuted._rgb
//const darkMutedHsl = palette.DarkMuted._hsl
//console.log(vibrantRgb)
//console.log(vibrantHsl)
    
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
        <img src={img}></img>
      </div>
    )
  }
  export default UploadImage;