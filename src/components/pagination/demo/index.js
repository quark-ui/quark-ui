import Pagination from '../Pagination';
import { Component } from 'react';

export default class PaginationDemo extends Component {
  state = {
    current: 3,
  };
  render() {
    const { current } = this.state;
    return (
      <div className="markdown-block">
        <h3>基本</h3>
        <p>基础分页。</p>
        <Pagination current={current} total={50} />
        <h3>更多分页</h3>
        <Pagination
          defaultCurrent={1}
          total={500}
          showSizeChanger
          onSizeChange={(size, cur) => {
            console.log(`size: ${size} current: ${cur}`);
          }}
        />
        <h3>跳转</h3>
        <p>快速跳转到某一页。</p>
        <Pagination showTotal total={100} showQuickJumper />
        <h3>迷你</h3>
        <p>用于弹窗等页面展示区域狭小的场景。</p>
        <h3>受控方式</h3>
        <p><Pagination
          current={current}
          total={50}
          onChange={(c) => {
            this.setState({
              current: c,
            });
          }}
        /></p>
        <Pagination total={100} showQuickJumper showSizeChanger size="small" />
        <h3>非受控方式</h3>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  }
}
