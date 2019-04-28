import React, { Component } from 'react';
// import DefaultHome from '../contentChild/defaultHome'
import '../../static/css/boxContent.less'
class BoxContent extends Component {
  constructor(props:any) {
    super(props)
  }

  render() {
    console.log(this.props);
    console.log('propsContent',this.props);
    console.log(Object.keys(this.props));
    return (
      <div className="box-content">
      {/* <DefaultHome /> */}
      {/* {this.props.routes.map((route, index) => {
            return (
              <Route exact key={index} path={route.path} component={route.component}></Route>
            )
          })} */}
      aaa
      </div>
    );
  }
}

export default BoxContent;