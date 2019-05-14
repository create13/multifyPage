import React, { Component } from 'react';
import routes from '../../page1/routes/index'
import { Route } from 'react-router-dom'
import TabsToggle from './tabsToggle'
import '../../page1/static/css/boxContent.less'
class BoxContent extends Component {
	constructor(props: object) {
		super(props)
		this.state = {
		}
	}
	componentDidMount () {
	}
	render() {
		return (
			<div className="box-content">
				<TabsToggle />
				{routes.map((route: any, index: number) => {
					if (route.exact) {
						return (
							<Route exact key={index} path={route.path} component={route.component}></Route>
						)
					} else {
						return (
							<Route key={index} path={route.path} render={(props: any) => (<route.component {...props} routes={route.children}/>)} />
						)
					}
				})}
			</div>
		);
	}
}
export default BoxContent;