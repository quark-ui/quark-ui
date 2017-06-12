import { Component } from 'react';
import Button from '../../button';
import Steps from '../Steps';

const Step = Steps.Step;

export default class StepDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    this.setState((preState) => {
      if (preState.current < 3) {
        return { current: preState.current + 1 };
      }
      return { current: 3 };
    });
  }

  handlePrev() {
    this.setState((preState) => {
      if (preState.current > 0) {
        return { current: preState.current - 1 };
      }
      return { current: 0 };
    });
  }

  render() {
    return (
      <div>
        <Button disabled={this.state.current <= 0} onClick={this.handlePrev}>上一步</Button>&nbsp;
        <Button disabled={this.state.current >= 3} onClick={this.handleNext}>下一步</Button>
        <h3>横向步骤条</h3>
        <Steps current={this.state.current} isFinishIcon>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" />
          <Step title="Waiting" />
          <Step title="In Progress" />
        </Steps>
        <Steps current={this.state.current}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
        </Steps>
        <Steps current={this.state.current}>
          <Step title="Finished" />
          <Step title="In Progress" />
          <Step title="Waiting" />
          <Step title="In Progress" />
        </Steps>

        <h3>竖向步骤条</h3>
        <div style={{ width: 200, display: 'inline-block' }}>
          <Steps current={this.state.current} direction="vertical">
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
            <Step title="In Progress" />
          </Steps>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Steps current={this.state.current} direction="vertical" isFinishIcon>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
            <Step title="In Progress" />
          </Steps>
        </div>
      </div>
    );
  }

}
