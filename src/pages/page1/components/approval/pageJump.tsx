import React, { Component } from 'react'
import WebSocket from '../../utils/webSocket'
export default class PageJump extends Component{
    constructor(props: any) {
      super(props)
    
      this.state = {
         
      }
    }
    componentDidMount() {
        // window.location.href="https://www.baidu.com/";
        window.frames.postMessage({ type: "loginOut", name: 111 }, "*")
        WebSocket({name: 'lee', age: 24});
    }
    render() {
        return (
            <div className="page-jump">
                <iframe src="http://192.168.3.211/" id="iframe" className="iframe-content"></iframe>
            </div>
        )
    }
}
