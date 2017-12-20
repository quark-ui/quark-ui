//npm run test-unit './src/components/breadcrumb/test/breadcrumb.test.js'

/**
 * Menu test
 * @author yanwei
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
import styles from '../Breadcrumb.css';

Breadcrumb.Item = BreadcrumbItem;


describe('breadcrumb-test-describe----------', () => {

  it('breadcrumb can render', () => {
    const app = shallow(
      <Breadcrumb />);
    expect(app.find(`.${styles['breadcrumb']}`).length).to.equal(1);
    expect(app.find(`.${styles['breadcrumb--icon']}`).length).to.equal(1);
  });

  it('breadcrumb if ele', () => {
    const app = shallow(
      <Breadcrumb>
        <Breadcrumb.Item href="/aa">aa</Breadcrumb.Item>
        <Breadcrumb.Item href="/bb">bb</Breadcrumb.Item>
      </Breadcrumb>);
    expect(app.find(`.${styles['breadcrumb']}`).length).to.equal(1);
  });


  it('Breadcrumb hasBackIcon is true', () => {
    const app = mount(
      <Breadcrumb hasBackIcon />
    );
    expect(app.find(`.${styles['breadcrumb--icon']}`).children()).to.have.length(1);
  });

  it('Breadcrumb hasBackIcon is true && have children', () => {
    const app = mount(
      <Breadcrumb hasBackIcon>
        <Breadcrumb.Item>home</Breadcrumb.Item>
        <Breadcrumb.Item>ccc</Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.baidu.com/">ccc</Breadcrumb.Item>
      </Breadcrumb>);
    expect(app.find(`.${styles['breadcrumb--icon']}`).children()).to.have.length(1);
    app.find('Icon').simulate('click');
    expect(app.find(`.${styles['breadcrumb--icon']}`).children()).to.have.length(1);
  });

  it('Breadcrumb hasHomeIcon is true', () => {
    const app = mount(
      <Breadcrumb hasHomeIcon />
    );
    expect(app.find(`.${styles['breadcrumb--icon']}`).children()).to.have.length(1);
  });

  it('warns on non-Breadcrumb.Item children', () => {
    const MyCom = () => <div>foo</div>;
    const app = mount(
      <Breadcrumb>
        <MyCom />
      </Breadcrumb>);
    expect(app.find(`.${styles['breadcrumb']}`).children()).to.have.length(2);
  });
});

describe('breadcrumbitem-test-describe----------', () => {
  it('BreadcrumbItem can render', () => {
    const app = shallow(
      <Breadcrumb.Item>home</Breadcrumb.Item>
    );
    expect(app.find(`.${styles['breadcrumb--link']}`).length).to.equal(1);
  });

  it('BreadcrumbItem children is null', () => {
    const app = shallow(
      <Breadcrumb.Item />);
    expect(app.find(`.${styles['breadcrumb--link']}`).length).to.equal(0);
  });


  it('BreadcrumbItem have href', () => {
    const app = shallow(
      <Breadcrumb.Item href="/component/steps">home</Breadcrumb.Item>
    );
    expect(app.find('a').length).to.equal(1);
  });

  it('set separator', () => {
    const props = {
      separator: '>',
    };
    const app = shallow(
      <Breadcrumb.Item {...props}>home</Breadcrumb.Item>
    );
    expect(app.find(`.${styles['breadcrumb--separator']}`).text()).to.equal('>');
  });
});
