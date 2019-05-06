import React, { Component } from 'react'

export default class PageJump extends Component {
    componentDidMount() {
        window.location.href = "https://www.taobao.com/";
        console.log('componentDidMount')
    }
    render() {
        return (
            <div>
                pageJump
        </div>
        )
    }
}
