import React, { Component } from 'react';
import Progress from '../Progress';

export default class ProgressDemo extends Component {
  render() {
    return (
      <div className="markdown-block">
        <h3>标准进度条</h3>
        <div>
          <Progress percent={30} />
          <Progress percent={70} status="exception" />
          <Progress percent={70} status="pause" />
          <Progress percent={100} status="success" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </div>
        <h3>小型进度条</h3>
        <p>适合放在较狭窄的区域内</p>
        <div style={{ width: 170 }}>
          <Progress percent={30} size={'mini'} />
          <Progress percent={70} size={'mini'} status="exception" />
          <Progress percent={70} size={'mini'} status="pause" />
          <Progress percent={100} size={'mini'} status="success" />
          <Progress percent={100} size={'mini'} />
        </div>
      </div>
    );
  }
}
