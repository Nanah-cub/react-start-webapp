import React from 'react';
import ToolTip from '../../widgits/tooltip/tooltip';

class CafeComponent extends React.Component {
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
          <div data-id="hello">GoodBye</div>
          <ToolTip isShown={true} match="hello">
            <div>This Component should only be rendered if isShown is true</div>
          </ToolTip>
        </aside>
      </div>
    );
  }
}

export default CafeComponent;
