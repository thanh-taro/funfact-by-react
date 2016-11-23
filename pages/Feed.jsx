import React from 'react';
import ImageItem from 'components/Item';

class Feed extends React.Component {

  render() {
    return (
      <div>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
        <ImageItem/>
      </div>
    );
  }

  componentDidMount() {
    document.title = 'Feeds';
  }
}

export default Feed;