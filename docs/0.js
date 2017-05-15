webpackJsonp([0],{

/***/ "./node_modules/.0.28.0@css-loader/index.js?{\"importLoaders\":1,\"modules\":true,\"localIdentName\":\"[hash:base64:7]\"}!./node_modules/.1.3.3@postcss-loader/index.js?{}!./src/components/icon/demo/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/.0.28.0@css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "._2gUzwXS {\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  text-align: center;\n}\n._37Jxgnq {\n  display: block;\n  font-size: 12px;\n}", ""]);

// exports
exports.locals = {
	"Icon--grid": "_2gUzwXS",
	"Icon-name": "_37Jxgnq"
};

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/alert/README.md":
/***/ (function(module, exports) {

module.exports = "## Alert\n\nAlert Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n|type|string|'info'|指定警告提示的样式，有四种选择 success、info、warning、error|\n|closable|boolean|false|\t默认不显示关闭按钮|\n|closeText|string or ReactNode|无|自定义关闭按钮|\n|message|string or ReactNode|无|警告提示内容|\n|description|string or ReactNode|无|警告提示的辅助性文字介绍|\n|onClose|Function|无|关闭时触发的回调函数|\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/alert/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import { Component } from 'react';\nimport Alert from '../Alert';\n\nexport default class AlertDemo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    const infoProps = {\n      type: 'info',\n      closeText: 'X',\n      message: 'info信息',\n      description: 'info描述',\n      onClose() { console.log('info'); },\n    };\n    const errorProps = {\n      type: 'error',\n      closable: true,\n      closeText: '关闭',\n      message: 'error信息',\n      onClose() { console.log('error'); },\n    };\n    return (\n      <div style={{ width: 400 }}>\n        <Alert {...infoProps} />\n        <Alert {...errorProps} />\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/breadcrumb/README.md":
/***/ (function(module, exports) {

module.exports = "## Breadcrumb\n\nBreadcrumb Component.\n\n### Props\n|name|type|default|description|\n|---|---|:---:|---|\n|prefixCls|String|'breadcrumb'|预先定义的样式前缀|\n|separator|String|'/'|面包屑的分隔符|\n|hasBackIcon|Boolean|false|是否显示回退按钮|\n### Api\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/breadcrumb/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import { Component } from 'react';\nimport Breadcrumb from '../../breadcrumb';\n\nconst Crumb = Breadcrumb.Item;\n\nexport default class BreadcrumbDemo extends Component {\n  render() {\n    return (\n      <div>\n        <Breadcrumb separator=\">\" hasBackIcon>\n          <Crumb>home</Crumb>\n          <Crumb href=\"/component/button\">Button</Crumb>\n          <Crumb href=\"/component/steps\">Steps</Crumb>\n          <Crumb>bbb</Crumb>\n        </Breadcrumb>\n\n        <Breadcrumb hasBackIcon>\n          <Crumb href=\"/\">home</Crumb>\n          <Crumb href=\"/component/button\">Button</Crumb>\n          <Crumb href=\"/component/steps\">Steps</Crumb>\n          <Crumb>bbb</Crumb>\n        </Breadcrumb>\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/button/README.md":
/***/ (function(module, exports) {

module.exports = "## Button\n\nButton Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n|type|String|'primary'|button type, `primary` `secondary` `dashed` or `danger`|\n|size|String|'normal'|button size, `normal` `large` or `small` |\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/button/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Button from '../Button';\nimport { Component } from 'react';\n\nexport default class ButtonDemo extends Component {\n  render() {\n    return (\n      <div>\n        <h3>按钮类型</h3>\n        <table>\n          <thead>\n            <th>主按钮</th>\n            <th>次按钮</th>\n            <th>虚线按钮</th>\n            <th>危险按钮</th>\n          </thead>\n          <tbody>\n            <td><Button type=\"primary\">主按钮</Button></td>\n            <td><Button type=\"secondary\">次按钮</Button></td>\n            <td><Button type=\"dashed\">虚线按钮</Button></td>\n            <td><Button type=\"danger\">危险按钮</Button></td>\n          </tbody>\n        </table>\n        <h3>按钮尺寸</h3>\n        <Button size=\"large\">主要按钮(大)</Button>\n        &nbsp;\n        <Button>主要按钮(中)</Button>\n        &nbsp;\n        <Button size=\"small\">主要按钮(小)</Button>\n        <h3>不可用状态</h3>\n        <Button size=\"large\" disabled>不可用按钮</Button>\n        &nbsp;\n        <Button disabled>不可用按钮</Button>\n        &nbsp;\n        <Button size=\"small\" disabled>不可用按钮</Button>\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/datePicker/README.md":
/***/ (function(module, exports) {

module.exports = "## DatePicker\n\nDatePicker Component.\n\n### Props\n\n#### DatePicker\n\n|name|type|default|description|\n|---|---|---|---|\n|value|[moment](http://momentjs.com/)|无|日期|\n|defaultValue|[moment](http://momentjs.com/)|无|默认日期|\n|disabledDate|func|无|不可选择的日期|\n|disabled|boolean|false|禁用|\n|format|string|YYYY-MM-DD|展示日期格式，配置参考[moment](http://momentjs.com/)|\n|onChange|func|无|时间发生变化回调|\n\n#### MonthPicker\n|name|type|default|description|\n|---|---|---|---|\n|value|[moment](http://momentjs.com/)|无|日期|\n|defaultValue|[moment](http://momentjs.com/)|无|默认日期|\n|disabled|boolean|false|禁用|\n|format|string|YYYY-MM|展示日期格式，配置参考[moment](http://momentjs.com/)|\n|onChange|func|无|时间发生变化回调|\n\n#### RangePicker\n|name|type|default|description|\n|---|---|---|---|\n|value|[moment](http://momentjs.com/)[]|无|日期|\n|defaultValue|[moment](http://momentjs.com/)[]|无|默认日期|\n|disabledDate|func|无|不可选择的日期|\n|disabled|boolean|false|禁用|\n|format|string|YYYY-MM-DD|展示日期格式，配置参考[moment](http://momentjs.com/)|\n|onChange|func|无|时间发生变化回调|\n\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/datePicker/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import { Component } from 'react';\nimport moment from 'moment';\nimport DatePicker from '../index';\n\nconst { MonthPicker, RangePicker } = DatePicker;\n\nexport default class DatePickerDemo extends Component {\n  state = {\n    disabled: false,\n    date: moment().add(1, 'M'),\n  }\n  onChange(m) {\n    console.log(m);\n  }\n  changeDisabled = () => {\n    this.setState({\n      disabled: !this.state.disabled,\n    });\n  }\n  render() {\n    const { date, disabled } = this.state;\n    return (\n      <div>\n        <label htmlFor=\"\">\n          <input\n            type=\"checkbox\"\n            checked={disabled}\n            onChange={this.changeDisabled}\n          /> 禁用\n        </label>\n        <h2>日期选择</h2>\n        <h3>非受控方式</h3>\n        <DatePicker\n          disabled={disabled}\n          onChange={this.onChange}\n        />\n        <h3>受控方式</h3>\n        <DatePicker\n          disabled={disabled}\n          value={date}\n          onChange={(d) => {\n            this.setState({\n              date: d,\n            });\n          }}\n        />\n        <p>选择时间: {date.format()}</p>\n        <h2>不可选日期</h2>\n        <DatePicker\n          disabled={disabled}\n          disabledDate={(current) => {\n            return current && current.valueOf() < Date.now();\n          }}\n        ></DatePicker>\n        <h2>月份选择</h2>\n        <MonthPicker onChange={this.onChange} disabled={disabled} />\n        <h2>范围选择</h2>\n        <RangePicker onChange={this.onChange} disabled={disabled} />\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/dropdown/README.md":
/***/ (function(module, exports) {

module.exports = "## Dropdown\n\nDropdown Component.\n\n### Props\n\n#### Dropdown\n|name|type|default|description|\n|---|---|---|---|\n|trigger|`hover` or `click`|click|触发方式|\n|overlay|element|-|菜单内容|\n|placement|string|bottomLeft|定位|\n\n#### Dropdown.DropdownButton\n|name|type|default|description|\n|---|---|---|---|\n|type|string|`primary`|按钮类型|\n|trigger|`hover` or `click`|click|触发方式|\n|overlay|element|-|菜单内容|\n|placement|string|bottomRight|定位|\n\n#### Dropdown.Menu\n|name|type|default|description|\n|---|---|---|---|\n\n#### Dropdown.Menu.Item\n|name|type|default|description|\n|---|---|---|---|\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/dropdown/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Button from 'quark-ui/button';\nimport Dropdown from '../Dropdown';\n\nconst { Menu } = Dropdown;\nconst { Item } = Menu;\n\nconst DropdownDemo = () => {\n  const menu = (\n    <Menu>\n      <Item>\n        <a href=\"https://www.ehuodi.com\">易货嘀</a>\n      </Item>\n      <Item>\n        <a href=\"http://www.lujing56.cn/\">陆鲸</a>\n      </Item>\n      <Item>\n        <a href=\"https://ecargo.ehuodi.com/\">加盟车队管理系统</a>\n      </Item>\n    </Menu>\n  );\n  return (\n    <div>\n      <h3>带下拉框的按钮</h3>\n      <Dropdown overlay={menu}>\n        <Button>菜单</Button>\n      </Dropdown>\n      <h3>Dropdown内置按钮</h3>\n      <Dropdown.Button type=\"secondary\" overlay={menu} trigger={'click'}>\n        菜单\n      </Dropdown.Button>\n    </div>\n  );\n};\n\nexport default DropdownDemo;\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/icon/README.md":
/***/ (function(module, exports) {

module.exports = "## Icon\n\nIcon Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n|name|string|''|图标名称|\n|size|number|32|尺寸|\n|color|string|-|颜色|\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/icon/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Icon from '../Icon';\nimport styles from './index.css';\n\nconst IconList = [\n  'ellipsis',\n  'caution',\n  'question',\n  'account',\n  'setting',\n  'paper',\n  'finance',\n  'check',\n  'arrow-left',\n  'arrow-right',\n  'check',\n  'home',\n  'info',\n];\n\nconst IconDemo = () => (\n  <div>\n    {\n      IconList.map(name => (\n        <div className={styles['Icon--grid']} key={name}>\n          <Icon size={48} name={name} />\n          <span className={styles['Icon-name']}>{name}</span>\n        </div>\n      ))\n    }\n  </div>\n);\n\nexport default IconDemo;\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/menu/README.md":
/***/ (function(module, exports) {

module.exports = "## Menu\n\nMenu Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n|className|String|''|样式名，可不填|\n|mode|String|inline|菜单类型，可选值：horizontal-h(水平菜单，子菜单水平)，horizontal-v(水平菜单，子菜单垂直)，vertical-h(垂直菜单，子菜单水平向右弹出)，vertical-v(垂直菜单，子菜单内嵌在菜单区域)|\n|selectedKeys|string[]|[]|选中的菜单项，数组，值为key|\n|defaultSelectedKeys|string[]|[]|默认选中的菜单项，数组，值为key|\n|openKeys|string[]|[]|打开的菜单，数组，值为key|\n|defaultOpenKeys|string[]|[]|默认打开的菜单，数组，值为key|\n|onClick|function|-|点击 menuitem 调用此函数，参数为 {item, key, keyPath}|\n|onOpenChange|function|-|SubMenu 展开/关闭的回调|\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/menu/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import { Component } from 'react';\nimport Menu from '../Menu';\nimport Icon from '../../icon/Icon';\n\nexport default class MenuDemo extends Component {\n\n  state = {\n    theme: 'dark',\n    current: '.$m0',\n  }\n\n  handleClick = (e) => {\n    let key = (e.key || '').replace(/\\.\\$/g, '');\n    this.setState({\n      current: e.key\n    });\n    console.log(key);\n  }\n\n  render() {\n    return (\n      <div>\n        1、水平菜单，子菜单水平\n        <Menu\n            //theme={this.state.theme}\n            onClick={this.handleClick}\n            styleName={\"menu\"}\n            selectedKeys={[this.state.current]}\n            type=\"horizontal-h\">\n\n          <Menu.Item key=\"m0\">\n            <Icon className=\"icon\" size={14} name={'paper'} />\n              菜单按钮\n            </Menu.Item>\n            <Menu.SubMenu key=\"m1\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单</span></span>}>\n              <Menu.Item key=\"m1i1\">二级菜单1</Menu.Item>\n              <Menu.Item key=\"m1i2\">二级菜单2</Menu.Item>\n              <Menu.Item key=\"m1i3\">二级菜单3</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m2\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单分组</span></span>}>\n              <Menu.Item key=\"m2g1i1\">二级菜单1</Menu.Item>\n              <Menu.Item key=\"m2g1i2\">二级菜单2</Menu.Item>\n              <Menu.Item key=\"m2g1i3\">二级菜单3</Menu.Item>\n              <Menu.Item key=\"m2g2i1\">二级菜单1</Menu.Item>\n              <Menu.Item key=\"m2g2i2\">二级菜单2</Menu.Item>\n              <Menu.Item key=\"m2g2i3\">二级菜单3</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m3\" disabled title={<span><Icon className=\"icon\" size={14} name={\"finance\"}/><span>不可用下拉菜单</span></span>}>\n              <Menu.Item key=\"m3i1\">二级菜单4</Menu.Item>\n              <Menu.Item key=\"m3i2\">二级菜单5</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.Item key=\"m4\" disabled>\n              <Icon className=\"icon\" size={14} name={\"paper\"}/>不可用菜单按钮\n            </Menu.Item>\n        </Menu>\n\n        <br/><br/><br/>\n\n        2、水平菜单，子菜单垂直\n        <Menu\n            //theme={this.state.theme}\n            onClick={this.handleClick}\n            styleName={\"menu\"}\n            selectedKeys={[this.state.current]}\n            type=\"horizontal-v\">\n\n            <Menu.Item key=\"m0\">\n              <Icon className=\"icon\" size={14} name={\"paper\"}/>\n              菜单按钮\n            </Menu.Item>\n            <Menu.SubMenu key=\"m1\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单</span></span>}>\n              <Menu.Item key=\"m1i1\">二级菜单1</Menu.Item>\n              <Menu.Item key=\"m1i2\">二级菜单2</Menu.Item>\n              <Menu.Item key=\"m1i3\">二级菜单3</Menu.Item>\n              <Menu.SubMenu key=\"m1m1\" title=\"三级菜单\">\n                <Menu.Item key=\"m1m1i1\">三级菜单1</Menu.Item>\n                <Menu.Item key=\"m1m1i2\">三级菜单2</Menu.Item>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m2\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单分组</span></span>}>\n              <Menu.ItemGroup key=\"m2g1\" title=\"分组1\">\n                <Menu.Item key=\"m2g1i1\">二级菜单1</Menu.Item>\n                <Menu.Item key=\"m2g1i2\">二级菜单2</Menu.Item>\n                <Menu.Item key=\"m2g1i3\">二级菜单3</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup key=\"m2g2\" title=\"分组1\">\n                <Menu.Item key=\"m2g2i1\">二级菜单1</Menu.Item>\n                <Menu.Item key=\"m2g2i2\">二级菜单2</Menu.Item>\n                <Menu.Item key=\"m2g2i3\">二级菜单3</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.SubMenu key=\"m2m2\" title=\"三级菜单\">\n                <Menu.ItemGroup key=\"m2m2g1\" title=\"分组1\">\n                  <Menu.Item key=\"m2m2g1i1\">三级菜单1</Menu.Item>\n                  <Menu.Item key=\"m2m2g1i2\">三级菜单2</Menu.Item>\n                </Menu.ItemGroup>\n                <Menu.ItemGroup key=\"m2m2g2\" title=\"分组2\">\n                  <Menu.Item key=\"m2m2g2i1\">三级菜单1</Menu.Item>\n                  <Menu.Item key=\"m2m2g2i2\">三级菜单2</Menu.Item>\n                </Menu.ItemGroup>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m3\" disabled title={<span><Icon className=\"icon\" size={14} name={\"finance\"}/><span>不可用下拉菜单</span></span>}>\n              <Menu.Item key=\"m3i1\">二级菜单4</Menu.Item>\n              <Menu.Item key=\"m3i2\">二级菜单5</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.Item key=\"m4\" disabled>\n              <Icon className=\"icon\" size={14} name={\"paper\"}/>不可用菜单按钮\n            </Menu.Item>\n        </Menu>\n\n        <br /><br /><br />\n\n        3、垂直菜单，子菜单水平向右弹出\n        <Menu\n            //theme={this.state.theme}\n            onClick={this.handleClick}\n            style={{ width: 240, height: 500 }}\n            styleName={\"menu\"}\n            defaultOpenKeys={['.$m1']}\n            selectedKeys={[this.state.current]}\n            type=\"vertical-h\">\n\n          <Menu.Item key=\"m0\">\n            <Icon className=\"icon\" size={14} name={'paper'} />\n              菜单按钮\n            </Menu.Item>\n            <Menu.SubMenu key=\"m1\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单</span></span>}>\n              <Menu.Item key=\"m1i1\">二级菜单1</Menu.Item>\n              <Menu.Item key=\"m1i2\">二级菜单2</Menu.Item>\n              <Menu.Item key=\"m1i3\">二级菜单3</Menu.Item>\n              <Menu.SubMenu key=\"m1m1\" title=\"三级菜单\">\n                <Menu.Item key=\"m1m1i1\">三级菜单1</Menu.Item>\n                <Menu.Item key=\"m1m1i2\">三级菜单2</Menu.Item>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m2\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单分组</span></span>}>\n              <Menu.ItemGroup key=\"m2g1\" title=\"分组1\">\n                <Menu.Item key=\"m2g1i1\">二级菜单1</Menu.Item>\n                <Menu.Item key=\"m2g1i2\">二级菜单2</Menu.Item>\n                <Menu.Item key=\"m2g1i3\">二级菜单3</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup key=\"m2g2\" title=\"分组1\">\n                <Menu.Item key=\"m2g2i1\">二级菜单1</Menu.Item>\n                <Menu.Item key=\"m2g2i2\">二级菜单2</Menu.Item>\n                <Menu.Item key=\"m2g2i3\">二级菜单3</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.SubMenu key=\"m2m2\" title=\"三级菜单\">\n                <Menu.ItemGroup key=\"m2m2g1\" title=\"分组1\">\n                  <Menu.Item key=\"m2m2g1i1\">三级菜单1</Menu.Item>\n                  <Menu.Item key=\"m2m2g1i2\">三级菜单2</Menu.Item>\n                </Menu.ItemGroup>\n                <Menu.ItemGroup key=\"m2m2g2\" title=\"分组2\">\n                  <Menu.Item key=\"m2m2g2i1\">三级菜单1</Menu.Item>\n                  <Menu.Item key=\"m2m2g2i2\">三级菜单2</Menu.Item>\n                </Menu.ItemGroup>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m3\" disabled title={<span><Icon className=\"icon\" size={14} name={\"finance\"}/><span>不可用下拉菜单</span></span>}>\n              <Menu.Item key=\"m3i1\">二级菜单4</Menu.Item>\n              <Menu.Item key=\"m3i2\">二级菜单5</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.Item key=\"m4\" disabled>\n              <Icon className=\"icon\" size={14} name={\"paper\"}/>不可用菜单按钮\n            </Menu.Item>\n        </Menu>\n\n        <br /><br /><br />\n\n        4、垂直菜单，子菜单内嵌在菜单区域\n        <Menu\n            //theme={this.state.theme}\n            onClick={this.handleClick}\n            style={{ width: 240 }}\n            styleName={\"menu\"}\n            defaultOpenKeys={['.$m1']}\n            selectedKeys={[this.state.current]}\n            type=\"vertical-v\">\n          <Menu.Item key=\"m0\">\n            <Icon className=\"icon\" size={14} name={'paper'} />\n              菜单按钮\n            </Menu.Item>\n            <Menu.SubMenu key=\"m1\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单</span></span>}>\n              <Menu.Item key=\"m1i1\">二级菜单1</Menu.Item>\n              <Menu.Item key=\"m1i2\">二级菜单2</Menu.Item>\n              <Menu.Item key=\"m1i3\">二级菜单3</Menu.Item>\n              <Menu.SubMenu key=\"m1m1\" title=\"三级菜单\">\n                <Menu.Item key=\"m1m1i1\">三级菜单1</Menu.Item>\n                <Menu.Item key=\"m1m1i2\">三级菜单2</Menu.Item>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m2\" title={<span><Icon className=\"icon\" size={14} name={\"paper\"}/><span>下拉菜单分组</span></span>}>\n              <Menu.ItemGroup key=\"m2g1\" title=\"分组1\">\n                <Menu.Item key=\"m2g1i1\">二级菜单1</Menu.Item>\n                <Menu.Item key=\"m2g1i2\">二级菜单2</Menu.Item>\n                <Menu.Item key=\"m2g1i3\">二级菜单3</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup key=\"m2g2\" title=\"分组1\">\n                <Menu.Item key=\"m2g2i1\">二级菜单1</Menu.Item>\n                <Menu.Item key=\"m2g2i2\">二级菜单2</Menu.Item>\n                <Menu.Item key=\"m2g2i3\">二级菜单3</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.SubMenu key=\"m2m2\" title=\"三级菜单\">\n                <Menu.ItemGroup key=\"m2m2g1\" title=\"分组1\">\n                  <Menu.Item key=\"m2m2g1i1\">三级菜单1</Menu.Item>\n                  <Menu.Item key=\"m2m2g1i2\">三级菜单2</Menu.Item>\n                </Menu.ItemGroup>\n                <Menu.ItemGroup key=\"m2m2g2\" title=\"分组2\">\n                  <Menu.Item key=\"m2m2g2i1\">三级菜单1</Menu.Item>\n                  <Menu.Item key=\"m2m2g2i2\">三级菜单2</Menu.Item>\n                </Menu.ItemGroup>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n            <Menu.SubMenu key=\"m3\" disabled title={<span><Icon className=\"icon\" size={14} name={\"finance\"}/><span>不可用下拉菜单</span></span>}>\n              <Menu.Item key=\"m3i1\">二级菜单4</Menu.Item>\n              <Menu.Item key=\"m3i2\">二级菜单5</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.Item key=\"m4\" disabled>\n              <Icon className=\"icon\" size={14} name={\"paper\"}/>不可用菜单按钮\n            </Menu.Item>\n        </Menu>\n\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/message/README.md":
/***/ (function(module, exports) {

module.exports = "## Message\n\nMessage Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n|duration|Number|1.5|message 1.5s之后关闭|\n|onClose|Function|function(){}|message 关闭之后的回调|\n|type|String|'info'|message 提示类型|\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/message/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import { Component } from 'react';\nimport Button from '../../button';\nimport message from '../index';\n\nexport default class MessageDemo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {};\n  }\n\n  render() {\n    return (\n      <div>\n        <Button onClick={() => { message.info('这是一条提示信息（信息内容）。'); }}>info</Button>\n        <Button type=\"secondary\" onClick={() => { message.success('这是一条提示信息（信息内容）。'); }}>success</Button>\n        <Button type=\"secondary\" onClick={() => { message.error('这是一条提示信息（信息内容）。'); }}>error</Button>\n        <Button type=\"secondary\" onClick={() => { message.warning('这是一条提示信息（信息内容）。'); }}>warning</Button>\n      </div>\n    );\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/modal/README.md":
/***/ (function(module, exports) {

module.exports = "## Modal\n\nModal Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/modal/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Modal from '../Modal';\nimport Button from 'quark-ui/button';\nimport { Component } from 'react';\n\nexport default class ModalDemo extends Component {\n  constructor(props) {\n    super(props);\n    this.openModal = this.openModal.bind(this);\n    this.state = {\n      visible: false,\n    };\n  }\n  openModal() {\n    this.setState({\n      visible: true,\n    });\n  }\n  closeModal() {\n    this.setState({\n      visible: false,\n    });\n  }\n  render() {\n    const { visible } = this.state;\n    const modalProps = {\n      title: 'title',\n      visible,\n      onOk: () => { this.closeModal(); },\n      onCancel: () => { this.closeModal(); },\n    };\n    return (\n      <div>\n        <h3>基本</h3>\n        <Button type=\"secondary\" onClick={this.openModal}>open modal</Button>\n        <Modal {...modalProps}>\n          <p>first Modal</p>\n        </Modal>\n        <h3>信息提示</h3>\n        <Button\n          type=\"secondary\"\n          onClick={() => {\n            Modal.info({\n              content: '这是提示信息',\n            });\n          }}\n        >info</Button>\n        <Button\n          type=\"secondary\"\n          onClick={() => {\n            Modal.success({\n              content: '这是成功消息',\n            });\n          }}\n        >success</Button>\n        <Button\n          type=\"secondary\"\n          onClick={() => {\n            Modal.error({\n              content: '这是错误提示',\n            });\n          }}\n        >error</Button>\n        <Button\n          type=\"secondary\"\n          onClick={() => {\n            Modal.warning({\n              content: '这是警告信息',\n            });\n          }}\n        >warning</Button>\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/pagination/README.md":
/***/ (function(module, exports) {

module.exports = "## Pagination\n\nPagination Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n| current | number | - | 当前页数 |\n| current | number | 1 | 默认当前页数 |\n| total | number | 0 | 总数 |\n| pageSize | number | - | 每页条数 |\n| defaultPageSize | number | 10 | 默认每页条数 |\n| onChange | function(page, pageSize) | noop | 页码改变回调，参数 |\n| showSizeChanger | boolean | false | 显示分页条数选择 |\n| onSizeChange | function(size, current) | noop | pageSize 变化回调 |\n| pageSizeOptions| number[] | [10, 20, 30, 40] | 指定每页可以显示多少条 |\n| showQuickJumper| boolean | false | 是否展示跳转输入框 |\n| size| string | '' | `small` 指定小尺寸分页  |\n| showTotal | boolean | false | 展示总数 |\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/pagination/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Pagination from '../Pagination';\nimport { Component } from 'react';\n\nexport default class PaginationDemo extends Component {\n  state = {\n    current: 3,\n  };\n  render() {\n    const { current } = this.state;\n    return (\n      <div>\n        <h3>受控方式</h3>\n        <Pagination\n          current={current}\n          total={50}\n          onChange={(c) => {\n            this.setState({\n              current: c,\n            });\n          }}\n        />\n        <h3>非受控方式</h3>\n        <Pagination defaultCurrent={1} total={50} />\n        <h3>更多分页</h3>\n        <Pagination\n          defaultCurrent={1}\n          total={500}\n          showSizeChanger\n          onSizeChange={(size, current) => {\n            console.log(`size: ${size} current: ${current}`);\n          }}\n        />\n        <h3>跳转</h3>\n        <Pagination showTotal total={100} showQuickJumper />\n        <h3>迷你</h3>\n        <Pagination total={100} showQuickJumper showSizeChanger size=\"small\" />\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/progress/README.md":
/***/ (function(module, exports) {

module.exports = "## Progress\n\nProgress Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n|type|string|line|类型，可选 line circle dashboard|\n|percent|number|0|百分比|\n|showInfo|true|boolean|是否显示进度数值或状态图标|\n|strokeWidth|number|10|进度条线的宽度，单位 px|\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/progress/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Progress from '../Progress';\nimport { Component } from 'react';\n\nexport default class ProgressDemo extends Component {\n  render() {\n    return (\n      <div>\n        1、标准的进度条\n        <div>\n          <Progress percent={30} />\n          <Progress percent={50} status=\"active\" />\n          <Progress percent={70} status=\"exception\" />\n          <Progress percent={100} />\n          <Progress percent={50} showInfo={false} />\n        </div>\n        2、小型进度条，适合放在较狭窄的区域内。\n        <div style={{ width: 170 }}>\n          <Progress percent={30} strokeWidth={5} />\n          <Progress percent={50} strokeWidth={5} status=\"active\" />\n          <Progress percent={70} strokeWidth={5} status=\"exception\" />\n          <Progress percent={100} strokeWidth={5} />\n        </div>\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/steps/README.md":
/***/ (function(module, exports) {

module.exports = "## Steps\n\nSteps Component.\n\n### Props\n#### Steps 整体步骤条\n|name|type|default|description|\n|---|---|:---:|:---:|\n|current|number|0|指定当前步骤，从 0 开始记数|\n|status|string|process|指定当前步骤的状态，可选 `wait` `process` `finish`|\n|direction|string|horizontal|指定步骤条方向。默认水平|\n\n#### Steps.Step 步骤条内的每一个步骤\n|name|type|default|description|\n|---|---|:---:|:---:|\n|status|string|wait|指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。|\n|title|string or ReactNode|无|标题|\n|description|string or ReactNode|无|描述，可选|\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/steps/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Steps from '../Steps';\n\nconst Step = Steps.Step;\n\nconst StepDemo = () => (\n  <div>\n    <h3>横向步骤条</h3>\n    <Steps current={1}>\n      <Step title=\"Finished\" description=\"This is a description.\" />\n      <Step title=\"In Progress\" />\n      <Step title=\"Waiting\" />\n    </Steps>\n    <Steps current={2}>\n      <Step title=\"Finished\" description=\"This is a description.\" />\n      <Step title=\"In Progress\" />\n      <Step title=\"Waiting\" description=\"This is a description.\" />\n    </Steps>\n    <h3>竖向步骤条</h3>\n    <Steps current={1} direction=\"vertical\">\n      <Step title=\"Finished\" description=\"This is a description.\" />\n      <Step title=\"In Progress\" description=\"This is a description.\" />\n      <Step title=\"Waiting\" description=\"This is a description.\" />\n    </Steps>\n  </div>\n);\n\nexport default StepDemo;\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/trigger/README.md":
/***/ (function(module, exports) {

module.exports = "## Trigger\n\nTrigger Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n|action| `hover` or `click`|`hover`|触发类型|\n|placement|`array`||弹出层定位|\n|offset|`array`|[0, 0]|定位偏移|\n|popup|`string` or `react.element`|弹出层内容|\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/trigger/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import { Component } from 'react';\nimport Trigger from '../Trigger';\n\nconst PLACEMENT_ENUM = {\n  left: {\n    points: ['cr', 'cl'],\n  },\n  right: {\n    points: ['cl', 'cr'],\n  },\n  top: {\n    points: ['bc', 'tc'],\n  },\n  bottom: {\n    points: ['tc', 'bc'],\n  },\n  topLeft: {\n    points: ['bl', 'tl'],\n  },\n  topRight: {\n    points: ['br', 'tr'],\n  },\n  bottomRight: {\n    points: ['tr', 'br'],\n  },\n  bottomLeft: {\n    points: ['tl', 'bl'],\n  },\n};\n\nconst ActionType = [\n  'hover',\n  'click',\n];\n\nexport default class TriggerDemo extends Component {\n  state = {\n    placement: 'bottom',\n    action: 'click',\n  }\n  onChangePlacement = (e) => {\n    this.setState({\n      placement: e.target.value,\n    });\n  }\n  onChangeActionType = (e) => {\n    this.setState({\n      action: e.target.value,\n    });\n  }\n  renderPlacementSelector() {\n    const { placement } = this.state;\n    return (\n      <select value={placement} onChange={this.onChangePlacement}>\n        {\n          Object.keys(PLACEMENT_ENUM).map(p => (\n            <option key={p}>{p}</option>\n          ))\n        }\n      </select>\n    );\n  }\n  render() {\n    const {\n      placement,\n      action,\n    } = this.state;\n    return (\n      <div>\n        <label htmlFor=\"placement\">对齐方式</label>\n        {\n          this.renderPlacementSelector()\n        }\n        <label htmlFor=\"action\">触发方式</label>\n        {\n          ActionType.map(type => (\n            <label htmlFor=\"action\" key={type}>\n              <input\n                type=\"radio\"\n                onChange={this.onChangeActionType}\n                value={type}\n                checked={type === action}\n              />\n              {type}\n            </label>\n          ))\n        }\n        <Trigger\n          action={action}\n          popup={\n            <div style={{ border: '1px solid #000', padding: 10, background: '#fff' }}>popup content</div>\n          }\n          placement={PLACEMENT_ENUM[placement].points}\n          mouseLeaveDelay={100}\n        >\n          {`${action} me`}\n        </Trigger>\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/upload/README.md":
/***/ (function(module, exports) {

module.exports = "## Upload\n\nUpload Component.\n\n### Props\n|name|type|default|description|\n|---|---|---|---|\n\n### Api"

/***/ }),

/***/ "./node_modules/.0.5.1@raw-loader/index.js!./src/components/upload/demo/index.js":
/***/ (function(module, exports) {

module.exports = "import Upload from '../Upload';\nimport { Component } from 'react';\nimport Icon from '../../icon/Icon';\nimport Button from '../../button/Button';\nimport message from '../../message/index';\n\nexport default class UploadDemo extends Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      file1State: {}\n    };\n  }\n\n\n  render() {\n    var _this = this;\n    const props = {\n      name: 'file',\n      action: 'https://jsonplaceholder.typicode.com/posts/',\n      headers: {\n        authorization: 'authorization-text',\n      },\n      onChange(info) {\n        console.log(info);\n        if (info.file.status !== 'uploading') {\n          console.log(info.file, info.fileList);\n        }\n        if (info.file.status === 'done') {\n          message.success(`${info.file.name} 文件上传成功.`);          \n        } else if (info.file.status === 'error') {\n          message.error(`${info.file.name} 文件上传失败！`);\n        }\n      },\n    };\n\n    \n\n\n    return (\n      <div>\n        <Upload {...props}>\n          <Button size=\"small\" type=\"secondary\">\n            <Icon size={12} name=\"home\" /> Click to Upload\n          </Button>\n        </Upload>\n      </div>\n    );\n  }\n}\n"

/***/ }),

/***/ "./src/components recursive ./!./node_modules/.0.5.1@raw-loader/index.js!./ ^\\.\\/.*\\/README\\.md$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alert/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/alert/README.md",
	"./breadcrumb/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/breadcrumb/README.md",
	"./button/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/button/README.md",
	"./datePicker/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/datePicker/README.md",
	"./dropdown/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/dropdown/README.md",
	"./icon/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/icon/README.md",
	"./menu/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/menu/README.md",
	"./message/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/message/README.md",
	"./modal/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/modal/README.md",
	"./pagination/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/pagination/README.md",
	"./progress/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/progress/README.md",
	"./steps/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/steps/README.md",
	"./trigger/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/trigger/README.md",
	"./upload/README.md": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/upload/README.md"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components recursive ./!./node_modules/.0.5.1@raw-loader/index.js!./ ^\\.\\/.*\\/README\\.md$";

/***/ }),

/***/ "./src/components recursive ./!./node_modules/.0.5.1@raw-loader/index.js!./ ^\\.\\/.*\\/demo\\/index$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alert/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/alert/demo/index.js",
	"./breadcrumb/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/breadcrumb/demo/index.js",
	"./button/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/button/demo/index.js",
	"./datePicker/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/datePicker/demo/index.js",
	"./dropdown/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/dropdown/demo/index.js",
	"./icon/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/icon/demo/index.js",
	"./menu/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/menu/demo/index.js",
	"./message/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/message/demo/index.js",
	"./modal/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/modal/demo/index.js",
	"./pagination/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/pagination/demo/index.js",
	"./progress/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/progress/demo/index.js",
	"./steps/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/steps/demo/index.js",
	"./trigger/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/trigger/demo/index.js",
	"./upload/demo/index": "./node_modules/.0.5.1@raw-loader/index.js!./src/components/upload/demo/index.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components recursive ./!./node_modules/.0.5.1@raw-loader/index.js!./ ^\\.\\/.*\\/demo\\/index$";

/***/ }),

/***/ "./src/components recursive ^\\.\\/.*\\/demo\\/index$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alert/demo/index": "./src/components/alert/demo/index.js",
	"./breadcrumb/demo/index": "./src/components/breadcrumb/demo/index.js",
	"./button/demo/index": "./src/components/button/demo/index.js",
	"./datePicker/demo/index": "./src/components/datePicker/demo/index.js",
	"./dropdown/demo/index": "./src/components/dropdown/demo/index.js",
	"./icon/demo/index": "./src/components/icon/demo/index.js",
	"./menu/demo/index": "./src/components/menu/demo/index.js",
	"./message/demo/index": "./src/components/message/demo/index.js",
	"./modal/demo/index": "./src/components/modal/demo/index.js",
	"./pagination/demo/index": "./src/components/pagination/demo/index.js",
	"./progress/demo/index": "./src/components/progress/demo/index.js",
	"./steps/demo/index": "./src/components/steps/demo/index.js",
	"./trigger/demo/index": "./src/components/trigger/demo/index.js",
	"./upload/demo/index": "./src/components/upload/demo/index.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/components recursive ^\\.\\/.*\\/demo\\/index$";

/***/ }),

/***/ "./src/components/alert/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Alert__ = __webpack_require__("./src/components/alert/Alert.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlertDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AlertDemo = function (_Component) {
  _inherits(AlertDemo, _Component);

  function AlertDemo(props) {
    _classCallCheck(this, AlertDemo);

    var _this = _possibleConstructorReturn(this, (AlertDemo.__proto__ || Object.getPrototypeOf(AlertDemo)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(AlertDemo, [{
    key: 'render',
    value: function render() {
      var infoProps = {
        type: 'info',
        closeText: 'X',
        message: 'info信息',
        description: 'info描述',
        onClose: function onClose() {
          console.log('info');
        }
      };
      var errorProps = {
        type: 'error',
        closable: true,
        closeText: '关闭',
        message: 'error信息',
        onClose: function onClose() {
          console.log('error');
        }
      };
      return React.createElement(
        'div',
        { style: { width: 400 } },
        React.createElement(__WEBPACK_IMPORTED_MODULE_1__Alert__["a" /* default */], infoProps),
        React.createElement(__WEBPACK_IMPORTED_MODULE_1__Alert__["a" /* default */], errorProps)
      );
    }
  }]);

  return AlertDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./src/components/breadcrumb/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb__ = __webpack_require__("./src/components/breadcrumb/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BreadcrumbDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Crumb = __WEBPACK_IMPORTED_MODULE_1__breadcrumb__["a" /* default */].Item;

var BreadcrumbDemo = function (_Component) {
  _inherits(BreadcrumbDemo, _Component);

  function BreadcrumbDemo() {
    _classCallCheck(this, BreadcrumbDemo);

    return _possibleConstructorReturn(this, (BreadcrumbDemo.__proto__ || Object.getPrototypeOf(BreadcrumbDemo)).apply(this, arguments));
  }

  _createClass(BreadcrumbDemo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__breadcrumb__["a" /* default */],
          { separator: '>', hasBackIcon: true },
          React.createElement(
            Crumb,
            null,
            'home'
          ),
          React.createElement(
            Crumb,
            { href: '/component/button' },
            'Button'
          ),
          React.createElement(
            Crumb,
            { href: '/component/steps' },
            'Steps'
          ),
          React.createElement(
            Crumb,
            null,
            'bbb'
          )
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__breadcrumb__["a" /* default */],
          { hasBackIcon: true },
          React.createElement(
            Crumb,
            { href: '/' },
            'home'
          ),
          React.createElement(
            Crumb,
            { href: '/component/button' },
            'Button'
          ),
          React.createElement(
            Crumb,
            { href: '/component/steps' },
            'Steps'
          ),
          React.createElement(
            Crumb,
            null,
            'bbb'
          )
        )
      );
    }
  }]);

  return BreadcrumbDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./src/components/button/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__("./src/components/button/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ButtonDemo = function (_Component) {
  _inherits(ButtonDemo, _Component);

  function ButtonDemo() {
    _classCallCheck(this, ButtonDemo);

    return _possibleConstructorReturn(this, (ButtonDemo.__proto__ || Object.getPrototypeOf(ButtonDemo)).apply(this, arguments));
  }

  _createClass(ButtonDemo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          '\u6309\u94AE\u7C7B\u578B'
        ),
        React.createElement(
          'table',
          null,
          React.createElement(
            'thead',
            null,
            React.createElement(
              'th',
              null,
              '\u4E3B\u6309\u94AE'
            ),
            React.createElement(
              'th',
              null,
              '\u6B21\u6309\u94AE'
            ),
            React.createElement(
              'th',
              null,
              '\u865A\u7EBF\u6309\u94AE'
            ),
            React.createElement(
              'th',
              null,
              '\u5371\u9669\u6309\u94AE'
            )
          ),
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'td',
              null,
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
                { type: 'primary' },
                '\u4E3B\u6309\u94AE'
              )
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
                { type: 'secondary' },
                '\u6B21\u6309\u94AE'
              )
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
                { type: 'dashed' },
                '\u865A\u7EBF\u6309\u94AE'
              )
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
                { type: 'danger' },
                '\u5371\u9669\u6309\u94AE'
              )
            )
          )
        ),
        React.createElement(
          'h3',
          null,
          '\u6309\u94AE\u5C3A\u5BF8'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
          { size: 'large' },
          '\u4E3B\u8981\u6309\u94AE(\u5927)'
        ),
        '\xA0',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
          null,
          '\u4E3B\u8981\u6309\u94AE(\u4E2D)'
        ),
        '\xA0',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
          { size: 'small' },
          '\u4E3B\u8981\u6309\u94AE(\u5C0F)'
        ),
        React.createElement(
          'h3',
          null,
          '\u4E0D\u53EF\u7528\u72B6\u6001'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
          { size: 'large', disabled: true },
          '\u4E0D\u53EF\u7528\u6309\u94AE'
        ),
        '\xA0',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
          { disabled: true },
          '\u4E0D\u53EF\u7528\u6309\u94AE'
        ),
        '\xA0',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Button__["a" /* default */],
          { size: 'small', disabled: true },
          '\u4E0D\u53EF\u7528\u6309\u94AE'
        )
      );
    }
  }]);

  return ButtonDemo;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./src/components/datePicker/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("./node_modules/.2.18.1@moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./src/components/datePicker/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatePickerDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MonthPicker = __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */].MonthPicker,
    RangePicker = __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */].RangePicker;

var DatePickerDemo = function (_Component) {
  _inherits(DatePickerDemo, _Component);

  function DatePickerDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePickerDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePickerDemo.__proto__ || Object.getPrototypeOf(DatePickerDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      disabled: false,
      date: __WEBPACK_IMPORTED_MODULE_1_moment___default()().add(1, 'M')
    }, _this.changeDisabled = function () {
      _this.setState({
        disabled: !_this.state.disabled
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePickerDemo, [{
    key: 'onChange',
    value: function onChange(m) {
      console.log(m);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          date = _state.date,
          disabled = _state.disabled;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: '' },
          React.createElement('input', {
            type: 'checkbox',
            checked: disabled,
            onChange: this.changeDisabled
          }),
          ' \u7981\u7528'
        ),
        React.createElement(
          'h2',
          null,
          '\u65E5\u671F\u9009\u62E9'
        ),
        React.createElement(
          'h3',
          null,
          '\u975E\u53D7\u63A7\u65B9\u5F0F'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */], {
          disabled: disabled,
          onChange: this.onChange
        }),
        React.createElement(
          'h3',
          null,
          '\u53D7\u63A7\u65B9\u5F0F'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */], {
          disabled: disabled,
          value: date,
          onChange: function onChange(d) {
            _this2.setState({
              date: d
            });
          }
        }),
        React.createElement(
          'p',
          null,
          '\u9009\u62E9\u65F6\u95F4: ',
          date.format()
        ),
        React.createElement(
          'h2',
          null,
          '\u4E0D\u53EF\u9009\u65E5\u671F'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */], {
          disabled: disabled,
          disabledDate: function disabledDate(current) {
            return current && current.valueOf() < Date.now();
          }
        }),
        React.createElement(
          'h2',
          null,
          '\u6708\u4EFD\u9009\u62E9'
        ),
        React.createElement(MonthPicker, { onChange: this.onChange, disabled: disabled }),
        React.createElement(
          'h2',
          null,
          '\u8303\u56F4\u9009\u62E9'
        ),
        React.createElement(RangePicker, { onChange: this.onChange, disabled: disabled })
      );
    }
  }]);

  return DatePickerDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./src/components/dropdown/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quark_ui_button__ = __webpack_require__("./src/components/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dropdown__ = __webpack_require__("./src/components/dropdown/Dropdown.js");



var Menu = __WEBPACK_IMPORTED_MODULE_1__Dropdown__["a" /* default */].Menu;
var Item = Menu.Item;


var DropdownDemo = function DropdownDemo() {
  var menu = React.createElement(
    Menu,
    null,
    React.createElement(
      Item,
      null,
      React.createElement(
        'a',
        { href: 'https://www.ehuodi.com' },
        '\u6613\u8D27\u5600'
      )
    ),
    React.createElement(
      Item,
      null,
      React.createElement(
        'a',
        { href: 'http://www.lujing56.cn/' },
        '\u9646\u9CB8'
      )
    ),
    React.createElement(
      Item,
      null,
      React.createElement(
        'a',
        { href: 'https://ecargo.ehuodi.com/' },
        '\u52A0\u76DF\u8F66\u961F\u7BA1\u7406\u7CFB\u7EDF'
      )
    )
  );
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      '\u5E26\u4E0B\u62C9\u6846\u7684\u6309\u94AE'
    ),
    React.createElement(
      __WEBPACK_IMPORTED_MODULE_1__Dropdown__["a" /* default */],
      { overlay: menu },
      React.createElement(
        __WEBPACK_IMPORTED_MODULE_0_quark_ui_button__["a" /* default */],
        null,
        '\u83DC\u5355'
      )
    ),
    React.createElement(
      'h3',
      null,
      'Dropdown\u5185\u7F6E\u6309\u94AE'
    ),
    React.createElement(
      __WEBPACK_IMPORTED_MODULE_1__Dropdown__["a" /* default */].Button,
      { type: 'secondary', overlay: menu, trigger: 'click' },
      '\u83DC\u5355'
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownDemo);

/***/ }),

/***/ "./src/components/icon/demo/index.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/.0.28.0@css-loader/index.js?{\"importLoaders\":1,\"modules\":true,\"localIdentName\":\"[hash:base64:7]\"}!./node_modules/.1.3.3@postcss-loader/index.js?{}!./src/components/icon/demo/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/.0.16.1@style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/.0.28.0@css-loader/index.js??ref--3-1!../../../../node_modules/.1.3.3@postcss-loader/index.js??ref--3-2!./index.css", function() {
			var newContent = require("!!../../../../node_modules/.0.28.0@css-loader/index.js??ref--3-1!../../../../node_modules/.1.3.3@postcss-loader/index.js??ref--3-2!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/icon/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Icon__ = __webpack_require__("./src/components/icon/Icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__("./src/components/icon/demo/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__);



var IconList = ['ellipsis', 'caution', 'question', 'account', 'setting', 'paper', 'finance', 'check', 'arrow-left', 'arrow-right', 'check', 'home', 'info'];

var IconDemo = function IconDemo() {
  return React.createElement(
    'div',
    null,
    IconList.map(function (name) {
      return React.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__index_css___default.a['Icon--grid'], key: name },
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__Icon__["a" /* default */], { size: 48, name: name }),
        React.createElement(
          'span',
          { className: __WEBPACK_IMPORTED_MODULE_1__index_css___default.a['Icon-name'] },
          name
        )
      );
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (IconDemo);

/***/ }),

/***/ "./src/components/menu/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__("./src/components/menu/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_Icon__ = __webpack_require__("./src/components/icon/Icon.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MenuDemo = function (_Component) {
  _inherits(MenuDemo, _Component);

  function MenuDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuDemo.__proto__ || Object.getPrototypeOf(MenuDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      theme: 'dark',
      current: '.$m0'
    }, _this.handleClick = function (e) {
      var key = (e.key || '').replace(/\.\$/g, '');
      _this.setState({
        current: e.key
      });
      console.log(key);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuDemo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        '1\u3001\u6C34\u5E73\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u6C34\u5E73',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */]
          //theme={this.state.theme}
          ,
          { onClick: this.handleClick,
            styleName: "menu",
            selectedKeys: [this.state.current],
            type: 'horizontal-h' },
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm0' },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: 'paper' }),
            '\u83DC\u5355\u6309\u94AE'
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm1', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i1' },
              '\u4E8C\u7EA7\u83DC\u53551'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i2' },
              '\u4E8C\u7EA7\u83DC\u53552'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i3' },
              '\u4E8C\u7EA7\u83DC\u53553'
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm2', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355\u5206\u7EC4'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm2g1i1' },
              '\u4E8C\u7EA7\u83DC\u53551'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm2g1i2' },
              '\u4E8C\u7EA7\u83DC\u53552'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm2g1i3' },
              '\u4E8C\u7EA7\u83DC\u53553'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm2g2i1' },
              '\u4E8C\u7EA7\u83DC\u53551'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm2g2i2' },
              '\u4E8C\u7EA7\u83DC\u53552'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm2g2i3' },
              '\u4E8C\u7EA7\u83DC\u53553'
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm3', disabled: true, title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "finance" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0D\u53EF\u7528\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i1' },
              '\u4E8C\u7EA7\u83DC\u53554'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i2' },
              '\u4E8C\u7EA7\u83DC\u53555'
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm4', disabled: true },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
            '\u4E0D\u53EF\u7528\u83DC\u5355\u6309\u94AE'
          )
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement('br', null),
        '2\u3001\u6C34\u5E73\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u5782\u76F4',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */]
          //theme={this.state.theme}
          ,
          { onClick: this.handleClick,
            styleName: "menu",
            selectedKeys: [this.state.current],
            type: 'horizontal-v' },
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm0' },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
            '\u83DC\u5355\u6309\u94AE'
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm1', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i1' },
              '\u4E8C\u7EA7\u83DC\u53551'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i2' },
              '\u4E8C\u7EA7\u83DC\u53552'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i3' },
              '\u4E8C\u7EA7\u83DC\u53553'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
              { key: 'm1m1', title: '\u4E09\u7EA7\u83DC\u5355' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm1m1i1' },
                '\u4E09\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm1m1i2' },
                '\u4E09\u7EA7\u83DC\u53552'
              )
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm2', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355\u5206\u7EC4'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
              { key: 'm2g1', title: '\u5206\u7EC41' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i1' },
                '\u4E8C\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i2' },
                '\u4E8C\u7EA7\u83DC\u53552'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i3' },
                '\u4E8C\u7EA7\u83DC\u53553'
              )
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
              { key: 'm2g2', title: '\u5206\u7EC41' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i1' },
                '\u4E8C\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i2' },
                '\u4E8C\u7EA7\u83DC\u53552'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i3' },
                '\u4E8C\u7EA7\u83DC\u53553'
              )
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
              { key: 'm2m2', title: '\u4E09\u7EA7\u83DC\u5355' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
                { key: 'm2m2g1', title: '\u5206\u7EC41' },
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g1i1' },
                  '\u4E09\u7EA7\u83DC\u53551'
                ),
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g1i2' },
                  '\u4E09\u7EA7\u83DC\u53552'
                )
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
                { key: 'm2m2g2', title: '\u5206\u7EC42' },
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g2i1' },
                  '\u4E09\u7EA7\u83DC\u53551'
                ),
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g2i2' },
                  '\u4E09\u7EA7\u83DC\u53552'
                )
              )
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm3', disabled: true, title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "finance" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0D\u53EF\u7528\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i1' },
              '\u4E8C\u7EA7\u83DC\u53554'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i2' },
              '\u4E8C\u7EA7\u83DC\u53555'
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm4', disabled: true },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
            '\u4E0D\u53EF\u7528\u83DC\u5355\u6309\u94AE'
          )
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement('br', null),
        '3\u3001\u5782\u76F4\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u6C34\u5E73\u5411\u53F3\u5F39\u51FA',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */]
          //theme={this.state.theme}
          ,
          { onClick: this.handleClick,
            style: { width: 240, height: 500 },
            styleName: "menu",
            defaultOpenKeys: ['.$m1'],
            selectedKeys: [this.state.current],
            type: 'vertical-h' },
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm0' },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: 'paper' }),
            '\u83DC\u5355\u6309\u94AE'
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm1', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i1' },
              '\u4E8C\u7EA7\u83DC\u53551'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i2' },
              '\u4E8C\u7EA7\u83DC\u53552'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i3' },
              '\u4E8C\u7EA7\u83DC\u53553'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
              { key: 'm1m1', title: '\u4E09\u7EA7\u83DC\u5355' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm1m1i1' },
                '\u4E09\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm1m1i2' },
                '\u4E09\u7EA7\u83DC\u53552'
              )
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm2', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355\u5206\u7EC4'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
              { key: 'm2g1', title: '\u5206\u7EC41' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i1' },
                '\u4E8C\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i2' },
                '\u4E8C\u7EA7\u83DC\u53552'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i3' },
                '\u4E8C\u7EA7\u83DC\u53553'
              )
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
              { key: 'm2g2', title: '\u5206\u7EC41' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i1' },
                '\u4E8C\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i2' },
                '\u4E8C\u7EA7\u83DC\u53552'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i3' },
                '\u4E8C\u7EA7\u83DC\u53553'
              )
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
              { key: 'm2m2', title: '\u4E09\u7EA7\u83DC\u5355' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
                { key: 'm2m2g1', title: '\u5206\u7EC41' },
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g1i1' },
                  '\u4E09\u7EA7\u83DC\u53551'
                ),
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g1i2' },
                  '\u4E09\u7EA7\u83DC\u53552'
                )
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
                { key: 'm2m2g2', title: '\u5206\u7EC42' },
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g2i1' },
                  '\u4E09\u7EA7\u83DC\u53551'
                ),
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g2i2' },
                  '\u4E09\u7EA7\u83DC\u53552'
                )
              )
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm3', disabled: true, title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "finance" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0D\u53EF\u7528\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i1' },
              '\u4E8C\u7EA7\u83DC\u53554'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i2' },
              '\u4E8C\u7EA7\u83DC\u53555'
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm4', disabled: true },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
            '\u4E0D\u53EF\u7528\u83DC\u5355\u6309\u94AE'
          )
        ),
        React.createElement('br', null),
        React.createElement('br', null),
        React.createElement('br', null),
        '4\u3001\u5782\u76F4\u83DC\u5355\uFF0C\u5B50\u83DC\u5355\u5185\u5D4C\u5728\u83DC\u5355\u533A\u57DF',
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */]
          //theme={this.state.theme}
          ,
          { onClick: this.handleClick,
            style: { width: 240 },
            styleName: "menu",
            defaultOpenKeys: ['.$m1'],
            selectedKeys: [this.state.current],
            type: 'vertical-v' },
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm0' },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: 'paper' }),
            '\u83DC\u5355\u6309\u94AE'
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm1', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i1' },
              '\u4E8C\u7EA7\u83DC\u53551'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i2' },
              '\u4E8C\u7EA7\u83DC\u53552'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm1i3' },
              '\u4E8C\u7EA7\u83DC\u53553'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
              { key: 'm1m1', title: '\u4E09\u7EA7\u83DC\u5355' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm1m1i1' },
                '\u4E09\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm1m1i2' },
                '\u4E09\u7EA7\u83DC\u53552'
              )
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm2', title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0B\u62C9\u83DC\u5355\u5206\u7EC4'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
              { key: 'm2g1', title: '\u5206\u7EC41' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i1' },
                '\u4E8C\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i2' },
                '\u4E8C\u7EA7\u83DC\u53552'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g1i3' },
                '\u4E8C\u7EA7\u83DC\u53553'
              )
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
              { key: 'm2g2', title: '\u5206\u7EC41' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i1' },
                '\u4E8C\u7EA7\u83DC\u53551'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i2' },
                '\u4E8C\u7EA7\u83DC\u53552'
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                { key: 'm2g2i3' },
                '\u4E8C\u7EA7\u83DC\u53553'
              )
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
              { key: 'm2m2', title: '\u4E09\u7EA7\u83DC\u5355' },
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
                { key: 'm2m2g1', title: '\u5206\u7EC41' },
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g1i1' },
                  '\u4E09\u7EA7\u83DC\u53551'
                ),
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g1i2' },
                  '\u4E09\u7EA7\u83DC\u53552'
                )
              ),
              React.createElement(
                __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].ItemGroup,
                { key: 'm2m2g2', title: '\u5206\u7EC42' },
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g2i1' },
                  '\u4E09\u7EA7\u83DC\u53551'
                ),
                React.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
                  { key: 'm2m2g2i2' },
                  '\u4E09\u7EA7\u83DC\u53552'
                )
              )
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].SubMenu,
            { key: 'm3', disabled: true, title: React.createElement(
                'span',
                null,
                React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "finance" }),
                React.createElement(
                  'span',
                  null,
                  '\u4E0D\u53EF\u7528\u4E0B\u62C9\u83DC\u5355'
                )
              ) },
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i1' },
              '\u4E8C\u7EA7\u83DC\u53554'
            ),
            React.createElement(
              __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
              { key: 'm3i2' },
              '\u4E8C\u7EA7\u83DC\u53555'
            )
          ),
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */].Item,
            { key: 'm4', disabled: true },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { className: 'icon', size: 14, name: "paper" }),
            '\u4E0D\u53EF\u7528\u83DC\u5355\u6309\u94AE'
          )
        )
      );
    }
  }]);

  return MenuDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./src/components/message/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__("./src/components/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("./src/components/message/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MessageDemo = function (_Component) {
  _inherits(MessageDemo, _Component);

  function MessageDemo(props) {
    _classCallCheck(this, MessageDemo);

    var _this = _possibleConstructorReturn(this, (MessageDemo.__proto__ || Object.getPrototypeOf(MessageDemo)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(MessageDemo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */],
          { onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */].info('这是一条提示信息（信息内容）。');
            } },
          'info'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */],
          { type: 'secondary', onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */].success('这是一条提示信息（信息内容）。');
            } },
          'success'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */],
          { type: 'secondary', onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */].error('这是一条提示信息（信息内容）。');
            } },
          'error'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__button__["a" /* default */],
          { type: 'secondary', onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */].warning('这是一条提示信息（信息内容）。');
            } },
          'warning'
        )
      );
    }
  }]);

  return MessageDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./src/components/modal/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Modal__ = __webpack_require__("./src/components/modal/Modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quark_ui_button__ = __webpack_require__("./src/components/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ModalDemo = function (_Component) {
  _inherits(ModalDemo, _Component);

  function ModalDemo(props) {
    _classCallCheck(this, ModalDemo);

    var _this = _possibleConstructorReturn(this, (ModalDemo.__proto__ || Object.getPrototypeOf(ModalDemo)).call(this, props));

    _this.openModal = _this.openModal.bind(_this);
    _this.state = {
      visible: false
    };
    return _this;
  }

  _createClass(ModalDemo, [{
    key: 'openModal',
    value: function openModal() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({
        visible: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var visible = this.state.visible;

      var modalProps = {
        title: 'title',
        visible: visible,
        onOk: function onOk() {
          _this2.closeModal();
        },
        onCancel: function onCancel() {
          _this2.closeModal();
        }
      };
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          '\u57FA\u672C'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1_quark_ui_button__["a" /* default */],
          { type: 'secondary', onClick: this.openModal },
          'open modal'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Modal__["a" /* default */],
          modalProps,
          React.createElement(
            'p',
            null,
            'first Modal'
          )
        ),
        React.createElement(
          'h3',
          null,
          '\u4FE1\u606F\u63D0\u793A'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1_quark_ui_button__["a" /* default */],
          {
            type: 'secondary',
            onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_0__Modal__["a" /* default */].info({
                content: '这是提示信息'
              });
            }
          },
          'info'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1_quark_ui_button__["a" /* default */],
          {
            type: 'secondary',
            onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_0__Modal__["a" /* default */].success({
                content: '这是成功消息'
              });
            }
          },
          'success'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1_quark_ui_button__["a" /* default */],
          {
            type: 'secondary',
            onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_0__Modal__["a" /* default */].error({
                content: '这是错误提示'
              });
            }
          },
          'error'
        ),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1_quark_ui_button__["a" /* default */],
          {
            type: 'secondary',
            onClick: function onClick() {
              __WEBPACK_IMPORTED_MODULE_0__Modal__["a" /* default */].warning({
                content: '这是警告信息'
              });
            }
          },
          'warning'
        )
      );
    }
  }]);

  return ModalDemo;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),

/***/ "./src/components/pagination/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Pagination__ = __webpack_require__("./src/components/pagination/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaginationDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PaginationDemo = function (_Component) {
  _inherits(PaginationDemo, _Component);

  function PaginationDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PaginationDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PaginationDemo.__proto__ || Object.getPrototypeOf(PaginationDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      current: 3
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PaginationDemo, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var current = this.state.current;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'h3',
          null,
          '\u53D7\u63A7\u65B9\u5F0F'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__Pagination__["a" /* default */], {
          current: current,
          total: 50,
          onChange: function onChange(c) {
            _this2.setState({
              current: c
            });
          }
        }),
        React.createElement(
          'h3',
          null,
          '\u975E\u53D7\u63A7\u65B9\u5F0F'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__Pagination__["a" /* default */], { defaultCurrent: 1, total: 50 }),
        React.createElement(
          'h3',
          null,
          '\u66F4\u591A\u5206\u9875'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__Pagination__["a" /* default */], {
          defaultCurrent: 1,
          total: 500,
          showSizeChanger: true,
          onSizeChange: function onSizeChange(size, current) {
            console.log('size: ' + size + ' current: ' + current);
          }
        }),
        React.createElement(
          'h3',
          null,
          '\u8DF3\u8F6C'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__Pagination__["a" /* default */], { showTotal: true, total: 100, showQuickJumper: true }),
        React.createElement(
          'h3',
          null,
          '\u8FF7\u4F60'
        ),
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__Pagination__["a" /* default */], { total: 100, showQuickJumper: true, showSizeChanger: true, size: 'small' })
      );
    }
  }]);

  return PaginationDemo;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./src/components/progress/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Progress__ = __webpack_require__("./src/components/progress/Progress.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProgressDemo = function (_Component) {
  _inherits(ProgressDemo, _Component);

  function ProgressDemo() {
    _classCallCheck(this, ProgressDemo);

    return _possibleConstructorReturn(this, (ProgressDemo.__proto__ || Object.getPrototypeOf(ProgressDemo)).apply(this, arguments));
  }

  _createClass(ProgressDemo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        '1\u3001\u6807\u51C6\u7684\u8FDB\u5EA6\u6761',
        React.createElement(
          'div',
          null,
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 30 }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 50, status: 'active' }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 70, status: 'exception' }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 100 }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 50, showInfo: false })
        ),
        '2\u3001\u5C0F\u578B\u8FDB\u5EA6\u6761\uFF0C\u9002\u5408\u653E\u5728\u8F83\u72ED\u7A84\u7684\u533A\u57DF\u5185\u3002',
        React.createElement(
          'div',
          { style: { width: 170 } },
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 30, strokeWidth: 5 }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 50, strokeWidth: 5, status: 'active' }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 70, strokeWidth: 5, status: 'exception' }),
          React.createElement(__WEBPACK_IMPORTED_MODULE_0__Progress__["a" /* default */], { percent: 100, strokeWidth: 5 })
        )
      );
    }
  }]);

  return ProgressDemo;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./src/components/steps/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Steps__ = __webpack_require__("./src/components/steps/Steps.js");


var Step = __WEBPACK_IMPORTED_MODULE_0__Steps__["a" /* default */].Step;

var StepDemo = function StepDemo() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      "\u6A2A\u5411\u6B65\u9AA4\u6761"
    ),
    React.createElement(
      __WEBPACK_IMPORTED_MODULE_0__Steps__["a" /* default */],
      { current: 1 },
      React.createElement(Step, { title: "Finished", description: "This is a description." }),
      React.createElement(Step, { title: "In Progress" }),
      React.createElement(Step, { title: "Waiting" })
    ),
    React.createElement(
      __WEBPACK_IMPORTED_MODULE_0__Steps__["a" /* default */],
      { current: 2 },
      React.createElement(Step, { title: "Finished", description: "This is a description." }),
      React.createElement(Step, { title: "In Progress" }),
      React.createElement(Step, { title: "Waiting", description: "This is a description." })
    ),
    React.createElement(
      "h3",
      null,
      "\u7AD6\u5411\u6B65\u9AA4\u6761"
    ),
    React.createElement(
      __WEBPACK_IMPORTED_MODULE_0__Steps__["a" /* default */],
      { current: 1, direction: "vertical" },
      React.createElement(Step, { title: "Finished", description: "This is a description." }),
      React.createElement(Step, { title: "In Progress", description: "This is a description." }),
      React.createElement(Step, { title: "Waiting", description: "This is a description." })
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (StepDemo);

/***/ }),

/***/ "./src/components/trigger/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Trigger__ = __webpack_require__("./src/components/trigger/Trigger.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var PLACEMENT_ENUM = {
  left: {
    points: ['cr', 'cl']
  },
  right: {
    points: ['cl', 'cr']
  },
  top: {
    points: ['bc', 'tc']
  },
  bottom: {
    points: ['tc', 'bc']
  },
  topLeft: {
    points: ['bl', 'tl']
  },
  topRight: {
    points: ['br', 'tr']
  },
  bottomRight: {
    points: ['tr', 'br']
  },
  bottomLeft: {
    points: ['tl', 'bl']
  }
};

var ActionType = ['hover', 'click'];

var TriggerDemo = function (_Component) {
  _inherits(TriggerDemo, _Component);

  function TriggerDemo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TriggerDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TriggerDemo.__proto__ || Object.getPrototypeOf(TriggerDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      placement: 'bottom',
      action: 'click'
    }, _this.onChangePlacement = function (e) {
      _this.setState({
        placement: e.target.value
      });
    }, _this.onChangeActionType = function (e) {
      _this.setState({
        action: e.target.value
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TriggerDemo, [{
    key: 'renderPlacementSelector',
    value: function renderPlacementSelector() {
      var placement = this.state.placement;

      return React.createElement(
        'select',
        { value: placement, onChange: this.onChangePlacement },
        Object.keys(PLACEMENT_ENUM).map(function (p) {
          return React.createElement(
            'option',
            { key: p },
            p
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          placement = _state.placement,
          action = _state.action;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'label',
          { htmlFor: 'placement' },
          '\u5BF9\u9F50\u65B9\u5F0F'
        ),
        this.renderPlacementSelector(),
        React.createElement(
          'label',
          { htmlFor: 'action' },
          '\u89E6\u53D1\u65B9\u5F0F'
        ),
        ActionType.map(function (type) {
          return React.createElement(
            'label',
            { htmlFor: 'action', key: type },
            React.createElement('input', {
              type: 'radio',
              onChange: _this2.onChangeActionType,
              value: type,
              checked: type === action
            }),
            type
          );
        }),
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_1__Trigger__["a" /* default */],
          {
            action: action,
            popup: React.createElement(
              'div',
              { style: { border: '1px solid #000', padding: 10, background: '#fff' } },
              'popup content'
            ),
            placement: PLACEMENT_ENUM[placement].points,
            mouseLeaveDelay: 100
          },
          action + ' me'
        )
      );
    }
  }]);

  return TriggerDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./src/components/upload/demo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Upload__ = __webpack_require__("./src/components/upload/Upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icon_Icon__ = __webpack_require__("./src/components/icon/Icon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_Button__ = __webpack_require__("./src/components/button/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_index__ = __webpack_require__("./src/components/message/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadDemo; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var UploadDemo = function (_Component) {
  _inherits(UploadDemo, _Component);

  function UploadDemo(props) {
    _classCallCheck(this, UploadDemo);

    var _this2 = _possibleConstructorReturn(this, (UploadDemo.__proto__ || Object.getPrototypeOf(UploadDemo)).call(this, props));

    _this2.state = {
      file1State: {}
    };
    return _this2;
  }

  _createClass(UploadDemo, [{
    key: 'render',
    value: function render() {
      var _this = this;
      var props = {
        name: 'file',
        action: 'https://jsonplaceholder.typicode.com/posts/',
        headers: {
          authorization: 'authorization-text'
        },
        onChange: function onChange(info) {
          console.log(info);
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            __WEBPACK_IMPORTED_MODULE_4__message_index__["a" /* default */].success(info.file.name + ' \u6587\u4EF6\u4E0A\u4F20\u6210\u529F.');
          } else if (info.file.status === 'error') {
            __WEBPACK_IMPORTED_MODULE_4__message_index__["a" /* default */].error(info.file.name + ' \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF01');
          }
        }
      };

      return React.createElement(
        'div',
        null,
        React.createElement(
          __WEBPACK_IMPORTED_MODULE_0__Upload__["a" /* default */],
          props,
          React.createElement(
            __WEBPACK_IMPORTED_MODULE_3__button_Button__["a" /* default */],
            { size: 'small', type: 'secondary' },
            React.createElement(__WEBPACK_IMPORTED_MODULE_2__icon_Icon__["a" /* default */], { size: 12, name: 'home' }),
            ' Click to Upload'
          )
        )
      );
    }
  }]);

  return UploadDemo;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvUkVBRE1FLm1kIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vUkVBRE1FLm1kIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUkVBRE1FLm1kIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGVwcy9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RlcHMvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXBsb2FkL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cGxvYWQvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIF5cXC5cXC8uKlxcL1JFQURNRVxcLm1kJCIsIndlYnBhY2s6Ly8vIF5cXC5cXC8uKlxcL2RlbW9cXC9pbmRleCQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMgXlxcLlxcLy4qXFwvZGVtb1xcL2luZGV4JCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWxlcnQvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9idXR0b24vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5jc3M/NzMyNiIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tZW51L2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21lc3NhZ2UvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbW9kYWwvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zdGVwcy9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3VwbG9hZC9kZW1vL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMjguMEBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8yZ1V6d1hTIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uXzM3SnhnbnEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIkljb24tLWdyaWRcIjogXCJfMmdVendYU1wiLFxuXHRcIkljb24tbmFtZVwiOiBcIl8zN0p4Z25xXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjI4LjBAY3NzLWxvYWRlcj97XCJpbXBvcnRMb2FkZXJzXCI6MSxcIm1vZHVsZXNcIjp0cnVlLFwibG9jYWxJZGVudE5hbWVcIjpcIltoYXNoOmJhc2U2NDo3XVwifSEuL34vLjEuMy4zQHBvc3Rjc3MtbG9hZGVyP3t9IS4vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuMjguMEBjc3MtbG9hZGVyL2luZGV4LmpzP3tcImltcG9ydExvYWRlcnNcIjoxLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW2hhc2g6YmFzZTY0OjddXCJ9IS4vbm9kZV9tb2R1bGVzLy4xLjMuM0Bwb3N0Y3NzLWxvYWRlci9pbmRleC5qcz97fSEuL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIEFsZXJ0XFxuXFxuQWxlcnQgQ29tcG9uZW50LlxcblxcbiMjIyBQcm9wc1xcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnx0eXBlfHN0cmluZ3wnaW5mbyd85oyH5a6a6K2m5ZGK5o+Q56S655qE5qC35byP77yM5pyJ5Zub56eN6YCJ5oupIHN1Y2Nlc3PjgIFpbmZv44CBd2FybmluZ+OAgWVycm9yfFxcbnxjbG9zYWJsZXxib29sZWFufGZhbHNlfFxcdOm7mOiupOS4jeaYvuekuuWFs+mXreaMiemSrnxcXG58Y2xvc2VUZXh0fHN0cmluZyBvciBSZWFjdE5vZGV85pegfOiHquWumuS5ieWFs+mXreaMiemSrnxcXG58bWVzc2FnZXxzdHJpbmcgb3IgUmVhY3ROb2RlfOaXoHzorablkYrmj5DnpLrlhoXlrrl8XFxufGRlc2NyaXB0aW9ufHN0cmluZyBvciBSZWFjdE5vZGV85pegfOitpuWRiuaPkOekuueahOi+heWKqeaAp+aWh+Wtl+S7i+e7jXxcXG58b25DbG9zZXxGdW5jdGlvbnzml6B85YWz6Zet5pe26Kem5Y+R55qE5Zue6LCD5Ye95pWwfFxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FsZXJ0L1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9hbGVydC9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vQWxlcnQnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0RGVtbyBleHRlbmRzIENvbXBvbmVudCB7XFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xcbiAgICBzdXBlcihwcm9wcyk7XFxuICAgIHRoaXMuc3RhdGUgPSB7fTtcXG4gIH1cXG5cXG4gIHJlbmRlcigpIHtcXG4gICAgY29uc3QgaW5mb1Byb3BzID0ge1xcbiAgICAgIHR5cGU6ICdpbmZvJyxcXG4gICAgICBjbG9zZVRleHQ6ICdYJyxcXG4gICAgICBtZXNzYWdlOiAnaW5mb+S/oeaBrycsXFxuICAgICAgZGVzY3JpcHRpb246ICdpbmZv5o+P6L+wJyxcXG4gICAgICBvbkNsb3NlKCkgeyBjb25zb2xlLmxvZygnaW5mbycpOyB9LFxcbiAgICB9O1xcbiAgICBjb25zdCBlcnJvclByb3BzID0ge1xcbiAgICAgIHR5cGU6ICdlcnJvcicsXFxuICAgICAgY2xvc2FibGU6IHRydWUsXFxuICAgICAgY2xvc2VUZXh0OiAn5YWz6ZetJyxcXG4gICAgICBtZXNzYWdlOiAnZXJyb3Lkv6Hmga8nLFxcbiAgICAgIG9uQ2xvc2UoKSB7IGNvbnNvbGUubG9nKCdlcnJvcicpOyB9LFxcbiAgICB9O1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDQwMCB9fT5cXG4gICAgICAgIDxBbGVydCB7Li4uaW5mb1Byb3BzfSAvPlxcbiAgICAgICAgPEFsZXJ0IHsuLi5lcnJvclByb3BzfSAvPlxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2FsZXJ0L2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYWxlcnQvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgQnJlYWRjcnVtYlxcblxcbkJyZWFkY3J1bWIgQ29tcG9uZW50LlxcblxcbiMjIyBQcm9wc1xcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXw6LS0tOnwtLS18XFxufHByZWZpeENsc3xTdHJpbmd8J2JyZWFkY3J1bWInfOmihOWFiOWumuS5ieeahOagt+W8j+WJjee8gHxcXG58c2VwYXJhdG9yfFN0cmluZ3wnLyd86Z2i5YyF5bGR55qE5YiG6ZqU56ymfFxcbnxoYXNCYWNrSWNvbnxCb29sZWFufGZhbHNlfOaYr+WQpuaYvuekuuWbnumAgOaMiemSrnxcXG4jIyMgQXBpXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2JyZWFkY3J1bWInO1xcblxcbmNvbnN0IENydW1iID0gQnJlYWRjcnVtYi5JdGVtO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFkY3J1bWJEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIHJlbmRlcigpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPEJyZWFkY3J1bWIgc2VwYXJhdG9yPVxcXCI+XFxcIiBoYXNCYWNrSWNvbj5cXG4gICAgICAgICAgPENydW1iPmhvbWU8L0NydW1iPlxcbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cXFwiL2NvbXBvbmVudC9idXR0b25cXFwiPkJ1dHRvbjwvQ3J1bWI+XFxuICAgICAgICAgIDxDcnVtYiBocmVmPVxcXCIvY29tcG9uZW50L3N0ZXBzXFxcIj5TdGVwczwvQ3J1bWI+XFxuICAgICAgICAgIDxDcnVtYj5iYmI8L0NydW1iPlxcbiAgICAgICAgPC9CcmVhZGNydW1iPlxcblxcbiAgICAgICAgPEJyZWFkY3J1bWIgaGFzQmFja0ljb24+XFxuICAgICAgICAgIDxDcnVtYiBocmVmPVxcXCIvXFxcIj5ob21lPC9DcnVtYj5cXG4gICAgICAgICAgPENydW1iIGhyZWY9XFxcIi9jb21wb25lbnQvYnV0dG9uXFxcIj5CdXR0b248L0NydW1iPlxcbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cXFwiL2NvbXBvbmVudC9zdGVwc1xcXCI+U3RlcHM8L0NydW1iPlxcbiAgICAgICAgICA8Q3J1bWI+YmJiPC9DcnVtYj5cXG4gICAgICAgIDwvQnJlYWRjcnVtYj5cXG4gICAgICA8L2Rpdj5cXG4gICAgKTtcXG4gIH1cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBCdXR0b25cXG5cXG5CdXR0b24gQ29tcG9uZW50LlxcblxcbiMjIyBQcm9wc1xcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnx0eXBlfFN0cmluZ3wncHJpbWFyeSd8YnV0dG9uIHR5cGUsIGBwcmltYXJ5YCBgc2Vjb25kYXJ5YCBgZGFzaGVkYCBvciBgZGFuZ2VyYHxcXG58c2l6ZXxTdHJpbmd8J25vcm1hbCd8YnV0dG9uIHNpemUsIGBub3JtYWxgIGBsYXJnZWAgb3IgYHNtYWxsYCB8XFxuXFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9idXR0b24vUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XFxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8aDM+5oyJ6ZKu57G75Z6LPC9oMz5cXG4gICAgICAgIDx0YWJsZT5cXG4gICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgIDx0aD7kuLvmjInpkq48L3RoPlxcbiAgICAgICAgICAgIDx0aD7mrKHmjInpkq48L3RoPlxcbiAgICAgICAgICAgIDx0aD7omZrnur/mjInpkq48L3RoPlxcbiAgICAgICAgICAgIDx0aD7ljbHpmanmjInpkq48L3RoPlxcbiAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgPHRkPjxCdXR0b24gdHlwZT1cXFwicHJpbWFyeVxcXCI+5Li75oyJ6ZKuPC9CdXR0b24+PC90ZD5cXG4gICAgICAgICAgICA8dGQ+PEJ1dHRvbiB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiPuasoeaMiemSrjwvQnV0dG9uPjwvdGQ+XFxuICAgICAgICAgICAgPHRkPjxCdXR0b24gdHlwZT1cXFwiZGFzaGVkXFxcIj7omZrnur/mjInpkq48L0J1dHRvbj48L3RkPlxcbiAgICAgICAgICAgIDx0ZD48QnV0dG9uIHR5cGU9XFxcImRhbmdlclxcXCI+5Y2x6Zmp5oyJ6ZKuPC9CdXR0b24+PC90ZD5cXG4gICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgICAgICA8aDM+5oyJ6ZKu5bC65a+4PC9oMz5cXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cXFwibGFyZ2VcXFwiPuS4u+imgeaMiemSrijlpKcpPC9CdXR0b24+XFxuICAgICAgICAmbmJzcDtcXG4gICAgICAgIDxCdXR0b24+5Li76KaB5oyJ6ZKuKOS4rSk8L0J1dHRvbj5cXG4gICAgICAgICZuYnNwO1xcbiAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJzbWFsbFxcXCI+5Li76KaB5oyJ6ZKuKOWwjyk8L0J1dHRvbj5cXG4gICAgICAgIDxoMz7kuI3lj6/nlKjnirbmgIE8L2gzPlxcbiAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsYXJnZVxcXCIgZGlzYWJsZWQ+5LiN5Y+v55So5oyJ6ZKuPC9CdXR0b24+XFxuICAgICAgICAmbmJzcDtcXG4gICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+5LiN5Y+v55So5oyJ6ZKuPC9CdXR0b24+XFxuICAgICAgICAmbmJzcDtcXG4gICAgICAgIDxCdXR0b24gc2l6ZT1cXFwic21hbGxcXFwiIGRpc2FibGVkPuS4jeWPr+eUqOaMiemSrjwvQnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBEYXRlUGlja2VyXFxuXFxuRGF0ZVBpY2tlciBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxuXFxuIyMjIyBEYXRlUGlja2VyXFxuXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufHZhbHVlfFttb21lbnRdKGh0dHA6Ly9tb21lbnRqcy5jb20vKXzml6B85pel5pyffFxcbnxkZWZhdWx0VmFsdWV8W21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pfOaXoHzpu5jorqTml6XmnJ98XFxufGRpc2FibGVkRGF0ZXxmdW5jfOaXoHzkuI3lj6/pgInmi6nnmoTml6XmnJ98XFxufGRpc2FibGVkfGJvb2xlYW58ZmFsc2V856aB55SofFxcbnxmb3JtYXR8c3RyaW5nfFlZWVktTU0tRER85bGV56S65pel5pyf5qC85byP77yM6YWN572u5Y+C6ICDW21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pfFxcbnxvbkNoYW5nZXxmdW5jfOaXoHzml7bpl7Tlj5HnlJ/lj5jljJblm57osIN8XFxuXFxuIyMjIyBNb250aFBpY2tlclxcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnx2YWx1ZXxbbW9tZW50XShodHRwOi8vbW9tZW50anMuY29tLyl85pegfOaXpeacn3xcXG58ZGVmYXVsdFZhbHVlfFttb21lbnRdKGh0dHA6Ly9tb21lbnRqcy5jb20vKXzml6B86buY6K6k5pel5pyffFxcbnxkaXNhYmxlZHxib29sZWFufGZhbHNlfOemgeeUqHxcXG58Zm9ybWF0fHN0cmluZ3xZWVlZLU1NfOWxleekuuaXpeacn+agvOW8j++8jOmFjee9ruWPguiAg1ttb21lbnRdKGh0dHA6Ly9tb21lbnRqcy5jb20vKXxcXG58b25DaGFuZ2V8ZnVuY3zml6B85pe26Ze05Y+R55Sf5Y+Y5YyW5Zue6LCDfFxcblxcbiMjIyMgUmFuZ2VQaWNrZXJcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58dmFsdWV8W21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pW1185pegfOaXpeacn3xcXG58ZGVmYXVsdFZhbHVlfFttb21lbnRdKGh0dHA6Ly9tb21lbnRqcy5jb20vKVtdfOaXoHzpu5jorqTml6XmnJ98XFxufGRpc2FibGVkRGF0ZXxmdW5jfOaXoHzkuI3lj6/pgInmi6nnmoTml6XmnJ98XFxufGRpc2FibGVkfGJvb2xlYW58ZmFsc2V856aB55SofFxcbnxmb3JtYXR8c3RyaW5nfFlZWVktTU0tRER85bGV56S65pel5pyf5qC85byP77yM6YWN572u5Y+C6ICDW21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pfFxcbnxvbkNoYW5nZXxmdW5jfOaXoHzml7bpl7Tlj5HnlJ/lj5jljJblm57osIN8XFxuXFxuXFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9SRUFETUUubWRcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XFxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi4vaW5kZXgnO1xcblxcbmNvbnN0IHsgTW9udGhQaWNrZXIsIFJhbmdlUGlja2VyIH0gPSBEYXRlUGlja2VyO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXJEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIHN0YXRlID0ge1xcbiAgICBkaXNhYmxlZDogZmFsc2UsXFxuICAgIGRhdGU6IG1vbWVudCgpLmFkZCgxLCAnTScpLFxcbiAgfVxcbiAgb25DaGFuZ2UobSkge1xcbiAgICBjb25zb2xlLmxvZyhtKTtcXG4gIH1cXG4gIGNoYW5nZURpc2FibGVkID0gKCkgPT4ge1xcbiAgICB0aGlzLnNldFN0YXRlKHtcXG4gICAgICBkaXNhYmxlZDogIXRoaXMuc3RhdGUuZGlzYWJsZWQsXFxuICAgIH0pO1xcbiAgfVxcbiAgcmVuZGVyKCkge1xcbiAgICBjb25zdCB7IGRhdGUsIGRpc2FibGVkIH0gPSB0aGlzLnN0YXRlO1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cXFwiXFxcIj5cXG4gICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxuICAgICAgICAgICAgY2hlY2tlZD17ZGlzYWJsZWR9XFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRGlzYWJsZWR9XFxuICAgICAgICAgIC8+IOemgeeUqFxcbiAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgIDxoMj7ml6XmnJ/pgInmi6k8L2gyPlxcbiAgICAgICAgPGgzPumdnuWPl+aOp+aWueW8jzwvaDM+XFxuICAgICAgICA8RGF0ZVBpY2tlclxcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XFxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxcbiAgICAgICAgLz5cXG4gICAgICAgIDxoMz7lj5fmjqfmlrnlvI88L2gzPlxcbiAgICAgICAgPERhdGVQaWNrZXJcXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxcbiAgICAgICAgICB2YWx1ZT17ZGF0ZX1cXG4gICAgICAgICAgb25DaGFuZ2U9eyhkKSA9PiB7XFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgICAgICAgICBkYXRlOiBkLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgICAgIDxwPumAieaLqeaXtumXtDoge2RhdGUuZm9ybWF0KCl9PC9wPlxcbiAgICAgICAgPGgyPuS4jeWPr+mAieaXpeacnzwvaDI+XFxuICAgICAgICA8RGF0ZVBpY2tlclxcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XFxuICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGN1cnJlbnQpID0+IHtcXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudCAmJiBjdXJyZW50LnZhbHVlT2YoKSA8IERhdGUubm93KCk7XFxuICAgICAgICAgIH19XFxuICAgICAgICA+PC9EYXRlUGlja2VyPlxcbiAgICAgICAgPGgyPuaciOS7vemAieaLqTwvaDI+XFxuICAgICAgICA8TW9udGhQaWNrZXIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cXG4gICAgICAgIDxoMj7ojIPlm7TpgInmi6k8L2gyPlxcbiAgICAgICAgPFJhbmdlUGlja2VyIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgRHJvcGRvd25cXG5cXG5Ecm9wZG93biBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxuXFxuIyMjIyBEcm9wZG93blxcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnx0cmlnZ2VyfGBob3ZlcmAgb3IgYGNsaWNrYHxjbGlja3zop6blj5HmlrnlvI98XFxufG92ZXJsYXl8ZWxlbWVudHwtfOiPnOWNleWGheWuuXxcXG58cGxhY2VtZW50fHN0cmluZ3xib3R0b21MZWZ0fOWumuS9jXxcXG5cXG4jIyMjIERyb3Bkb3duLkRyb3Bkb3duQnV0dG9uXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufHR5cGV8c3RyaW5nfGBwcmltYXJ5YHzmjInpkq7nsbvlnot8XFxufHRyaWdnZXJ8YGhvdmVyYCBvciBgY2xpY2tgfGNsaWNrfOinpuWPkeaWueW8j3xcXG58b3ZlcmxheXxlbGVtZW50fC186I+c5Y2V5YaF5a65fFxcbnxwbGFjZW1lbnR8c3RyaW5nfGJvdHRvbVJpZ2h0fOWumuS9jXxcXG5cXG4jIyMjIERyb3Bkb3duLk1lbnVcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG5cXG4jIyMjIERyb3Bkb3duLk1lbnUuSXRlbVxcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcblxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCBCdXR0b24gZnJvbSAncXVhcmstdWkvYnV0dG9uJztcXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vRHJvcGRvd24nO1xcblxcbmNvbnN0IHsgTWVudSB9ID0gRHJvcGRvd247XFxuY29uc3QgeyBJdGVtIH0gPSBNZW51O1xcblxcbmNvbnN0IERyb3Bkb3duRGVtbyA9ICgpID0+IHtcXG4gIGNvbnN0IG1lbnUgPSAoXFxuICAgIDxNZW51PlxcbiAgICAgIDxJdGVtPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly93d3cuZWh1b2RpLmNvbVxcXCI+5piT6LSn5ZiAPC9hPlxcbiAgICAgIDwvSXRlbT5cXG4gICAgICA8SXRlbT5cXG4gICAgICAgIDxhIGhyZWY9XFxcImh0dHA6Ly93d3cubHVqaW5nNTYuY24vXFxcIj7pmYbpsrg8L2E+XFxuICAgICAgPC9JdGVtPlxcbiAgICAgIDxJdGVtPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9lY2FyZ28uZWh1b2RpLmNvbS9cXFwiPuWKoOebn+i9pumYn+euoeeQhuezu+e7nzwvYT5cXG4gICAgICA8L0l0ZW0+XFxuICAgIDwvTWVudT5cXG4gICk7XFxuICByZXR1cm4gKFxcbiAgICA8ZGl2PlxcbiAgICAgIDxoMz7luKbkuIvmi4nmoYbnmoTmjInpkq48L2gzPlxcbiAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51fT5cXG4gICAgICAgIDxCdXR0b24+6I+c5Y2VPC9CdXR0b24+XFxuICAgICAgPC9Ecm9wZG93bj5cXG4gICAgICA8aDM+RHJvcGRvd27lhoXnva7mjInpkq48L2gzPlxcbiAgICAgIDxEcm9wZG93bi5CdXR0b24gdHlwZT1cXFwic2Vjb25kYXJ5XFxcIiBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXsnY2xpY2snfT5cXG4gICAgICAgIOiPnOWNlVxcbiAgICAgIDwvRHJvcGRvd24uQnV0dG9uPlxcbiAgICA8L2Rpdj5cXG4gICk7XFxufTtcXG5cXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bkRlbW87XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIEljb25cXG5cXG5JY29uIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58bmFtZXxzdHJpbmd8Jyd85Zu+5qCH5ZCN56ewfFxcbnxzaXplfG51bWJlcnwzMnzlsLrlr7h8XFxufGNvbG9yfHN0cmluZ3wtfOminOiJsnxcXG5cXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pY29uL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9pY29uL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbic7XFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4LmNzcyc7XFxuXFxuY29uc3QgSWNvbkxpc3QgPSBbXFxuICAnZWxsaXBzaXMnLFxcbiAgJ2NhdXRpb24nLFxcbiAgJ3F1ZXN0aW9uJyxcXG4gICdhY2NvdW50JyxcXG4gICdzZXR0aW5nJyxcXG4gICdwYXBlcicsXFxuICAnZmluYW5jZScsXFxuICAnY2hlY2snLFxcbiAgJ2Fycm93LWxlZnQnLFxcbiAgJ2Fycm93LXJpZ2h0JyxcXG4gICdjaGVjaycsXFxuICAnaG9tZScsXFxuICAnaW5mbycsXFxuXTtcXG5cXG5jb25zdCBJY29uRGVtbyA9ICgpID0+IChcXG4gIDxkaXY+XFxuICAgIHtcXG4gICAgICBJY29uTGlzdC5tYXAobmFtZSA9PiAoXFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydJY29uLS1ncmlkJ119IGtleT17bmFtZX0+XFxuICAgICAgICAgIDxJY29uIHNpemU9ezQ4fSBuYW1lPXtuYW1lfSAvPlxcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snSWNvbi1uYW1lJ119PntuYW1lfTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICkpXFxuICAgIH1cXG4gIDwvZGl2Plxcbik7XFxuXFxuZXhwb3J0IGRlZmF1bHQgSWNvbkRlbW87XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9pY29uL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBNZW51XFxuXFxuTWVudSBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufGNsYXNzTmFtZXxTdHJpbmd8Jyd85qC35byP5ZCN77yM5Y+v5LiN5aGrfFxcbnxtb2RlfFN0cmluZ3xpbmxpbmV86I+c5Y2V57G75Z6L77yM5Y+v6YCJ5YC877yaaG9yaXpvbnRhbC1oKOawtOW5s+iPnOWNle+8jOWtkOiPnOWNleawtOW5synvvIxob3Jpem9udGFsLXYo5rC05bmz6I+c5Y2V77yM5a2Q6I+c5Y2V5Z6C55u0Ke+8jHZlcnRpY2FsLWgo5Z6C55u06I+c5Y2V77yM5a2Q6I+c5Y2V5rC05bmz5ZCR5Y+z5by55Ye6Ke+8jHZlcnRpY2FsLXYo5Z6C55u06I+c5Y2V77yM5a2Q6I+c5Y2V5YaF5bWM5Zyo6I+c5Y2V5Yy65Z+fKXxcXG58c2VsZWN0ZWRLZXlzfHN0cmluZ1tdfFtdfOmAieS4reeahOiPnOWNlemhue+8jOaVsOe7hO+8jOWAvOS4umtleXxcXG58ZGVmYXVsdFNlbGVjdGVkS2V5c3xzdHJpbmdbXXxbXXzpu5jorqTpgInkuK3nmoToj5zljZXpobnvvIzmlbDnu4TvvIzlgLzkuLprZXl8XFxufG9wZW5LZXlzfHN0cmluZ1tdfFtdfOaJk+W8gOeahOiPnOWNle+8jOaVsOe7hO+8jOWAvOS4umtleXxcXG58ZGVmYXVsdE9wZW5LZXlzfHN0cmluZ1tdfFtdfOm7mOiupOaJk+W8gOeahOiPnOWNle+8jOaVsOe7hO+8jOWAvOS4umtleXxcXG58b25DbGlja3xmdW5jdGlvbnwtfOeCueWHuyBtZW51aXRlbSDosIPnlKjmraTlh73mlbDvvIzlj4LmlbDkuLoge2l0ZW0sIGtleSwga2V5UGF0aH18XFxufG9uT3BlbkNoYW5nZXxmdW5jdGlvbnwtfFN1Yk1lbnUg5bGV5byAL+WFs+mXreeahOWbnuiwg3xcXG5cXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tZW51L1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9tZW51L1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnO1xcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2ljb24vSWNvbic7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudURlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcblxcbiAgc3RhdGUgPSB7XFxuICAgIHRoZW1lOiAnZGFyaycsXFxuICAgIGN1cnJlbnQ6ICcuJG0wJyxcXG4gIH1cXG5cXG4gIGhhbmRsZUNsaWNrID0gKGUpID0+IHtcXG4gICAgbGV0IGtleSA9IChlLmtleSB8fCAnJykucmVwbGFjZSgvXFxcXC5cXFxcJC9nLCAnJyk7XFxuICAgIHRoaXMuc2V0U3RhdGUoe1xcbiAgICAgIGN1cnJlbnQ6IGUua2V5XFxuICAgIH0pO1xcbiAgICBjb25zb2xlLmxvZyhrZXkpO1xcbiAgfVxcblxcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICAx44CB5rC05bmz6I+c5Y2V77yM5a2Q6I+c5Y2V5rC05bmzXFxuICAgICAgICA8TWVudVxcbiAgICAgICAgICAgIC8vdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XFxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cXG4gICAgICAgICAgICBzdHlsZU5hbWU9e1xcXCJtZW51XFxcIn1cXG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1t0aGlzLnN0YXRlLmN1cnJlbnRdfVxcbiAgICAgICAgICAgIHR5cGU9XFxcImhvcml6b250YWwtaFxcXCI+XFxuXFxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMFxcXCI+XFxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17J3BhcGVyJ30gLz5cXG4gICAgICAgICAgICAgIOiPnOWNleaMiemSrlxcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMVxcXCIgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJwYXBlclxcXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkzXFxcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0yXFxcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPjxzcGFuPuS4i+aLieiPnOWNleWIhue7hDwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTFcXFwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTFcXFwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTNcXFwiIGRpc2FibGVkIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwiZmluYW5jZVxcXCJ9Lz48c3Bhbj7kuI3lj6/nlKjkuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTNpMVxcXCI+5LqM57qn6I+c5Y2VNDwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0zaTJcXFwiPuS6jOe6p+iPnOWNlTU8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTRcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPuS4jeWPr+eUqOiPnOWNleaMiemSrlxcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxcbiAgICAgICAgPC9NZW51PlxcblxcbiAgICAgICAgPGJyLz48YnIvPjxici8+XFxuXFxuICAgICAgICAy44CB5rC05bmz6I+c5Y2V77yM5a2Q6I+c5Y2V5Z6C55u0XFxuICAgICAgICA8TWVudVxcbiAgICAgICAgICAgIC8vdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XFxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cXG4gICAgICAgICAgICBzdHlsZU5hbWU9e1xcXCJtZW51XFxcIn1cXG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1t0aGlzLnN0YXRlLmN1cnJlbnRdfVxcbiAgICAgICAgICAgIHR5cGU9XFxcImhvcml6b250YWwtdlxcXCI+XFxuXFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0wXFxcIj5cXG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJwYXBlclxcXCJ9Lz5cXG4gICAgICAgICAgICAgIOiPnOWNleaMiemSrlxcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMVxcXCIgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJwYXBlclxcXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkzXFxcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTFtMVxcXCIgdGl0bGU9XFxcIuS4iee6p+iPnOWNlVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMW0xaTFcXFwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xbTFpMlxcXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0yXFxcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPjxzcGFuPuS4i+aLieiPnOWNleWIhue7hDwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0yZzFcXFwiIHRpdGxlPVxcXCLliIbnu4QxXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMWkyXFxcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMmcyXFxcIiB0aXRsZT1cXFwi5YiG57uEMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTFcXFwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMmkzXFxcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxcbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0ybTJcXFwiIHRpdGxlPVxcXCLkuInnuqfoj5zljZVcXFwiPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMm0yZzFcXFwiIHRpdGxlPVxcXCLliIbnu4QxXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcxaTFcXFwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcxaTJcXFwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cXFwibTJtMmcyXFxcIiB0aXRsZT1cXFwi5YiG57uEMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0ybTJnMmkxXFxcIj7kuInnuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0ybTJnMmkyXFxcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTNcXFwiIGRpc2FibGVkIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwiZmluYW5jZVxcXCJ9Lz48c3Bhbj7kuI3lj6/nlKjkuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTNpMVxcXCI+5LqM57qn6I+c5Y2VNDwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0zaTJcXFwiPuS6jOe6p+iPnOWNlTU8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTRcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPuS4jeWPr+eUqOiPnOWNleaMiemSrlxcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxcbiAgICAgICAgPC9NZW51PlxcblxcbiAgICAgICAgPGJyIC8+PGJyIC8+PGJyIC8+XFxuXFxuICAgICAgICAz44CB5Z6C55u06I+c5Y2V77yM5a2Q6I+c5Y2V5rC05bmz5ZCR5Y+z5by55Ye6XFxuICAgICAgICA8TWVudVxcbiAgICAgICAgICAgIC8vdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XFxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwLCBoZWlnaHQ6IDUwMCB9fVxcbiAgICAgICAgICAgIHN0eWxlTmFtZT17XFxcIm1lbnVcXFwifVxcbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WycuJG0xJ119XFxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbdGhpcy5zdGF0ZS5jdXJyZW50XX1cXG4gICAgICAgICAgICB0eXBlPVxcXCJ2ZXJ0aWNhbC1oXFxcIj5cXG5cXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0wXFxcIj5cXG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXsncGFwZXInfSAvPlxcbiAgICAgICAgICAgICAg6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0xXFxcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMW0xXFxcIiB0aXRsZT1cXFwi5LiJ57qn6I+c5Y2VXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xbTFpMVxcXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFtMWkyXFxcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTJcXFwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2V5YiG57uEPC9zcGFuPjwvc3Bhbj59PlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cXFwibTJnMVxcXCIgdGl0bGU9XFxcIuWIhue7hDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMWkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpM1xcXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0yZzJcXFwiIHRpdGxlPVxcXCLliIbnu4QxXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMmkyXFxcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTJtMlxcXCIgdGl0bGU9XFxcIuS4iee6p+iPnOWNlVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0ybTJnMVxcXCIgdGl0bGU9XFxcIuWIhue7hDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzFpMVxcXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzFpMlxcXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMm0yZzJcXFwiIHRpdGxlPVxcXCLliIbnu4QyXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcyaTFcXFwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcyaTJcXFwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtM1xcXCIgZGlzYWJsZWQgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJmaW5hbmNlXFxcIn0vPjxzcGFuPuS4jeWPr+eUqOS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtM2kxXFxcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTNpMlxcXCI+5LqM57qn6I+c5Y2VNTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtNFxcXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+5LiN5Y+v55So6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICA8L01lbnU+XFxuXFxuICAgICAgICA8YnIgLz48YnIgLz48YnIgLz5cXG5cXG4gICAgICAgIDTjgIHlnoLnm7Toj5zljZXvvIzlrZDoj5zljZXlhoXltYzlnKjoj5zljZXljLrln59cXG4gICAgICAgIDxNZW51XFxuICAgICAgICAgICAgLy90aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cXG4gICAgICAgICAgICBzdHlsZU5hbWU9e1xcXCJtZW51XFxcIn1cXG4gICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snLiRtMSddfVxcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W3RoaXMuc3RhdGUuY3VycmVudF19XFxuICAgICAgICAgICAgdHlwZT1cXFwidmVydGljYWwtdlxcXCI+XFxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMFxcXCI+XFxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17J3BhcGVyJ30gLz5cXG4gICAgICAgICAgICAgIOiPnOWNleaMiemSrlxcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMVxcXCIgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJwYXBlclxcXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkzXFxcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTFtMVxcXCIgdGl0bGU9XFxcIuS4iee6p+iPnOWNlVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMW0xaTFcXFwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xbTFpMlxcXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0yXFxcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPjxzcGFuPuS4i+aLieiPnOWNleWIhue7hDwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0yZzFcXFwiIHRpdGxlPVxcXCLliIbnu4QxXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMWkyXFxcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMmcyXFxcIiB0aXRsZT1cXFwi5YiG57uEMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTFcXFwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMmkzXFxcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxcbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0ybTJcXFwiIHRpdGxlPVxcXCLkuInnuqfoj5zljZVcXFwiPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMm0yZzFcXFwiIHRpdGxlPVxcXCLliIbnu4QxXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcxaTFcXFwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcxaTJcXFwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cXFwibTJtMmcyXFxcIiB0aXRsZT1cXFwi5YiG57uEMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0ybTJnMmkxXFxcIj7kuInnuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0ybTJnMmkyXFxcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTNcXFwiIGRpc2FibGVkIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwiZmluYW5jZVxcXCJ9Lz48c3Bhbj7kuI3lj6/nlKjkuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTNpMVxcXCI+5LqM57qn6I+c5Y2VNDwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0zaTJcXFwiPuS6jOe6p+iPnOWNlTU8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTRcXFwiIGRpc2FibGVkPlxcbiAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPuS4jeWPr+eUqOiPnOWNleaMiemSrlxcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxcbiAgICAgICAgPC9NZW51PlxcblxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL21lbnUvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9tZW51L2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIE1lc3NhZ2VcXG5cXG5NZXNzYWdlIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58ZHVyYXRpb258TnVtYmVyfDEuNXxtZXNzYWdlIDEuNXPkuYvlkI7lhbPpl618XFxufG9uQ2xvc2V8RnVuY3Rpb258ZnVuY3Rpb24oKXt9fG1lc3NhZ2Ug5YWz6Zet5LmL5ZCO55qE5Zue6LCDfFxcbnx0eXBlfFN0cmluZ3wnaW5mbyd8bWVzc2FnZSDmj5DnpLrnsbvlnot8XFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9SRUFETUUubWRcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbic7XFxuaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi4vaW5kZXgnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XFxuICAgIHN1cGVyKHByb3BzKTtcXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xcbiAgfVxcblxcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgbWVzc2FnZS5pbmZvKCfov5nmmK/kuIDmnaHmj5DnpLrkv6Hmga/vvIjkv6Hmga/lhoXlrrnvvInjgIInKTsgfX0+aW5mbzwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiIG9uQ2xpY2s9eygpID0+IHsgbWVzc2FnZS5zdWNjZXNzKCfov5nmmK/kuIDmnaHmj5DnpLrkv6Hmga/vvIjkv6Hmga/lhoXlrrnvvInjgIInKTsgfX0+c3VjY2VzczwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiIG9uQ2xpY2s9eygpID0+IHsgbWVzc2FnZS5lcnJvcign6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGv77yI5L+h5oGv5YaF5a6577yJ44CCJyk7IH19PmVycm9yPC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInNlY29uZGFyeVxcXCIgb25DbGljaz17KCkgPT4geyBtZXNzYWdlLndhcm5pbmcoJ+i/meaYr+S4gOadoeaPkOekuuS/oeaBr++8iOS/oeaBr+WGheWuue+8ieOAgicpOyB9fT53YXJuaW5nPC9CdXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL21lc3NhZ2UvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgTW9kYWxcXG5cXG5Nb2RhbCBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxuXFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbW9kYWwvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL21vZGFsL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3F1YXJrLXVpL2J1dHRvbic7XFxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xcbiAgICBzdXBlcihwcm9wcyk7XFxuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcXG4gICAgdGhpcy5zdGF0ZSA9IHtcXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcXG4gICAgfTtcXG4gIH1cXG4gIG9wZW5Nb2RhbCgpIHtcXG4gICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgdmlzaWJsZTogdHJ1ZSxcXG4gICAgfSk7XFxuICB9XFxuICBjbG9zZU1vZGFsKCkge1xcbiAgICB0aGlzLnNldFN0YXRlKHtcXG4gICAgICB2aXNpYmxlOiBmYWxzZSxcXG4gICAgfSk7XFxuICB9XFxuICByZW5kZXIoKSB7XFxuICAgIGNvbnN0IHsgdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcXG4gICAgY29uc3QgbW9kYWxQcm9wcyA9IHtcXG4gICAgICB0aXRsZTogJ3RpdGxlJyxcXG4gICAgICB2aXNpYmxlLFxcbiAgICAgIG9uT2s6ICgpID0+IHsgdGhpcy5jbG9zZU1vZGFsKCk7IH0sXFxuICAgICAgb25DYW5jZWw6ICgpID0+IHsgdGhpcy5jbG9zZU1vZGFsKCk7IH0sXFxuICAgIH07XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxoMz7ln7rmnKw8L2gzPlxcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5vcGVuIG1vZGFsPC9CdXR0b24+XFxuICAgICAgICA8TW9kYWwgey4uLm1vZGFsUHJvcHN9PlxcbiAgICAgICAgICA8cD5maXJzdCBNb2RhbDwvcD5cXG4gICAgICAgIDwvTW9kYWw+XFxuICAgICAgICA8aDM+5L+h5oGv5o+Q56S6PC9oMz5cXG4gICAgICAgIDxCdXR0b25cXG4gICAgICAgICAgdHlwZT1cXFwic2Vjb25kYXJ5XFxcIlxcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgTW9kYWwuaW5mbyh7XFxuICAgICAgICAgICAgICBjb250ZW50OiAn6L+Z5piv5o+Q56S65L+h5oGvJyxcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgfX1cXG4gICAgICAgID5pbmZvPC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgIHR5cGU9XFxcInNlY29uZGFyeVxcXCJcXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgIE1vZGFsLnN1Y2Nlc3Moe1xcbiAgICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+aIkOWKn+a2iOaBrycsXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH19XFxuICAgICAgICA+c3VjY2VzczwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvblxcbiAgICAgICAgICB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiXFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICBNb2RhbC5lcnJvcih7XFxuICAgICAgICAgICAgICBjb250ZW50OiAn6L+Z5piv6ZSZ6K+v5o+Q56S6JyxcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgfX1cXG4gICAgICAgID5lcnJvcjwvQnV0dG9uPlxcbiAgICAgICAgPEJ1dHRvblxcbiAgICAgICAgICB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiXFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICBNb2RhbC53YXJuaW5nKHtcXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/orablkYrkv6Hmga8nLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9fVxcbiAgICAgICAgPndhcm5pbmc8L0J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgKTtcXG4gIH1cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tb2RhbC9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL21vZGFsL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIFBhZ2luYXRpb25cXG5cXG5QYWdpbmF0aW9uIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58IGN1cnJlbnQgfCBudW1iZXIgfCAtIHwg5b2T5YmN6aG15pWwIHxcXG58IGN1cnJlbnQgfCBudW1iZXIgfCAxIHwg6buY6K6k5b2T5YmN6aG15pWwIHxcXG58IHRvdGFsIHwgbnVtYmVyIHwgMCB8IOaAu+aVsCB8XFxufCBwYWdlU2l6ZSB8IG51bWJlciB8IC0gfCDmr4/pobXmnaHmlbAgfFxcbnwgZGVmYXVsdFBhZ2VTaXplIHwgbnVtYmVyIHwgMTAgfCDpu5jorqTmr4/pobXmnaHmlbAgfFxcbnwgb25DaGFuZ2UgfCBmdW5jdGlvbihwYWdlLCBwYWdlU2l6ZSkgfCBub29wIHwg6aG156CB5pS55Y+Y5Zue6LCD77yM5Y+C5pWwIHxcXG58IHNob3dTaXplQ2hhbmdlciB8IGJvb2xlYW4gfCBmYWxzZSB8IOaYvuekuuWIhumhteadoeaVsOmAieaLqSB8XFxufCBvblNpemVDaGFuZ2UgfCBmdW5jdGlvbihzaXplLCBjdXJyZW50KSB8IG5vb3AgfCBwYWdlU2l6ZSDlj5jljJblm57osIMgfFxcbnwgcGFnZVNpemVPcHRpb25zfCBudW1iZXJbXSB8IFsxMCwgMjAsIDMwLCA0MF0gfCDmjIflrprmr4/pobXlj6/ku6XmmL7npLrlpJrlsJHmnaEgfFxcbnwgc2hvd1F1aWNrSnVtcGVyfCBib29sZWFuIHwgZmFsc2UgfCDmmK/lkKblsZXnpLrot7PovazovpPlhaXmoYYgfFxcbnwgc2l6ZXwgc3RyaW5nIHwgJycgfCBgc21hbGxgIOaMh+WumuWwj+WwuuWvuOWIhumhtSAgfFxcbnwgc2hvd1RvdGFsIHwgYm9vbGVhbiB8IGZhbHNlIHwg5bGV56S65oC75pWwIHxcXG5cXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vUGFnaW5hdGlvbic7XFxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2luYXRpb25EZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIHN0YXRlID0ge1xcbiAgICBjdXJyZW50OiAzLFxcbiAgfTtcXG4gIHJlbmRlcigpIHtcXG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlO1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8aDM+5Y+X5o6n5pa55byPPC9oMz5cXG4gICAgICAgIDxQYWdpbmF0aW9uXFxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XFxuICAgICAgICAgIHRvdGFsPXs1MH1cXG4gICAgICAgICAgb25DaGFuZ2U9eyhjKSA9PiB7XFxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgICAgICAgICBjdXJyZW50OiBjLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgICAgIDxoMz7pnZ7lj5fmjqfmlrnlvI88L2gzPlxcbiAgICAgICAgPFBhZ2luYXRpb24gZGVmYXVsdEN1cnJlbnQ9ezF9IHRvdGFsPXs1MH0gLz5cXG4gICAgICAgIDxoMz7mm7TlpJrliIbpobU8L2gzPlxcbiAgICAgICAgPFBhZ2luYXRpb25cXG4gICAgICAgICAgZGVmYXVsdEN1cnJlbnQ9ezF9XFxuICAgICAgICAgIHRvdGFsPXs1MDB9XFxuICAgICAgICAgIHNob3dTaXplQ2hhbmdlclxcbiAgICAgICAgICBvblNpemVDaGFuZ2U9eyhzaXplLCBjdXJyZW50KSA9PiB7XFxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNpemU6ICR7c2l6ZX0gY3VycmVudDogJHtjdXJyZW50fWApO1xcbiAgICAgICAgICB9fVxcbiAgICAgICAgLz5cXG4gICAgICAgIDxoMz7ot7Povaw8L2gzPlxcbiAgICAgICAgPFBhZ2luYXRpb24gc2hvd1RvdGFsIHRvdGFsPXsxMDB9IHNob3dRdWlja0p1bXBlciAvPlxcbiAgICAgICAgPGgzPui/t+S9oDwvaDM+XFxuICAgICAgICA8UGFnaW5hdGlvbiB0b3RhbD17MTAwfSBzaG93UXVpY2tKdW1wZXIgc2hvd1NpemVDaGFuZ2VyIHNpemU9XFxcInNtYWxsXFxcIiAvPlxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIFByb2dyZXNzXFxuXFxuUHJvZ3Jlc3MgQ29tcG9uZW50LlxcblxcbiMjIyBQcm9wc1xcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnx0eXBlfHN0cmluZ3xsaW5lfOexu+Wei++8jOWPr+mAiSBsaW5lIGNpcmNsZSBkYXNoYm9hcmR8XFxufHBlcmNlbnR8bnVtYmVyfDB855m+5YiG5q+UfFxcbnxzaG93SW5mb3x0cnVlfGJvb2xlYW585piv5ZCm5pi+56S66L+b5bqm5pWw5YC85oiW54q25oCB5Zu+5qCHfFxcbnxzdHJva2VXaWR0aHxudW1iZXJ8MTB86L+b5bqm5p2h57q/55qE5a695bqm77yM5Y2V5L2NIHB4fFxcblxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCBQcm9ncmVzcyBmcm9tICcuLi9Qcm9ncmVzcyc7XFxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XFxuICByZW5kZXIoKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDHjgIHmoIflh4bnmoTov5vluqbmnaFcXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXszMH0gLz5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezUwfSBzdGF0dXM9XFxcImFjdGl2ZVxcXCIgLz5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezcwfSBzdGF0dXM9XFxcImV4Y2VwdGlvblxcXCIgLz5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezEwMH0gLz5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezUwfSBzaG93SW5mbz17ZmFsc2V9IC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDLjgIHlsI/lnovov5vluqbmnaHvvIzpgILlkIjmlL7lnKjovoPni63nqoTnmoTljLrln5/lhoXjgIJcXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDE3MCB9fT5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezMwfSBzdHJva2VXaWR0aD17NX0gLz5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezUwfSBzdHJva2VXaWR0aD17NX0gc3RhdHVzPVxcXCJhY3RpdmVcXFwiIC8+XFxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXs3MH0gc3Ryb2tlV2lkdGg9ezV9IHN0YXR1cz1cXFwiZXhjZXB0aW9uXFxcIiAvPlxcbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17MTAwfSBzdHJva2VXaWR0aD17NX0gLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgU3RlcHNcXG5cXG5TdGVwcyBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxuIyMjIyBTdGVwcyDmlbTkvZPmraXpqqTmnaFcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18Oi0tLTp8Oi0tLTp8XFxufGN1cnJlbnR8bnVtYmVyfDB85oyH5a6a5b2T5YmN5q2l6aqk77yM5LuOIDAg5byA5aeL6K6w5pWwfFxcbnxzdGF0dXN8c3RyaW5nfHByb2Nlc3N85oyH5a6a5b2T5YmN5q2l6aqk55qE54q25oCB77yM5Y+v6YCJIGB3YWl0YCBgcHJvY2Vzc2AgYGZpbmlzaGB8XFxufGRpcmVjdGlvbnxzdHJpbmd8aG9yaXpvbnRhbHzmjIflrprmraXpqqTmnaHmlrnlkJHjgILpu5jorqTmsLTlubN8XFxuXFxuIyMjIyBTdGVwcy5TdGVwIOatpemqpOadoeWGheeahOavj+S4gOS4quatpemqpFxcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXw6LS0tOnw6LS0tOnxcXG58c3RhdHVzfHN0cmluZ3x3YWl0fOaMh+WumueKtuaAgeOAguW9k+S4jemFjee9ruivpeWxnuaAp+aXtu+8jOS8muS9v+eUqCBTdGVwcyDnmoQgY3VycmVudCDmnaXoh6rliqjmjIflrprnirbmgIHjgIJ8XFxufHRpdGxlfHN0cmluZyBvciBSZWFjdE5vZGV85pegfOagh+mimHxcXG58ZGVzY3JpcHRpb258c3RyaW5nIG9yIFJlYWN0Tm9kZXzml6B85o+P6L+w77yM5Y+v6YCJfFxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3N0ZXBzL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9zdGVwcy9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCBTdGVwcyBmcm9tICcuLi9TdGVwcyc7XFxuXFxuY29uc3QgU3RlcCA9IFN0ZXBzLlN0ZXA7XFxuXFxuY29uc3QgU3RlcERlbW8gPSAoKSA9PiAoXFxuICA8ZGl2PlxcbiAgICA8aDM+5qiq5ZCR5q2l6aqk5p2hPC9oMz5cXG4gICAgPFN0ZXBzIGN1cnJlbnQ9ezF9PlxcbiAgICAgIDxTdGVwIHRpdGxlPVxcXCJGaW5pc2hlZFxcXCIgZGVzY3JpcHRpb249XFxcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cXFwiIC8+XFxuICAgICAgPFN0ZXAgdGl0bGU9XFxcIkluIFByb2dyZXNzXFxcIiAvPlxcbiAgICAgIDxTdGVwIHRpdGxlPVxcXCJXYWl0aW5nXFxcIiAvPlxcbiAgICA8L1N0ZXBzPlxcbiAgICA8U3RlcHMgY3VycmVudD17Mn0+XFxuICAgICAgPFN0ZXAgdGl0bGU9XFxcIkZpbmlzaGVkXFxcIiBkZXNjcmlwdGlvbj1cXFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlxcXCIgLz5cXG4gICAgICA8U3RlcCB0aXRsZT1cXFwiSW4gUHJvZ3Jlc3NcXFwiIC8+XFxuICAgICAgPFN0ZXAgdGl0bGU9XFxcIldhaXRpbmdcXFwiIGRlc2NyaXB0aW9uPVxcXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXFxcIiAvPlxcbiAgICA8L1N0ZXBzPlxcbiAgICA8aDM+56uW5ZCR5q2l6aqk5p2hPC9oMz5cXG4gICAgPFN0ZXBzIGN1cnJlbnQ9ezF9IGRpcmVjdGlvbj1cXFwidmVydGljYWxcXFwiPlxcbiAgICAgIDxTdGVwIHRpdGxlPVxcXCJGaW5pc2hlZFxcXCIgZGVzY3JpcHRpb249XFxcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cXFwiIC8+XFxuICAgICAgPFN0ZXAgdGl0bGU9XFxcIkluIFByb2dyZXNzXFxcIiBkZXNjcmlwdGlvbj1cXFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlxcXCIgLz5cXG4gICAgICA8U3RlcCB0aXRsZT1cXFwiV2FpdGluZ1xcXCIgZGVzY3JpcHRpb249XFxcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cXFwiIC8+XFxuICAgIDwvU3RlcHM+XFxuICA8L2Rpdj5cXG4pO1xcblxcbmV4cG9ydCBkZWZhdWx0IFN0ZXBEZW1vO1xcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc3RlcHMvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9zdGVwcy9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBUcmlnZ2VyXFxuXFxuVHJpZ2dlciBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufGFjdGlvbnwgYGhvdmVyYCBvciBgY2xpY2tgfGBob3ZlcmB86Kem5Y+R57G75Z6LfFxcbnxwbGFjZW1lbnR8YGFycmF5YHx85by55Ye65bGC5a6a5L2NfFxcbnxvZmZzZXR8YGFycmF5YHxbMCwgMF185a6a5L2N5YGP56e7fFxcbnxwb3B1cHxgc3RyaW5nYCBvciBgcmVhY3QuZWxlbWVudGB85by55Ye65bGC5YaF5a65fFxcblxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuaW1wb3J0IFRyaWdnZXIgZnJvbSAnLi4vVHJpZ2dlcic7XFxuXFxuY29uc3QgUExBQ0VNRU5UX0VOVU0gPSB7XFxuICBsZWZ0OiB7XFxuICAgIHBvaW50czogWydjcicsICdjbCddLFxcbiAgfSxcXG4gIHJpZ2h0OiB7XFxuICAgIHBvaW50czogWydjbCcsICdjciddLFxcbiAgfSxcXG4gIHRvcDoge1xcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcXG4gIH0sXFxuICBib3R0b206IHtcXG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXFxuICB9LFxcbiAgdG9wTGVmdDoge1xcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcXG4gIH0sXFxuICB0b3BSaWdodDoge1xcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcXG4gIH0sXFxuICBib3R0b21SaWdodDoge1xcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcXG4gIH0sXFxuICBib3R0b21MZWZ0OiB7XFxuICAgIHBvaW50czogWyd0bCcsICdibCddLFxcbiAgfSxcXG59O1xcblxcbmNvbnN0IEFjdGlvblR5cGUgPSBbXFxuICAnaG92ZXInLFxcbiAgJ2NsaWNrJyxcXG5dO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXJEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIHN0YXRlID0ge1xcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxcbiAgICBhY3Rpb246ICdjbGljaycsXFxuICB9XFxuICBvbkNoYW5nZVBsYWNlbWVudCA9IChlKSA9PiB7XFxuICAgIHRoaXMuc2V0U3RhdGUoe1xcbiAgICAgIHBsYWNlbWVudDogZS50YXJnZXQudmFsdWUsXFxuICAgIH0pO1xcbiAgfVxcbiAgb25DaGFuZ2VBY3Rpb25UeXBlID0gKGUpID0+IHtcXG4gICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgYWN0aW9uOiBlLnRhcmdldC52YWx1ZSxcXG4gICAgfSk7XFxuICB9XFxuICByZW5kZXJQbGFjZW1lbnRTZWxlY3RvcigpIHtcXG4gICAgY29uc3QgeyBwbGFjZW1lbnQgfSA9IHRoaXMuc3RhdGU7XFxuICAgIHJldHVybiAoXFxuICAgICAgPHNlbGVjdCB2YWx1ZT17cGxhY2VtZW50fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVBsYWNlbWVudH0+XFxuICAgICAgICB7XFxuICAgICAgICAgIE9iamVjdC5rZXlzKFBMQUNFTUVOVF9FTlVNKS5tYXAocCA9PiAoXFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3B9PntwfTwvb3B0aW9uPlxcbiAgICAgICAgICApKVxcbiAgICAgICAgfVxcbiAgICAgIDwvc2VsZWN0PlxcbiAgICApO1xcbiAgfVxcbiAgcmVuZGVyKCkge1xcbiAgICBjb25zdCB7XFxuICAgICAgcGxhY2VtZW50LFxcbiAgICAgIGFjdGlvbixcXG4gICAgfSA9IHRoaXMuc3RhdGU7XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVxcXCJwbGFjZW1lbnRcXFwiPuWvuem9kOaWueW8jzwvbGFiZWw+XFxuICAgICAgICB7XFxuICAgICAgICAgIHRoaXMucmVuZGVyUGxhY2VtZW50U2VsZWN0b3IoKVxcbiAgICAgICAgfVxcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XFxcImFjdGlvblxcXCI+6Kem5Y+R5pa55byPPC9sYWJlbD5cXG4gICAgICAgIHtcXG4gICAgICAgICAgQWN0aW9uVHlwZS5tYXAodHlwZSA9PiAoXFxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XFxcImFjdGlvblxcXCIga2V5PXt0eXBlfT5cXG4gICAgICAgICAgICAgIDxpbnB1dFxcbiAgICAgICAgICAgICAgICB0eXBlPVxcXCJyYWRpb1xcXCJcXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VBY3Rpb25UeXBlfVxcbiAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZX1cXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gYWN0aW9ufVxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgIHt0eXBlfVxcbiAgICAgICAgICAgIDwvbGFiZWw+XFxuICAgICAgICAgICkpXFxuICAgICAgICB9XFxuICAgICAgICA8VHJpZ2dlclxcbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cXG4gICAgICAgICAgcG9wdXA9e1xcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLCBwYWRkaW5nOiAxMCwgYmFja2dyb3VuZDogJyNmZmYnIH19PnBvcHVwIGNvbnRlbnQ8L2Rpdj5cXG4gICAgICAgICAgfVxcbiAgICAgICAgICBwbGFjZW1lbnQ9e1BMQUNFTUVOVF9FTlVNW3BsYWNlbWVudF0ucG9pbnRzfVxcbiAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezEwMH1cXG4gICAgICAgID5cXG4gICAgICAgICAge2Ake2FjdGlvbn0gbWVgfVxcbiAgICAgICAgPC9UcmlnZ2VyPlxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIFVwbG9hZFxcblxcblVwbG9hZCBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxuXFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdXBsb2FkL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy91cGxvYWQvUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgVXBsb2FkIGZyb20gJy4uL1VwbG9hZCc7XFxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2ljb24vSWNvbic7XFxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24vQnV0dG9uJztcXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuLi8uLi9tZXNzYWdlL2luZGV4JztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWREZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG5cXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XFxuICAgIHN1cGVyKHByb3BzKTtcXG4gICAgdGhpcy5zdGF0ZSA9IHtcXG4gICAgICBmaWxlMVN0YXRlOiB7fVxcbiAgICB9O1xcbiAgfVxcblxcblxcbiAgcmVuZGVyKCkge1xcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xcbiAgICBjb25zdCBwcm9wcyA9IHtcXG4gICAgICBuYW1lOiAnZmlsZScsXFxuICAgICAgYWN0aW9uOiAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycsXFxuICAgICAgaGVhZGVyczoge1xcbiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsXFxuICAgICAgfSxcXG4gICAgICBvbkNoYW5nZShpbmZvKSB7XFxuICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcXG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykge1xcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvLmZpbGUsIGluZm8uZmlsZUxpc3QpO1xcbiAgICAgICAgfVxcbiAgICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykge1xcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IOaWh+S7tuS4iuS8oOaIkOWKny5gKTsgICAgICAgICAgXFxuICAgICAgICB9IGVsc2UgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHtcXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0g5paH5Lu25LiK5Lyg5aSx6LSl77yBYCk7XFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgfTtcXG5cXG4gICAgXFxuXFxuXFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxVcGxvYWQgey4uLnByb3BzfT5cXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJzbWFsbFxcXCIgdHlwZT1cXFwic2Vjb25kYXJ5XFxcIj5cXG4gICAgICAgICAgICA8SWNvbiBzaXplPXsxMn0gbmFtZT1cXFwiaG9tZVxcXCIgLz4gQ2xpY2sgdG8gVXBsb2FkXFxuICAgICAgICAgIDwvQnV0dG9uPlxcbiAgICAgICAgPC9VcGxvYWQ+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdXBsb2FkL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvdXBsb2FkL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2FsZXJ0L1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYWxlcnQvUkVBRE1FLm1kXCIsXG5cdFwiLi9icmVhZGNydW1iL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9SRUFETUUubWRcIixcblx0XCIuL2J1dHRvbi9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9SRUFETUUubWRcIixcblx0XCIuL2RhdGVQaWNrZXIvUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL1JFQURNRS5tZFwiLFxuXHRcIi4vZHJvcGRvd24vUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9SRUFETUUubWRcIixcblx0XCIuL2ljb24vUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9pY29uL1JFQURNRS5tZFwiLFxuXHRcIi4vbWVudS9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL21lbnUvUkVBRE1FLm1kXCIsXG5cdFwiLi9tZXNzYWdlL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9SRUFETUUubWRcIixcblx0XCIuL21vZGFsL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbW9kYWwvUkVBRE1FLm1kXCIsXG5cdFwiLi9wYWdpbmF0aW9uL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9SRUFETUUubWRcIixcblx0XCIuL3Byb2dyZXNzL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvUkVBRE1FLm1kXCIsXG5cdFwiLi9zdGVwcy9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3N0ZXBzL1JFQURNRS5tZFwiLFxuXHRcIi4vdHJpZ2dlci9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvUkVBRE1FLm1kXCIsXG5cdFwiLi91cGxvYWQvUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy91cGxvYWQvUkVBRE1FLm1kXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMgcmVjdXJzaXZlIC4vIS4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vIF5cXFxcLlxcXFwvLipcXFxcL1JFQURNRVxcXFwubWQkXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhIF5cXC5cXC8uKlxcL1JFQURNRVxcLm1kJFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcG9uZW50cyByZWN1cnNpdmUgLi8hLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi8gXlxcLlxcLy4qXFwvUkVBRE1FXFwubWQkXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXAgPSB7XG5cdFwiLi9hbGVydC9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9hbGVydC9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9icmVhZGNydW1iL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vYnV0dG9uL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9kYXRlUGlja2VyL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vZHJvcGRvd24vZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vaWNvbi9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9pY29uL2RlbW8vaW5kZXguanNcIixcblx0XCIuL21lbnUvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbWVudS9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9tZXNzYWdlL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL21lc3NhZ2UvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vbW9kYWwvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbW9kYWwvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vcGFnaW5hdGlvbi9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW8vaW5kZXguanNcIixcblx0XCIuL3Byb2dyZXNzL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW8vaW5kZXguanNcIixcblx0XCIuL3N0ZXBzL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3N0ZXBzL2RlbW8vaW5kZXguanNcIixcblx0XCIuL3RyaWdnZXIvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi91cGxvYWQvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvdXBsb2FkL2RlbW8vaW5kZXguanNcIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cyByZWN1cnNpdmUgLi8hLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi8gXlxcXFwuXFxcXC8uKlxcXFwvZGVtb1xcXFwvaW5kZXgkXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhIF5cXC5cXC8uKlxcL2RlbW9cXC9pbmRleCRcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMgcmVjdXJzaXZlIC4vIS4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vIF5cXC5cXC8uKlxcL2RlbW9cXC9pbmRleCRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2FsZXJ0L2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL2FsZXJ0L2RlbW8vaW5kZXguanNcIixcblx0XCIuL2JyZWFkY3J1bWIvZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9idXR0b24vZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RlbW8vaW5kZXguanNcIixcblx0XCIuL2RhdGVQaWNrZXIvZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9kcm9wZG93bi9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9pY29uL2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vbWVudS9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9tZW51L2RlbW8vaW5kZXguanNcIixcblx0XCIuL21lc3NhZ2UvZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9tb2RhbC9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9tb2RhbC9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9wYWdpbmF0aW9uL2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vcHJvZ3Jlc3MvZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vc3RlcHMvZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvc3RlcHMvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vdHJpZ2dlci9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanNcIixcblx0XCIuL3VwbG9hZC9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy91cGxvYWQvZGVtby9pbmRleC5qc1wiXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC9kZW1vXFxcXC9pbmRleCRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzIF5cXC5cXC8uKlxcL2RlbW9cXC9pbmRleCRcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMgcmVjdXJzaXZlIF5cXC5cXC8uKlxcL2RlbW9cXC9pbmRleCRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL0FsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnREZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGluZm9Qcm9wcyA9IHtcbiAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICAgIGNsb3NlVGV4dDogJ1gnLFxuICAgICAgbWVzc2FnZTogJ2luZm/kv6Hmga8nLFxuICAgICAgZGVzY3JpcHRpb246ICdpbmZv5o+P6L+wJyxcbiAgICAgIG9uQ2xvc2UoKSB7IGNvbnNvbGUubG9nKCdpbmZvJyk7IH0sXG4gICAgfTtcbiAgICBjb25zdCBlcnJvclByb3BzID0ge1xuICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgICAgY2xvc2VUZXh0OiAn5YWz6ZetJyxcbiAgICAgIG1lc3NhZ2U6ICdlcnJvcuS/oeaBrycsXG4gICAgICBvbkNsb3NlKCkgeyBjb25zb2xlLmxvZygnZXJyb3InKTsgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiA0MDAgfX0+XG4gICAgICAgIDxBbGVydCB7Li4uaW5mb1Byb3BzfSAvPlxuICAgICAgICA8QWxlcnQgey4uLmVycm9yUHJvcHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYWxlcnQvZGVtby9pbmRleC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2JyZWFkY3J1bWInO1xuXG5jb25zdCBDcnVtYiA9IEJyZWFkY3J1bWIuSXRlbTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWRjcnVtYkRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCcmVhZGNydW1iIHNlcGFyYXRvcj1cIj5cIiBoYXNCYWNrSWNvbj5cbiAgICAgICAgICA8Q3J1bWI+aG9tZTwvQ3J1bWI+XG4gICAgICAgICAgPENydW1iIGhyZWY9XCIvY29tcG9uZW50L2J1dHRvblwiPkJ1dHRvbjwvQ3J1bWI+XG4gICAgICAgICAgPENydW1iIGhyZWY9XCIvY29tcG9uZW50L3N0ZXBzXCI+U3RlcHM8L0NydW1iPlxuICAgICAgICAgIDxDcnVtYj5iYmI8L0NydW1iPlxuICAgICAgICA8L0JyZWFkY3J1bWI+XG5cbiAgICAgICAgPEJyZWFkY3J1bWIgaGFzQmFja0ljb24+XG4gICAgICAgICAgPENydW1iIGhyZWY9XCIvXCI+aG9tZTwvQ3J1bWI+XG4gICAgICAgICAgPENydW1iIGhyZWY9XCIvY29tcG9uZW50L2J1dHRvblwiPkJ1dHRvbjwvQ3J1bWI+XG4gICAgICAgICAgPENydW1iIGhyZWY9XCIvY29tcG9uZW50L3N0ZXBzXCI+U3RlcHM8L0NydW1iPlxuICAgICAgICAgIDxDcnVtYj5iYmI8L0NydW1iPlxuICAgICAgICA8L0JyZWFkY3J1bWI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25EZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+5oyJ6ZKu57G75Z6LPC9oMz5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0aD7kuLvmjInpkq48L3RoPlxuICAgICAgICAgICAgPHRoPuasoeaMiemSrjwvdGg+XG4gICAgICAgICAgICA8dGg+6Jma57q/5oyJ6ZKuPC90aD5cbiAgICAgICAgICAgIDx0aD7ljbHpmanmjInpkq48L3RoPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRkPjxCdXR0b24gdHlwZT1cInByaW1hcnlcIj7kuLvmjInpkq48L0J1dHRvbj48L3RkPlxuICAgICAgICAgICAgPHRkPjxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiPuasoeaMiemSrjwvQnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PEJ1dHRvbiB0eXBlPVwiZGFzaGVkXCI+6Jma57q/5oyJ6ZKuPC9CdXR0b24+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48QnV0dG9uIHR5cGU9XCJkYW5nZXJcIj7ljbHpmanmjInpkq48L0J1dHRvbj48L3RkPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxoMz7mjInpkq7lsLrlr7g8L2gzPlxuICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiPuS4u+imgeaMiemSrijlpKcpPC9CdXR0b24+XG4gICAgICAgICZuYnNwO1xuICAgICAgICA8QnV0dG9uPuS4u+imgeaMiemSrijkuK0pPC9CdXR0b24+XG4gICAgICAgICZuYnNwO1xuICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiPuS4u+imgeaMiemSrijlsI8pPC9CdXR0b24+XG4gICAgICAgIDxoMz7kuI3lj6/nlKjnirbmgIE8L2gzPlxuICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIGRpc2FibGVkPuS4jeWPr+eUqOaMiemSrjwvQnV0dG9uPlxuICAgICAgICAmbmJzcDtcbiAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD7kuI3lj6/nlKjmjInpkq48L0J1dHRvbj5cbiAgICAgICAgJm5ic3A7XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgZGlzYWJsZWQ+5LiN5Y+v55So5oyJ6ZKuPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi9pbmRleCc7XG5cbmNvbnN0IHsgTW9udGhQaWNrZXIsIFJhbmdlUGlja2VyIH0gPSBEYXRlUGlja2VyO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUGlja2VyRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBkYXRlOiBtb21lbnQoKS5hZGQoMSwgJ00nKSxcbiAgfVxuICBvbkNoYW5nZShtKSB7XG4gICAgY29uc29sZS5sb2cobSk7XG4gIH1cbiAgY2hhbmdlRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkaXNhYmxlZDogIXRoaXMuc3RhdGUuZGlzYWJsZWQsXG4gICAgfSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0ZSwgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VEaXNhYmxlZH1cbiAgICAgICAgICAvPiDnpoHnlKhcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGgyPuaXpeacn+mAieaLqTwvaDI+XG4gICAgICAgIDxoMz7pnZ7lj5fmjqfmlrnlvI88L2gzPlxuICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGgzPuWPl+aOp+aWueW8jzwvaDM+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHZhbHVlPXtkYXRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGRhdGU6IGQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8cD7pgInmi6nml7bpl7Q6IHtkYXRlLmZvcm1hdCgpfTwvcD5cbiAgICAgICAgPGgyPuS4jeWPr+mAieaXpeacnzwvaDI+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGRpc2FibGVkRGF0ZT17KGN1cnJlbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50ICYmIGN1cnJlbnQudmFsdWVPZigpIDwgRGF0ZS5ub3coKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9EYXRlUGlja2VyPlxuICAgICAgICA8aDI+5pyI5Lu96YCJ5oupPC9oMj5cbiAgICAgICAgPE1vbnRoUGlja2VyIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XG4gICAgICAgIDxoMj7ojIPlm7TpgInmi6k8L2gyPlxuICAgICAgICA8UmFuZ2VQaWNrZXIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgQnV0dG9uIGZyb20gJ3F1YXJrLXVpL2J1dHRvbic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vRHJvcGRvd24nO1xuXG5jb25zdCB7IE1lbnUgfSA9IERyb3Bkb3duO1xuY29uc3QgeyBJdGVtIH0gPSBNZW51O1xuXG5jb25zdCBEcm9wZG93bkRlbW8gPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSAoXG4gICAgPE1lbnU+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVodW9kaS5jb21cIj7mmJPotKflmIA8L2E+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cubHVqaW5nNTYuY24vXCI+6ZmG6bK4PC9hPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2VjYXJnby5laHVvZGkuY29tL1wiPuWKoOebn+i9pumYn+euoeeQhuezu+e7nzwvYT5cbiAgICAgIDwvSXRlbT5cbiAgICA8L01lbnU+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz7luKbkuIvmi4nmoYbnmoTmjInpkq48L2gzPlxuICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxuICAgICAgICA8QnV0dG9uPuiPnOWNlTwvQnV0dG9uPlxuICAgICAgPC9Ecm9wZG93bj5cbiAgICAgIDxoMz5Ecm9wZG93buWGhee9ruaMiemSrjwvaDM+XG4gICAgICA8RHJvcGRvd24uQnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvdmVybGF5PXttZW51fSB0cmlnZ2VyPXsnY2xpY2snfT5cbiAgICAgICAg6I+c5Y2VXG4gICAgICA8L0Ryb3Bkb3duLkJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duRGVtbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4yOC4wQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8uMS4zLjNAcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4vaW5kZXguY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMTYuMUBzdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjI4LjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy4xLjMuM0Bwb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4yOC4wQGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8uMS4zLjNAcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4vaW5kZXguY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBJY29uTGlzdCA9IFtcbiAgJ2VsbGlwc2lzJyxcbiAgJ2NhdXRpb24nLFxuICAncXVlc3Rpb24nLFxuICAnYWNjb3VudCcsXG4gICdzZXR0aW5nJyxcbiAgJ3BhcGVyJyxcbiAgJ2ZpbmFuY2UnLFxuICAnY2hlY2snLFxuICAnYXJyb3ctbGVmdCcsXG4gICdhcnJvdy1yaWdodCcsXG4gICdjaGVjaycsXG4gICdob21lJyxcbiAgJ2luZm8nLFxuXTtcblxuY29uc3QgSWNvbkRlbW8gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAge1xuICAgICAgSWNvbkxpc3QubWFwKG5hbWUgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydJY29uLS1ncmlkJ119IGtleT17bmFtZX0+XG4gICAgICAgICAgPEljb24gc2l6ZT17NDh9IG5hbWU9e25hbWV9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXNbJ0ljb24tbmFtZSddfT57bmFtZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSlcbiAgICB9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbkRlbW87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9pY29uL0ljb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgc3RhdGUgPSB7XG4gICAgdGhlbWU6ICdkYXJrJyxcbiAgICBjdXJyZW50OiAnLiRtMCcsXG4gIH1cblxuICBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgbGV0IGtleSA9IChlLmtleSB8fCAnJykucmVwbGFjZSgvXFwuXFwkL2csICcnKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnQ6IGUua2V5XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coa2V5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgMeOAgeawtOW5s+iPnOWNle+8jOWtkOiPnOWNleawtOW5s1xuICAgICAgICA8TWVudVxuICAgICAgICAgICAgLy90aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZU5hbWU9e1wibWVudVwifVxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbdGhpcy5zdGF0ZS5jdXJyZW50XX1cbiAgICAgICAgICAgIHR5cGU9XCJob3Jpem9udGFsLWhcIj5cblxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTBcIj5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17J3BhcGVyJ30gLz5cbiAgICAgICAgICAgICAg6I+c5Y2V5oyJ6ZKuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTFcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXtcInBhcGVyXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpMVwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkyXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTJcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXtcInBhcGVyXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZXliIbnu4Q8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJnMWkxXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJnMmkxXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTNcIiBkaXNhYmxlZCB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXtcImZpbmFuY2VcIn0vPjxzcGFuPuS4jeWPr+eUqOS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtM2kxXCI+5LqM57qn6I+c5Y2VNDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0zaTJcIj7kuoznuqfoj5zljZU1PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTRcIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXtcInBhcGVyXCJ9Lz7kuI3lj6/nlKjoj5zljZXmjInpkq5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICA8L01lbnU+XG5cbiAgICAgICAgPGJyLz48YnIvPjxici8+XG5cbiAgICAgICAgMuOAgeawtOW5s+iPnOWNle+8jOWtkOiPnOWNleWeguebtFxuICAgICAgICA8TWVudVxuICAgICAgICAgICAgLy90aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBzdHlsZU5hbWU9e1wibWVudVwifVxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbdGhpcy5zdGF0ZS5jdXJyZW50XX1cbiAgICAgICAgICAgIHR5cGU9XCJob3Jpem9udGFsLXZcIj5cblxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMFwiPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPlxuICAgICAgICAgICAgICDoj5zljZXmjInpkq5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMVwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkxXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMW0xXCIgdGl0bGU9XCLkuInnuqfoj5zljZVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xbTFpMVwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xbTFpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTJcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXtcInBhcGVyXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZXliIbnu4Q8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMmcxXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMmcyXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTJtMlwiIHRpdGxlPVwi5LiJ57qn6I+c5Y2VXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0ybTJnMVwiIHRpdGxlPVwi5YiG57uEMVwiPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzFpMVwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJtMmcxaTJcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVwibTJtMmcyXCIgdGl0bGU9XCLliIbnu4QyXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMmkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzJpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtM1wiIGRpc2FibGVkIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wiZmluYW5jZVwifS8+PHNwYW4+5LiN5Y+v55So5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0zaTFcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTNpMlwiPuS6jOe6p+iPnOWNlTU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtNFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPuS4jeWPr+eUqOiPnOWNleaMiemSrlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudT5cblxuICAgICAgICA8YnIgLz48YnIgLz48YnIgLz5cblxuICAgICAgICAz44CB5Z6C55u06I+c5Y2V77yM5a2Q6I+c5Y2V5rC05bmz5ZCR5Y+z5by55Ye6XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgICAvL3RoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAsIGhlaWdodDogNTAwIH19XG4gICAgICAgICAgICBzdHlsZU5hbWU9e1wibWVudVwifVxuICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJy4kbTEnXX1cbiAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W3RoaXMuc3RhdGUuY3VycmVudF19XG4gICAgICAgICAgICB0eXBlPVwidmVydGljYWwtaFwiPlxuXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMFwiPlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXsncGFwZXInfSAvPlxuICAgICAgICAgICAgICDoj5zljZXmjInpkq5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMVwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkxXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMW0xXCIgdGl0bGU9XCLkuInnuqfoj5zljZVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xbTFpMVwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xbTFpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTJcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXtcInBhcGVyXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZXliIbnu4Q8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMmcxXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMmcyXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTJtMlwiIHRpdGxlPVwi5LiJ57qn6I+c5Y2VXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0ybTJnMVwiIHRpdGxlPVwi5YiG57uEMVwiPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzFpMVwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJtMmcxaTJcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVwibTJtMmcyXCIgdGl0bGU9XCLliIbnu4QyXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMmkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzJpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtM1wiIGRpc2FibGVkIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wiZmluYW5jZVwifS8+PHNwYW4+5LiN5Y+v55So5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0zaTFcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTNpMlwiPuS6jOe6p+iPnOWNlTU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtNFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPuS4jeWPr+eUqOiPnOWNleaMiemSrlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudT5cblxuICAgICAgICA8YnIgLz48YnIgLz48YnIgLz5cblxuICAgICAgICA044CB5Z6C55u06I+c5Y2V77yM5a2Q6I+c5Y2V5YaF5bWM5Zyo6I+c5Y2V5Yy65Z+fXG4gICAgICAgIDxNZW51XG4gICAgICAgICAgICAvL3RoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cbiAgICAgICAgICAgIHN0eWxlTmFtZT17XCJtZW51XCJ9XG4gICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snLiRtMSddfVxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbdGhpcy5zdGF0ZS5jdXJyZW50XX1cbiAgICAgICAgICAgIHR5cGU9XCJ2ZXJ0aWNhbC12XCI+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMFwiPlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXsncGFwZXInfSAvPlxuICAgICAgICAgICAgICDoj5zljZXmjInpkq5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMVwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkxXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMW0xXCIgdGl0bGU9XCLkuInnuqfoj5zljZVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xbTFpMVwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xbTFpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTJcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXtcInBhcGVyXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZXliIbnu4Q8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMmcxXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMmcyXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTNcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVwibTJtMlwiIHRpdGxlPVwi5LiJ57qn6I+c5Y2VXCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0ybTJnMVwiIHRpdGxlPVwi5YiG57uEMVwiPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzFpMVwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJtMmcxaTJcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVwibTJtMmcyXCIgdGl0bGU9XCLliIbnu4QyXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMmkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzJpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtM1wiIGRpc2FibGVkIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wiZmluYW5jZVwifS8+PHNwYW4+5LiN5Y+v55So5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0zaTFcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTNpMlwiPuS6jOe6p+iPnOWNlTU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtNFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPuS4jeWPr+eUqOiPnOWNleaMiemSrlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudT5cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21lbnUvZGVtby9pbmRleC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJztcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4uL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZURlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyBtZXNzYWdlLmluZm8oJ+i/meaYr+S4gOadoeaPkOekuuS/oeaBr++8iOS/oeaBr+WGheWuue+8ieOAgicpOyB9fT5pbmZvPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHsgbWVzc2FnZS5zdWNjZXNzKCfov5nmmK/kuIDmnaHmj5DnpLrkv6Hmga/vvIjkv6Hmga/lhoXlrrnvvInjgIInKTsgfX0+c3VjY2VzczwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiB7IG1lc3NhZ2UuZXJyb3IoJ+i/meaYr+S4gOadoeaPkOekuuS/oeaBr++8iOS/oeaBr+WGheWuue+8ieOAgicpOyB9fT5lcnJvcjwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiB7IG1lc3NhZ2Uud2FybmluZygn6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGv77yI5L+h5oGv5YaF5a6577yJ44CCJyk7IH19Pndhcm5pbmc8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21lc3NhZ2UvZGVtby9pbmRleC5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3F1YXJrLXVpL2J1dHRvbic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub3Blbk1vZGFsID0gdGhpcy5vcGVuTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9XG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IG1vZGFsUHJvcHMgPSB7XG4gICAgICB0aXRsZTogJ3RpdGxlJyxcbiAgICAgIHZpc2libGUsXG4gICAgICBvbk9rOiAoKSA9PiB7IHRoaXMuY2xvc2VNb2RhbCgpOyB9LFxuICAgICAgb25DYW5jZWw6ICgpID0+IHsgdGhpcy5jbG9zZU1vZGFsKCk7IH0sXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPuWfuuacrDwvaDM+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfT5vcGVuIG1vZGFsPC9CdXR0b24+XG4gICAgICAgIDxNb2RhbCB7Li4ubW9kYWxQcm9wc30+XG4gICAgICAgICAgPHA+Zmlyc3QgTW9kYWw8L3A+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDxoMz7kv6Hmga/mj5DnpLo8L2gzPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgTW9kYWwuaW5mbyh7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/mj5DnpLrkv6Hmga8nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPmluZm88L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIE1vZGFsLnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICBjb250ZW50OiAn6L+Z5piv5oiQ5Yqf5raI5oGvJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5zdWNjZXNzPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBNb2RhbC5lcnJvcih7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/plJnor6/mj5DnpLonLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPmVycm9yPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBNb2RhbC53YXJuaW5nKHtcbiAgICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+itpuWRiuS/oeaBrycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+d2FybmluZzwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL21vZGFsL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9QYWdpbmF0aW9uJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGlvbkRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW50OiAzLFxuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+5Y+X5o6n5pa55byPPC9oMz5cbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgIHRvdGFsPXs1MH1cbiAgICAgICAgICBvbkNoYW5nZT17KGMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBjdXJyZW50OiBjLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGgzPumdnuWPl+aOp+aWueW8jzwvaDM+XG4gICAgICAgIDxQYWdpbmF0aW9uIGRlZmF1bHRDdXJyZW50PXsxfSB0b3RhbD17NTB9IC8+XG4gICAgICAgIDxoMz7mm7TlpJrliIbpobU8L2gzPlxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGRlZmF1bHRDdXJyZW50PXsxfVxuICAgICAgICAgIHRvdGFsPXs1MDB9XG4gICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXG4gICAgICAgICAgb25TaXplQ2hhbmdlPXsoc2l6ZSwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHNpemU6ICR7c2l6ZX0gY3VycmVudDogJHtjdXJyZW50fWApO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxoMz7ot7Povaw8L2gzPlxuICAgICAgICA8UGFnaW5hdGlvbiBzaG93VG90YWwgdG90YWw9ezEwMH0gc2hvd1F1aWNrSnVtcGVyIC8+XG4gICAgICAgIDxoMz7ov7fkvaA8L2gzPlxuICAgICAgICA8UGFnaW5hdGlvbiB0b3RhbD17MTAwfSBzaG93UXVpY2tKdW1wZXIgc2hvd1NpemVDaGFuZ2VyIHNpemU9XCJzbWFsbFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IFByb2dyZXNzIGZyb20gJy4uL1Byb2dyZXNzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAx44CB5qCH5YeG55qE6L+b5bqm5p2hXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezMwfSAvPlxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXs1MH0gc3RhdHVzPVwiYWN0aXZlXCIgLz5cbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NzB9IHN0YXR1cz1cImV4Y2VwdGlvblwiIC8+XG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezEwMH0gLz5cbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NTB9IHNob3dJbmZvPXtmYWxzZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDLjgIHlsI/lnovov5vluqbmnaHvvIzpgILlkIjmlL7lnKjovoPni63nqoTnmoTljLrln5/lhoXjgIJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTcwIH19PlxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXszMH0gc3Ryb2tlV2lkdGg9ezV9IC8+XG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezUwfSBzdHJva2VXaWR0aD17NX0gc3RhdHVzPVwiYWN0aXZlXCIgLz5cbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NzB9IHN0cm9rZVdpZHRoPXs1fSBzdGF0dXM9XCJleGNlcHRpb25cIiAvPlxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXsxMDB9IHN0cm9rZVdpZHRoPXs1fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IFN0ZXBzIGZyb20gJy4uL1N0ZXBzJztcblxuY29uc3QgU3RlcCA9IFN0ZXBzLlN0ZXA7XG5cbmNvbnN0IFN0ZXBEZW1vID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMz7mqKrlkJHmraXpqqTmnaE8L2gzPlxuICAgIDxTdGVwcyBjdXJyZW50PXsxfT5cbiAgICAgIDxTdGVwIHRpdGxlPVwiRmluaXNoZWRcIiBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIiAvPlxuICAgICAgPFN0ZXAgdGl0bGU9XCJJbiBQcm9ncmVzc1wiIC8+XG4gICAgICA8U3RlcCB0aXRsZT1cIldhaXRpbmdcIiAvPlxuICAgIDwvU3RlcHM+XG4gICAgPFN0ZXBzIGN1cnJlbnQ9ezJ9PlxuICAgICAgPFN0ZXAgdGl0bGU9XCJGaW5pc2hlZFwiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiIC8+XG4gICAgICA8U3RlcCB0aXRsZT1cIkluIFByb2dyZXNzXCIgLz5cbiAgICAgIDxTdGVwIHRpdGxlPVwiV2FpdGluZ1wiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiIC8+XG4gICAgPC9TdGVwcz5cbiAgICA8aDM+56uW5ZCR5q2l6aqk5p2hPC9oMz5cbiAgICA8U3RlcHMgY3VycmVudD17MX0gZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgIDxTdGVwIHRpdGxlPVwiRmluaXNoZWRcIiBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIiAvPlxuICAgICAgPFN0ZXAgdGl0bGU9XCJJbiBQcm9ncmVzc1wiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiIC8+XG4gICAgICA8U3RlcCB0aXRsZT1cIldhaXRpbmdcIiBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cIiAvPlxuICAgIDwvU3RlcHM+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcERlbW87XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvc3RlcHMvZGVtby9pbmRleC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJy4uL1RyaWdnZXInO1xuXG5jb25zdCBQTEFDRU1FTlRfRU5VTSA9IHtcbiAgbGVmdDoge1xuICAgIHBvaW50czogWydjcicsICdjbCddLFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICB9LFxufTtcblxuY29uc3QgQWN0aW9uVHlwZSA9IFtcbiAgJ2hvdmVyJyxcbiAgJ2NsaWNrJyxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXJEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICBhY3Rpb246ICdjbGljaycsXG4gIH1cbiAgb25DaGFuZ2VQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGxhY2VtZW50OiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkNoYW5nZUFjdGlvblR5cGUgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aW9uOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuICByZW5kZXJQbGFjZW1lbnRTZWxlY3RvcigpIHtcbiAgICBjb25zdCB7IHBsYWNlbWVudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlbGVjdCB2YWx1ZT17cGxhY2VtZW50fSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZVBsYWNlbWVudH0+XG4gICAgICAgIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhQTEFDRU1FTlRfRU5VTSkubWFwKHAgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3B9PntwfTwvb3B0aW9uPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgICk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBsYWNlbWVudCxcbiAgICAgIGFjdGlvbixcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwbGFjZW1lbnRcIj7lr7npvZDmlrnlvI88L2xhYmVsPlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJQbGFjZW1lbnRTZWxlY3RvcigpXG4gICAgICAgIH1cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY3Rpb25cIj7op6blj5HmlrnlvI88L2xhYmVsPlxuICAgICAgICB7XG4gICAgICAgICAgQWN0aW9uVHlwZS5tYXAodHlwZSA9PiAoXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjdGlvblwiIGtleT17dHlwZX0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VBY3Rpb25UeXBlfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0eXBlfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3R5cGUgPT09IGFjdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3R5cGV9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPFRyaWdnZXJcbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICBwb3B1cD17XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjMDAwJywgcGFkZGluZzogMTAsIGJhY2tncm91bmQ6ICcjZmZmJyB9fT5wb3B1cCBjb250ZW50PC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYWNlbWVudD17UExBQ0VNRU5UX0VOVU1bcGxhY2VtZW50XS5wb2ludHN9XG4gICAgICAgICAgbW91c2VMZWF2ZURlbGF5PXsxMDB9XG4gICAgICAgID5cbiAgICAgICAgICB7YCR7YWN0aW9ufSBtZWB9XG4gICAgICAgIDwvVHJpZ2dlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgVXBsb2FkIGZyb20gJy4uL1VwbG9hZCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9pY29uL0ljb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24vQnV0dG9uJztcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4uLy4uL21lc3NhZ2UvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWREZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZTFTdGF0ZToge31cbiAgICB9O1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgIGFjdGlvbjogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8nLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBhdXRob3JpemF0aW9uOiAnYXV0aG9yaXphdGlvbi10ZXh0JyxcbiAgICAgIH0sXG4gICAgICBvbkNoYW5nZShpbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyAhPT0gJ3VwbG9hZGluZycpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbmZvLmZpbGUsIGluZm8uZmlsZUxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IOaWh+S7tuS4iuS8oOaIkOWKny5gKTsgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IOaWh+S7tuS4iuS8oOWksei0pe+8gWApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxVcGxvYWQgey4uLnByb3BzfT5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHR5cGU9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIDxJY29uIHNpemU9ezEyfSBuYW1lPVwiaG9tZVwiIC8+IENsaWNrIHRvIFVwbG9hZFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1VwbG9hZD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy91cGxvYWQvZGVtby9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQTNCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBUkE7QUFnQkE7Ozs7QUFuQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBUEE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCQTtBQW1CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkJBO0FBcUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCQTtBQXlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekJBO0FBMkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzQkE7QUE4QkE7Ozs7QUFqQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQVBBO0FBQ0E7QUFDQTs7O0FBTUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW5DQTtBQXNDQTs7OztBQXREQTtBQUNBOzs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBRkE7QUFEQTtBQUNBO0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBNUJBO0FBaUNBO0FBQUE7QUFBQTtBQW5DQTtBQXNDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFYQTtBQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBOUNBO0FBbURBO0FBQUE7QUFBQTtBQXpGQTtBQTRGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBWEE7QUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWhEQTtBQXFEQTtBQUFBO0FBQUE7QUFqSkE7QUFvSkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFMQTtBQVhBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUEvQ0E7QUFwSkE7QUEwTUE7Ozs7QUEzTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQU9BOzs7O0FBZkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBQUE7QUFBQTtBQS9CQTtBQXlDQTs7OztBQXBFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQURBOzs7OztBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVBBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUF6QkE7QUE0QkE7Ozs7QUFuQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFWQTtBQWtCQTs7OztBQXJCQTtBQUNBOzs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBYkE7QUFEQTtBQUNBO0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUF0QkE7QUFDQTtBQTBCQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFRQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBTkE7QUFRQTtBQVJBO0FBbkJBO0FBK0JBOzs7O0FBaEVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBQ0E7QUFxQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFEQTtBQVFBOzs7O0FBM0NBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=0.js.map