import React, { Component } from 'react';
import Reactable from '../index';
import Button from '../../button';

const { Table } = Reactable;
export default class TableDemo extends Component {
  state= {
    loading: true,
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
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 800);
  }

  onChange = (sorter) => {
    this.setState({
      sortedInfo: sorter,
    });
  }
  onSelectChange = (selectedRowKeys) => {
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
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};
    const demo1 = {
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: '20',
          address: 'New York No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my favourite fruits.',
        },
        {
          key: '2',
          name: 'Jim Greenss',
          age: '90',
          address: 'London No. 1',
          work: 'New York No. 1',
          color: 'New York No. 1',
          fruit: 'Apples and melons are my favourite fruits.',
        },
        {
          key: '3',
          name: 'Jim Green',
          age: '70',
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
          sorter: (a, b) => a.name.length - b.name.length,
          sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 250,
          sorter: (a, b) => a.age - b.age,
          sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
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
    const test = {
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
          width: 150,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          width: 150,
        },
        {
          title: 'Work',
          dataIndex: 'work',
          key: 'work',
          width: 150,
        },
        {
          title: 'Color',
          dataIndex: 'color',
          key: 'color',
          width: 150,
        },
        {
          title: 'Fruit',
          dataIndex: 'fruit',
          key: 'fruit',
          width: 150,
        },
        {
          title: 'Foods',
          dataIndex: 'foods',
          key: 'foods',
          width: 150,
        },
        {
          title: 'School',
          dataIndex: 'school',
          key: 'school',
          width: 150,
        },
        {
          title: 'Interest',
          dataIndex: 'interest',
          key: 'interest',
          width: 150,
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

    const getRenderTable = {
      dataSource: test.data,
      columns: test.columns,
    };
    return (
      <div>
        <h3>基本</h3>
        <p>基础表格。</p>
        <Table
          bordered
          loading={this.state.loading}
          {...getRenderTable}
        />
        <h3>表格固定</h3>
        <p>固定头部和列。</p>
        <Table
          bordered
          dataSource={demo3.data}
          columns={demo3.columns}
          height="300"
        />
        <h3>带边框</h3>
        <p>添加表格边框线，页头和页脚。</p>
        <Table
          bordered
          {...getRenderTable}
          title={() => 'Header'}
          footer={() => 'Footer'}
        />
        <h3>可选择</h3>
        <p>第一列是联动的选择框。</p>
        <Table
          bordered
          rowSelection={rowSelection}
          dataSource={this.state.dataSource}
          columns={this.state.columns}
        />
        <h3>排序</h3>
        <p>对某一列数据进行排序，通过指定列的 sorter 函数即可启动排序按钮。sorter: function(a, b) { '{...}' } ， a、b 为比较的两个列数据。</p>
        <Table
          bordered
          dataSource={demo1.data}
          columns={demo1.columns}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
