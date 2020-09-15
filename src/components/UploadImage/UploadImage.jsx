import React, { useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadImage.scss';

const UploadImage = ({ fetchImgData }) => {

//const [img, setImg] = useState([])
//const [palette, setPalette] = useState({})

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((blob) => {
      const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
          fetchImgData(reader.result)
        }
        reader.readAsDataURL(blob)
      })
  }, [fetchImgData])

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
      maxSize: '3000000'
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

    const baseStyle = {
      width: '55%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      marginBottom: '16px',
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
      isDragReject,
      isDragAccept, 
      baseStyle,
      activeStyle,
      acceptStyle,
      rejectStyle
    ]);

    return (
    <>
      <div className="upload-wrapper">
        <div className="upload-wrapper__input-box" {...getRootProps({style})}>
          <input {...getInputProps()} />
          {
            isDragActive ?
            <p>Drop image here ...</p> :
            <p>Drag 'n' drop image here, or click to select image</p>
          }
          </div>
          <aside className="upload-wrapper__aside">
              <h4 className="upload-wrapper__status-type">Accepted files</h4>
              <ul className="upload-wrapper__file-name">
                {acceptedFilesItems}
              </ul>
              <h4 className="upload-wrapper__status-type">Rejected files</h4>
              <ul className="upload-wrapper__file-name">
                {rejectedFilesItems}
              </ul>
          </aside>
      </div>
    </>
    )
  };

  export default UploadImage;