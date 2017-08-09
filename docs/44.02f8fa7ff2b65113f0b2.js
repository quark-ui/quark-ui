webpackJsonp([44],{"8ovY":function(t,n){t.exports='import { Component } from \'react\';\nimport Button from \'../Button\';\n\nexport default class ButtonDemo extends Component {\n  render() {\n    return (\n      <div className="markdown-block">\n        <h3>按钮类型</h3>\n        <p>按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。</p>\n        <table>\n          <thead>\n            <tr>\n              <th>主按钮</th>\n              <th>次按钮</th>\n              <th>虚线按钮</th>\n              <th>危险按钮</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><Button type="primary">主按钮</Button></td>\n              <td><Button type="secondary">次按钮</Button></td>\n              <td><Button type="dashed">虚线按钮</Button></td>\n              <td><Button type="danger">危险按钮</Button></td>\n            </tr>\n          </tbody>\n        </table>\n        <h3>按钮尺寸</h3>\n        <p>按钮有大、中、小三种尺寸。</p>\n        <p>通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。</p>\n        <Button size="large">主要按钮(大)</Button>\n        &nbsp;\n        <Button>主要按钮(中)</Button>\n        &nbsp;\n        <Button size="small">主要按钮(小)</Button>\n        <h3>不可用状态</h3>\n        <p>添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。</p>\n        <Button size="large" disabled>不可用按钮</Button>\n        &nbsp;\n        <Button disabled>不可用按钮</Button>\n        &nbsp;\n        <Button size="small" disabled>不可用按钮</Button>\n      </div>\n    );\n  }\n}\n'}});
//# sourceMappingURL=44.02f8fa7ff2b65113f0b2.js.map