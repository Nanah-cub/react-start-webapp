import React, { Component } from 'react';
import windowListener from './decorators/windowEvents';

@windowListener
class ToolTip extends Component {
  render() {
    return this.props.children;
  }
}

export default ToolTip;
