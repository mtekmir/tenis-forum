import React from 'react';
import ReactDOM from 'react-dom';

export class Portal extends React.Component {
  element: any;
  el = document.createElement('div');

  componentDidMount() {
    this.element = document.querySelector('#modal');
    this.element.appendChild(this.el);
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.element.removeChild(this.el);
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
