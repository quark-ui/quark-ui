import { Component } from 'react';
import Trigger from '../Trigger';
import Button from '../../button';
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
    visible: false,
  }
  onChangePlacement = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }
  onChangeActionType = (e) => {
    this.setState({
      action: e.target.value,
    });
  }
  onClosePopup = () => {
    this.setState({
      visible: false,
    });
  }
  onPopupVisibleChange = (visible) => {
    console.log('onPopupVisibleChange', visible);
    this.setState({
      visible,
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
      <div className="markdown-block">
        <h5>普通用法</h5>
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
          <Button>{`${action} me`}</Button>
        </Trigger>
        <h5>手动控制关闭</h5>
        <Trigger
          action={'click'}
          popupVisible={this.state.visible}
          popup={
            <div onClick={this.onClosePopup}>click me to close</div>
          }
          onPopupVisibleChange={this.onPopupVisibleChange}
        >
          <Button>click</Button>
        </Trigger>
      </div>
    );
  }
}
