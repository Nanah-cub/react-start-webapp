import React, { Component } from 'react';
import windowEvent from './decorators/windowEvents';
import PropTypes from 'prop-types';

@windowEvent
class ToolTip extends Component {
  constructor(props) {
    console.log('hello');
    super(props);
    this.state = {
      isShown: this.props.isShown
    };
    this.onResize = this.onResize.bind(this);
    this.bindWindowListeners = this.bindWindowListeners.bind(this);
    this.unbindWindowListeners = this.unbindWindowListeners.bind(this);
  }

  componentWillMount() {
    return false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  onResize() {
    console.log('OnResize');
  }

  render() {
    return this.state.isShown ? this.props.children : null;
  }
}

ToolTip.propTypes = {
  isShown: PropTypes.bool
};

export default ToolTip;
