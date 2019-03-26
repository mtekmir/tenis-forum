import * as React from 'react';
import {
  withStyles,
  WithStyles,
  Grid,
  Typography,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextInput } from '../../../components/forms/TextInput';
import { MeMe } from '../../../generated/apolloComponents';
import profileFormStyles from './profileFormStyles';
import { DropzoneComponent } from './DropzoneComponent';
import { PROFILE_FIELDS } from './profileFields';
import { SelectInput } from '../../../components/forms/SelectInput';

interface Props extends WithStyles<typeof profileFormStyles> {
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
const ProfileFormC: React.ComponentType<Props> = ({
  classes,
  onSubmit,
  user,
  // tslint:disable-next-line
  ...rest
}) => {
  if (!user) {
    return <LinearProgress />;
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
      <React.Fragment key={name}>
        <Typography key={label} className={classes.label}>
          {label}
        </Typography>
        <Field
          name={name}
          placeholder={label}
          type={type}
          options={options}
          component={type === 'text' ? TextInput : SelectInput}
          className={classes.input}
          variant="outlined"
        />
      </React.Fragment>
    ));
  };

  if (!user) {
    return <LinearProgress />;
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
              <Grid container spacing={24}>
                <Grid item xs={8} md={8}>
                  {renderFields()}
                </Grid>
                <Grid item xs={4} md={4}>
                  <Typography className={classes.label}>
                    Profil Resmi
                  </Typography>
                  <DropzoneComponent {...rest} user={user} />
                </Grid>
              </Grid>
            </div>
            <div className={classes.buttomDiv}>
              <Button variant="contained">Cancel</Button>
              <Button
                type="submit"
                style={{ marginLeft: 10 }}
                variant="contained"
                color="secondary"
              >
                Save Changes
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const ProfileForm = withStyles(profileFormStyles)(ProfileFormC);
