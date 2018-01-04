import React from 'react';
import DistrictSelector from './district-selectors/district-selectors';
import DistrictDescription from './district-description/district-description';
import fetch from 'isomorphic-fetch';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districts: []
    };
  }

  componentDidMount() {
    this.fetchProps();
  }

  fetchProps() {
    fetch('data/districts.json', { method: 'GET', mode: 'cors' }).then(
      response => {
        response.json().then(body => {
          this.setState({
            ...this.state,
            districts: body.districts
          });
        });
      }
    );
  }

  render() {
    return (
      <div className="col-xs-20 container">
        <div className="col-xs-20 col-md-8">
          <DistrictSelector
            districts={this.state.districts.map((district, i) => {
              return {
                ...district,
                key: i
              };
            })}
          />
        </div>
        <div className="col-xs-20 col-md-12">
          <DistrictDescription />
        </div>
      </div>
    );
  }
}

export default Home;
