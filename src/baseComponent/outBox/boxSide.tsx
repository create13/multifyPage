import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom'
import { Menu } from 'antd';
import { connect } from 'react-redux'
import { addList } from '@/store/actionCreators'
const SubMenu = Menu.SubMenu;
class boxSide extends Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
        menuList: [
            {
                menuFirst: '审批',
                menuArray: [
                    { menuSecond: '我提交的审批', linkRoute: '/mySubmitApproval', menukey: '1' },
                    { menuSecond: '代办审批', linkRoute: '/anotherApproval', menukey: '2' },
                    { menuSecond: '我关注的审批', linkRoute: '/attentionApproval', menukey: '3' },
                    { menuSecond: '下属的代办审批', linkRoute: '/subordinatesApproval', menukey: '4' },
                    { menuSecond: '全部审批', linkRoute: '/pageJump', menukey: '5' },
                    { menuSecond: '已办审批', linkRoute: '/finishApproval', menukey: '6' }
                ]
            },
            {
                menuFirst: '技能考核',
                menuArray: [
                    { menuSecond: '过岗项目设置', linkRoute: '/redirectProject', menukey: '7' },
                    { menuSecond: '过岗考核记录管理', linkRoute: '/testTabs', menukey: '8' }
                ],
            },
            {
                menuFirst: '日志',
                menuArray: [
                    { menuSecond: '登录日志', linkRoute: '/mySubmitApproval', menukey: '9' },
                    { menuSecond: '操作日志', linkRoute: '/mySubmitApproval', menukey: '10' }
                ]
            }
        ]
    };
    onOpenChange = (openKeys: any) => {
        const latestOpenKey = openKeys.find((key: any) => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    addMenuList (menu: any) {
        this.props.addMenu(menu);
    }
    render() {
        let { menuList, openKeys } = this.state;
        return (
            <HashRouter>
                <div className="box-side">
                    {menuList.map((item, index) => {
                        return (
                            <Menu mode="inline" key={index + 'menuList'} openKeys={openKeys} onOpenChange={this.onOpenChange} style={{ width: 240 }}>
                                <SubMenu key={index} title={<span><span>{item.menuFirst}</span></span>}>
                                    {item.menuArray.map((menu, indexs) => {
                                        return (
                                            <Menu.Item key={indexs + 'item'}>
                                                <Link to={menu.linkRoute} onClick={() => {this.addMenuList(menu)}}>
                                                    {menu.menuSecond}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })}
                                </SubMenu>
                            </Menu>
                        )
                    })}
                </div>
            </HashRouter>
        );
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        addMenu(data: any) {
            const action = addList(data);
            dispatch(action);
        }
	}
}
export default connect(null, mapDispatchToProps)(boxSide);