import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout } from 'antd';
import '../static/css/homePage.less'
import BoxHeader from './outBox/boxHeader'
import BoxSide from './outBox/boxSide'
import BoxContent from './outBox/boxContent'
const {Header, Sider, Content,} = Layout;

class WTSHome extends Component {
  constructor(props:any) {
    super(props)
  }
  render() {
    return (
      // <BrowserRouter>
      <div className="home-page">
        <Layout>
          <Header>Header
            <BoxHeader />
          </Header>
          <Layout>
            <Sider>
              <BoxSide />
            </Sider>
            <Content>
              <BoxContent />
            </Content>
          </Layout>
        </Layout>
      </div>
      // </BrowserRouter>
    );
  }
}

export default WTSHome;