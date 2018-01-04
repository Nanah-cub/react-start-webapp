import React from 'react';
import CoffeeHeader from './template/coffee-header/coffee-header';
import { Route } from 'react-router-dom';
import Home from './pages/home/home';
import RestuarantComponent from './pages/restuarants/restuarants';

class App extends React.Component {
  render() {
    return (
      <div>
        <CoffeeHeader />
        <Route exact path="/" component={Home} />
        <Route path="/restuarants" component={RestuarantComponent} />
      </div>
    );
  }
}

export default App;
