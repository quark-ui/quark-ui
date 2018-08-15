import React from 'react';
import PropTypes from 'prop-types';

export default class Colgroup extends React.Component {
  static defaultProps = {
    columns: {},
    fixedColumn: 'scroll',
  };
  static propTypes = {
    columns: PropTypes.instanceOf(Array),
    fixedColumn: PropTypes.string,
  };

  renderColgroup() {
    const { fixedColumn, columns } = this.props;
    const cols = [];
    const colsRight = [];
    const colsLeft = [];

    columns.forEach((item) => {
      let style = {};
      if (item.width) {
        style = {
          width: item.width || 'auto',
          minWidth: '100px',
        };
      }
      if (item.fixed === 'right') {
        colsRight.push(<col style={style} key={item.key} />);
      } else if (item.fixed === 'left') {
        colsLeft.push(<col style={style} key={item.key} />);
      }
      cols.push(<col style={style} key={item.key} />);
    });

    if (fixedColumn && fixedColumn === 'right') {
      return colsRight;
    } else if (fixedColumn && fixedColumn === 'left') {
      return colsLeft;
    }
    return cols;
  }

  render() {
    return <colgroup>{this.renderColgroup()}</colgroup>;
  }
}
