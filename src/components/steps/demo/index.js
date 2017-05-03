import Steps from '../Steps';
import Icon from '../../icon';
const Step = Steps.Step;

import { Component } from 'react';

export default class StepsDemo extends Component {
  render() {
    return (
      <div>
        <h3>横向步骤条</h3>
        <Steps current={2}>
          <Step title="Finished" description="This is a description."></Step>
          <Step title="In Progress"></Step>
          <Step title="Waiting"></Step>
        </Steps>
        <h3>竖向步骤条</h3>
        <Steps current={1} direction="vertical">
          <Step title="Finished" description="This is a description."></Step>
          <Step title="In Progress" description="This is a description." icon={<Icon name="arrow-left" size={14}></Icon>}></Step>
          <Step title="Waiting" description="This is a description."></Step>
        </Steps>
      </div>
    );
  }
}
