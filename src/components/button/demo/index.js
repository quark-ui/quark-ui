import Button from '../Button';
import { Component } from 'react';

export default class ButtonDemo extends Component {
  render() {
    return (
      <div>
        size:
        <Button size="small">small</Button>
        <Button>medium</Button>
        <Button size="large">large</Button>
        type:
        <Button type="primary">primary</Button>
        <Button type="secondary">normal</Button>
        <Button type="outline">outline</Button>
        <Button disabled>disabled</Button>
      </div>
    );
  }
}
