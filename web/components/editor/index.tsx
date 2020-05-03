import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { MoonLoader } from 'react-spinners'

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

  .editor-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18em;
    @media (${breakPoints.phone}) {
      height: 12em;
    }
  }
`

export const Editor: React.FC<Props> = ({ editorState, setEditorState }) => {
  const { CKEditor, ClassicEditor, UploadAdapter, isEditorLoaded } = useCKEditor()
  const { palette } = useContext(ThemeContext)

  return (
    <Styles>
      {!isEditorLoaded ? (
        <div className='editor-loading'>
          <MoonLoader loading size={40} color={palette.primary} />
        </div>
      ) : (
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
      )}
    </Styles>
  )
}
