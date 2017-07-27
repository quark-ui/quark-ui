import { Component } from 'react';
import Animation from '../Animation';
import Select from '../../select';
import Button from '../../button';
import MOTIONS, { TIMING_FUNCTION } from '../motions';
const { Option } = Select;

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
            MOTIONS.map(name => (
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
        <div>
          <Animation
            in={this.state.status}
            timingFunction={this.state.timeFunction}
            motion={this.state.motion}
            style={{
              marginTop: 20,
              display: 'inline-block',
            }}
          >
            <div style={{
              width: 100,
              height: 100,
              border: '1px solid var(--brand-primary)',
            }}></div>
          </Animation>
        </div>
      </div>
    );
  }
}
