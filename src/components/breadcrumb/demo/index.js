import Breadcrumb from '../index';
import { Component } from 'react';

export default class BreadcrumbDemo extends Component {
  render() {
    return (
       <Breadcrumb separator="&gt;">
        <Breadcrumb.Item href='/'>xxx</Breadcrumb.Item>
        <Breadcrumb.Item href='/Button'>Button</Breadcrumb.Item>
        <Breadcrumb.Item href='/Modal'>Modal</Breadcrumb.Item>
        <Breadcrumb.Item>bbb</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
