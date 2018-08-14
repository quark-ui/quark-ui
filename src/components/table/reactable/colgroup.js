import React from "react";

export class Colgroup extends React.Component {
  constructor(props) {
    super(props);
  }

  renderColgroup() {
    const { fixedColumn, columns } = this.props;
    const cols = [],
      colsRight = [],
      colsLeft = [];

    columns.map((item, i) => {
      let style = {};
      if (item.width) {
        style = {
          width: item.width || 'auto',
          minWidth: "100px"
        };
      }
      if (item.fixed === "right") {
        colsRight.push(<col style={style} key={i} />);
      } else if (item.fixed === "left") {
        colsLeft.push(<col style={style} key={i} />);
      }
      cols.push(<col style={style} key={i} />);
    });

    if (fixedColumn && fixedColumn === "right") {
      return colsRight;
    } else if (fixedColumn && fixedColumn === "left") {
      return colsLeft;
    }
    return cols;
  }

  render() {
    return (
      <colgroup>{this.renderColgroup()}</colgroup>
    );
  }
}
