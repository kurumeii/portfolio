import {useCallback} from 'react'
import {useState} from 'react'
export default function useSignIp() {
  const [fileUploaded, setUploadedFile] = useState({
    imgSrc: '',
    imgName: '',
  })
  const handleUpload = useCallback(e => {
    const file = e?.target?.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', event => {
      setUploadedFile({
        imgSrc: event.target.result,
        imgName: file.name,
      })
    })
    reader.readAsDataURL(file)
  }, [])

  const openInNewTab = useCallback(() => {
    if (!fileUploaded.imgSrc) return false
    const w = window.open(fileUploaded.imgSrc)
    w.document.write(
      `<img src=${fileUploaded.imgSrc} alt = ${fileUploaded.imgName} />`
    )
  }, [fileUploaded.imgName, fileUploaded.imgSrc])

  const clearFile = () => {
    setUploadedFile({imgSrc: '', imgName: ''})
  }
  return {fileUploaded, handleUpload, openInNewTab, clearFile}
}
