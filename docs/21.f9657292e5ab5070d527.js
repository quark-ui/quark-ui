webpackJsonp([21],{"9aTS":function(e,s){e.exports="import React, { Component } from 'react';\nimport Progress from '../Progress';\n\nexport default class ProgressDemo extends Component {\n  render() {\n    return (\n      <div className=\"markdown-block\">\n        <h3>标准进度条</h3>\n        <div>\n          <Progress percent={30} />\n          <Progress percent={70} status=\"exception\" />\n          <Progress percent={70} status=\"pause\" />\n          <Progress percent={100} status=\"success\" />\n          <Progress percent={100} />\n          <Progress percent={50} showInfo={false} />\n        </div>\n        <h3>小型进度条</h3>\n        <p>适合放在较狭窄的区域内</p>\n        <div style={{ width: 170 }}>\n          <Progress percent={30} size={'mini'} />\n          <Progress percent={70} size={'mini'} status=\"exception\" />\n          <Progress percent={70} size={'mini'} status=\"pause\" />\n          <Progress percent={100} size={'mini'} status=\"success\" />\n          <Progress percent={100} size={'mini'} />\n        </div>\n      </div>\n    );\n  }\n}\n"}});
//# sourceMappingURL=21.f9657292e5ab5070d527.js.map