import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout } from 'antd';
import '../static/css/homePage.less'
import BoxHeader from './outBox/boxHeader'
import BoxSide from './outBox/boxSide'
import BoxContent from './outBox/boxContent'
import MySubmitApproval from './approval/mySubmitApproval'
const {Header, Sider, Content,} = Layout;

class WTSHome extends Component {
  render() {
    return (
      <BrowserRouter>
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
            <Link to="/MySubmitApproval">跳转</Link>
              <BoxContent />
            </Content>
          </Layout>
        </Layout>
        <Route path="/MySubmitApproval" component={MySubmitApproval}>

        </Route>
      </div>
      </BrowserRouter>
    );
  }
}

export default WTSHome;