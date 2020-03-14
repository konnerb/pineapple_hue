import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import * as Vibrant from 'node-vibrant';

function UploadImage() {
const [img, setImg] = useState([])
const [palette, setPalette] = useState({})

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

    const {
      getRootProps, 
      getInputProps,
      acceptedFiles, 
      rejectedFiles, 
      isDragActive, 
      isDragAccept, 
      isDragReject
      } = useDropzone({
      onDrop,
      accept: 'image/jpeg, image/png',
      //multiple: 'true',
      maxSize: '2000000'
    })

    const acceptedFilesItems = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    const rejectedFilesItems = rejectedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

  useEffect(() => {
    if (img === null || img === 0) { console.log('No Img')
    } else {
      Vibrant.from(img)
      .getPalette((err, palette) => {
        if(err) {
          console.log(err);
        } else {
          setPalette(palette);
        }
      })
    }
    },[img]);

    const baseStyle = {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      borderWidth: 2,
      borderRadius: 2,
      borderColor: '#eeeeee',
      borderStyle: 'dashed',
      backgroundColor: '#fafafa',
      color: '#bdbdbd',
      outline: 'none',
      transition: 'border .24s ease-in-out'
    };
    
    const activeStyle = {
      borderColor: '#2196f3'
    };
    
    const acceptStyle = {
      borderColor: '#00e676'
    };
    
    const rejectStyle = {
      borderColor: '#ff1744'
    };

    const style = useMemo(() => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }), [
      isDragActive,
      isDragReject
    ]);

    console.log(palette)

    return (
      //backgroundColor: 'rgb('+palette.lightVibrantRgb[0]+','+palette.lightVibrantRgb[1]+','+palette.lightVibrantRgb[2]+')'
      <>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop image here ...</p> :
            <p>Drag 'n' drop image here, or click to select image</p>
        }
        </div>
        <img src={img} style={{maxWidth: '500px', maxHeight: '500px'}}></img>
        <div>
          {
            palette.Vibrant ? 
              <div style={{display: 'flex'}}>
                <div style={{
                  backgroundColor: `${palette.Vibrant.hex}`,
                  color: `${palette.Vibrant.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>Vibrant</p>
                <p>Hex:{palette.Vibrant.hex}</p>
                <p>Rgb:{palette.Vibrant.hex}</p>
                <p>Hsl:{palette.Vibrant.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.LightVibrant.hex}`,
                  color: `${palette.LightVibrant.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>LighVibrant</p>
                <p>Hex: {palette.LightVibrant.hex}</p>
                <p>Rgb: {palette.LightVibrant.hex}</p>
                <p>Hsl: {palette.LightVibrant.hex}</p>
                </div>
                
                <div style={{
                  backgroundColor: `${palette.DarkVibrant.hex}`,
                  color: `${palette.DarkVibrant.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>DarkVibrant</p>
                <p>Hex: {palette.DarkVibrant.hex}</p>
                <p>Rgb: {palette.DarkVibrant.hex}</p>
                <p>Hsl: {palette.DarkVibrant.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.Muted.hex}`,
                  color: `${palette.Muted.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>Muted</p>
                <p>Hex: {palette.Muted.hex}</p>
                <p>Rgb: {palette.Muted.hex}</p>
                <p>Hsl: {palette.Muted.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.LightMuted.hex}`,
                  color: `${palette.LightMuted.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>LightMuted</p>
                <p>Hex: {palette.LightMuted.hex}</p>
                <p>Rgb: {palette.LightMuted.hex}</p>
                <p>Hsl: {palette.LightMuted.hex}</p>
                </div>

                <div style={{
                  backgroundColor: `${palette.DarkMuted.hex}`,
                  color: `${palette.DarkMuted.titleTextColor}`,
                  width: '15vw',
                  height: '20vh',
                  margin: '0px 3px'
                }}>
                <p>DarkMuted</p>
                <p>Hex: {palette.DarkMuted.hex}</p>
                <p>Rgb: {palette.DarkMuted.hex}</p>
                <p>Hsl: {palette.DarkMuted.hex}</p>
                </div>

            </div>

              : null
            }
          </div>
         <aside>
            <h4>Accepted files</h4>
            <ul>
              {acceptedFilesItems}
            </ul>
            <h4>Rejected files</h4>
            <ul>
              {rejectedFilesItems}
            </ul>
          </aside>
    </>
    )

  }

  export default UploadImage;