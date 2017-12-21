import React from 'react';
import styles from './coffee-header.scss';

console.log(styles);
console.log(styles.coffeeHeader);

class CoffeeHeader extends React.Component {
  render() {
    return <header className={styles.coffeeHeader}>Hello</header>;
  }
}

export default CoffeeHeader;
