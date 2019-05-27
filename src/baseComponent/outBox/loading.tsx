import React, { Component } from 'react'
import { Spin } from 'antd';
import { connect } from 'react-redux'
import { changeLoading } from '@/store/actionCreators'
// import global from '@/utils/global'
import '@/static/css/loading.scss'
class Loading extends Component<any, any> {
    render() {
        const spinElement = (
            <Spin tip="Loading...">
        </Spin>
        // <div id="loadingStatus">aaa</div>
        )
        const showLoading = this.props.loadingShow ? spinElement : ''
        return (
            <div className="spin-cneter">
                {showLoading}
            </div>
        )
    }
    public showLoading () {
        console.log('show');
    }
}
const mapStateToProps = (state: any) => {
    console.log('state.globalPromp', state.globalPromp)
    return {
        loadingShow: state.globalPromp.loadingStatus
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeStatus(status: boolean) {
            const action = changeLoading(status);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading)