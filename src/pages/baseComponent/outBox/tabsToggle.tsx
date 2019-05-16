import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd';
// import routes from '../../page1/routes/index'
import { Link } from 'react-router-dom'
import {delList} from '../../page1/store/actionCreators'
const TabPane = Tabs.TabPane;
class tabsToggle extends Component<any, any> {
	newTabIndex: number;
	[k: string]: any
	constructor(props: any) {
		super(props)
		this.state = {
			activeKey: null,
			listData: props.listData,
			tabLink: true
		}
		this.newTabIndex = 0;
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onChange (activeKey: string) {
		this.setState({activeKey});
	};
	onEdit (targetKey: any, action: any) {
		this[action](targetKey);
	};

	add () {
		const panes = this.state.listData;
		const activeKey = `newTab${this.newTabIndex++}`;
		panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
		this.setState({ panes, activeKey });
	};
	remove (targetKey: string) {
		let activeKey = this.state.activeKey;
		let lastIndex: number = 0;
		this.state.listData.forEach((pane: any, i: number) => {
			if (pane.menukey === targetKey) {
				lastIndex = i - 1;
			}
		});
		const delData = this.state.listData.filter((pane: any) => pane.menukey === targetKey);
		const panes = this.state.listData.filter((pane: any) => pane.menukey !== targetKey);
		if (panes.length && activeKey === targetKey) {
			if (lastIndex >= 0) {
				activeKey = panes[lastIndex].menukey;
			} else {
				activeKey = panes[0].menukey;
			}
		}
		this.setState({ listData: panes, activeKey });
		this.props.deleteTabs(delData[0]);
	};
	componentWillUpdate(nextProps: any, nextState: any) {
		nextState.listData = nextProps.listData;
	}
	render() {
		let { listData, activeKey, tabLink } = this.state;
		let tabsData = null;
		if (listData && listData.length > 0) {
			tabsData = (
				<div className="square-title">
					<Tabs hideAdd onChange={this.onChange} activeKey={activeKey ? activeKey :listData[listData.length - 1].menukey} type="editable-card" className="title-menu" onEdit={this.onEdit}>
						{listData.map((list: any, lindex: number) => {
							return (
								<TabPane key={list.menukey} tab={<Link to={`${list.linkRoute}/111`}>{list.menuSecond}</Link>}></TabPane>
							)
						})}
					</Tabs>
				</div>
			)
		} else {
			tabsData = '';
		}
		return (
			<div>
				{tabsData}
			</div>
		)
	}
}
const mapStateToProps = (state: any) => {
	return {
		listData: state.listData
	}
}
const mapDispatchToProps = (dispatch: any) => {
	return {
		deleteTabs (obj: any) {
			const action = delList(obj);
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(tabsToggle)
