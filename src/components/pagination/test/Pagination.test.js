import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Pagination from '../../pagination';
import styles from '../Pagination.css';

describe('pagination-test-describe----------', () => {
  it('pagination can render', () => {
    const app = mount(<Pagination
      defaultCurrent={1}
      total={500}
      showSizeChanger
    />);
    expect(app.find(`.${styles['pagination--normal']}`).length).to.equal(1);
  });

  it('pagination set  current', () => {
    const props = {
      current: 3,
      total: 50,
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'small',
      showTotal: true,
    };
    const app = mount(<Pagination {...props} />);
    const spy = sinon.spy(Pagination.prototype, 'componentWillReceiveProps');
    expect(spy.calledOnce).to.equal(false);
    app.setProps({ current : 4 });
    expect(spy.calledOnce).to.equal(true);
    expect(app.find(`.${styles['pagination--small']}`).length).to.equal(1);
    app.find('button').at(0).simulate('click');
    app.find('button').at(1).simulate('click');
    app.find('button').at(6).simulate('click');
    app.find('select').simulate('change');
    app.find('input').simulate('keyPress', { key: 'Enter' });
    app.find('input').simulate('keyPress', { key: 'a' });
  });

  it('this.state.current is 1', () => {
    const props = {
      current: 1,
      total: 50,
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'small',
      showTotal: true,
    };
    const app = mount(<Pagination {...props} />);
    app.find('button').at(0).simulate('click');
  });

  it('this.state.current is 1', () => {
    const props = {
      current: 5,
      total: 50,
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'small',
      showTotal: true,
    };
    const app = mount(<Pagination {...props} />);
    app.find('button').at(6).simulate('click');
  });
  it('this.props.pageSize is undefined', () => {
    const props = {
      current: 5,
      total: 50,
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'small',
      showTotal: true,
    };
    const app = mount(<Pagination {...props} />);
    app.find('select').simulate('change');
  });
});

