webpackJsonp([13],{cJNF:function(t,n){t.exports='import { Component } from \'react\';\nimport Button from \'../../button\';\nimport Steps from \'../Steps\';\n\nconst Step = Steps.Step;\n\nexport default class StepDemo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      current: 0,\n    };\n    this.handleNext = this.handleNext.bind(this);\n    this.handlePrev = this.handlePrev.bind(this);\n  }\n\n  handleNext() {\n    this.setState((preState) => {\n      if (preState.current < 3) {\n        return { current: preState.current + 1 };\n      }\n      return { current: 3 };\n    });\n  }\n\n  handlePrev() {\n    this.setState((preState) => {\n      if (preState.current > 0) {\n        return { current: preState.current - 1 };\n      }\n      return { current: 0 };\n    });\n  }\n\n  render() {\n    return (\n      <div className="markdown-block">\n        <h3><Button disabled={this.state.current <= 0} onClick={this.handlePrev}>上一步</Button>&nbsp;\n          <Button disabled={this.state.current >= 3} onClick={this.handleNext}>下一步</Button></h3>\n        <h3>横向步骤条</h3>\n        <Steps current={this.state.current} style={{ marginBottom: 10 }}>\n          <Step title="步骤1" />\n          <Step title="步骤2" />\n          <Step title="步骤3" />\n          <Step title="步骤4" />\n        </Steps>\n        <Steps current={this.state.current} isFinishIcon style={{ marginBottom: 10 }}>\n          <Step title="已完成" />\n          <Step title="进行中" />\n          <Step title="未进行" />\n          <Step title="未进行" />\n        </Steps>\n        <Steps current={this.state.current} style={{ marginBottom: 10 }}>\n          <Step title="步骤1" description="这是一段很长很长很长的描述性文字" />\n          <Step title="步骤2" description="这是一段很长很长很长的描述性文字" />\n          <Step title="步骤3" description="这是一段很长很长很长的描述性文字" />\n          <Step title="步骤4" description="这是一段很长很长很长的描述性文字" />\n        </Steps>\n\n        <h3>竖向步骤条</h3>\n        <div style={{ width: 400, display: \'inline-block\' }}>\n          <Steps current={this.state.current} direction="vertical">\n            <Step title="步骤1" description="这是一段很长很长很长的描述性文字" />\n            <Step title="步骤2" description="这是一段很长很长很长的描述性文字" />\n            <Step title="步骤3" description="这是一段很长很长很长的描述性文字" />\n            <Step title="步骤4" />\n          </Steps>\n        </div>\n        <div style={{ display: \'inline-block\' }}>\n          <Steps current={this.state.current} size={\'small\'} direction="vertical" isFinishIcon>\n            <Step title="已完成" description="这是一段很长很长很长的描述性文字" />\n            <Step title="进行中" description="这是一段很长很长很长的描述性文字" />\n            <Step title="未进行" description="这是一段很长很长很长的描述性文字" />\n            <Step title="未进行" description="这是一段很长很长很长的描述性文字" />\n          </Steps>\n        </div>\n      </div>\n    );\n  }\n\n}\n'}});
//# sourceMappingURL=13.eff41c7f935eb4d81525.js.map