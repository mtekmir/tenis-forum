import * as React from 'react';
import { ProfileForm, FormValues } from './profileForm';
import { Root, InnerDiv } from './profileStyle';
import Layout from '../../components/Layout';
import { UserContextConsumer } from '../../context/userContext';

interface Props {
  onSubmit: (v: any, profileImage: File | null) => void;
}

export interface IFile extends File {
  preview: string;
}

interface State {
  file: IFile | null;
  dropzoneHover: boolean;
}

export class ProfileView extends React.PureComponent<Props, State> {
  public readonly state: State = {
    file: null,
    dropzoneHover: false,
  };

  onDrop = (files: File[]) => {
    this.setState({
      // tslint:disable-next-line
      file: Object.assign(files[0], {
        preview: URL.createObjectURL(files[0]),
      }),
    });
  }

  componentWillUnmount() {
    const { file } = this.state;
    // tslint:disable-next-line
    file && URL.revokeObjectURL(file.preview);
  }

  onDropzoneHover = () => {
    this.setState(prevState => ({ dropzoneHover: !prevState.dropzoneHover }));
  }

  onSubmit = (formValues: FormValues) => {
    const variables: { [key: string]: any } = formValues;
    this.props.onSubmit(variables, this.state.file);
  }

  render() {
    const { dropzoneHover, file } = this.state;
    return (
      <Layout title="Hesabım | Tenis Forum">
        <UserContextConsumer>
          {({ user }) => (
            <Root>
              <InnerDiv>
                <ProfileForm
                  dropzoneHover={dropzoneHover}
                  user={user}
                  onDrop={this.onDrop}
                  onSubmit={this.onSubmit}
                  file={file}
                  onDropzoneHover={this.onDropzoneHover}
                />
              </InnerDiv>
            </Root>
          )}
        </UserContextConsumer>
      </Layout>
    );
  }
}
