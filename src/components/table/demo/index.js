import React, { Component } from 'react';
import Reactable from '../index';
import Button from '../../button';

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
          width: 100,
          render: () => (
            <div>
              <Button size="small">删除</Button>
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
          width: 100,
          fixed: 'right',
          render: () => (
            <div>
              <Button size="small">删除</Button>
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
          width: 100,
          fixed: 'right',
          render: () => (
            <div>
              <Button size="small">删除</Button>
            </div>
          ),
        },
      ],
    };
    const demo5 = {
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
          width: 100,
          render: () => (
            <div>
              <Button size="small">删除</Button>
            </div>
          ),
        },
      ],
    };
    // const demo4 = {
    //   data: [
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       age: '24year',
    //       address: 'New York No. 1NewNewNewNewNew',
    //     },
    //     {
    //       key: '2',
    //       name: 'Jim Green',
    //       age: '24year',
    //       address: 'London No. 1NewNewNewNewNewNewNew',
    //     },
    //   ],
    //   columns: [
    //     {
    //       title: 'Name',
    //       dataIndex: 'name',
    //       key: 'name',
    //       width: 200,
    //     },
    //     {
    //       title: 'Age',
    //       dataIndex: 'age',
    //       key: 'age',
    //       width: 250,
    //     },
    //     {
    //       title: 'Address',
    //       dataIndex: 'address',
    //       key: 'address',
    //     },
    //   ],
    // };

    // const rowSelection = {
    //   onSelect: (checked, selectedRow, selectedRows) => {
    //     console.log(checked, selectedRow, selectedRows);
    //   },
    //   onSelectAll: () => {},
    // };

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
          dataSource={demo5.data}
          columns={demo5.columns}
          height="300"
          ref={(c) => {
            this.table = c;
          }}
        />
        <h3>表格固定</h3>
        <p>固定头部和列。</p>
        <Table
          dataSource={demo3.data}
          columns={demo3.columns}
          height="300"
          ref={(c) => {
            this.table = c;
          }}
        />
        {/* <h3>选择和操作</h3>
        <p>选择后进行操作，完成后清空选择，通过 rowSelection.selectedRowKeys 来控制选中项。</p>
        <Table
          rowSelection={rowSelection}
          dataSource={demo4.data}
          columns={demo4.columns}
          ref={(c) => {
            this.table = c;
          }}
        /> */}
      </div>
    );
  }
}