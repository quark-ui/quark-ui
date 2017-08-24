import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Icon from '../Icon';
import Icons from '../icons/';
import styles from '../Icon.css';

describe('icon-test-describe----------', () => {

  it('icon can render', () => {
    const props = {
      size:36,
      name:'account',
      color:'#3a98e0'
    }
    let app = shallow(
      <Icon {...props} />
    );
    expect(app.find(`.${styles['Icon']}`).length).to.equal(1);
  });

});

