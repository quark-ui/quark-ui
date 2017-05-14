import { Component } from 'react';
import Breadcrumb from '../../breadcrumb';

const Crumb = Breadcrumb.Item;

export default class BreadcrumbDemo extends Component {
  render() {
    return (
      <div>
        <Breadcrumb separator=">" hasBackIcon>
          <Crumb>home</Crumb>
          <Crumb href="/component/Button">Button</Crumb>
          <Crumb href="/component/Modal">Modal</Crumb>
          <Crumb>bbb</Crumb>
        </Breadcrumb>

        <Breadcrumb hasBackIcon>
          <Crumb href="/">home</Crumb>
          <Crumb href="/component/Button">Button</Crumb>
          <Crumb href="/component/Modal">Modal</Crumb>
          <Crumb>bbb</Crumb>
        </Breadcrumb>
      </div>
    );
  }
}
