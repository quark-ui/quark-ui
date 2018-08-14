import React, { Component } from 'react';
import Reactable from '../index';

const { Table } = Reactable;

export default class TableDemo extends Component {
  render() {
    const demo1 = {
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: '24 year',
          address: 'New York No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my favourite fruits.',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: '24 year',
          address: 'London No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my favourite fruits.',
        },
      ],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 200,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 250,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Work',
          dataIndex: 'work',
          key: 'work',
        },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
        },
        {
          title: 'Fruit',
          dataIndex: 'fruit',
          key: 'fruit',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          width: 300,
          render: () => (
            <div>
              <a>Delete</a>
              <a>More actions</a>
            </div>
          ),
        },
      ],
    };
    const demo2 = {
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: '24year',
          address: 'New York No. 1NewNewNewNewNew',
          work: 'New York No. 1NewNewNewNewNewNewNew',
          color: 'New York No. 1NewNewNewNewNewNewNewNew',
          fruit: 'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: '24year',
          address: 'London No. 1NewNewNewNewNewNewNew',
          work: 'New York No. 1NewNewNewNewNewNewNewNew',
          color: 'New York No. 1NewNewNewNewNewNewNew',
          fruit: 'Apples and melons are my favourite fruits.',
        },
      ],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 200,
          fixed: 'left',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 250,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Work',
          dataIndex: 'work',
          key: 'work',
        },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
        },
        {
          title: 'Fruit',
          dataIndex: 'fruit',
          key: 'fruit',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          width: 300,
          fixed: 'right',
          render: () => (
            <div>
              <a>Delete</a>
              <a>More actions</a>
            </div>
          ),
        },
      ],
    };
    const demo3 = {
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: '24 year',
          address: 'New York No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my ',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: '24 year',
          address: 'London No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
        },
        {
          key: '4',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
        },
        {
          key: '5',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
        },
        {
          key: '6',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
        },
        {
          key: '7',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
        },
      ],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 200,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 250,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Work',
          dataIndex: 'work',
          key: 'work',
        },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
        },
        {
          title: 'Fruit',
          dataIndex: 'fruit',
          key: 'fruit',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
          width: 300,
          render: () => (
            <div>
              <a>Delete</a>
              <a>More actions</a>
            </div>
          ),
        },
      ],
    };
    return (
      <div>
        <h3>基本</h3>
        <p>基础表格。</p>
        <Table
          dataSource={demo1.data}
          columns={demo1.columns}
          ref={(c) => {
            this.table = c;
          }}
        />
        <h3>表格固定</h3>
        <p>表格固定列。</p>
        <Table
          dataSource={demo2.data}
          columns={demo2.columns}
          ref={(c) => {
            this.table = c;
          }}
        />
        <h3>表格固定</h3>
        <p>固定头部。</p>
        <Table
          dataSource={demo3.data}
          columns={demo3.columns}
          height="200"
          ref={(c) => {
            this.table = c;
          }}
        />
      </div>
    );
  }
}
