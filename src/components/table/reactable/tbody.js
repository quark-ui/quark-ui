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
      currentHoverRow
    } = this.props;

    dataSource.forEach((data, index) => {
      tbs.push(
        <Tr
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
