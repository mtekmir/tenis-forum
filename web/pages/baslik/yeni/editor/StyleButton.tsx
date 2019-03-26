import * as React from 'react';
import classNames from 'classnames';
import { withStyles, WithStyles } from '@material-ui/core';

const styles = {
  richEditorStyleButton: {
    color: '#999',
    cursor: 'pointer',
    marginRight: 16,
    padding: '2px 0',
    display: 'inline-block',
  },

  richEditorActiveButton: {
    color: '#5890ff',
  },
};

interface Props extends WithStyles<typeof styles> {
  label: string;
  style: string;
  onToggle: (style: string) => void;
  active: boolean;
}

class StyleButtonC extends React.Component<Props> {
  onToggle = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onToggle(this.props.style);
  }

  render() {
    const { active, classes } = this.props;
    return (
      <span
        className={classNames({
          [classes.richEditorActiveButton]: active,
          [classes.richEditorStyleButton]: true,
        })}
        onMouseDown={this.onToggle}
      >
        {this.props.label}
      </span>
    );
  }
}

export const StyleButton = withStyles(styles)(StyleButtonC);
