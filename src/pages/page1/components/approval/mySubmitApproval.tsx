import React, { Component } from 'react';
class MySubmitApproval extends Component {
  constructor(props:any) {
    super(props)
  }
  render() {
    console.log('props', this.props);
    return (
      <div className="submit-out">
      MySubmitApproval
      </div>
    );
  }
}
export default MySubmitApproval;