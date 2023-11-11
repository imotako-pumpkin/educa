import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { read, utils } from 'xlsx'

import { Data } from '../layouts'

type DropzoneProps = { setData: (d: Data[]) => void }

export const Dropzone = ({ setData }: DropzoneProps) => {
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

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop,
    accept: { 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'] },
  })

  return (
    <div
      {...getRootProps({
        style: {
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '100px',
          borderWidth: 2,
          borderRadius: 2,
          borderColor: '#000',
          borderStyle: 'dashed',
          backgroundColor: 'rgba(255,255,255,0.5)',
          outline: 'none',
          transition: 'border .24s ease-in-out',
        },
      })}
    >
      <input {...getInputProps()} />
      <p>Upload xlsx File!!!</p>
    </div>
  )
}
