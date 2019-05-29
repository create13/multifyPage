import React, { Component } from 'react'
// import WebSocket from '@/utils/webSocket'
import { blueData, addData } from '@/utils/api/index'
import { connect } from 'react-redux'
import multilingual from '@/utils/multilingual'
class PageJump extends Component<any, any> {
    constructor(props: any) {
      super(props)
    
      this.state = {
         
      }
    }
    componentDidMount() {
        // window.location.href="https://www.baidu.com/";
        window.frames.postMessage({ type: "loginOut", name: 111 }, "*")
        // WebSocket({url: 'localhost', port: '8080'});
        blueData({name:'lee'}).then((res: any) => {
        })
        addData().then((w: any) => {

        })
    }
    changeLanguage () {
        multilingual('en_US');
    }
    render() {
        return (
            <div className="page-jump">
                <button onClick={() => {this.changeLanguage()}}>切换语言</button>
                {/* <iframe src="http://192.168.3.211/" id="iframe" className="iframe-content"></iframe> */}
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
	return {
        dataStatus: state.globalPromp.lanStorage
	}
}
export default connect(mapStateToProps, null)(PageJump);
