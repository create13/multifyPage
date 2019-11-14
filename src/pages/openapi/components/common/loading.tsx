import React, { Component } from 'react';
import { connect } from 'react-redux'
class Loading extends Component <any, any> {
    constructor(props: any) {
		super(props)
		this.state = {
		}
    }
    render () {
        let {maskStatus} = this.props;
        if (maskStatus) {
            return (
                <div className="global-loading">
                    <p><span></span></p>
                    <p>加载中</p>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}
const mapStateToProps = (state: any) => {
    return {
        maskStatus: state.globalPromp.maskStatus
    }
}
export default connect(mapStateToProps, null)(Loading);