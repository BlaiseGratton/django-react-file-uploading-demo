import { useState } from 'react'

const Uploader = () => {
  const [upload, setUpload] = useState({
    file: null,
    description: ''
  })

  const handleDescription = evt => {
    setUpload({
      ...upload,
      description: evt.target.value
    })
  }

  const handleFileSelect = evt => {
    setUpload({
      ...upload,
      file: evt.target.files[0]
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()

    const data = new FormData()
    data.set('newFile', upload.file)
    data.set('description', upload.description)

    fetch('http://localhost:8000/api/uploads', {
      method: 'POST',
      body: data
    })
  }

  return (<>
    <form onSubmit={handleSubmit}>
      <label htmlFor="fileToUpload">File:</label>&nbsp;
      <input
        type="file"
        name="fileToUpload"
        onChange={handleFileSelect}/>
      <br />
      <label htmlFor="description">Description:</label>&nbsp;
      <input
        name="description"
        type="text"
        onChange={handleDescription}
        value={upload.description}
      />
      <br />
      <input type="submit" />
    </form>
  </>)
}

export default Uploader