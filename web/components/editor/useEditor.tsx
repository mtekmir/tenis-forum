import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import { useApolloClient } from 'react-apollo'
import {
  GetUploadUrlQuery,
  GetUploadUrlQueryVariables,
} from '../../graphql/generated/GetUploadUrlQuery'
import { getUploadUrlQuery } from '../../graphql/query/getUploadUrl'

export default function useCKEditor() {
  const editorRef = useRef()
  const [isEditorLoaded, setIsEditorLoaded] = useState(false)
  const client = useApolloClient()

  const { CKEditor, ClassicEditor, translations } = (editorRef.current as any) || {}

  const upload = (loader: any) => async () => {
    const file = await loader.file
    const {
      data: { getUploadUrl },
    } = await client.query<GetUploadUrlQuery, GetUploadUrlQueryVariables>({
      query: getUploadUrlQuery,
      variables: {
        contentType: file.type,
        extension: file.name.split('.')[1],
      },
    })

    await axios.put(getUploadUrl.uploadUrl, file)
    return { default: getUploadUrl.previewUrl }
  }

  const abort = () => {}
  const UploadAdapter = (loader: any) => ({
    upload: upload(loader),
    abort,
  })

  useEffect(() => {
    // @ts-ignore
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic/build/ckeditor'),
      translations: require('@ckeditor/ckeditor5-build-classic/build/translations/tr'),
    }
    setIsEditorLoaded(true)
  }, [])

  return Object.freeze({
    isEditorLoaded,
    CKEditor,
    ClassicEditor,
    translations,
    UploadAdapter,
  })
}
