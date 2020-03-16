import React, { useCallback, useState, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'

function UploadImage({ fetchImgData }) {

//const [img, setImg] = useState([])
//const [palette, setPalette] = useState({})

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((blob) => {
      const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          const binaryStr = reader
          console.log(binaryStr)
          //setImg(reader.result)
          fetchImgData(reader.result)
        }
        reader.readAsDataURL(blob)
      })
      console.log(acceptedFiles)
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

  //eEffect(() => {
  //if (img === null || img === 0) { console.log('No Img')
  //} else {
  //  Vibrant.from(img)
  //  .getPalette((err, palette) => {
  //    if(err) {
  //      console.log(err);
  //    } else {
  //      fetchPalette(palette)
  //      //setPalette(palette);
  //    }
  //  })
  //}
  //},[img]);

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