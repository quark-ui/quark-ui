//npm run test-unit './src/components/select/test/Select.test.js'

/**
 * Progress test
 * @author heifade
 */
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import Select from '../Select';
import Option from '../Option';
import styles from '../Select.css';

describe('Select-test-describe----------', () => {
  it('Select can render', () => {
    const select = mount(<Select>
      <Option value="A">AA</Option>
      <Option value="B">BB</Option>
      <Option value="C">CC</Option>
    </Select>);

    expect(select.hasClass(styles['select'])).to.equal(true);
  });

  
});
