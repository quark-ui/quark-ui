import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Spin from '../Spin';
import Alert from '../../Alert';


import styles from '../Spin.css';

describe('spin-test-describe----------', () => {

  it('spin can render', () => {
    let app = shallow(<Spin size="small" />);
    expect(app.hasClass(styles['small'])).to.equal(true);
  });

  it('propTypes can do', () => {
    let app = shallow(<Spin size="small" tip="loading" />);
    expect(app.find(`p.${styles['qui-spin-text']}`).text()).to.equal('loading');
  });

  it('spin in Alert', () => {
  });


});

