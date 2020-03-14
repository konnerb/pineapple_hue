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
      maxSize: '2000000',
      //multiple: 'true'
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
          console.log(palette)
          const vibColors = {
            vibrantRgb: palette.Vibrant._rgb,
            vibrantHsl: palette.Vibrant._hsl,
            lightVibrantRgb: palette.LightVibrant._rgb,
            lightVibrantHsl: palette.LightVibrant._hsl,
            darkVibrantHsl: palette.DarkVibrant._hsl,
            darkVibrantRgb: palette.DarkVibrant._rgb,
            mutedRgb: palette.Muted._rgb,
            mutedHsl: palette.Muted._hsl,
            lightMutedRgb: palette.LightMuted._rgb,
            lightMutedHsl: palette.LightMuted._hsl,
            darkMutedRgb: palette.DarkMuted._rgb,
            darkMutedHsl: palette.DarkMuted._hsl,
          }
          setPalette(vibColors);
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
            palette.vibrantRgb ? 
              <div style={{display: 'flex'}}>
                <div style={{
                  backgroundColor: 'rgb('+palette.vibrantRgb[0]+','+palette.vibrantRgb[1]+','+palette.vibrantRgb[2]+')',
                  width: '10vw',
                  height: '10vh',
                  margin: '0px 3px'
                }}></div>
                <div style={{
                  backgroundColor: 'rgb('+palette.lightVibrantRgb[0]+','+palette.lightVibrantRgb[1]+','+palette.lightVibrantRgb[2]+')',
                  width: '10vw',
                  height: '10vh',
                  margin: '0px 3px'
                }}></div>
                <div style={{
                  backgroundColor: 'rgb('+palette.darkVibrantRgb[0]+','+palette.darkVibrantRgb[1]+','+palette.darkVibrantRgb[2]+')',
                  width: '10vw',
                  height: '10vh',
                  margin: '0px 3px'
                }}></div>
                <div style={{
                  backgroundColor: 'rgb('+palette.mutedRgb[0]+','+palette.mutedRgb[1]+','+palette.mutedRgb[2]+')',
                  width: '10vw',
                  height: '10vh',
                  margin: '0px 3px'
                }}></div>
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