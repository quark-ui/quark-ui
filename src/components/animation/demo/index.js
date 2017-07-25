import { Component } from 'react';
import Animation from '../Animation';
import Select from '../../select';
import Button from '../../button';
import MOTIONS, { TIMING_FUNCTION } from '../motions';
const { Option, OptGroup } = Select;


export default class AnimationDemo extends Component {
  state = {
    timeFunction: 'ease',
    status: false,
    motion: 'fade',
  };
  render() {
    const TFS = Object.keys(TIMING_FUNCTION);
    return (
      <div>
        <h3>TIME FUNCTION</h3>
        <Select
          value={this.state.timeFunction}
          onChange={({ value }) => {
            this.setState({
              timeFunction: value,
            });
          }}
        >
          {
            TFS.map(name => (
              <Option key={name} value={name}>{name}</Option>
            ))
          }
        </Select>
        <h3>MOTIONS</h3>
        <Select
          value={this.state.motion}
          onChange={({ value }) => {
            this.setState({
              motion: value,
            });
          }}
        >
          {
            Object.keys(MOTIONS).map(name => (
              <Option key={name} value={name}>{name}</Option>
            ))
          }
        </Select>
        <Button
          onClick={() => {
            this.setState({
              status: !this.state.status,
            });
          }}
        >toggle</Button>
        <Animation
          in={this.state.status}
          timingFunction={this.state.timeFunction}
          motion={this.state.motion}
        >
          xxxx
        </Animation>
      </div>
    );
  }
}
