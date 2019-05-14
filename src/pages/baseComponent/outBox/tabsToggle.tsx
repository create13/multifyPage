import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
class tabsToggle extends Component<any, any> {
	newTabIndex: number;
	[k: string]: any
	constructor(props: any) {
		super(props)

		this.state = {
			activeKey: '1',
			listData: props.listData
		}
		this.newTabIndex = 0;
	}
	onChange (activeKey: string) {
		this.setState({ activeKey });
	};
	onEdit = (targetKey: any, action: any) => {
		this[action](targetKey);
	};

	add = () => {
		const panes = this.state.listData;
		const activeKey = `newTab${this.newTabIndex++}`;
		panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
		this.setState({ panes, activeKey });
	};
	remove = (targetKey: string) => {
		let activeKey = this.state.activeKey;
		let lastIndex: number = 0;
		this.state.listData.forEach((pane: any, i: number) => {
			if (pane.menukey === targetKey) {
				lastIndex = i - 1;
			}
		});
		const panes = this.state.listData.filter((pane: any) => pane.menukey !== targetKey);
		console.log('panes', panes);
		if (panes.length && activeKey === targetKey) {
			if (lastIndex >= 0) {
				activeKey = panes[lastIndex].menukey;
			} else {
				activeKey = panes[0].menukey;
			}
		}
		console.log('panes', panes);
		this.setState({ listData: panes, activeKey });
	};
	componentWillUpdate(nextProps: any, nextState: any) {
		nextState.listData = nextProps.listData;
	}
	render() {
		let { listData } = this.state;
		let tabsData = null;
		if (listData && listData.length > 0) {
			tabsData = (
				<Tabs onChange={this.onChange} activeKey={this.state.activeKey} type="editable-card" className="title-menu" onEdit={this.onEdit}>
					{listData.map((list: any, lindex: number) => {
						return (
							<TabPane key={list.menukey} tab={list.menuSecond}>{list.menuSecond}</TabPane>
						)
					})}
				</Tabs>
			)
		} else {
			tabsData = <div></div>
		}
		return (
			<div className="square-title">
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
export default connect(mapStateToProps)(tabsToggle)
