import React from 'react';

class NotFound extends React.Component {

  render() {
    return (
      <div>
        Page Not Found
      </div>
    );
  }

  componentDidMount() {
    document.title = 'Page Not Found';
  }
}

export default NotFound;