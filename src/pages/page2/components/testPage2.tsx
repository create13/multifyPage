import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editList } from '@/store/actionCreators';
class TestPage2 extends Component<any, any> {
    constructor(props: any) {
      super(props)
    
      this.state = {
      }
    }
  editLast () {
    	this.props.editLastData('test123');
  }
  render() {
    return (
      <div>
        testPage2
        <div>{this.props.editModule}</div>
            <div>
          <button onClick={() => this.editLast()}>点击修改最后一个标签内容</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state: any) => {
	return {
		editModule: state.operationList.listData
	}
}
const mapDispatchToProps = (dispatch: any) => {
	return {
		editLastData (data: string) {
			const action = editList(data)
			dispatch(action);
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TestPage2);