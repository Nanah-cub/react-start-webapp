import React from 'react';
import { isNil } from 'lodash';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    district: state.district
  };
};

class DistrictDescription extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== nextState || !isNil(nextProps);
  }
  render() {
    if (this.props.district.district) {
      return (
        <div>
          <h1>{this.props.district.district.name}</h1>
          <p>{this.props.district.district.description}</p>
        </div>
      );
    } else {
      return <h1>No District Selected Yet</h1>;
    }
  }
}

export default connect(mapStateToProps, {})(DistrictDescription);
