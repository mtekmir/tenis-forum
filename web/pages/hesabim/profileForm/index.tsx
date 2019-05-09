import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextInput } from '../../../components/forms/TextInput';
import { MeMe } from '../../../generated/apolloComponents';
import {
  Label,
  InputDiv,
  FormDiv,
  LeftDiv,
  RightDiv,
  BottomDiv,
} from './profileFormStyles';
import { DropzoneComponent } from './DropzoneComponent';
import { PROFILE_FIELDS } from './profileFields';
import { SelectInput } from '../../../components/forms/SelectInput';
import { Button } from '../../../components/Button';

interface Props {
  user: MeMe | null | undefined;
  onSubmit: (v: FormValues) => void;
  dropzoneHover: boolean;
  file: IFile | null;
  onDropzoneHover: () => void;
  onDrop: (files: File[]) => void;
}

export interface IFile extends File {
  preview: string;
}

export interface FormValues {
  username: string;
}
export const ProfileForm: React.ComponentType<Props> = ({
  onSubmit,
  user,
  // tslint:disable-next-line
  ...rest
}) => {
  if (!user) {
    return <div>Loading</div>;
  }

  const {
    profile: { gender, location, occupation },
  } = user;
  const initialValues = {
    username: user.username ? user.username : '',
    gender: gender ? gender : '',
    location: location ? location : '',
    occupation: occupation ? occupation : '',
  };

  const handleSubmit = (v: FormValues) => {
    const variables = {};
    Object.keys(v).forEach(k => {
      // @ts-ignore
      if (v[k].trim() !== initialValues[k]) {
        // @ts-ignore
        variables[k] = v[k];
      }
    });
    onSubmit(variables as FormValues);
  };

  const renderFields = () => {
    return PROFILE_FIELDS.map(({ label, name, type, options }) => (
      <InputDiv key={name}>
        <Label>{label}</Label>
        <Field
          name={name}
          placeholder={label}
          type={type}
          options={options}
          component={type === 'text' ? TextInput : SelectInput}
        />
      </InputDiv>
    ));
  };

  if (!user) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={v => handleSubmit(v)}
      >
        {() => (
          <Form>
            <div>
              <FormDiv>
                <LeftDiv>{renderFields()}</LeftDiv>
                <RightDiv>
                  <Label>Profil Resmi</Label>
                  <DropzoneComponent {...rest} user={user} />
                </RightDiv>
              </FormDiv>
            </div>
            <BottomDiv>
              <Button text="İptal" url="/" color="red_gradient" marginRight />
              <Button type="submit" text="Kaydet" color="green_gradient" />
            </BottomDiv>
          </Form>
        )}
      </Formik>
    </div>
  );
};
