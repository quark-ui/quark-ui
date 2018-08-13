import React, { Children } from "react";
import classnames from "classnames";

import { Colgroup } from "./colgroup";
import { Thead } from "./thead";
import { Tbody } from "./tbody";
import styles from "../table.css";

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: "100%"
    };
    this.hasFixed = this.hasFixColumn(props);
  }

  componentWillMount() {}

  componentDidMount(nextProps) {
    this.tablebody.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    this.tablebody.removeEventListener("scroll", this.handleScroll.bind(this));
  }
  handleBodyScroll() {}
  handleScroll(e) {
    const scrollPositionLeft = this.tablebody.scrollLeft;
    const scrollPositionRight =
      this.tablebody.scrollWidth - this.tablescroll.scrollWidth;
    this.setState({
      scrollPositionLeft,
      scrollPositionRight
    });
  }

  getDom() {
    return this.root;
  }

  hasFixColumn = props => {
    let hasLeft = false;
    let hasRight = false;
    const columns = props.columns.filter(item => {
      if (item.fixed && item.fixed === "left") {
        hasLeft = true;
        return true;
      }

      if (item.fixed && item.fixed === "right") {
        hasRight = true;
        return true;
      }
      return false;
    });

    if (columns.length > 0) {
      return {
        hasLeft,
        hasRight
      };
    }
    return false;
  };

  handleRowHover(index, isEnter) {
    if (!isEnter) {
      this.rowHoverTimer = setTimeout(() => {
        this.setState({
          currentHoverRow: -1
        });
      }, 100);
    } else {
      if (this.rowHoverTimer) {
        clearTimeout(this.rowHoverTimer);
        this.rowHoverTimer = null;
      }
      this.setState({
        currentHoverRow: index
      });
    }
  }

  renderColgroup = (renderColgroupProps, fixedColumn) => {
    return <Colgroup {...renderColgroupProps} fixedColumn={fixedColumn} />;
  };

  renderThead = (renderHeaderProps, fixedColumn) => {
    return <Thead {...renderHeaderProps} fixedColumn={fixedColumn} />;
  };

  renderTbody = (renderBodyProps, fixedColumn) => {
    return <Tbody {...renderBodyProps} fixedColumn={fixedColumn} />;
  };

  renderMainTable(renderColgroupProps, renderHeaderProps, renderBodyProps) {
    let bodyStyle = {};
    const { columns, height } = this.props;

    const scrollWidth = {
      width: this.hasFixed ? columns.length * 200 + "px" : "auto"
    };
    if (
      this.hasFixed &&
      (this.hasFixed.hasRight || this.hasFixed.hasLeft) &&
      !height
    ) {
      bodyStyle = {
        overflowX: "scroll"
      };
    }
    if (height && !this.hasFixed) {
      bodyStyle = {
        overflowY: "scroll",
        maxHeight: height+'px',
      };
    }

    if (this.hasFixed && height) {
      bodyStyle = {
        overflow: "scroll",
        maxHeight: height+'px',
      };
    }

    //头部固定
    let fixedheader;
    fixedheader = height ? (
      <div className={styles["table-header"]}>
        <table
          className={styles["table-fixed"]}
          style={scrollWidth}
          ref={c => {
            this.tablebox = c;
          }}
        >
          {this.renderColgroup(renderColgroupProps, "scroll")}
          {this.renderThead(renderHeaderProps, "scroll")}
        </table>
      </div>
    ) : null;
    //body
    let fixedbody;
    const tablestyle = classnames({
      [styles["table"]]: !height,
      [styles["table-fixed"]]: height
    });

    fixedbody = (
      <div
        className={styles["table-body"]}
        style={bodyStyle}
        ref={c => {
          this.tablebody = c;
        }}
      >
        <table
          className={tablestyle}
          style={scrollWidth}
          ref={c => {
            this.tablebox = c;
          }}
        >
          {this.renderColgroup(renderColgroupProps, "scroll")}
          {!height ? this.renderThead(renderHeaderProps, "scroll") : null}
          {this.renderTbody(renderBodyProps, "scroll")}
        </table>
      </div>
    );

    return (
      <div
        className={styles["table-scroll"]}
        ref={c => {
          this.tablescroll = c;
        }}
      >
        {fixedheader}
        {fixedbody}
      </div>
    );
  }

  renderLeftFixedTable(
    renderColgroupProps,
    renderHeaderProps,
    renderBodyProps
  ) {
    if (!this.hasFixed || !this.hasFixed.hasLeft) {
      return null;
    }
    return (
      <div className={styles["table-fixed-left"]}>
        <div className={styles["table-body-outer"]}>
          <div className={styles["table-body-inner"]}>
            <table className={styles["table-fixed"]}>
              {this.renderColgroup(renderColgroupProps, "left")}
              {this.renderThead(renderHeaderProps, "left")}
              {this.renderTbody(renderBodyProps, "left")}
            </table>
          </div>
        </div>
      </div>
    );
  }

  renderRightFixedTable(
    renderColgroupProps,
    renderHeaderProps,
    renderBodyProps
  ) {
    if (!this.hasFixed || !this.hasFixed.hasRight) {
      return null;
    }
    return (
      <div className={styles["table-fixed-right"]}>
        <div className={styles["table-body-outer"]}>
          <div className={styles["table-body-inner"]}>
            <table className={styles["table-fixed"]}>
              {this.renderColgroup(renderColgroupProps, "right")}
              {this.renderThead(renderHeaderProps, "right")}
              {this.renderTbody(renderBodyProps, "right")}
            </table>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { props, state } = this;

    const renderHeaderProps = {
      columns: props.columns,
      width: props.width,
      key: "thead"
    };

    const renderBodyProps = {
      columns: props.columns,
      dataSource: props.dataSource,
      currentHoverRow: state.currentHoverRow,
      root: this,
      key: "tbody"
    };

    const renderColgroupProps = {
      columns: props.columns,
      key: "colgroup"
    };

    const { scrollPositionLeft, scrollPositionRight } = state;

    const tablestyle = classnames({
      [styles["table"]]: true,
      [styles["table-scroll-position-left"]]:
        !scrollPositionLeft || scrollPositionLeft === 0 ? true : false,
      [styles["table-scroll-position-middle"]]:
        scrollPositionLeft &&
        scrollPositionRight &&
        1 < scrollPositionLeft !== scrollPositionRight
          ? true
          : false,
      [styles["table-scroll-position-right"]]:
        scrollPositionLeft &&
        scrollPositionRight &&
        scrollPositionLeft === scrollPositionRight
          ? true
          : false
    });

    return (
      <div className={tablestyle}>
        <div className={styles["table-content"]}>
          {this.renderMainTable(
            renderColgroupProps,
            renderHeaderProps,
            renderBodyProps
          )}
          {this.renderLeftFixedTable(
            renderColgroupProps,
            renderHeaderProps,
            renderBodyProps
          )}
          {this.renderRightFixedTable(
            renderColgroupProps,
            renderHeaderProps,
            renderBodyProps
          )}
        </div>
      </div>
    );
  }
}
