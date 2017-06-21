import { Component } from 'react';
import Breadcrumb from '../index';

export default class BreadcrumbDemo extends Component {
  render() {
    return (
      <div className="markdown-block">
        <h3>基本面包屑</h3>
        <Breadcrumb>
          <Breadcrumb.Item>home</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/button">Button</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/steps">Steps</Breadcrumb.Item>
          <Breadcrumb.Item>bbb</Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb separator=">">
          <Breadcrumb.Item>home</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/button">Button</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/steps">Steps</Breadcrumb.Item>
          <Breadcrumb.Item>bbb</Breadcrumb.Item>
        </Breadcrumb>

        <h3>带返回的面包屑</h3>
        <Breadcrumb hasBackIcon >
          <Breadcrumb.Item href="/">home</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/button">Button</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/steps">Steps</Breadcrumb.Item>
          <Breadcrumb.Item>bbb</Breadcrumb.Item>
        </Breadcrumb>

        <Breadcrumb hasBackIcon separator=">">
          <Breadcrumb.Item href="/">home</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/button">Button</Breadcrumb.Item>
          <Breadcrumb.Item href="/component/steps">Steps</Breadcrumb.Item>
          <Breadcrumb.Item>bbb</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
