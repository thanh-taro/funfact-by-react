import React from 'react';
import Menu from 'components/Menu';
import global from 'assets/global.css';
import styles from './app.css';
import {Feed} from 'base/pages';

class App extends React.Component {

  render() {
    return (
      <div>
        <Menu/>
        <div className={`${styles.container} ${styles.content}`}>
          <div className={styles.leftSide}>
            {this.props.children}
          </div>
          <div className={styles.rightSide}>
            RightSide
          </div>
        </div>
      </div>
    );
  }
}

export default App;