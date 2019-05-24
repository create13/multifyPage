import React, { Component } from 'react'
// import WebSocket from '@/utils/webSocket'
import { blueData, addData } from '@/api/index'
import multilingual from '@/utils/multilingual'
export default class PageJump extends Component{
    constructor(props: any) {
      super(props)
    
      this.state = {
         
      }
    }
    componentDidMount() {
        // window.location.href="https://www.baidu.com/";
        window.frames.postMessage({ type: "loginOut", name: 111 }, "*")
        // WebSocket({url: 'localhost', port: '8080'});
        blueData().then((res: any) => {
            console.log('res', res)
        })
        addData().then((w: any) => {
            console.log('w', w);

        })
        // switchLanguage().then((lan: any) => {
        //     console.log('lan.data', lan)
        // })
        multilingual();
    }
    changeLanguage () {
        console.log('object')
    }
    render() {
        return (
            <div className="page-jump">
                <button onClick={() => this.changeLanguage()}>切换语言</button>
                {/* <iframe src="http://192.168.3.211/" id="iframe" className="iframe-content"></iframe> */}
            </div>
        )
    }
}
