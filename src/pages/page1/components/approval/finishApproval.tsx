import React, { Component } from 'react'

export default class finishApproval extends Component {
    constructor(props:any) {
        super(props)
        
        this.state = {
            newsList: [
                {listId: 1, title: '习近平走进青年一代 八张海报感受暖心瞬间'},
                {listId: 2, title: '李克强：力争年底基本取消高速公路省界收费站'},
                {listId: 3, title: '广东高考移民事件正调查 取消移民考生高考成绩'},
                {listId: 4, title: '美向中东部署航母震慑伊朗 或启动对伊新一轮制裁'}
            ]
        }
    }
    
    render() {
        return (
            <div>
                <div></div>
            </div>
        )
    }
}
