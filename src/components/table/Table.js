import React, { PureComponent } from "react";
import RcTable from "rc-table";

class Table extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { columns, data, ...otherProps } = this.props;
    return <RcTable columns={columns} data={data} {...otherProps} />;
  }
}

export default Table;
