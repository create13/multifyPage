import React, { Component } from 'react'
// import WebSocket from '@/utils/webSocket'
import { blueData, addData } from '@/api/index'
import multilingual from '@/utils/multilingual'
import {changeLoading} from '@/store/actionCreators'
import store from '@/store/index'
// console.log('changeLoading', changeLoading);
// console.log('store', store);
export default class PageJump extends Component{
    constructor(props: any) {
      super(props)
    
      this.state = {
         
      }
    }
    componentWillUnmount () {
        console.log('componentWillUnmount');
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
        // multilingual('en_US');
        const action = changeLoading(true);
        store.dispatch(action);
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
