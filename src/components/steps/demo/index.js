import Steps from '../Steps';

const Step = Steps.Step;

const StepDemo = () => (
  <div>
    <h3>横向步骤条</h3>
    <Steps current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </Steps>
    <Steps current={0}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" />
      <Step title="Waiting" description="This is a description." />
    </Steps>
    <h3>竖向步骤条</h3>
    <Steps current={1} direction="vertical">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  </div>
);

export default StepDemo;
