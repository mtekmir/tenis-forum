import * as React from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import dropzoneStyle from './dropzoneStyle';
import { PhotoCameraOutlined } from '@material-ui/icons';
import { Typography, WithStyles, withStyles } from '@material-ui/core';
import { IFile } from '../../profileView';
import { MeMe } from '../../../../generated/apolloComponents';

interface Props extends WithStyles<typeof dropzoneStyle> {
  user: MeMe | null | undefined;
  dropzoneHover: boolean;
  file: IFile | null;
  onDropzoneHover: () => void;
  onDrop: (files: File[]) => void;
}

const DropzoneComponentC: React.FunctionComponent<Props> = ({
  classes,
  dropzoneHover,
  onDrop,
  onDropzoneHover,
  file,
  user,
}) => {
  return (
    <Dropzone accept="image/jpeg, image/png" multiple={false} onDrop={onDrop}>
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
                }url(${file ? file.preview : user.profileImageUrl})`,
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
                  Profil Resmini Değiştir
                </Typography>
              </div>
            </div>
          </div>
        );
      }}
    </Dropzone>
  );
};
export const DropzoneComponent = withStyles(dropzoneStyle)(DropzoneComponentC);
