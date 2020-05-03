import React from 'react'
import styled from 'styled-components'

import useCKEditor from './useEditor'
import { breakPoints } from '../../styles/theme'

interface Props {
  editorState: string
  setEditorState: (s: string) => void
}

const Styles = styled.div`
  ${({ theme }) => theme.boxShadow};
  .ck-editor__editable_inline {
    min-height: 15em;
    @media (${breakPoints.phone}) {
      min-height: 10em;
    }
  }
`

export const Editor: React.FC<Props> = ({ editorState, setEditorState }) => {
  const { CKEditor, ClassicEditor, UploadAdapter } = useCKEditor()
  if (!CKEditor) {
    return null
  }

  return (
    <Styles>
      <CKEditor
        //@ts-ignore
        config={{
          language: 'tr',
        }}
        editor={ClassicEditor}
        data={editorState}
        onInit={(editor: any) => {
          editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
            return UploadAdapter(loader)
          }
        }}
        onChange={(event: any, editor: any) => {
          setEditorState(editor.getData())
        }}
      />
    </Styles>
  )
}
