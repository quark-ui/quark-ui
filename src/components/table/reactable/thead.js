import React from "react";
import { Th } from "./th";
import styles from '../Table.css';


export class Thead extends React.Component {
  renderTh() {
    const ths = [], rightths = [], leftths= [];
    const { fixedColumn, columns } = this.props;

    columns.map((item, index) => {
    const th = <Th key={index}>{item.title}</Th>;
      if (item.fixed && item.fixed === "left") {
        leftths.push(th);
      } else if(item.fixed && item.fixed === "right"){
        rightths.push(th);
      }
      ths.push(th);
      
    });

    if (fixedColumn === "left") {
      return leftths
    } else if (fixedColumn === "right") {
      return rightths
    };

    return ths;
  
  }

  render() {
    const { fixedColumnsHeadRowsHeight } = this.props;
    const height = {
      height: fixedColumnsHeadRowsHeight+'px' || 'auto',
    }
    return (
      <thead className={styles['table-thead']}>
        <tr style={height}>{this.renderTh()}</tr>
      </thead>
    );
  }
}
