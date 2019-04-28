import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom'
import routes from '../../routes/index'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
class boxSide extends Component {
    constructor (props: any) {
        super(props)
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
        menuList: [
            {menuFirst:'审批',
            menuArray:[
                {menuSecond:'我提交的审批'},
                {menuSecond:'代办审批'},
                {menuSecond:'我关注的审批'},
                {menuSecond:'下属的代办审批'},
                {menuSecond:'全部审批'},
                {menuSecond:'已办审批'}
            ]
            },
            {menuFirst:'技能考核',
            menuArray:[
                {menuSecond:'过岗项目设置'},
                {menuSecond:'过岗考核记录管理'}
            ],
            },
            {menuFirst:'日志',
            menuArray:[
                {menuSecond:'登录日志'},
                {menuSecond:'操作日志'}
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
    render() {
        let { menuList, openKeys } = this.state;
        return (
        <HashRouter>
            <div className="box-side">
                {menuList.map((item, index) => {
                    return (
                        <Menu mode="inline" key={index + 1} openKeys={ openKeys } onOpenChange={this.onOpenChange} style={{ width: 240 }}>
                            <SubMenu key={index} title={<span><span>{item.menuFirst}</span></span>}>
                                {item.menuArray.map((menu, indexs) => {
                                    return (
                                        <Menu.Item key={indexs}>
                                            {routes.map((route, rIndex) => {
                                                if (!route.exact) {
                                                    return (
                                                        <Link key={rIndex} to={route.path}>{ menu.menuSecond }</Link>
                                                    )
                                                }
                                            })}
                                        {/* { menu.menuSecond } */}
                                        </Menu.Item>
                                    )
                                })}
                            </SubMenu>
                        </Menu>
                    )
                })}
                {/* <Menu>
                <SubMenu>
                    <Menu.Item><Link to="/boxContent/mySubmitApproval">演示</Link></Menu.Item>
                </SubMenu>
                </Menu> */}
            </div>
        </HashRouter>
        );
    }
    }

export default boxSide;