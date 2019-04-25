import React, { Component } from 'react';
import { Button } from 'antd';
class WTSHome extends Component {
  render() {
    return (
      <div className="home-page">
      antd
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      </div>
    );
  }
}

export default WTSHome;