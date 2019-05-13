import React, { Component } from 'react';
import routes from '../../page1/routes/index'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../page1/static/css/boxContent.less'
class BoxContent extends Component {
	constructor(props: object) {
		super(props)
	}

	render() {
		return (
			<div className="box-content">
				<div className="square-title">aaa</div>
				{routes.map((route: any, index: number) => {
					if (route.exact) {
						return (
							<Route exact key={index} path={route.path} component={route.component}></Route>
						)
					} else {
						return (
							<Route key={index} path={route.path} render={(props: any) => (<route.component {...props} routes={route.children}/>)} />
							// <Route key={index} path={route.path} component={route.component}></Route>
						)
					}
				})}
			</div>
		);
	}
}
const mapStateToProps = (state: any) => {
	console.log(state);
	return {
		// listData: state.listData
	}
}
export default connect(mapStateToProps)(BoxContent);