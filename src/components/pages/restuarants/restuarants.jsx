import React from 'react';
import fetch from 'isomorphic-fetch';
import ToolTip from '../../widgits/tooltip/tooltip';

class RestuarantComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: []
    };
  }

  render() {
    return (
      <div className="col-xs-20 container">
        <aside className="col-xs-20 container">
          <ToolTip>Hello</ToolTip>
        </aside>
      </div>
    );
  }
}

export default RestuarantComponent;
