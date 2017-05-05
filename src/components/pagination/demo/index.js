import Pagination from '../Pagination';
import { Component } from 'react';

export default class PaginationDemo extends Component {
  state = {
    current: 3,
  };
  render() {
    const { current } = this.state;
    return (
      <div>
        <h3>受控方式</h3>
        <Pagination
          current={current}
          total={50}
          onChange={(c) => {
            this.setState({
              current: c,
            });
          }}
        />
        <h3>非受控方式</h3>
        <Pagination defaultCurrent={1} total={50} />
        <h3>更多分页</h3>
        <Pagination
          defaultCurrent={1}
          total={500}
          showSizeChanger
          onSizeChange={(size, current) => {
            console.log(`size: ${size} current: ${current}`);
          }}
        />
        <h3>跳转</h3>
        <Pagination showTotal total={100} showQuickJumper />
        <h3>迷你</h3>
        <Pagination total={100} showQuickJumper showSizeChanger size="small" />
      </div>
    );
  }
}
