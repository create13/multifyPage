import React, { Component } from 'react';
import { Menu, Icon, Input, Avatar } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;
class boxHeader extends Component {
    state = {
        current: 'mail',
    }
    
    handleClick(e: any) {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
    }
  render() {
    return (
        <div className="box-header">
            <div className="layout-header">
                <div className="left-content">
                <Avatar size={64} icon="user" />
                <span className="person-info">张某某</span>     
                </div>
                    <Search placeholder="input search text" onSearch={value => console.log(value)} style={{ width: 200 }}/>
                    <Menu
                        onClick={(e) => {this.handleClick(e)}}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                        <Icon type="mail" />Navigation One
                        </Menu.Item>
                        <Menu.Item key="app">
                        <Icon type="appstore" />Navigation Two
                        </Menu.Item>
                        <Menu.Item key="Navigation">
                        <Icon type="setting" />Navigation Two
                        </Menu.Item>
                        <Menu.Item key="one">
                        <Icon type="calendar" />Navigation Two
                        </Menu.Item>
                    </Menu>
            </div>
        </div>
    );
  }
}

export default boxHeader;
