import React, { PureComponent } from 'react';
import classnames from 'classnames';
import Td from './td';
import styles from '../Table.css';

export default class Tr extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  componentWillReceiveProps() {
    // console.log(this.trRow.dataset)
    // console.log(this.trRow.scrollHeight)
  }
  handleMouseEnter() {
    this.props.root.handleRowHover(this.props.index, true);
  }

  handleMouseLeave() {
    this.props.root.handleRowHover(this.props.index, false);
  }

  renderColumns(renderProps) {
    const { columns, data, fixedColumn } = renderProps;
    const tds = [];
    const righttds = [];
    const lefttds = [];

    columns.map((item) => {
      let value;
      let action;
      if (!!item.render && typeof item.render === 'function') {
        action = <div>{item.render()}</div>;
      }
      if (data[item.key]) {
        value = data[item.key];
      }

      const td = (
        <Td column={item} key={item.key}>
          {value || action}
        </Td>
      );
      if (item.fixed && item.fixed === 'left') {
        lefttds.push(td);
      } else if (item.fixed && item.fixed === 'right') {
        righttds.push(td);
      }
      tds.push(td);
    });

    if (fixedColumn === 'left') {
      return lefttds;
    } else if (fixedColumn === 'right') {
      return righttds;
    }
    return tds;
  }

  render() {
    const { isHover, index, style } = this.props;
    return (
      <tr
        data-row-key={index}
        ref={(c) => {
          this.trRow = c;
        }}
        className={classnames({
          [styles['table-row']]: true,
          [styles['table-row-hover']]: isHover,
        })}
        style={style}
        onMouseEnter={() => {
          this.handleMouseEnter();
        }}
        onMouseLeave={() => {
          this.handleMouseLeave();
        }}
      >
        {this.renderColumns(this.props)}
      </tr>
    );
  }
}

// Tr.childNode = Td;
// Tr.dataType = "object";
