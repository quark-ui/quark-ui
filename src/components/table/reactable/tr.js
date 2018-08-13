import React from "react";
import classnames from 'classnames';
import { Td } from "./td";
import styles from '../Table.css';


export class Tr extends React.Component {
  handleMouseEnter() {
    this.props.root.handleRowHover(this.props.index, true);
  }

  handleMouseLeave() {
    this.props.root.handleRowHover(this.props.index, false);
  }

  renderColumns(renderProps) {
    const { columns, data, fixedColumn } = renderProps;
    const tds = [],
      righttds = [],
      lefttds = [];

    columns.map((item, index) => {
      let value, action;
      if (!!item.render && typeof item.render === "function") {
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
      if (item.fixed && item.fixed === "left") {
        lefttds.push(td);
      } else if (item.fixed && item.fixed === "right") {
        righttds.push(td);
      }
      tds.push(td);
    });

    if (fixedColumn === "left") {
      return lefttds;
    } else if (fixedColumn === "right") {
      return righttds;
    }
    return tds;
  }

  render() {
    const { isHover, rowHeight } = this.props;
    const trStyle = {
      height: rowHeight,
      lineHeight: rowHeight
    };
    return (
      <tr
        className={classnames({
          [styles[`table-row-hover`]]: isHover
        })}
        style={trStyle}
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
