import React, { Component } from 'react';
import Progress from '../Progress';

export default class ProgressDemo extends Component {
  render() {
    return (
      <div>
        1、标准的进度条
        <div>
          <Progress percent={30} />
          <Progress percent={50} status="active" />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
          <Progress percent={50} showInfo={false} />
        </div>
        2、小型进度条，适合放在较狭窄的区域内。
        <div style={{ width: 170 }}>
          <Progress percent={30} strokeWidth={5} />
          <Progress percent={50} strokeWidth={5} status="active" />
          <Progress percent={70} strokeWidth={5} status="exception" />
          <Progress percent={100} strokeWidth={5} />
        </div>
      </div>
    );
  }
}
