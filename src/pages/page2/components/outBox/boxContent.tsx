import React, { Component } from 'react';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
function onChange(date:any, dateString:any) {
  console.log(date, dateString);
}
class BoxContent extends Component {
  render() {
    return (
      <div className="box-content">
        <DatePicker onChange={onChange} />
      </div>
    );
  }
}

export default BoxContent;