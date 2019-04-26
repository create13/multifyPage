import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout } from 'antd';
import '../static/css/homePage.less'
import BoxHeader from './outBox/boxHeader'
import BoxSide from './outBox/boxSide'
import BoxContent from './outBox/boxContent'
import MySubmitApproval from './approval/mySubmitApproval'
import routes from '../routes/index'
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
              <Link to="/boxContent/mySubmitApproval">跳转</Link>
              <BoxContent />
            </Content>
          </Layout>
        </Layout>
        {/* <Route path="/boxContent/mySubmitApproval" component={MySubmitApproval}></Route> */}
        {routes.map((route, rIndex) => {
          console.log(route);
          if (!route.exact) {
            <Route key={rIndex} path={route.path} render={(props: any) => (<route.component {...props} routes={route.routes}/>)} />
              // <Route key={ rIndex } path={ route.path } component={ route.component }></Route>
          }
        })}
      </div>
      </BrowserRouter>
    );
  }
}

export default WTSHome;