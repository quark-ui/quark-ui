import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Breadcrumb from '../Breadcrumb';
import BreadcrumbItem from '../BreadcrumbItem';
Breadcrumb.Item = BreadcrumbItem;

import styles from '../Breadcrumb.css';

describe('breadcrumb-test-describe----------', () => {

  it('breadcrumb can render', () => {
    let app = shallow(
      <Breadcrumb>
      </Breadcrumb>
    );
    expect(app.find(`.${styles['breadcrumb']}`).length).to.equal(1);
    expect(app.find(`.${styles['breadcrumb--icon']}`).length).to.equal(1);
  });

  it('BreadcrumbItem can render', () => {
    let app = shallow(
      <Breadcrumb.Item>home</Breadcrumb.Item>
    );
    expect(app.find(`.${styles['breadcrumb--link']}`).length).to.equal(1);
  });

  it('BreadcrumbItem have href', () => {
    let app = shallow(
      <Breadcrumb.Item href="/component/steps">home</Breadcrumb.Item>
    );
    expect(app.find('a').length).to.equal(1);
  });

  it('Breadcrumb hasBackIcon is true', () => {
    let app = mount(
      <Breadcrumb hasBackIcon>
      </Breadcrumb>
    );
    expect(app.find(`.${styles['breadcrumb--icon']}`).children()).to.have.length(1);

  });

  it('Breadcrumb hasHomeIcon is true', () => {
    let app = mount(
      <Breadcrumb hasHomeIcon>
      </Breadcrumb>
    );
    expect(app.find(`.${styles['breadcrumb--icon']}`).children()).to.have.length(1);

  });


});

