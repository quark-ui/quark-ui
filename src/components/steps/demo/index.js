import Steps from '../Steps';
const Step = Steps.Step;

import { Component } from 'react';

export default class StepsDemo extends Component {
  render() {
    return (
      <div>
        <h3>横向步骤条</h3>
        <Steps current={1}>
          <Step title="Finished" description="This is a description."></Step>
          <Step title="In Progress"></Step>
          <Step title="Waiting"></Step>
        </Steps>
        <Steps current={0}>
          <Step title="Finished" description="This is a description."></Step>
          <Step title="In Progress"></Step>
          <Step title="Waiting" description="This is a description."></Step>
        </Steps>
        <h3>竖向步骤条</h3>
        <Steps current={1} direction="vertical">
          <Step title="Finished" description="This is a description."></Step>
          <Step title="In Progress" description="This is a description."></Step>
          <Step title="Waiting" description="This is a description."></Step>
        </Steps>
      </div>
    );
  }
}
