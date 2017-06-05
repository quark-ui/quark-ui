import { Component } from 'react';
import Breadcrumb from '../index';


export default class BreadcrumbDemo extends Component {
  render() {
    return (
      <div>
        <Breadcrumb separator=">" hasBackIcon>
          <Breadcrumb.Item>home</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/button">Button</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/steps">Steps</Breadcrumb.Item>
          <Breadcrumb.Item>bbb</Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb hasBackIcon>
          <Breadcrumb.Item href="/">home</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/button">Button</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/steps">Steps</Breadcrumb.Item>
          <Breadcrumb.Item>bbb</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
