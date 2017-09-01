import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect, should } from 'chai';
import sinon from 'sinon';
import Icon from '../../icon';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Panel from '../Panel';
import styles from '../Tabs.css';
Tabs.Panel = Panel;


describe('Tab-test-describe----------', () => {
  const onClick = sinon.spy();
  const props = {
    tabKey: '1',
    title: '11',
    disabled: true,
    status: 'active',
    closable: true,
    tabDeleteButton: true,
    onClick,
  };
  const app = shallow(
    <Tab {...props}/>
  );
  it('Tab can render', () => {
    expect(app.find(`.${styles['tab__del']}`).length).to.equal(1);
    app.find(`.${styles['tabs__tab']}`).simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });


  it('icon onClick', () => {
    app.find('Icon').simulate('click');
    expect(app.find(`.${styles['tab__del']}`).length).to.equal(1);
  });
});


describe('Panel-test-describe----------', () => {
  it('Tab can render', () => {
    const app = shallow(
      <Panel />
    );
    expect(app.find('div').length).to.equal(1);
  });
});

describe('tabs-test-describe----------', () => {

  it('defaultActiveKey is exit ', () => {
    const props = {
      defaultActiveKey: '1',
    }
    const app = mount(
      <Tabs {...props}>
        <Panel title={<span><Icon size={18} name="account" />Tab 1</span>} key="1">Tab 1</Panel>
      </Tabs>
    );
    expect(app.find(`.${styles['tabs__tab']}`).length).to.equal(1);
  });
  it('Tabs props onClick ', () => {
    const onClick = sinon.spy();
    const deleteButton = sinon.spy();

    const props = {
      activeKey: '1',
      onClick,
      deleteButton,
    }
    const app = mount(
      <Tabs {...props}>
        <Panel title="1" key="1" closable>Tab 1</Panel>
      </Tabs>
    );
    // app.find(`.${styles['tabs__tab']}`).simulate('click');
    // expect(onClick.calledOnce).to.equal(true);
  });
  it('tabs size is small && type is card && tabPosition is left', () => {
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: 1, closable: false },
      { title: 'Tab 2', content: 'Content of Tab 2', key: 2 },
      { title: 'Tab 3', content: 'Content of Tab 3', key: 3, closable: false },
    ];
    const app = mount(
      <Tabs
        type={'card'}
        size={'small'}
        activeKey="2"
        tabDeleteButton
        tabPosition={'left'}
      >
        {panes.map(pane => <Panel title={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</Panel>)}
      </Tabs>
    );
    expect(app.find(`.${styles['tab__del']}`).length).to.equal(1);
  });
});


