import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css'

// explicitando que aceitamos recever a função onFileUploaded do CreatePoint\index.tsx
interface Props {
    onFileUploaded: (file: File) => void
}

// React.FC<Props> indica que nosso Dropzone é um React Function Component que aceita as propriedades da interface Props
const  Dropzone:React.FC<Props> = ({ onFileUploaded }) => {

const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]
    const fileUrl = URL.createObjectURL(file)
    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)
  }, [onFileUploaded])
  const {getRootProps, getInputProps} = useDropzone({
      onDrop,
      accept: 'image/*'
    })

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />

        { selectedFileUrl
            ? <img src={selectedFileUrl} alt='Point Thumbnail'/>
            : ( 
                <p>
                    <FiUpload />
                    Imagem do estabelecimento
                </p>
            )        
        }
    </div>
  )
}

export default Dropzone