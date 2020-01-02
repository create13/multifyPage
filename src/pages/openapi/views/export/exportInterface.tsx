import React, { Component } from 'react'
import '@/static/sass/controllers/home.scss'
import '@/static/sass/controllers/exportInterface.scss'
// import ClaimList from '../approval/claimList';
import { getApiList, getModel, exportExcel } from '@/api'
import { connect } from 'react-redux'
import { Radio, Icon, Table, Modal } from 'antd';
import { changeMenu, menuStatus, headerSelect } from '@/store/actionCreators'
import { Link } from 'react-router-dom'
// const rowSelection = {
//     onChange: (selectedRowKeys: any, selectedRows: any) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//       return selectedRows;
//     }
// }
const columns = [
    {
        title: '接口名称',
        dataIndex: 'apiName',
        render: (text: any, record: any) => <Link className="link-type" target="_blank" to={`/typeDetails/${record.id}/${record.apiModuleId}`}>{text}</Link>
    },
    {
        title: '接口描述',
        dataIndex: 'apiDesc'
    },
    {
        title: '是否需要授权',
        dataIndex: 'apiIsNeedAuth',
        render: (auth: any) => <span>{auth ? '是': '否'}</span>
    },
];
class ExportInterface extends Component<any, any> {
    constructor(props: any) {
        super(props)
        
        this.state = {
            tableList: [],
            moduleList: [],
            moduleId: null,
            // menuRecord: '',
            menuList: [],
            selectValue: 1,
            menukey: '',
            selectedRowKeys: [],
            allSelectData: [],
            selectedAttendance: [],
            selectedCommon: [],
            selectedHr: [],
            selectedOauth: [],
            selectedWorkflow: [],
            totalSelect: [],
            visibleModal: false
        }
    }
    getModelList (moduleId: any) {
        getModel({moduleId: moduleId}).then((res: any) => {
            if (Object.keys(res.data).length > 0) {
                if (res.data.apis.length > 0) {
                    res.data.apis.forEach((res: any)=> {
                        res.key = res.id;
                    })
                    this.setState({
                        tableList: res.data.apis
                    })
                } else {
                    this.setState({
                        tableList: []
                    })
                }
            }

        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    componentWillMount () {
        this.props.menuStatus(false);
        this.props.changeMenu([]);
        this.props.headerSelect(false);
        getApiList().then((res: any) => {
            let menuList = [];
            let menuArray = [];
            let firstId:any = {};
            if (res.data.length > 0) {
                for (let project of res.data) {
                    let objOuter: any = {};
                    let { projectName: menuFirst } = project.project;
                    // moduleId = project.modules[0].id;
                    objOuter.menuFirst = menuFirst;
                    // this.setState({
                    //     menuRecord: menuFirst
                    // })
                    let modules = project.modules;
                    firstId = {api: modules[0].id};
                    // this.props.storageId(firstId);
                    for (let single of modules) {
                        let obj: any = {};
                        let {moduleName: menuSecond, id: menukey} = single;
                        obj.menuSecond = menuSecond;
                        obj.linkRoute = `/apiDocument/${menukey}`
                        obj.menukey = menukey;
                        menuArray.push(obj);
                        objOuter.menuArray = menuArray;
                    }
                    menuList.push(objOuter);
                    console.log('menuList', menuList);
                    let menukey = menuList[0].menuArray[0].menukey
                    this.setState({
                        menuList,
                        menukey
                    });
                    this.getModelList(menuList[0].menuArray[0].menukey);
                }
            }
        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    changeMenukey (key: string) {
        this.setState({
            menukey: key
        })
        let totalSelect:any[] = this.state.totalSelect;
        totalSelect = totalSelect.concat(this.state.allSelectData);
        let obj:any = {};
        totalSelect = totalSelect.reduce((cur: any, next: any) => {
            obj[next.id] ? '': obj[next.id] = true && cur.push(next);
            return cur;
        }, [])
        this.setState({
            totalSelect
        })
        this.getModelList(key);
    }
    onChange = (e: any) => {
        this.setState({
            selectValue: e.target.value,
        });
    };
    onSelectChange = (selectedRowKeys: any, selectedRows: any) => {
        console.log('selectedRows', selectedRows);
        this.setState({
            allSelectData: selectedRows
        })
        if (this.state.menukey == 'attendance') {
            this.setState({
                selectedAttendance: selectedRows
            })
        } else if (this.state.menukey == 'common') {
            this.setState({
                selectedCommon: selectedRows
            })
        } else if (this.state.menukey == 'hr') {
            this.setState({
                selectedHr: selectedRows
            })
        } else if (this.state.menukey == 'oauth') {
            this.setState({
                selectedOauth: selectedRows
            })
        } else if (this.state.menukey == 'workflow') {
            this.setState({
                selectedWorkflow: selectedRows
            })
        }
        this.setState({ selectedRowKeys});
    };
    exportSelect () {
        let total = this.state.totalSelect.concat(this.state.allSelectData);
        let obj:any = {};
        total = total.reduce((cur: any, next: any) => {
            obj[next.id] ? '': obj[next.id] = true && cur.push(next);
            return cur;
        }, [])
        console.log('total', total);
        this.setState({
            totalSelect: total,
            visibleModal: true
        })

    }
    exportExcelData () {
        console.log('this.state.totalSelect', this.state.totalSelect)
        let apiIds:any[] = [];
        this.state.totalSelect.forEach((res: any) => {
            apiIds.push(res.id);
        })
        let paramObj:any = {
            apiIds,
            fileType: 'excel'
        }
        exportExcel(paramObj).then((res:any) => {
            this.setState({
                visibleModal: false
            });
            window.open(`${this.props.apiName}info/export?fileId=${res.data}`);
        }).catch((err: any) => {
            console.log('err', err);
        })
    }
    handleOk = (e: any) => {
        this.exportExcelData();
      };
    
    handleCancel = (e:any) => {
    this.setState({
        visibleModal: false
    });
    };
    changeTitle = (apiName: string, apiDetail: string, apiDesc: string) => {
        let passObj: any = {};
        passObj.menuSecond = apiName;
        passObj.menuDes = apiDesc;
        passObj.menuDetail = apiDetail;
        localStorage.setItem('typeData', JSON.stringify(passObj));
    }
    render() {
        let { tableList, menuList, menukey, selectedRowKeys, selectedAttendance, selectedCommon, selectedHr, selectedOauth, selectedWorkflow} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className="export-interface">
                <div className="header-title">
                    {/* <div className="left-search">
                        <input type="text" className="search-info" />
                        <span>
                            <Icon type="search" style={{ fontSize: '14px', color: '#fff' }} />
                        </span>
                    </div> */}
                    <div className="export-format">导出格式：
                        <Radio.Group onChange={this.onChange} value={this.state.selectValue}>
                            <Radio value={1}>excel</Radio>
                            {/* <Radio value={2}>B</Radio>
                            <Radio value={3}>C</Radio>
                            <Radio value={4}>D</Radio> */}
                        </Radio.Group>
                    </div>
                    <div className="export-data" onClick={this.exportSelect.bind(this)}>导出接口</div>
                </div>
                <div className="container">
                    <div className="page-container">
                        <div className="box-side">
                            <ul className="menu">
                                <li>
                                    {menuList.map((item: any, index: number) => {
                                        return (
                                            <div key={index + 'submenu'}>
                                                <div>{item.menuFirst}</div>
                                                <ul>
                                                    {item.menuArray.map((menu: any, indexs: number) => {
                                                        return (
                                                            <li key={menu.menukey} onClick={() => {this.changeMenukey(menu.menukey)}}>
                                                                <a className={menu.menukey == menukey ? 'selected': ''}>
                                                                    <p>
                                                                        {menu.menuSecond}
                                                                        {/* <span className="blue-circle"> */}
                                                                        {
                                                                            selectedAttendance.length > 0 && selectedAttendance[0].apiModuleId == menu.menukey ? <span className="blue-circle">{selectedAttendance.length}</span>:
                                                                            selectedCommon.length > 0 && selectedCommon[0].apiModuleId == menu.menukey ? <span className="blue-circle">{selectedCommon.length}</span>:
                                                                            selectedHr.length > 0 && selectedHr[0].apiModuleId == menu.menukey ? <span className="blue-circle">{selectedHr.length}</span>:
                                                                            selectedOauth.length > 0 && selectedOauth[0].apiModuleId == menu.menukey ? <span className="blue-circle">{selectedOauth.length}</span>:
                                                                            selectedWorkflow.length > 0 && selectedWorkflow[0].apiModuleId == menu.menukey ? <span className="blue-circle">{selectedWorkflow.length}</span>:''
                                                                        }
                                                                        {/* </span> */}
                                                                    </p>
                                                                </a>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        )
                                    })}
                            </li>
                        </ul>
                    </div>
                    <Table rowSelection={rowSelection}  columns={columns} pagination={{ pageSize: 10 }} dataSource={tableList}
                        onRow={record => {
                            return {
                                onClick: (event: any) => {
                                    this.changeTitle(record.apiName, record.apiDetail, record.apiDesc)
                                }
                            };
                        }}
                    />
                </div>
            </div>
                <Modal title="信息" visible={this.state.visibleModal} cancelText="取消" centered={true} okText="确定" onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>确定导出所选接口文档？</p>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        apiName: state.globalPromp.apiName
    }
}
const mapDispatchToProps = (dispatch: any) => {
	return {
        changeMenu(data: any) {
            const action = changeMenu(data);
            dispatch(action);
        },
        menuStatus(data: any) {
            const action = menuStatus(data);
            dispatch(action);
        },
        headerSelect (data: any) {
            const action = headerSelect(data);
            dispatch(action);   
        }
	}
}
export default connect (mapStateToProps, mapDispatchToProps)(ExportInterface)
