import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { EditorComponent } from '../editor';
import { ButtonsDiv, EditorDiv } from './newPostStyle';
import { stateToHTML } from 'draft-js-export-html';
import { Button } from '../Button';

// Used in thread detail page

interface Props {
  onSubmit: (text: string) => void;
}

export const NewPostView: React.FC<Props> = ({ onSubmit }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmit = () => {
    onSubmit(stateToHTML(editorState.getCurrentContent()));
    setEditorState(EditorState.createEmpty());
  };

  return (
    <EditorDiv>
      <EditorComponent
        onEditorStateChange={s => setEditorState(s)}
        editorState={editorState}
      />
      <ButtonsDiv>
        <Button
          text="Cevap Gönder"
          color="green_gradient"
          onClick={handleSubmit}
        />
      </ButtonsDiv>
    </EditorDiv>
  );
};
