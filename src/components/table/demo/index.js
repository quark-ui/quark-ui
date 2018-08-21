import React, { Component } from 'react';
import Reactable from '../index';
import Button from '../../button';

const { Table } = Reactable;

export default class TableDemo extends Component {
  state= {
    selectedRowKeys: [1, 2],
    dataSource: [
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
      {
        key: '3',
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
        title: '',
        dataIndex: 'select',
        key: 'select',
        width: 100,
      },
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
  }
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys,
    });
  }

  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onSelectChange: this.onSelectChange,
      selections: 'all-data',
    };
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
        {
          key: '3',
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
          fruit:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: '24year',
          address: 'London No. 1NewNewNewNewNewNewNew',
          work: 'New York No. 1NewNewNewNewNewNewNewNew',
          color: 'New York No. 1NewNewNewNewNewNewNew',
          fruit: 'Apples and melons are my favourite fruits.',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
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
          title: 'Foods',
          dataIndex: 'foods',
          key: 'foods',
        },
        {
          title: 'School',
          dataIndex: 'school',
          key: 'school',
        },
        {
          title: 'Interest',
          dataIndex: 'interest',
          key: 'interest',
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
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: '24 year',
          address: 'London No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
        },
        {
          key: '4',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
        },
        {
          key: '5',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
        },
        {
          key: '6',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
        },
        {
          key: '7',
          name: 'Joe Black',
          age: '24 year',
          address: 'Sidney No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my',
          foods:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          school:
            'Apples and melons are my favourite fruits.Apples and melons are my favourite fruits.',
          interest: 'such as climbing mountains, travelling, watching movie...',
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
          title: 'Foods',
          dataIndex: 'foods',
          key: 'foods',
        },
        {
          title: 'School',
          dataIndex: 'school',
          key: 'school',
        },
        {
          title: 'Interest',
          dataIndex: 'interest',
          key: 'interest',
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
          title: 'School',
          dataIndex: 'school',
          key: 'school',
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
        <h3>可选择</h3>
        <p>第一列是联动的选择框。</p>
        <Table
          rowSelection={rowSelection}
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          ref={(c) => {
            this.table = c;
          }}
        />
      </div>
    );
  }
}
