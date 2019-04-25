import React, { Component } from 'react';
import { Layout } from 'antd';
import '../static/css/homePage.less'
import BoxHeader from './outBox/boxHeader'
import BoxSide from './outBox/boxSide'
const {Header, Sider, Content,} = Layout;

class WTSHome extends Component {
  render() {
    return (
      <div className="home-page">
        <Layout>
          <Header>Header
            <BoxHeader />
          </Header>
          <Layout>
            <Sider>
              <BoxSide />
            </Sider>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default WTSHome;