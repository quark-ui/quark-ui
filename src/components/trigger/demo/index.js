import { Component } from 'react';
import Trigger from '../Trigger';
import Radio, { RadioGroup } from '../../radio';

const PLACEMENT_ENUM = {
  left: {
    points: ['cr', 'cl'],
  },
  right: {
    points: ['cl', 'cr'],
  },
  top: {
    points: ['bc', 'tc'],
  },
  bottom: {
    points: ['tc', 'bc'],
  },
  topLeft: {
    points: ['bl', 'tl'],
  },
  topRight: {
    points: ['br', 'tr'],
  },
  bottomRight: {
    points: ['tr', 'br'],
  },
  bottomLeft: {
    points: ['tl', 'bl'],
  },
};

const ActionType = [
  'hover',
  'click',
];

export default class TriggerDemo extends Component {
  state = {
    placement: 'bottom',
    action: 'click',
  }
  onChangePlacement = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }
  onChangeActionType = (e) => {
    console.log(e.target.value)
    this.setState({
      action: e.target.value,
    });
  }
  renderPlacementSelector() {
    const { placement } = this.state;
    return (
      <select value={placement} onChange={this.onChangePlacement}>
        {
          Object.keys(PLACEMENT_ENUM).map(p => (
            <option key={p}>{p}</option>
          ))
        }
      </select>
    );
  }
  render() {
    const {
      placement,
      action,
    } = this.state;
    return (
      <div>
        <label htmlFor="placement">对齐方式</label>
        {
          this.renderPlacementSelector()
        }
        <label htmlFor="action">触发方式</label>
        <RadioGroup value={action} onChange={this.onChangeActionType}>
          {
            ActionType.map(type => (
              <Radio
                value={type}
                key={type}
              >{type}</Radio>
            ))
          }
        </RadioGroup>
        <Trigger
          action={action}
          popup={
            <div style={{ border: '1px solid #000', padding: 10, background: '#fff' }}>popup content</div>
          }
          placement={PLACEMENT_ENUM[placement].points}
          mouseLeaveDelay={100}
        >
          {`${action} me`}
        </Trigger>
      </div>
    );
  }
}
