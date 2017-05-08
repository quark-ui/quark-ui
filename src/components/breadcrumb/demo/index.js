import Breadcrumb from '../index';
import { Component } from 'react';
import Icon from '../../icon';
const Crumb = Breadcrumb.Item;

export default class BreadcrumbDemo extends Component {
  render() {
    return (
      <div>
       <Breadcrumb separator=">" hasBackIcon hasHomeIcon>
        <Crumb>home</Crumb>
        <Crumb href='/component/Button'>Button</Crumb>
        <Crumb href='/component/Modal'>Modal</Crumb>
        <Crumb>bbb</Crumb>
      </Breadcrumb>

      <Breadcrumb>
        <Crumb href="/">home</Crumb>
        <Crumb href='/component/Button'>Button</Crumb>
        <Crumb href='/component/Modal'>Modal</Crumb>
        <Crumb>bbb</Crumb>
      </Breadcrumb>
      </div>
    );
  }
}
