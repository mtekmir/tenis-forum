import * as React from 'react';
import {
  withStyles,
  WithStyles,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import profileFormStyle from './profileFormStyle';
import { Formik, Form, Field } from 'formik';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import { PhotoCameraOutlined } from '@material-ui/icons';
import { TextInput } from '../../../components/forms/TextInput';
import { MeMe } from '../../../generated/apolloComponents';

interface Props extends WithStyles<typeof profileFormStyle> {
  user: MeMe;
  onSubmit: (v: FormValues) => void;
  dropzoneHover: boolean;
  file: IFile;
  onDropzoneHover: () => void;
  onClose: () => void;
  onDrop: (files: File[]) => void;
}

export interface IFile extends File {
  preview: string;
}

export interface FormValues {
  displayName: string;
}
const ProfileFormC: React.ComponentType<Props> = ({
  classes,
  onSubmit,
  dropzoneHover,
  user: { username, profileImageUrl, profile },
  onDropzoneHover,
  onClose,
  file,
  onDrop,
}) => {
  const initialValues = {
    displayName: username,
  };

  const handleSubmit = (v: FormValues) => {
    const variables = {};
    Object.keys(v).forEach(k => {
      // @ts-ignore
      if (v[k] !== initialValues[k]) {
        // @ts-ignore
        variables[k] = v[k];
      }
    });
    onSubmit(variables as FormValues);
  };
  return (
    <div>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={v => handleSubmit(v)}
      >
        {() => (
          <Form>
            <div>
              <Grid container spacing={16}>
                <Grid item xs={8}>
                  <Typography className={classes.label}>
                    Display Name
                  </Typography>
                  <Field
                    name="displayName"
                    placeholder="Display Name"
                    type="text"
                    component={TextInput}
                    className={classes.input}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.label}>
                    Profile photo
                  </Typography>
                  <Dropzone
                    accept="image/jpeg, image/png"
                    multiple={false}
                    onDrop={onDrop}
                  >
                    {({ getRootProps, getInputProps }) => {
                      return (
                        <div
                          onMouseEnter={onDropzoneHover}
                          onMouseLeave={onDropzoneHover}
                          {...getRootProps({
                            className: classes.dropzone,
                          })}
                        >
                          <input {...getInputProps()} />
                          <div
                            className={classes.dropzoneHoverContentDiv}
                            style={{
                              backgroundImage: `${
                                dropzoneHover
                                  ? 'linear-gradient( rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5) ),'
                                  : ''
                              }url(${file ? file.preview : profileImageUrl})`,
                              backgroundSize: '192px 192px',
                            }}
                          >
                            <div
                              className={classNames({
                                [classes.hideDropzoneHoverContent]: !dropzoneHover,
                                [classes.dropzoneHoverInnerDiv]: true,
                              })}
                            >
                              <PhotoCameraOutlined
                                className={classNames({
                                  [classes.hideDropzoneHoverContent]: !dropzoneHover,
                                  [classes.dropzoneHoverIcon]: true,
                                })}
                              />
                              <Typography
                                align="center"
                                classes={{
                                  root: classes.dropzoneHoverText,
                                }}
                                className={classNames({
                                  [classes.hideDropzoneHoverContent]: !dropzoneHover,
                                })}
                              >
                                Change your profile photo
                              </Typography>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  </Dropzone>
                </Grid>
              </Grid>
            </div>
            <div className={classes.buttomDiv}>
              <Button variant="contained" onClick={onClose}>
                Cancel
              </Button>
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

export const ProfileForm = withStyles(profileFormStyle)(ProfileFormC);
