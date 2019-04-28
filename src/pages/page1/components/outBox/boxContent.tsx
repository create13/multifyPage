import React, { Component } from 'react';
import DefaultHome from '../contentChild/defaultHome'
import { Route } from 'react-router-dom'
import '../../static/css/boxContent.less'
class BoxContent extends Component {
  constructor(props:object) {
    super(props)
  }

  render() {
    const defaultRouter:any[] = [{path: '/', component: DefaultHome}]
    let dataRoute:any[] = [];
    if (!this.props.children) {
      dataRoute = defaultRouter
    }
    return (
      <div className="box-content">
      {dataRoute.map((route:any, index:number) => {
            return (
              <Route exact key={index} path={route.path} component={route.component}></Route>
            )
      })}
      </div>
    );
  }
}

export default BoxContent;