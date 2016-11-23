import React from 'react';
import {Link} from 'react-router';
import styles from './menu.css';

class Menu extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.ribbonClick = this.ribbonClick.bind(this);
    this.redraw = this.redraw.bind(this);
  }

  render() {
    return (
      <div className={styles.menu}>
      <ul ref={(nav) => { this.nav = nav }} className={`${styles.topnav} ${styles.container}`}>
        <li><Link to='/feeds' activeClassName={styles.active} onClick={this.redraw}>Feeds</Link></li>
        <li><Link to='/trending' activeClassName={styles.active} onClick={this.redraw}>Trending</Link></li>
        <li><Link to='/video' activeClassName={styles.active} onClick={this.redraw}>Video</Link></li>
        <li className={styles.icon}>
          <a href='javascript:void(0);' onClick={this.ribbonClick}>
            <span className={styles.ribbon}></span>
            <span className={styles.ribbon}></span>
            <span className={styles.ribbon}></span>
          </a>
        </li>
      </ul>
      </div>
    );
  }

  ribbonClick() {
    let classNames = this.nav.className.split(' ');
    const index = classNames.indexOf(styles.responsive);
    if (index === -1) {
      classNames.push(styles.responsive);
    } else {
      classNames.splice(index, 1);
    }
    this.nav.className = classNames.join(' ');
  }

  redraw() {
    let classNames = this.nav.className.split(' ');
    const index = classNames.indexOf(styles.responsive);
    if (index !== -1) {
      classNames.splice(index, 1);
      this.nav.className = classNames.join(' ');
    }
  }
}

export default Menu;