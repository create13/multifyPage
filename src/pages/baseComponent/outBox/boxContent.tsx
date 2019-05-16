import React, { Component } from 'react';
import routes from '../../page1/routes/index'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import TabsToggle from './tabsToggle'
import '../../page1/static/css/boxContent.less'
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
const mapStateToProps = (state: any) => {
	return {
		reduxStatus: state.listData
	}
}
export default connect(mapStateToProps)(BoxContent);