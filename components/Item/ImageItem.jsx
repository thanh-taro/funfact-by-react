import React from 'react';
import styles from './image_item.css';
import FontAwesome from 'react-fontawesome';

class ImageItem extends React.Component {

  render() {
    return (
      <div className={styles.imageItem}>
        <h2>Khoảng khắc được phép xóa code cũ.</h2>
        <p className={styles.image}>
          <img src='http://i.giphy.com/7s8rtedbk0Du0.gif'/>
        </p>
      </div>
    );
  }
}

export default ImageItem;