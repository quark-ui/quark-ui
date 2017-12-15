import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Pagination from '../../pagination';
import styles from '../Pagination.css';

describe('pagination-test-describe----------', () => {

  it('pagination base ', () => {
    const app = shallow(<Pagination current={1} total={0} />);
    expect(app.find('li').length).to.equal(0);
    const app2 = shallow(<Pagination current={3} total={1} />);
    let item = app2.find('li').first().children();
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true);//第一个选中
    expect(app2.find('li').length).to.equal(1);
    const app3 = shallow(<Pagination current={5} total={50} />);
    expect(app3.find('li').length).to.equal(5);
    item = app3.find('li').last().children();
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true);//最后一个选中
  });


  it('pagination can render', () => {
    const app = mount(<Pagination
      defaultCurrent={2}
      total={50}
    />);
    expect(app.find(`.${styles['pagination--normal']}`).length).to.equal(1);
    expect(app.find('li').length).to.equal(5);//总共5页
    let item = app.find('li').first().children();
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(false);//第一个未选中
    item.simulate('click');
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true);//第一个选中
    item = app.find('li').last().children();
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(false);//最后一个未选中
    item.simulate('click');
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true);//最后一个选中
  });

  it('pagination---------------first button click', () => {
    const app = mount(<Pagination
      defaultCurrent={2}
      total={50}
      showSizeChanger
    />);
    const button = app.find('button').first().children();
    button.simulate('click');
    const item = app.find('li').first().children();
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true);//点击往前一页，第一个选中
  });

  it('pagination---------------last button click', () => {
    const app = mount(<Pagination
      defaultCurrent={4}
      total={50}
      pageSize={10}
      showSizeChanger
    />);
    const button = app.find('button').last().children();
    button.simulate('click');
    const item = app.find('li').last().children();
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true);//点击往后一页，最后一个选中
  });

  it('pagination set  size small', () => {
    const props = {
      current: 3,
      total: 50,
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'small',
      showTotal: true,
      onChange: (c) => {
        app.setState({ current: c });
      },
    };
    const app = mount(<Pagination {...props} />);
    const spy = sinon.spy(Pagination.prototype, 'componentWillReceiveProps');
    expect(spy.calledOnce).to.equal(false);
    app.setProps({ current : 4 });
    expect(spy.calledOnce).to.equal(true);
    expect(app.find(`.${styles['pagination--small']}`).length).to.equal(1);//迷你
    expect(app.find('span').length).to.equal(2);//共计多少页和翻页
    app.find('input').value = 1;
    let input = app.find('input').get(0);
    input.value = '1';
    app.find('input').first().simulate('keyPress', { key: 'Enter' });//输入页码1回车
    const item = app.find('li').first().children();
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true); //第一个选中
    input = app.find('input').get(0);
    input.value = 'a';
    app.find('input').first().simulate('keyPress', { key: 'Enter' });
    expect(item.hasClass(styles['pagination__item--active'])).to.equal(true); //第一个选中

    app.find('select').simulate('change');//选择每页的数量
  });
});

