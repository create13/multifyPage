import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class redirectProject extends Component<any, any> {
    constructor(props: any) {
        super(props)
            console.log('props', props)
        this.state = {
            
        }
    }
    
    componentDidMount () {
        this.props.history.push('/finishApproval');
    }
    render() {
    return (
        <div>
            <Redirect to='https://www.baidu.com/' />
        </div>
    )
    }
}