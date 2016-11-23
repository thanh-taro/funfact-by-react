import React from 'react';

class Trending extends React.Component {

  render() {
    return (
      <div>
        Trending
      </div>
    );
  }

  componentDidMount() {
    document.title = 'Trending';
  }
}

export default Trending;