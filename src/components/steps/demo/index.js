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
      <div className="markdown-block">
        <h3><Button disabled={this.state.current <= 0} onClick={this.handlePrev}>上一步</Button>&nbsp;
          <Button disabled={this.state.current >= 3} onClick={this.handleNext}>下一步</Button></h3>
        <h3>横向步骤条</h3>
        <Steps current={this.state.current} style={{ marginBottom: 10 }}>
          <Step title="步骤1" />
          <Step title="步骤2" />
          <Step title="步骤3" />
          <Step title="步骤4" />
        </Steps>
        <Steps current={this.state.current} isFinishIcon style={{ marginBottom: 10 }}>
          <Step title="已完成" />
          <Step title="进行中" />
          <Step title="未进行" />
          <Step title="未进行" />
        </Steps>
        <Steps current={this.state.current} style={{ marginBottom: 10 }}>
          <Step title="步骤1" description="这是一段很长很长很长的描述性文字" />
          <Step title="步骤2" description="这是一段很长很长很长的描述性文字" />
          <Step title="步骤3" description="这是一段很长很长很长的描述性文字" />
          <Step title="步骤4" description="这是一段很长很长很长的描述性文字" />
        </Steps>

        <h3>竖向步骤条</h3>
        <div style={{ width: 400, display: 'inline-block' }}>
          <Steps current={this.state.current} direction="vertical">
            <Step title="步骤1" description="这是一段很长很长很长的描述性文字" />
            <Step title="步骤2" description="这是一段很长很长很长的描述性文字" />
            <Step title="步骤3" description="这是一段很长很长很长的描述性文字" />
            <Step title="步骤4" />
          </Steps>
        </div>
        <div style={{ display: 'inline-block' }}>
          <Steps current={this.state.current} size={'small'} direction="vertical" isFinishIcon>
            <Step title="已完成" description="这是一段很长很长很长的描述性文字" />
            <Step title="进行中" description="这是一段很长很长很长的描述性文字" />
            <Step title="未进行" description="这是一段很长很长很长的描述性文字" />
            <Step title="未进行" description="这是一段很长很长很长的描述性文字" />
          </Steps>
        </div>
      </div>
    );
  }

}
