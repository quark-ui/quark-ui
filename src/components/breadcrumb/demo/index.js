import { Component } from 'react';
import Breadcrumb from '../../Breadcrumb';

const Crumb = Breadcrumb.Item;

export default class BreadcrumbDemo extends Component {
  render() {
    return (
      <div>
        <Breadcrumb separator=">" hasBackIcon>
          <Crumb>home</Crumb>
          <Crumb href="/component/button">Button</Crumb>
          <Crumb href="/component/steps">Steps</Crumb>
          <Crumb>bbb</Crumb>
        </Breadcrumb>

        <Breadcrumb hasBackIcon>
          <Crumb href="/">home</Crumb>
          <Crumb href="/component/button">Button</Crumb>
          <Crumb href="/component/steps">Steps</Crumb>
          <Crumb>bbb</Crumb>
        </Breadcrumb>
      </div>
    );
  }
}
