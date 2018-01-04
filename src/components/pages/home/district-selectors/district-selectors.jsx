import React from 'react';
import { isNil } from 'lodash';
import styles from './district-selectors.css';
import { changeDistrict } from './district-action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = function(state) {
  return {
    district: state.district
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(
    {
      changeDistrict: changeDistrict
    },
    dispatch
  );
};

class DistrictSelector extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== nextState || !isNil(nextProps);
  }

  render() {
    const activeDistrict = function(district, activeDistrict) {
      if (activeDistrict.district) {
        return district.name === activeDistrict.district.name
          ? styles.active
          : styles.inActive;
      } else {
        return styles.inActive;
      }
    };
    const districtList = this.props.districts.map(district => {
      return (
        <tr key={district.key}>
          <td>
            <span
              className={activeDistrict(district, this.props.district)}
              onClick={() => this.props.changeDistrict(district)}
            >
              {district.name}
            </span>
          </td>
        </tr>
      );
    });
    return (
      <aside className={styles.districtAside}>
        <table>
          <tbody>
            <tr>
              <th>Asheville Districts</th>
            </tr>
            {districtList}
          </tbody>
        </table>
      </aside>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DistrictSelector);
