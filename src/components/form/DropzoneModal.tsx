import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { read, utils } from 'xlsx'

import { Data } from '../layouts'

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
  transition: 'border .24s ease-in-out',
}

const focusedStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}

type DropzoneProps = { setData: (d: Data[]) => void }

export const DropzoneModal = ({ setData }: DropzoneProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = (e) => {
          const data = e.target?.result

          const workbook = read(data, { type: 'array' })
          const sheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[sheetName]
          const _data: Data[] = utils.sheet_to_json(worksheet)
          setData(_data)
        }
        reader.readAsArrayBuffer(file)
      })
    },
    [setData],
  )

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] },
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>XXXXXXX</p>
    </div>
  )
}
