import { useEffect, useState } from 'react'

const UploadList = () => {

    const [uploads, setUploads] = useState([])

    useEffect(() => { loadUploads() }, [])

    const loadUploads = () => {
        fetch('http://localhost:8000/api/uploads')
          .then(res => res.json())
          .then(setUploads)
    }

    return (
      <>
        <button onClick={loadUploads}>Reload</button>
        {uploads.map(upload => <UploadItem {...upload} />)}
      </>
    )
}

const UploadItem = ({ description, file_url }) => {
    return (
      <>
        <img src={'http://localhost:8000' + file_url}/>
        <p>{file_url}</p>
        <p>{description}</p>
      </>
    )
}

export default UploadList