import React, { Component } from 'react';
import routes from '../../page1/routes/index'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import TabsToggle from './tabsToggle'
import '../../page1/static/css/boxContent.less'
import md5 from '../../utils/encryption'
console.log('md5', md5.md5Encode('123'));
class BoxContent extends Component<any, any> {
	constructor(props: object) {
		super(props)
		this.state = {
		}
	}
	componentDidMount () {
	}
	render() {
		let {reduxStatus} = this.props;
		const routerData = <div>
		</div>
		const tabRouter = <TabsToggle />
		const showPage = reduxStatus.length > 0 ? <TabsToggle />: ''
		return (
			<div className="box-content">
				{showPage}
				<Switch>
					{routes.map((route: any, index: number) => {
					if (route.exact) {
						return (
							<Route exact key={index} path={route.path} component={route.component}></Route>
						)
					} else {
						if (!route.path) {
							return (
								<Route key={index} component={route.component} />
							)
						} else {
							return (
								<Route key={index} path={route.path} render={(props: any) => (<route.component {...props} routes={route.children}/>)} />
							)
						}
					}
					})}
				</Switch>
			</div>
		);
	}
}
const mapStateToProps = (state: any) => {
	return {
		reduxStatus: state.listData
	}
}
export default connect(mapStateToProps)(BoxContent);