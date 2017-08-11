/**
 * Comtest Component.tests
 * @author lhf
 */
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect,should} from 'chai';
import Comtest from  '../Comtest';
import styles from '../Comtest.css';

describe('Comtest shallow',()=>{
  it('Comtest is ok',()=>{
   let com = shallow(<Comtest />);
   expect(com.text()).to.equal('Comtest');
  });
  before(function() {
    // 在本区块的所有测试用例之前执行
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });
})
describe('Comtest render',()=>{
	it('Comtest render is ok',()=>{
		const com = render(<Comtest />);
   	expect(com.text()).to.equal('Comtest');
	});
})
describe('Comtest mount',()=>{
	it('Comtest mount is ok',()=>{
		const com = mount(<Comtest />);
   		expect(com.text()).to.equal('Comtest');
	});
})