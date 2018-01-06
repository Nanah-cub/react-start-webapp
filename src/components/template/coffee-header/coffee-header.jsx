import React from 'react';
import styles from './coffee-header.css';
import { Link } from 'react-router-dom';

const searchCoffees = [
  {
    name: 'Light Roast',
    link: '/light-roast'
  }
];

const about = [
  {
    name: 'Inspiration',
    link: '/about/inspiration'
  },
  {
    name: 'Contact',
    link: '/about/contact'
  }
];

class CoffeeHeader extends React.Component {
  render() {
    return (
      <header className={styles.coffeeHeader}>
        <nav>
          <ul className={styles.headerNav}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cafe">Cafes</Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default CoffeeHeader;
