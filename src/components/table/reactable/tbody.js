import React from "react";
import { Tr } from "./Tr";
const addEventListener = require('rc-util/lib/Dom/addEventListener');
import styles from "../Table.css";

export class Tbody extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }
  

  render() {
    const tbs = [];
    const {
      dataSource,
      columns,
      fixedColumn,
      root,
      currentHoverRow,
      fixedColumnsBodyRowsHeight,
    } = this.props;
    dataSource.forEach((data, index) => {
      const styleTr = {
        height:fixedColumnsBodyRowsHeight[index] + 'px',
      }
      tbs.push(
        <Tr
          style={styleTr}
          columns={columns}
          key={index}
          data={data}
          fixedColumn={fixedColumn}
          render={columns.render}
          index={index}
          root={root}
          isHover={currentHoverRow === index}
        />
      );
    });

    return <tbody className={styles["table-tbody"]}>{tbs}</tbody>;
  }
}
