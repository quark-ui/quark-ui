webpackJsonp([0],{

/***/ "./node_modules/.0.28.0@css-loader/index.js?{\"importLoaders\":1,\"modules\":true,\"localIdentName\":\"[hash:base64:7]\",\"minimize\":true}!./node_modules/.1.3.3@postcss-loader/index.js?{}!./src/components/icon/demo/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/.0.28.0@css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "._2gUzwXS{display:inline-block;width:80px;height:80px;text-align:center}._37Jxgnq{display:block;font-size:12px}", ""]);

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
var content = __webpack_require__("./node_modules/.0.28.0@css-loader/index.js?{\"importLoaders\":1,\"modules\":true,\"localIdentName\":\"[hash:base64:7]\",\"minimize\":true}!./node_modules/.1.3.3@postcss-loader/index.js?{}!./src/components/icon/demo/index.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("./node_modules/.0.16.1@style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/.0.28.0@css-loader/index.js??ref--3-2!../../../../node_modules/.1.3.3@postcss-loader/index.js??ref--3-3!./index.css", function() {
			var newContent = require("!!../../../../node_modules/.0.28.0@css-loader/index.js??ref--3-2!../../../../node_modules/.1.3.3@postcss-loader/index.js??ref--3-3!./index.css");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWxlcnQvUkVBRE1FLm1kIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FsZXJ0L2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vUkVBRE1FLm1kIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tZW51L2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGFsL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUkVBRE1FLm1kIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGVwcy9SRUFETUUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RlcHMvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXBsb2FkL1JFQURNRS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91cGxvYWQvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vIF5cXC5cXC8uKlxcL1JFQURNRVxcLm1kJCIsIndlYnBhY2s6Ly8vIF5cXC5cXC8uKlxcL2RlbW9cXC9pbmRleCQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMgXlxcLlxcLy4qXFwvZGVtb1xcL2luZGV4JCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYWxlcnQvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9idXR0b24vZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5jc3M/ODkyMCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9tZW51L2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL21lc3NhZ2UvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbW9kYWwvZGVtby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zdGVwcy9kZW1vL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3VwbG9hZC9kZW1vL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMjguMEBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLl8yZ1V6d1hTe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjgwcHg7aGVpZ2h0OjgwcHg7dGV4dC1hbGlnbjpjZW50ZXJ9Ll8zN0p4Z25xe2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjEycHh9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiSWNvbi0tZ3JpZFwiOiBcIl8yZ1V6d1hTXCIsXG5cdFwiSWNvbi1uYW1lXCI6IFwiXzM3SnhnbnFcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuMjguMEBjc3MtbG9hZGVyP3tcImltcG9ydExvYWRlcnNcIjoxLFwibW9kdWxlc1wiOnRydWUsXCJsb2NhbElkZW50TmFtZVwiOlwiW2hhc2g6YmFzZTY0OjddXCIsXCJtaW5pbWl6ZVwiOnRydWV9IS4vfi8uMS4zLjNAcG9zdGNzcy1sb2FkZXI/e30hLi9zcmMvY29tcG9uZW50cy9pY29uL2RlbW8vaW5kZXguY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC4yOC4wQGNzcy1sb2FkZXIvaW5kZXguanM/e1wiaW1wb3J0TG9hZGVyc1wiOjEsXCJtb2R1bGVzXCI6dHJ1ZSxcImxvY2FsSWRlbnROYW1lXCI6XCJbaGFzaDpiYXNlNjQ6N11cIixcIm1pbmltaXplXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvLjEuMy4zQHBvc3Rjc3MtbG9hZGVyL2luZGV4LmpzP3t9IS4vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgQWxlcnRcXG5cXG5BbGVydCBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufHR5cGV8c3RyaW5nfCdpbmZvJ3zmjIflrprorablkYrmj5DnpLrnmoTmoLflvI/vvIzmnInlm5vnp43pgInmi6kgc3VjY2Vzc+OAgWluZm/jgIF3YXJuaW5n44CBZXJyb3J8XFxufGNsb3NhYmxlfGJvb2xlYW58ZmFsc2V8XFx06buY6K6k5LiN5pi+56S65YWz6Zet5oyJ6ZKufFxcbnxjbG9zZVRleHR8c3RyaW5nIG9yIFJlYWN0Tm9kZXzml6B86Ieq5a6a5LmJ5YWz6Zet5oyJ6ZKufFxcbnxtZXNzYWdlfHN0cmluZyBvciBSZWFjdE5vZGV85pegfOitpuWRiuaPkOekuuWGheWuuXxcXG58ZGVzY3JpcHRpb258c3RyaW5nIG9yIFJlYWN0Tm9kZXzml6B86K2m5ZGK5o+Q56S655qE6L6F5Yqp5oCn5paH5a2X5LuL57uNfFxcbnxvbkNsb3NlfEZ1bmN0aW9ufOaXoHzlhbPpl63ml7bop6blj5HnmoTlm57osIPlh73mlbB8XFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYWxlcnQvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2FsZXJ0L1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcbmltcG9ydCBBbGVydCBmcm9tICcuLi9BbGVydCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWxlcnREZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XFxuICAgIHN1cGVyKHByb3BzKTtcXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xcbiAgfVxcblxcbiAgcmVuZGVyKCkge1xcbiAgICBjb25zdCBpbmZvUHJvcHMgPSB7XFxuICAgICAgdHlwZTogJ2luZm8nLFxcbiAgICAgIGNsb3NlVGV4dDogJ1gnLFxcbiAgICAgIG1lc3NhZ2U6ICdpbmZv5L+h5oGvJyxcXG4gICAgICBkZXNjcmlwdGlvbjogJ2luZm/mj4/ov7AnLFxcbiAgICAgIG9uQ2xvc2UoKSB7IGNvbnNvbGUubG9nKCdpbmZvJyk7IH0sXFxuICAgIH07XFxuICAgIGNvbnN0IGVycm9yUHJvcHMgPSB7XFxuICAgICAgdHlwZTogJ2Vycm9yJyxcXG4gICAgICBjbG9zYWJsZTogdHJ1ZSxcXG4gICAgICBjbG9zZVRleHQ6ICflhbPpl60nLFxcbiAgICAgIG1lc3NhZ2U6ICdlcnJvcuS/oeaBrycsXFxuICAgICAgb25DbG9zZSgpIHsgY29uc29sZS5sb2coJ2Vycm9yJyk7IH0sXFxuICAgIH07XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogNDAwIH19PlxcbiAgICAgICAgPEFsZXJ0IHsuLi5pbmZvUHJvcHN9IC8+XFxuICAgICAgICA8QWxlcnQgey4uLmVycm9yUHJvcHN9IC8+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYWxlcnQvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9hbGVydC9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBCcmVhZGNydW1iXFxuXFxuQnJlYWRjcnVtYiBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfDotLS06fC0tLXxcXG58cHJlZml4Q2xzfFN0cmluZ3wnYnJlYWRjcnVtYid86aKE5YWI5a6a5LmJ55qE5qC35byP5YmN57yAfFxcbnxzZXBhcmF0b3J8U3RyaW5nfCcvJ3zpnaLljIXlsZHnmoTliIbpmpTnrKZ8XFxufGhhc0JhY2tJY29ufEJvb2xlYW58ZmFsc2V85piv5ZCm5pi+56S65Zue6YCA5oyJ6ZKufFxcbiMjIyBBcGlcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vLi4vYnJlYWRjcnVtYic7XFxuXFxuY29uc3QgQ3J1bWIgPSBCcmVhZGNydW1iLkl0ZW07XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJlYWRjcnVtYkRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgcmVuZGVyKCkge1xcbiAgICByZXR1cm4gKFxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8QnJlYWRjcnVtYiBzZXBhcmF0b3I9XFxcIj5cXFwiIGhhc0JhY2tJY29uPlxcbiAgICAgICAgICA8Q3J1bWI+aG9tZTwvQ3J1bWI+XFxuICAgICAgICAgIDxDcnVtYiBocmVmPVxcXCIvY29tcG9uZW50L2J1dHRvblxcXCI+QnV0dG9uPC9DcnVtYj5cXG4gICAgICAgICAgPENydW1iIGhyZWY9XFxcIi9jb21wb25lbnQvc3RlcHNcXFwiPlN0ZXBzPC9DcnVtYj5cXG4gICAgICAgICAgPENydW1iPmJiYjwvQ3J1bWI+XFxuICAgICAgICA8L0JyZWFkY3J1bWI+XFxuXFxuICAgICAgICA8QnJlYWRjcnVtYiBoYXNCYWNrSWNvbj5cXG4gICAgICAgICAgPENydW1iIGhyZWY9XFxcIi9cXFwiPmhvbWU8L0NydW1iPlxcbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cXFwiL2NvbXBvbmVudC9idXR0b25cXFwiPkJ1dHRvbjwvQ3J1bWI+XFxuICAgICAgICAgIDxDcnVtYiBocmVmPVxcXCIvY29tcG9uZW50L3N0ZXBzXFxcIj5TdGVwczwvQ3J1bWI+XFxuICAgICAgICAgIDxDcnVtYj5iYmI8L0NydW1iPlxcbiAgICAgICAgPC9CcmVhZGNydW1iPlxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2JyZWFkY3J1bWIvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIEJ1dHRvblxcblxcbkJ1dHRvbiBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufHR5cGV8U3RyaW5nfCdwcmltYXJ5J3xidXR0b24gdHlwZSwgYHByaW1hcnlgIGBzZWNvbmRhcnlgIGBkYXNoZWRgIG9yIGBkYW5nZXJgfFxcbnxzaXplfFN0cmluZ3wnbm9ybWFsJ3xidXR0b24gc2l6ZSwgYG5vcm1hbGAgYGxhcmdlYCBvciBgc21hbGxgIHxcXG5cXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9idXR0b24vUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2J1dHRvbi9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XFxuICByZW5kZXIoKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxoMz7mjInpkq7nsbvlnos8L2gzPlxcbiAgICAgICAgPHRhYmxlPlxcbiAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgPHRoPuS4u+aMiemSrjwvdGg+XFxuICAgICAgICAgICAgPHRoPuasoeaMiemSrjwvdGg+XFxuICAgICAgICAgICAgPHRoPuiZmue6v+aMiemSrjwvdGg+XFxuICAgICAgICAgICAgPHRoPuWNsemZqeaMiemSrjwvdGg+XFxuICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8dGQ+PEJ1dHRvbiB0eXBlPVxcXCJwcmltYXJ5XFxcIj7kuLvmjInpkq48L0J1dHRvbj48L3RkPlxcbiAgICAgICAgICAgIDx0ZD48QnV0dG9uIHR5cGU9XFxcInNlY29uZGFyeVxcXCI+5qyh5oyJ6ZKuPC9CdXR0b24+PC90ZD5cXG4gICAgICAgICAgICA8dGQ+PEJ1dHRvbiB0eXBlPVxcXCJkYXNoZWRcXFwiPuiZmue6v+aMiemSrjwvQnV0dG9uPjwvdGQ+XFxuICAgICAgICAgICAgPHRkPjxCdXR0b24gdHlwZT1cXFwiZGFuZ2VyXFxcIj7ljbHpmanmjInpkq48L0J1dHRvbj48L3RkPlxcbiAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgICAgIDxoMz7mjInpkq7lsLrlr7g8L2gzPlxcbiAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsYXJnZVxcXCI+5Li76KaB5oyJ6ZKuKOWkpyk8L0J1dHRvbj5cXG4gICAgICAgICZuYnNwO1xcbiAgICAgICAgPEJ1dHRvbj7kuLvopoHmjInpkq4o5LitKTwvQnV0dG9uPlxcbiAgICAgICAgJm5ic3A7XFxuICAgICAgICA8QnV0dG9uIHNpemU9XFxcInNtYWxsXFxcIj7kuLvopoHmjInpkq4o5bCPKTwvQnV0dG9uPlxcbiAgICAgICAgPGgzPuS4jeWPr+eUqOeKtuaAgTwvaDM+XFxuICAgICAgICA8QnV0dG9uIHNpemU9XFxcImxhcmdlXFxcIiBkaXNhYmxlZD7kuI3lj6/nlKjmjInpkq48L0J1dHRvbj5cXG4gICAgICAgICZuYnNwO1xcbiAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD7kuI3lj6/nlKjmjInpkq48L0J1dHRvbj5cXG4gICAgICAgICZuYnNwO1xcbiAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJzbWFsbFxcXCIgZGlzYWJsZWQ+5LiN5Y+v55So5oyJ6ZKuPC9CdXR0b24+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIERhdGVQaWNrZXJcXG5cXG5EYXRlUGlja2VyIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG5cXG4jIyMjIERhdGVQaWNrZXJcXG5cXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58dmFsdWV8W21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pfOaXoHzml6XmnJ98XFxufGRlZmF1bHRWYWx1ZXxbbW9tZW50XShodHRwOi8vbW9tZW50anMuY29tLyl85pegfOm7mOiupOaXpeacn3xcXG58ZGlzYWJsZWREYXRlfGZ1bmN85pegfOS4jeWPr+mAieaLqeeahOaXpeacn3xcXG58ZGlzYWJsZWR8Ym9vbGVhbnxmYWxzZXznpoHnlKh8XFxufGZvcm1hdHxzdHJpbmd8WVlZWS1NTS1ERHzlsZXnpLrml6XmnJ/moLzlvI/vvIzphY3nva7lj4LogINbbW9tZW50XShodHRwOi8vbW9tZW50anMuY29tLyl8XFxufG9uQ2hhbmdlfGZ1bmN85pegfOaXtumXtOWPkeeUn+WPmOWMluWbnuiwg3xcXG5cXG4jIyMjIE1vbnRoUGlja2VyXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufHZhbHVlfFttb21lbnRdKGh0dHA6Ly9tb21lbnRqcy5jb20vKXzml6B85pel5pyffFxcbnxkZWZhdWx0VmFsdWV8W21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pfOaXoHzpu5jorqTml6XmnJ98XFxufGRpc2FibGVkfGJvb2xlYW58ZmFsc2V856aB55SofFxcbnxmb3JtYXR8c3RyaW5nfFlZWVktTU185bGV56S65pel5pyf5qC85byP77yM6YWN572u5Y+C6ICDW21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pfFxcbnxvbkNoYW5nZXxmdW5jfOaXoHzml7bpl7Tlj5HnlJ/lj5jljJblm57osIN8XFxuXFxuIyMjIyBSYW5nZVBpY2tlclxcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnx2YWx1ZXxbbW9tZW50XShodHRwOi8vbW9tZW50anMuY29tLylbXXzml6B85pel5pyffFxcbnxkZWZhdWx0VmFsdWV8W21vbWVudF0oaHR0cDovL21vbWVudGpzLmNvbS8pW1185pegfOm7mOiupOaXpeacn3xcXG58ZGlzYWJsZWREYXRlfGZ1bmN85pegfOS4jeWPr+mAieaLqeeahOaXpeacn3xcXG58ZGlzYWJsZWR8Ym9vbGVhbnxmYWxzZXznpoHnlKh8XFxufGZvcm1hdHxzdHJpbmd8WVlZWS1NTS1ERHzlsZXnpLrml6XmnJ/moLzlvI/vvIzphY3nva7lj4LogINbbW9tZW50XShodHRwOi8vbW9tZW50anMuY29tLyl8XFxufG9uQ2hhbmdlfGZ1bmN85pegfOaXtumXtOWPkeeUn+WPmOWMluWbnuiwg3xcXG5cXG5cXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi9pbmRleCc7XFxuXFxuY29uc3QgeyBNb250aFBpY2tlciwgUmFuZ2VQaWNrZXIgfSA9IERhdGVQaWNrZXI7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZVBpY2tlckRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgc3RhdGUgPSB7XFxuICAgIGRpc2FibGVkOiBmYWxzZSxcXG4gICAgZGF0ZTogbW9tZW50KCkuYWRkKDEsICdNJyksXFxuICB9XFxuICBvbkNoYW5nZShtKSB7XFxuICAgIGNvbnNvbGUubG9nKG0pO1xcbiAgfVxcbiAgY2hhbmdlRGlzYWJsZWQgPSAoKSA9PiB7XFxuICAgIHRoaXMuc2V0U3RhdGUoe1xcbiAgICAgIGRpc2FibGVkOiAhdGhpcy5zdGF0ZS5kaXNhYmxlZCxcXG4gICAgfSk7XFxuICB9XFxuICByZW5kZXIoKSB7XFxuICAgIGNvbnN0IHsgZGF0ZSwgZGlzYWJsZWQgfSA9IHRoaXMuc3RhdGU7XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVxcXCJcXFwiPlxcbiAgICAgICAgICA8aW5wdXRcXG4gICAgICAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgICBjaGVja2VkPXtkaXNhYmxlZH1cXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VEaXNhYmxlZH1cXG4gICAgICAgICAgLz4g56aB55SoXFxuICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgPGgyPuaXpeacn+mAieaLqTwvaDI+XFxuICAgICAgICA8aDM+6Z2e5Y+X5o6n5pa55byPPC9oMz5cXG4gICAgICAgIDxEYXRlUGlja2VyXFxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XFxuICAgICAgICAvPlxcbiAgICAgICAgPGgzPuWPl+aOp+aWueW8jzwvaDM+XFxuICAgICAgICA8RGF0ZVBpY2tlclxcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XFxuICAgICAgICAgIHZhbHVlPXtkYXRlfVxcbiAgICAgICAgICBvbkNoYW5nZT17KGQpID0+IHtcXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcXG4gICAgICAgICAgICAgIGRhdGU6IGQsXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICAgICAgPHA+6YCJ5oup5pe26Ze0OiB7ZGF0ZS5mb3JtYXQoKX08L3A+XFxuICAgICAgICA8aDI+5LiN5Y+v6YCJ5pel5pyfPC9oMj5cXG4gICAgICAgIDxEYXRlUGlja2VyXFxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cXG4gICAgICAgICAgZGlzYWJsZWREYXRlPXsoY3VycmVudCkgPT4ge1xcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50ICYmIGN1cnJlbnQudmFsdWVPZigpIDwgRGF0ZS5ub3coKTtcXG4gICAgICAgICAgfX1cXG4gICAgICAgID48L0RhdGVQaWNrZXI+XFxuICAgICAgICA8aDI+5pyI5Lu96YCJ5oupPC9oMj5cXG4gICAgICAgIDxNb250aFBpY2tlciBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxcbiAgICAgICAgPGgyPuiMg+WbtOmAieaLqTwvaDI+XFxuICAgICAgICA8UmFuZ2VQaWNrZXIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cXG4gICAgICA8L2Rpdj5cXG4gICAgKTtcXG4gIH1cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBEcm9wZG93blxcblxcbkRyb3Bkb3duIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG5cXG4jIyMjIERyb3Bkb3duXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufHRyaWdnZXJ8YGhvdmVyYCBvciBgY2xpY2tgfGNsaWNrfOinpuWPkeaWueW8j3xcXG58b3ZlcmxheXxlbGVtZW50fC186I+c5Y2V5YaF5a65fFxcbnxwbGFjZW1lbnR8c3RyaW5nfGJvdHRvbUxlZnR85a6a5L2NfFxcblxcbiMjIyMgRHJvcGRvd24uRHJvcGRvd25CdXR0b25cXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58dHlwZXxzdHJpbmd8YHByaW1hcnlgfOaMiemSruexu+Wei3xcXG58dHJpZ2dlcnxgaG92ZXJgIG9yIGBjbGlja2B8Y2xpY2t86Kem5Y+R5pa55byPfFxcbnxvdmVybGF5fGVsZW1lbnR8LXzoj5zljZXlhoXlrrl8XFxufHBsYWNlbWVudHxzdHJpbmd8Ym90dG9tUmlnaHR85a6a5L2NfFxcblxcbiMjIyMgRHJvcGRvd24uTWVudVxcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcblxcbiMjIyMgRHJvcGRvd24uTWVudS5JdGVtXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxuXFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IEJ1dHRvbiBmcm9tICdxdWFyay11aS9idXR0b24nO1xcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi9Ecm9wZG93bic7XFxuXFxuY29uc3QgeyBNZW51IH0gPSBEcm9wZG93bjtcXG5jb25zdCB7IEl0ZW0gfSA9IE1lbnU7XFxuXFxuY29uc3QgRHJvcGRvd25EZW1vID0gKCkgPT4ge1xcbiAgY29uc3QgbWVudSA9IChcXG4gICAgPE1lbnU+XFxuICAgICAgPEl0ZW0+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL3d3dy5laHVvZGkuY29tXFxcIj7mmJPotKflmIA8L2E+XFxuICAgICAgPC9JdGVtPlxcbiAgICAgIDxJdGVtPlxcbiAgICAgICAgPGEgaHJlZj1cXFwiaHR0cDovL3d3dy5sdWppbmc1Ni5jbi9cXFwiPumZhumyuDwvYT5cXG4gICAgICA8L0l0ZW0+XFxuICAgICAgPEl0ZW0+XFxuICAgICAgICA8YSBocmVmPVxcXCJodHRwczovL2VjYXJnby5laHVvZGkuY29tL1xcXCI+5Yqg55uf6L2m6Zif566h55CG57O757ufPC9hPlxcbiAgICAgIDwvSXRlbT5cXG4gICAgPC9NZW51PlxcbiAgKTtcXG4gIHJldHVybiAoXFxuICAgIDxkaXY+XFxuICAgICAgPGgzPuW4puS4i+aLieahhueahOaMiemSrjwvaDM+XFxuICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnV9PlxcbiAgICAgICAgPEJ1dHRvbj7oj5zljZU8L0J1dHRvbj5cXG4gICAgICA8L0Ryb3Bkb3duPlxcbiAgICAgIDxoMz5Ecm9wZG93buWGhee9ruaMiemSrjwvaDM+XFxuICAgICAgPERyb3Bkb3duLkJ1dHRvbiB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9eydjbGljayd9PlxcbiAgICAgICAg6I+c5Y2VXFxuICAgICAgPC9Ecm9wZG93bi5CdXR0b24+XFxuICAgIDwvZGl2PlxcbiAgKTtcXG59O1xcblxcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duRGVtbztcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvZHJvcGRvd24vZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgSWNvblxcblxcbkljb24gQ29tcG9uZW50LlxcblxcbiMjIyBQcm9wc1xcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnxuYW1lfHN0cmluZ3wnJ3zlm77moIflkI3np7B8XFxufHNpemV8bnVtYmVyfDMyfOWwuuWvuHxcXG58Y29sb3J8c3RyaW5nfC186aKc6ImyfFxcblxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2ljb24vUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2ljb24vUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJztcXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXguY3NzJztcXG5cXG5jb25zdCBJY29uTGlzdCA9IFtcXG4gICdlbGxpcHNpcycsXFxuICAnY2F1dGlvbicsXFxuICAncXVlc3Rpb24nLFxcbiAgJ2FjY291bnQnLFxcbiAgJ3NldHRpbmcnLFxcbiAgJ3BhcGVyJyxcXG4gICdmaW5hbmNlJyxcXG4gICdjaGVjaycsXFxuICAnYXJyb3ctbGVmdCcsXFxuICAnYXJyb3ctcmlnaHQnLFxcbiAgJ2NoZWNrJyxcXG4gICdob21lJyxcXG4gICdpbmZvJyxcXG5dO1xcblxcbmNvbnN0IEljb25EZW1vID0gKCkgPT4gKFxcbiAgPGRpdj5cXG4gICAge1xcbiAgICAgIEljb25MaXN0Lm1hcChuYW1lID0+IChcXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ0ljb24tLWdyaWQnXX0ga2V5PXtuYW1lfT5cXG4gICAgICAgICAgPEljb24gc2l6ZT17NDh9IG5hbWU9e25hbWV9IC8+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzWydJY29uLW5hbWUnXX0+e25hbWV9PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgKSlcXG4gICAgfVxcbiAgPC9kaXY+XFxuKTtcXG5cXG5leHBvcnQgZGVmYXVsdCBJY29uRGVtbztcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9pY29uL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIE1lbnVcXG5cXG5NZW51IENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58Y2xhc3NOYW1lfFN0cmluZ3wnJ3zmoLflvI/lkI3vvIzlj6/kuI3loat8XFxufG1vZGV8U3RyaW5nfGlubGluZXzoj5zljZXnsbvlnovvvIzlj6/pgInlgLzvvJpob3Jpem9udGFsLWgo5rC05bmz6I+c5Y2V77yM5a2Q6I+c5Y2V5rC05bmzKe+8jGhvcml6b250YWwtdijmsLTlubPoj5zljZXvvIzlrZDoj5zljZXlnoLnm7Qp77yMdmVydGljYWwtaCjlnoLnm7Toj5zljZXvvIzlrZDoj5zljZXmsLTlubPlkJHlj7PlvLnlh7op77yMdmVydGljYWwtdijlnoLnm7Toj5zljZXvvIzlrZDoj5zljZXlhoXltYzlnKjoj5zljZXljLrln58pfFxcbnxzZWxlY3RlZEtleXN8c3RyaW5nW118W1186YCJ5Lit55qE6I+c5Y2V6aG577yM5pWw57uE77yM5YC85Li6a2V5fFxcbnxkZWZhdWx0U2VsZWN0ZWRLZXlzfHN0cmluZ1tdfFtdfOm7mOiupOmAieS4reeahOiPnOWNlemhue+8jOaVsOe7hO+8jOWAvOS4umtleXxcXG58b3BlbktleXN8c3RyaW5nW118W1185omT5byA55qE6I+c5Y2V77yM5pWw57uE77yM5YC85Li6a2V5fFxcbnxkZWZhdWx0T3BlbktleXN8c3RyaW5nW118W1186buY6K6k5omT5byA55qE6I+c5Y2V77yM5pWw57uE77yM5YC85Li6a2V5fFxcbnxvbkNsaWNrfGZ1bmN0aW9ufC1854K55Ye7IG1lbnVpdGVtIOiwg+eUqOatpOWHveaVsO+8jOWPguaVsOS4uiB7aXRlbSwga2V5LCBrZXlQYXRofXxcXG58b25PcGVuQ2hhbmdlfGZ1bmN0aW9ufC18U3ViTWVudSDlsZXlvIAv5YWz6Zet55qE5Zue6LCDfFxcblxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL21lbnUvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL21lbnUvUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSc7XFxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vaWNvbi9JY29uJztcXG5cXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RGVtbyBleHRlbmRzIENvbXBvbmVudCB7XFxuXFxuICBzdGF0ZSA9IHtcXG4gICAgdGhlbWU6ICdkYXJrJyxcXG4gICAgY3VycmVudDogJy4kbTAnLFxcbiAgfVxcblxcbiAgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xcbiAgICBsZXQga2V5ID0gKGUua2V5IHx8ICcnKS5yZXBsYWNlKC9cXFxcLlxcXFwkL2csICcnKTtcXG4gICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgY3VycmVudDogZS5rZXlcXG4gICAgfSk7XFxuICAgIGNvbnNvbGUubG9nKGtleSk7XFxuICB9XFxuXFxuICByZW5kZXIoKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDHjgIHmsLTlubPoj5zljZXvvIzlrZDoj5zljZXmsLTlubNcXG4gICAgICAgIDxNZW51XFxuICAgICAgICAgICAgLy90aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxcbiAgICAgICAgICAgIHN0eWxlTmFtZT17XFxcIm1lbnVcXFwifVxcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W3RoaXMuc3RhdGUuY3VycmVudF19XFxuICAgICAgICAgICAgdHlwZT1cXFwiaG9yaXpvbnRhbC1oXFxcIj5cXG5cXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0wXFxcIj5cXG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXsncGFwZXInfSAvPlxcbiAgICAgICAgICAgICAg6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0xXFxcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTJcXFwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2V5YiG57uEPC9zcGFuPjwvc3Bhbj59PlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpM1xcXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpM1xcXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtM1xcXCIgZGlzYWJsZWQgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJmaW5hbmNlXFxcIn0vPjxzcGFuPuS4jeWPr+eUqOS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtM2kxXFxcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTNpMlxcXCI+5LqM57qn6I+c5Y2VNTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtNFxcXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+5LiN5Y+v55So6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICA8L01lbnU+XFxuXFxuICAgICAgICA8YnIvPjxici8+PGJyLz5cXG5cXG4gICAgICAgIDLjgIHmsLTlubPoj5zljZXvvIzlrZDoj5zljZXlnoLnm7RcXG4gICAgICAgIDxNZW51XFxuICAgICAgICAgICAgLy90aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxcbiAgICAgICAgICAgIHN0eWxlTmFtZT17XFxcIm1lbnVcXFwifVxcbiAgICAgICAgICAgIHNlbGVjdGVkS2V5cz17W3RoaXMuc3RhdGUuY3VycmVudF19XFxuICAgICAgICAgICAgdHlwZT1cXFwiaG9yaXpvbnRhbC12XFxcIj5cXG5cXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTBcXFwiPlxcbiAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPlxcbiAgICAgICAgICAgICAg6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0xXFxcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMW0xXFxcIiB0aXRsZT1cXFwi5LiJ57qn6I+c5Y2VXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xbTFpMVxcXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFtMWkyXFxcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTJcXFwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2V5YiG57uEPC9zcGFuPjwvc3Bhbj59PlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cXFwibTJnMVxcXCIgdGl0bGU9XFxcIuWIhue7hDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMWkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpM1xcXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0yZzJcXFwiIHRpdGxlPVxcXCLliIbnu4QxXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMmkyXFxcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTJtMlxcXCIgdGl0bGU9XFxcIuS4iee6p+iPnOWNlVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0ybTJnMVxcXCIgdGl0bGU9XFxcIuWIhue7hDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzFpMVxcXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzFpMlxcXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMm0yZzJcXFwiIHRpdGxlPVxcXCLliIbnu4QyXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcyaTFcXFwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcyaTJcXFwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtM1xcXCIgZGlzYWJsZWQgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJmaW5hbmNlXFxcIn0vPjxzcGFuPuS4jeWPr+eUqOS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtM2kxXFxcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTNpMlxcXCI+5LqM57qn6I+c5Y2VNTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtNFxcXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+5LiN5Y+v55So6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICA8L01lbnU+XFxuXFxuICAgICAgICA8YnIgLz48YnIgLz48YnIgLz5cXG5cXG4gICAgICAgIDPjgIHlnoLnm7Toj5zljZXvvIzlrZDoj5zljZXmsLTlubPlkJHlj7PlvLnlh7pcXG4gICAgICAgIDxNZW51XFxuICAgICAgICAgICAgLy90aGVtZT17dGhpcy5zdGF0ZS50aGVtZX1cXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAsIGhlaWdodDogNTAwIH19XFxuICAgICAgICAgICAgc3R5bGVOYW1lPXtcXFwibWVudVxcXCJ9XFxuICAgICAgICAgICAgZGVmYXVsdE9wZW5LZXlzPXtbJy4kbTEnXX1cXG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1t0aGlzLnN0YXRlLmN1cnJlbnRdfVxcbiAgICAgICAgICAgIHR5cGU9XFxcInZlcnRpY2FsLWhcXFwiPlxcblxcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTBcXFwiPlxcbiAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9eydwYXBlcid9IC8+XFxuICAgICAgICAgICAgICDoj5zljZXmjInpkq5cXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTFcXFwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTFcXFwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkyXFxcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpM1xcXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0xbTFcXFwiIHRpdGxlPVxcXCLkuInnuqfoj5zljZVcXFwiPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFtMWkxXFxcIj7kuInnuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMW0xaTJcXFwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMlxcXCIgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJwYXBlclxcXCJ9Lz48c3Bhbj7kuIvmi4noj5zljZXliIbnu4Q8L3NwYW4+PC9zcGFuPn0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMmcxXFxcIiB0aXRsZT1cXFwi5YiG57uEMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTFcXFwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMWkzXFxcIj7kuoznuqfoj5zljZUzPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cXFwibTJnMlxcXCIgdGl0bGU9XFxcIuWIhue7hDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMmkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpM1xcXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMm0yXFxcIiB0aXRsZT1cXFwi5LiJ57qn6I+c5Y2VXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cXFwibTJtMmcxXFxcIiB0aXRsZT1cXFwi5YiG57uEMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0ybTJnMWkxXFxcIj7kuInnuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0ybTJnMWkyXFxcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0ybTJnMlxcXCIgdGl0bGU9XFxcIuWIhue7hDJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzJpMVxcXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzJpMlxcXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxcbiAgICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0zXFxcIiBkaXNhYmxlZCB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcImZpbmFuY2VcXFwifS8+PHNwYW4+5LiN5Y+v55So5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0zaTFcXFwiPuS6jOe6p+iPnOWNlTQ8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtM2kyXFxcIj7kuoznuqfoj5zljZU1PC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XFxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm00XFxcIiBkaXNhYmxlZD5cXG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJwYXBlclxcXCJ9Lz7kuI3lj6/nlKjoj5zljZXmjInpkq5cXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cXG4gICAgICAgIDwvTWVudT5cXG5cXG4gICAgICAgIDxiciAvPjxiciAvPjxiciAvPlxcblxcbiAgICAgICAgNOOAgeWeguebtOiPnOWNle+8jOWtkOiPnOWNleWGheW1jOWcqOiPnOWNleWMuuWfn1xcbiAgICAgICAgPE1lbnVcXG4gICAgICAgICAgICAvL3RoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxcbiAgICAgICAgICAgIHN0eWxlTmFtZT17XFxcIm1lbnVcXFwifVxcbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WycuJG0xJ119XFxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbdGhpcy5zdGF0ZS5jdXJyZW50XX1cXG4gICAgICAgICAgICB0eXBlPVxcXCJ2ZXJ0aWNhbC12XFxcIj5cXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0wXFxcIj5cXG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXsncGFwZXInfSAvPlxcbiAgICAgICAgICAgICAg6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XFxcIm0xXFxcIiB0aXRsZT17PHNwYW4+PEljb24gY2xhc3NOYW1lPVxcXCJpY29uXFxcIiBzaXplPXsxNH0gbmFtZT17XFxcInBhcGVyXFxcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMWkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFpMlxcXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtMW0xXFxcIiB0aXRsZT1cXFwi5LiJ57qn6I+c5Y2VXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0xbTFpMVxcXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTFtMWkyXFxcIj7kuInnuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cXG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTJcXFwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2V5YiG57uEPC9zcGFuPjwvc3Bhbj59PlxcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cXFwibTJnMVxcXCIgdGl0bGU9XFxcIuWIhue7hDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMWkxXFxcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcxaTJcXFwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzFpM1xcXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0yZzJcXFwiIHRpdGxlPVxcXCLliIbnu4QxXFxcIj5cXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XFxcIm0yZzJpMVxcXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJnMmkyXFxcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMmcyaTNcXFwiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XFxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cXFwibTJtMlxcXCIgdGl0bGU9XFxcIuS4iee6p+iPnOWNlVxcXCI+XFxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XFxcIm0ybTJnMVxcXCIgdGl0bGU9XFxcIuWIhue7hDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzFpMVxcXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtMm0yZzFpMlxcXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVxcXCJtMm0yZzJcXFwiIHRpdGxlPVxcXCLliIbnu4QyXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcyaTFcXFwiPuS4iee6p+iPnOWNlTE8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTJtMmcyaTJcXFwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cXG4gICAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51LlN1Yk1lbnUga2V5PVxcXCJtM1xcXCIgZGlzYWJsZWQgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cXFwiaWNvblxcXCIgc2l6ZT17MTR9IG5hbWU9e1xcXCJmaW5hbmNlXFxcIn0vPjxzcGFuPuS4jeWPr+eUqOS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtM2kxXFxcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XFxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cXFwibTNpMlxcXCI+5LqM57qn6I+c5Y2VNTwvTWVudS5JdGVtPlxcbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVxcXCJtNFxcXCIgZGlzYWJsZWQ+XFxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XFxcImljb25cXFwiIHNpemU9ezE0fSBuYW1lPXtcXFwicGFwZXJcXFwifS8+5LiN5Y+v55So6I+c5Y2V5oyJ6ZKuXFxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XFxuICAgICAgICA8L01lbnU+XFxuXFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvbWVudS9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL21lbnUvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgTWVzc2FnZVxcblxcbk1lc3NhZ2UgQ29tcG9uZW50LlxcblxcbiMjIyBQcm9wc1xcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnxkdXJhdGlvbnxOdW1iZXJ8MS41fG1lc3NhZ2UgMS41c+S5i+WQjuWFs+mXrXxcXG58b25DbG9zZXxGdW5jdGlvbnxmdW5jdGlvbigpe318bWVzc2FnZSDlhbPpl63kuYvlkI7nmoTlm57osIN8XFxufHR5cGV8U3RyaW5nfCdpbmZvJ3xtZXNzYWdlIOaPkOekuuexu+Wei3xcXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlL1JFQURNRS5tZFxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vYnV0dG9uJztcXG5pbXBvcnQgbWVzc2FnZSBmcm9tICcuLi9pbmRleCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZURlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcXG4gICAgc3VwZXIocHJvcHMpO1xcbiAgICB0aGlzLnN0YXRlID0ge307XFxuICB9XFxuXFxuICByZW5kZXIoKSB7XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4geyBtZXNzYWdlLmluZm8oJ+i/meaYr+S4gOadoeaPkOekuuS/oeaBr++8iOS/oeaBr+WGheWuue+8ieOAgicpOyB9fT5pbmZvPC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInNlY29uZGFyeVxcXCIgb25DbGljaz17KCkgPT4geyBtZXNzYWdlLnN1Y2Nlc3MoJ+i/meaYr+S4gOadoeaPkOekuuS/oeaBr++8iOS/oeaBr+WGheWuue+8ieOAgicpOyB9fT5zdWNjZXNzPC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInNlY29uZGFyeVxcXCIgb25DbGljaz17KCkgPT4geyBtZXNzYWdlLmVycm9yKCfov5nmmK/kuIDmnaHmj5DnpLrkv6Hmga/vvIjkv6Hmga/lhoXlrrnvvInjgIInKTsgfX0+ZXJyb3I8L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b24gdHlwZT1cXFwic2Vjb25kYXJ5XFxcIiBvbkNsaWNrPXsoKSA9PiB7IG1lc3NhZ2Uud2FybmluZygn6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGv77yI5L+h5oGv5YaF5a6577yJ44CCJyk7IH19Pndhcm5pbmc8L0J1dHRvbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgKTtcXG4gIH1cXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBNb2RhbFxcblxcbk1vZGFsIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG5cXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9tb2RhbC9SRUFETUUubWRcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbW9kYWwvUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgTW9kYWwgZnJvbSAnLi4vTW9kYWwnO1xcbmltcG9ydCBCdXR0b24gZnJvbSAncXVhcmstdWkvYnV0dG9uJztcXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XFxuICAgIHN1cGVyKHByb3BzKTtcXG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xcbiAgICB0aGlzLnN0YXRlID0ge1xcbiAgICAgIHZpc2libGU6IGZhbHNlLFxcbiAgICB9O1xcbiAgfVxcbiAgb3Blbk1vZGFsKCkge1xcbiAgICB0aGlzLnNldFN0YXRlKHtcXG4gICAgICB2aXNpYmxlOiB0cnVlLFxcbiAgICB9KTtcXG4gIH1cXG4gIGNsb3NlTW9kYWwoKSB7XFxuICAgIHRoaXMuc2V0U3RhdGUoe1xcbiAgICAgIHZpc2libGU6IGZhbHNlLFxcbiAgICB9KTtcXG4gIH1cXG4gIHJlbmRlcigpIHtcXG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xcbiAgICBjb25zdCBtb2RhbFByb3BzID0ge1xcbiAgICAgIHRpdGxlOiAndGl0bGUnLFxcbiAgICAgIHZpc2libGUsXFxuICAgICAgb25PazogKCkgPT4geyB0aGlzLmNsb3NlTW9kYWwoKTsgfSxcXG4gICAgICBvbkNhbmNlbDogKCkgPT4geyB0aGlzLmNsb3NlTW9kYWwoKTsgfSxcXG4gICAgfTtcXG4gICAgcmV0dXJuIChcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPGgzPuWfuuacrDwvaDM+XFxuICAgICAgICA8QnV0dG9uIHR5cGU9XFxcInNlY29uZGFyeVxcXCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9Pm9wZW4gbW9kYWw8L0J1dHRvbj5cXG4gICAgICAgIDxNb2RhbCB7Li4ubW9kYWxQcm9wc30+XFxuICAgICAgICAgIDxwPmZpcnN0IE1vZGFsPC9wPlxcbiAgICAgICAgPC9Nb2RhbD5cXG4gICAgICAgIDxoMz7kv6Hmga/mj5DnpLo8L2gzPlxcbiAgICAgICAgPEJ1dHRvblxcbiAgICAgICAgICB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiXFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcXG4gICAgICAgICAgICBNb2RhbC5pbmZvKHtcXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/mj5DnpLrkv6Hmga8nLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9fVxcbiAgICAgICAgPmluZm88L0J1dHRvbj5cXG4gICAgICAgIDxCdXR0b25cXG4gICAgICAgICAgdHlwZT1cXFwic2Vjb25kYXJ5XFxcIlxcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XFxuICAgICAgICAgICAgTW9kYWwuc3VjY2Vzcyh7XFxuICAgICAgICAgICAgICBjb250ZW50OiAn6L+Z5piv5oiQ5Yqf5raI5oGvJyxcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgICAgfX1cXG4gICAgICAgID5zdWNjZXNzPC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgIHR5cGU9XFxcInNlY29uZGFyeVxcXCJcXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgIE1vZGFsLmVycm9yKHtcXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/plJnor6/mj5DnpLonLFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9fVxcbiAgICAgICAgPmVycm9yPC9CdXR0b24+XFxuICAgICAgICA8QnV0dG9uXFxuICAgICAgICAgIHR5cGU9XFxcInNlY29uZGFyeVxcXCJcXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xcbiAgICAgICAgICAgIE1vZGFsLndhcm5pbmcoe1xcbiAgICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+itpuWRiuS/oeaBrycsXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH19XFxuICAgICAgICA+d2FybmluZzwvQnV0dG9uPlxcbiAgICAgIDwvZGl2PlxcbiAgICApO1xcbiAgfVxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL21vZGFsL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbW9kYWwvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgUGFnaW5hdGlvblxcblxcblBhZ2luYXRpb24gQ29tcG9uZW50LlxcblxcbiMjIyBQcm9wc1xcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXwtLS18LS0tfFxcbnwgY3VycmVudCB8IG51bWJlciB8IC0gfCDlvZPliY3pobXmlbAgfFxcbnwgY3VycmVudCB8IG51bWJlciB8IDEgfCDpu5jorqTlvZPliY3pobXmlbAgfFxcbnwgdG90YWwgfCBudW1iZXIgfCAwIHwg5oC75pWwIHxcXG58IHBhZ2VTaXplIHwgbnVtYmVyIHwgLSB8IOavj+mhteadoeaVsCB8XFxufCBkZWZhdWx0UGFnZVNpemUgfCBudW1iZXIgfCAxMCB8IOm7mOiupOavj+mhteadoeaVsCB8XFxufCBvbkNoYW5nZSB8IGZ1bmN0aW9uKHBhZ2UsIHBhZ2VTaXplKSB8IG5vb3AgfCDpobXnoIHmlLnlj5jlm57osIPvvIzlj4LmlbAgfFxcbnwgc2hvd1NpemVDaGFuZ2VyIHwgYm9vbGVhbiB8IGZhbHNlIHwg5pi+56S65YiG6aG15p2h5pWw6YCJ5oupIHxcXG58IG9uU2l6ZUNoYW5nZSB8IGZ1bmN0aW9uKHNpemUsIGN1cnJlbnQpIHwgbm9vcCB8IHBhZ2VTaXplIOWPmOWMluWbnuiwgyB8XFxufCBwYWdlU2l6ZU9wdGlvbnN8IG51bWJlcltdIHwgWzEwLCAyMCwgMzAsIDQwXSB8IOaMh+Wumuavj+mhteWPr+S7peaYvuekuuWkmuWwkeadoSB8XFxufCBzaG93UXVpY2tKdW1wZXJ8IGJvb2xlYW4gfCBmYWxzZSB8IOaYr+WQpuWxleekuui3s+i9rOi+k+WFpeahhiB8XFxufCBzaXplfCBzdHJpbmcgfCAnJyB8IGBzbWFsbGAg5oyH5a6a5bCP5bC65a+45YiG6aG1ICB8XFxufCBzaG93VG90YWwgfCBib29sZWFuIHwgZmFsc2UgfCDlsZXnpLrmgLvmlbAgfFxcblxcbiMjIyBBcGlcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi8uMC41LjFAcmF3LWxvYWRlciEuL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vUkVBRE1FLm1kXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9QYWdpbmF0aW9uJztcXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnaW5hdGlvbkRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgc3RhdGUgPSB7XFxuICAgIGN1cnJlbnQ6IDMsXFxuICB9O1xcbiAgcmVuZGVyKCkge1xcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuc3RhdGU7XFxuICAgIHJldHVybiAoXFxuICAgICAgPGRpdj5cXG4gICAgICAgIDxoMz7lj5fmjqfmlrnlvI88L2gzPlxcbiAgICAgICAgPFBhZ2luYXRpb25cXG4gICAgICAgICAgY3VycmVudD17Y3VycmVudH1cXG4gICAgICAgICAgdG90YWw9ezUwfVxcbiAgICAgICAgICBvbkNoYW5nZT17KGMpID0+IHtcXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcXG4gICAgICAgICAgICAgIGN1cnJlbnQ6IGMsXFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICAgICAgPGgzPumdnuWPl+aOp+aWueW8jzwvaDM+XFxuICAgICAgICA8UGFnaW5hdGlvbiBkZWZhdWx0Q3VycmVudD17MX0gdG90YWw9ezUwfSAvPlxcbiAgICAgICAgPGgzPuabtOWkmuWIhumhtTwvaDM+XFxuICAgICAgICA8UGFnaW5hdGlvblxcbiAgICAgICAgICBkZWZhdWx0Q3VycmVudD17MX1cXG4gICAgICAgICAgdG90YWw9ezUwMH1cXG4gICAgICAgICAgc2hvd1NpemVDaGFuZ2VyXFxuICAgICAgICAgIG9uU2l6ZUNoYW5nZT17KHNpemUsIGN1cnJlbnQpID0+IHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2l6ZTogJHtzaXplfSBjdXJyZW50OiAke2N1cnJlbnR9YCk7XFxuICAgICAgICAgIH19XFxuICAgICAgICAvPlxcbiAgICAgICAgPGgzPui3s+i9rDwvaDM+XFxuICAgICAgICA8UGFnaW5hdGlvbiBzaG93VG90YWwgdG90YWw9ezEwMH0gc2hvd1F1aWNrSnVtcGVyIC8+XFxuICAgICAgICA8aDM+6L+35L2gPC9oMz5cXG4gICAgICAgIDxQYWdpbmF0aW9uIHRvdGFsPXsxMDB9IHNob3dRdWlja0p1bXBlciBzaG93U2l6ZUNoYW5nZXIgc2l6ZT1cXFwic21hbGxcXFwiIC8+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgUHJvZ3Jlc3NcXG5cXG5Qcm9ncmVzcyBDb21wb25lbnQuXFxuXFxuIyMjIFByb3BzXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfC0tLXwtLS18XFxufHR5cGV8c3RyaW5nfGxpbmV857G75Z6L77yM5Y+v6YCJIGxpbmUgY2lyY2xlIGRhc2hib2FyZHxcXG58cGVyY2VudHxudW1iZXJ8MHznmb7liIbmr5R8XFxufHNob3dJbmZvfHRydWV8Ym9vbGVhbnzmmK/lkKbmmL7npLrov5vluqbmlbDlgLzmiJbnirbmgIHlm77moId8XFxufHN0cm9rZVdpZHRofG51bWJlcnwxMHzov5vluqbmnaHnur/nmoTlrr3luqbvvIzljZXkvY0gcHh8XFxuXFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3Byb2dyZXNzL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IFByb2dyZXNzIGZyb20gJy4uL1Byb2dyZXNzJztcXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZ3Jlc3NEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcXG4gIHJlbmRlcigpIHtcXG4gICAgcmV0dXJuIChcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgMeOAgeagh+WHhueahOi/m+W6puadoVxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezMwfSAvPlxcbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NTB9IHN0YXR1cz1cXFwiYWN0aXZlXFxcIiAvPlxcbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NzB9IHN0YXR1cz1cXFwiZXhjZXB0aW9uXFxcIiAvPlxcbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17MTAwfSAvPlxcbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NTB9IHNob3dJbmZvPXtmYWxzZX0gLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgMuOAgeWwj+Wei+i/m+W6puadoe+8jOmAguWQiOaUvuWcqOi+g+eLreeqhOeahOWMuuWfn+WGheOAglxcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMTcwIH19PlxcbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17MzB9IHN0cm9rZVdpZHRoPXs1fSAvPlxcbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NTB9IHN0cm9rZVdpZHRoPXs1fSBzdGF0dXM9XFxcImFjdGl2ZVxcXCIgLz5cXG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezcwfSBzdHJva2VXaWR0aD17NX0gc3RhdHVzPVxcXCJleGNlcHRpb25cXFwiIC8+XFxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXsxMDB9IHN0cm9rZVdpZHRoPXs1fSAvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjIyBTdGVwc1xcblxcblN0ZXBzIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG4jIyMjIFN0ZXBzIOaVtOS9k+atpemqpOadoVxcbnxuYW1lfHR5cGV8ZGVmYXVsdHxkZXNjcmlwdGlvbnxcXG58LS0tfC0tLXw6LS0tOnw6LS0tOnxcXG58Y3VycmVudHxudW1iZXJ8MHzmjIflrprlvZPliY3mraXpqqTvvIzku44gMCDlvIDlp4vorrDmlbB8XFxufHN0YXR1c3xzdHJpbmd8cHJvY2Vzc3zmjIflrprlvZPliY3mraXpqqTnmoTnirbmgIHvvIzlj6/pgIkgYHdhaXRgIGBwcm9jZXNzYCBgZmluaXNoYHxcXG58ZGlyZWN0aW9ufHN0cmluZ3xob3Jpem9udGFsfOaMh+WumuatpemqpOadoeaWueWQkeOAgum7mOiupOawtOW5s3xcXG5cXG4jIyMjIFN0ZXBzLlN0ZXAg5q2l6aqk5p2h5YaF55qE5q+P5LiA5Liq5q2l6aqkXFxufG5hbWV8dHlwZXxkZWZhdWx0fGRlc2NyaXB0aW9ufFxcbnwtLS18LS0tfDotLS06fDotLS06fFxcbnxzdGF0dXN8c3RyaW5nfHdhaXR85oyH5a6a54q25oCB44CC5b2T5LiN6YWN572u6K+l5bGe5oCn5pe277yM5Lya5L2/55SoIFN0ZXBzIOeahCBjdXJyZW50IOadpeiHquWKqOaMh+WumueKtuaAgeOAgnxcXG58dGl0bGV8c3RyaW5nIG9yIFJlYWN0Tm9kZXzml6B85qCH6aKYfFxcbnxkZXNjcmlwdGlvbnxzdHJpbmcgb3IgUmVhY3ROb2RlfOaXoHzmj4/ov7DvvIzlj6/pgIl8XFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvc3RlcHMvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3N0ZXBzL1JFQURNRS5tZFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1wb3J0IFN0ZXBzIGZyb20gJy4uL1N0ZXBzJztcXG5cXG5jb25zdCBTdGVwID0gU3RlcHMuU3RlcDtcXG5cXG5jb25zdCBTdGVwRGVtbyA9ICgpID0+IChcXG4gIDxkaXY+XFxuICAgIDxoMz7mqKrlkJHmraXpqqTmnaE8L2gzPlxcbiAgICA8U3RlcHMgY3VycmVudD17MX0+XFxuICAgICAgPFN0ZXAgdGl0bGU9XFxcIkZpbmlzaGVkXFxcIiBkZXNjcmlwdGlvbj1cXFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlxcXCIgLz5cXG4gICAgICA8U3RlcCB0aXRsZT1cXFwiSW4gUHJvZ3Jlc3NcXFwiIC8+XFxuICAgICAgPFN0ZXAgdGl0bGU9XFxcIldhaXRpbmdcXFwiIC8+XFxuICAgIDwvU3RlcHM+XFxuICAgIDxTdGVwcyBjdXJyZW50PXsyfT5cXG4gICAgICA8U3RlcCB0aXRsZT1cXFwiRmluaXNoZWRcXFwiIGRlc2NyaXB0aW9uPVxcXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXFxcIiAvPlxcbiAgICAgIDxTdGVwIHRpdGxlPVxcXCJJbiBQcm9ncmVzc1xcXCIgLz5cXG4gICAgICA8U3RlcCB0aXRsZT1cXFwiV2FpdGluZ1xcXCIgZGVzY3JpcHRpb249XFxcIlRoaXMgaXMgYSBkZXNjcmlwdGlvbi5cXFwiIC8+XFxuICAgIDwvU3RlcHM+XFxuICAgIDxoMz7nq5blkJHmraXpqqTmnaE8L2gzPlxcbiAgICA8U3RlcHMgY3VycmVudD17MX0gZGlyZWN0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgPFN0ZXAgdGl0bGU9XFxcIkZpbmlzaGVkXFxcIiBkZXNjcmlwdGlvbj1cXFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlxcXCIgLz5cXG4gICAgICA8U3RlcCB0aXRsZT1cXFwiSW4gUHJvZ3Jlc3NcXFwiIGRlc2NyaXB0aW9uPVxcXCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXFxcIiAvPlxcbiAgICAgIDxTdGVwIHRpdGxlPVxcXCJXYWl0aW5nXFxcIiBkZXNjcmlwdGlvbj1cXFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlxcXCIgLz5cXG4gICAgPC9TdGVwcz5cXG4gIDwvZGl2Plxcbik7XFxuXFxuZXhwb3J0IGRlZmF1bHQgU3RlcERlbW87XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy9zdGVwcy9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3N0ZXBzL2RlbW8vaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiMjIFRyaWdnZXJcXG5cXG5UcmlnZ2VyIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG58YWN0aW9ufCBgaG92ZXJgIG9yIGBjbGlja2B8YGhvdmVyYHzop6blj5Hnsbvlnot8XFxufHBsYWNlbWVudHxgYXJyYXlgfHzlvLnlh7rlsYLlrprkvY18XFxufG9mZnNldHxgYXJyYXlgfFswLCAwXXzlrprkvY3lgY/np7t8XFxufHBvcHVwfGBzdHJpbmdgIG9yIGByZWFjdC5lbGVtZW50YHzlvLnlh7rlsYLlhoXlrrl8XFxuXFxuIyMjIEFwaVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9SRUFETUUubWRcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcXG5pbXBvcnQgVHJpZ2dlciBmcm9tICcuLi9UcmlnZ2VyJztcXG5cXG5jb25zdCBQTEFDRU1FTlRfRU5VTSA9IHtcXG4gIGxlZnQ6IHtcXG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXFxuICB9LFxcbiAgcmlnaHQ6IHtcXG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXFxuICB9LFxcbiAgdG9wOiB7XFxuICAgIHBvaW50czogWydiYycsICd0YyddLFxcbiAgfSxcXG4gIGJvdHRvbToge1xcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcXG4gIH0sXFxuICB0b3BMZWZ0OiB7XFxuICAgIHBvaW50czogWydibCcsICd0bCddLFxcbiAgfSxcXG4gIHRvcFJpZ2h0OiB7XFxuICAgIHBvaW50czogWydicicsICd0ciddLFxcbiAgfSxcXG4gIGJvdHRvbVJpZ2h0OiB7XFxuICAgIHBvaW50czogWyd0cicsICdiciddLFxcbiAgfSxcXG4gIGJvdHRvbUxlZnQ6IHtcXG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXFxuICB9LFxcbn07XFxuXFxuY29uc3QgQWN0aW9uVHlwZSA9IFtcXG4gICdob3ZlcicsXFxuICAnY2xpY2snLFxcbl07XFxuXFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZ2dlckRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcbiAgc3RhdGUgPSB7XFxuICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXFxuICAgIGFjdGlvbjogJ2NsaWNrJyxcXG4gIH1cXG4gIG9uQ2hhbmdlUGxhY2VtZW50ID0gKGUpID0+IHtcXG4gICAgdGhpcy5zZXRTdGF0ZSh7XFxuICAgICAgcGxhY2VtZW50OiBlLnRhcmdldC52YWx1ZSxcXG4gICAgfSk7XFxuICB9XFxuICBvbkNoYW5nZUFjdGlvblR5cGUgPSAoZSkgPT4ge1xcbiAgICB0aGlzLnNldFN0YXRlKHtcXG4gICAgICBhY3Rpb246IGUudGFyZ2V0LnZhbHVlLFxcbiAgICB9KTtcXG4gIH1cXG4gIHJlbmRlclBsYWNlbWVudFNlbGVjdG9yKCkge1xcbiAgICBjb25zdCB7IHBsYWNlbWVudCB9ID0gdGhpcy5zdGF0ZTtcXG4gICAgcmV0dXJuIChcXG4gICAgICA8c2VsZWN0IHZhbHVlPXtwbGFjZW1lbnR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGxhY2VtZW50fT5cXG4gICAgICAgIHtcXG4gICAgICAgICAgT2JqZWN0LmtleXMoUExBQ0VNRU5UX0VOVU0pLm1hcChwID0+IChcXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cH0+e3B9PC9vcHRpb24+XFxuICAgICAgICAgICkpXFxuICAgICAgICB9XFxuICAgICAgPC9zZWxlY3Q+XFxuICAgICk7XFxuICB9XFxuICByZW5kZXIoKSB7XFxuICAgIGNvbnN0IHtcXG4gICAgICBwbGFjZW1lbnQsXFxuICAgICAgYWN0aW9uLFxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcXG4gICAgcmV0dXJuIChcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XFxcInBsYWNlbWVudFxcXCI+5a+56b2Q5pa55byPPC9sYWJlbD5cXG4gICAgICAgIHtcXG4gICAgICAgICAgdGhpcy5yZW5kZXJQbGFjZW1lbnRTZWxlY3RvcigpXFxuICAgICAgICB9XFxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cXFwiYWN0aW9uXFxcIj7op6blj5HmlrnlvI88L2xhYmVsPlxcbiAgICAgICAge1xcbiAgICAgICAgICBBY3Rpb25UeXBlLm1hcCh0eXBlID0+IChcXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cXFwiYWN0aW9uXFxcIiBrZXk9e3R5cGV9PlxcbiAgICAgICAgICAgICAgPGlucHV0XFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUFjdGlvblR5cGV9XFxuICAgICAgICAgICAgICAgIHZhbHVlPXt0eXBlfVxcbiAgICAgICAgICAgICAgICBjaGVja2VkPXt0eXBlID09PSBhY3Rpb259XFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAge3R5cGV9XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgKSlcXG4gICAgICAgIH1cXG4gICAgICAgIDxUcmlnZ2VyXFxuICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxcbiAgICAgICAgICBwb3B1cD17XFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgIzAwMCcsIHBhZGRpbmc6IDEwLCBiYWNrZ3JvdW5kOiAnI2ZmZicgfX0+cG9wdXAgY29udGVudDwvZGl2PlxcbiAgICAgICAgICB9XFxuICAgICAgICAgIHBsYWNlbWVudD17UExBQ0VNRU5UX0VOVU1bcGxhY2VtZW50XS5wb2ludHN9XFxuICAgICAgICAgIG1vdXNlTGVhdmVEZWxheT17MTAwfVxcbiAgICAgICAgPlxcbiAgICAgICAgICB7YCR7YWN0aW9ufSBtZWB9XFxuICAgICAgICA8L1RyaWdnZXI+XFxuICAgICAgPC9kaXY+XFxuICAgICk7XFxuICB9XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+Ly4wLjUuMUByYXctbG9hZGVyIS4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9kZW1vL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiIyMgVXBsb2FkXFxuXFxuVXBsb2FkIENvbXBvbmVudC5cXG5cXG4jIyMgUHJvcHNcXG58bmFtZXx0eXBlfGRlZmF1bHR8ZGVzY3JpcHRpb258XFxufC0tLXwtLS18LS0tfC0tLXxcXG5cXG4jIyMgQXBpXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy91cGxvYWQvUkVBRE1FLm1kXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3VwbG9hZC9SRUFETUUubWRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImltcG9ydCBVcGxvYWQgZnJvbSAnLi4vVXBsb2FkJztcXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XFxuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vaWNvbi9JY29uJztcXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbi9CdXR0b24nO1xcbmltcG9ydCBtZXNzYWdlIGZyb20gJy4uLy4uL21lc3NhZ2UvaW5kZXgnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xcblxcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcXG4gICAgc3VwZXIocHJvcHMpO1xcbiAgICB0aGlzLnN0YXRlID0ge1xcbiAgICAgIGZpbGUxU3RhdGU6IHt9XFxuICAgIH07XFxuICB9XFxuXFxuXFxuICByZW5kZXIoKSB7XFxuICAgIHZhciBfdGhpcyA9IHRoaXM7XFxuICAgIGNvbnN0IHByb3BzID0ge1xcbiAgICAgIG5hbWU6ICdmaWxlJyxcXG4gICAgICBhY3Rpb246ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJyxcXG4gICAgICBoZWFkZXJzOiB7XFxuICAgICAgICBhdXRob3JpemF0aW9uOiAnYXV0aG9yaXphdGlvbi10ZXh0JyxcXG4gICAgICB9LFxcbiAgICAgIG9uQ2hhbmdlKGluZm8pIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xcbiAgICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7XFxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7XFxuICAgICAgICB9XFxuICAgICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XFxuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0g5paH5Lu25LiK5Lyg5oiQ5YqfLmApOyAgICAgICAgICBcXG4gICAgICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykge1xcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSDmlofku7bkuIrkvKDlpLHotKXvvIFgKTtcXG4gICAgICAgIH1cXG4gICAgICB9LFxcbiAgICB9O1xcblxcbiAgICBcXG5cXG5cXG4gICAgcmV0dXJuIChcXG4gICAgICA8ZGl2PlxcbiAgICAgICAgPFVwbG9hZCB7Li4ucHJvcHN9PlxcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XFxcInNtYWxsXFxcIiB0eXBlPVxcXCJzZWNvbmRhcnlcXFwiPlxcbiAgICAgICAgICAgIDxJY29uIHNpemU9ezEyfSBuYW1lPVxcXCJob21lXFxcIiAvPiBDbGljayB0byBVcGxvYWRcXG4gICAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICA8L1VwbG9hZD5cXG4gICAgICA8L2Rpdj5cXG4gICAgKTtcXG4gIH1cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vLjAuNS4xQHJhdy1sb2FkZXIhLi9zcmMvY29tcG9uZW50cy91cGxvYWQvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy91cGxvYWQvZGVtby9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWxlcnQvUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9hbGVydC9SRUFETUUubWRcIixcblx0XCIuL2JyZWFkY3J1bWIvUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL1JFQURNRS5tZFwiLFxuXHRcIi4vYnV0dG9uL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL1JFQURNRS5tZFwiLFxuXHRcIi4vZGF0ZVBpY2tlci9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvUkVBRE1FLm1kXCIsXG5cdFwiLi9kcm9wZG93bi9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL1JFQURNRS5tZFwiLFxuXHRcIi4vaWNvbi9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2ljb24vUkVBRE1FLm1kXCIsXG5cdFwiLi9tZW51L1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbWVudS9SRUFETUUubWRcIixcblx0XCIuL21lc3NhZ2UvUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlL1JFQURNRS5tZFwiLFxuXHRcIi4vbW9kYWwvUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9tb2RhbC9SRUFETUUubWRcIixcblx0XCIuL3BhZ2luYXRpb24vUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1JFQURNRS5tZFwiLFxuXHRcIi4vcHJvZ3Jlc3MvUkVBRE1FLm1kXCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9SRUFETUUubWRcIixcblx0XCIuL3N0ZXBzL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvc3RlcHMvUkVBRE1FLm1kXCIsXG5cdFwiLi90cmlnZ2VyL1JFQURNRS5tZFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvdHJpZ2dlci9SRUFETUUubWRcIixcblx0XCIuL3VwbG9hZC9SRUFETUUubWRcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3VwbG9hZC9SRUFETUUubWRcIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvY29tcG9uZW50cyByZWN1cnNpdmUgLi8hLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi8gXlxcXFwuXFxcXC8uKlxcXFwvUkVBRE1FXFxcXC5tZCRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzIC4vfi8uMC41LjFAcmF3LWxvYWRlciEgXlxcLlxcLy4qXFwvUkVBRE1FXFwubWQkXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9jb21wb25lbnRzIHJlY3Vyc2l2ZSAuLyEuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuLyBeXFwuXFwvLipcXC9SRUFETUVcXC5tZCRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcCA9IHtcblx0XCIuL2FsZXJ0L2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2FsZXJ0L2RlbW8vaW5kZXguanNcIixcblx0XCIuL2JyZWFkY3J1bWIvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9idXR0b24vZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2RlbW8vaW5kZXguanNcIixcblx0XCIuL2RhdGVQaWNrZXIvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvZGF0ZVBpY2tlci9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9kcm9wZG93bi9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9kcm9wZG93bi9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9pY29uL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL2ljb24vZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vbWVudS9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9tZW51L2RlbW8vaW5kZXguanNcIixcblx0XCIuL21lc3NhZ2UvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9tb2RhbC9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy9tb2RhbC9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9wYWdpbmF0aW9uL2RlbW8vaW5kZXhcIjogXCIuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuL3NyYy9jb21wb25lbnRzL3BhZ2luYXRpb24vZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vcHJvZ3Jlc3MvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvcHJvZ3Jlc3MvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vc3RlcHMvZGVtby9pbmRleFwiOiBcIi4vbm9kZV9tb2R1bGVzLy4wLjUuMUByYXctbG9hZGVyL2luZGV4LmpzIS4vc3JjL2NvbXBvbmVudHMvc3RlcHMvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vdHJpZ2dlci9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy90cmlnZ2VyL2RlbW8vaW5kZXguanNcIixcblx0XCIuL3VwbG9hZC9kZW1vL2luZGV4XCI6IFwiLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi9zcmMvY29tcG9uZW50cy91cGxvYWQvZGVtby9pbmRleC5qc1wiXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9jb21wb25lbnRzIHJlY3Vyc2l2ZSAuLyEuL25vZGVfbW9kdWxlcy8uMC41LjFAcmF3LWxvYWRlci9pbmRleC5qcyEuLyBeXFxcXC5cXFxcLy4qXFxcXC9kZW1vXFxcXC9pbmRleCRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzIC4vfi8uMC41LjFAcmF3LWxvYWRlciEgXlxcLlxcLy4qXFwvZGVtb1xcL2luZGV4JFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcG9uZW50cyByZWN1cnNpdmUgLi8hLi9ub2RlX21vZHVsZXMvLjAuNS4xQHJhdy1sb2FkZXIvaW5kZXguanMhLi8gXlxcLlxcLy4qXFwvZGVtb1xcL2luZGV4JFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWxlcnQvZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvYWxlcnQvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vYnJlYWRjcnVtYi9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW8vaW5kZXguanNcIixcblx0XCIuL2J1dHRvbi9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9idXR0b24vZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vZGF0ZVBpY2tlci9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9kYXRlUGlja2VyL2RlbW8vaW5kZXguanNcIixcblx0XCIuL2Ryb3Bkb3duL2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW8vaW5kZXguanNcIixcblx0XCIuL2ljb24vZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9tZW51L2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL21lbnUvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vbWVzc2FnZS9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlL2RlbW8vaW5kZXguanNcIixcblx0XCIuL21vZGFsL2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL21vZGFsL2RlbW8vaW5kZXguanNcIixcblx0XCIuL3BhZ2luYXRpb24vZGVtby9pbmRleFwiOiBcIi4vc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9wcm9ncmVzcy9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9wcm9ncmVzcy9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi9zdGVwcy9kZW1vL2luZGV4XCI6IFwiLi9zcmMvY29tcG9uZW50cy9zdGVwcy9kZW1vL2luZGV4LmpzXCIsXG5cdFwiLi90cmlnZ2VyL2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL3RyaWdnZXIvZGVtby9pbmRleC5qc1wiLFxuXHRcIi4vdXBsb2FkL2RlbW8vaW5kZXhcIjogXCIuL3NyYy9jb21wb25lbnRzL3VwbG9hZC9kZW1vL2luZGV4LmpzXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2NvbXBvbmVudHMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcL2RlbW9cXFxcL2luZGV4JFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMgXlxcLlxcLy4qXFwvZGVtb1xcL2luZGV4JFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcG9uZW50cyByZWN1cnNpdmUgXlxcLlxcLy4qXFwvZGVtb1xcL2luZGV4JFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vQWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbGVydERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5mb1Byb3BzID0ge1xuICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgY2xvc2VUZXh0OiAnWCcsXG4gICAgICBtZXNzYWdlOiAnaW5mb+S/oeaBrycsXG4gICAgICBkZXNjcmlwdGlvbjogJ2luZm/mj4/ov7AnLFxuICAgICAgb25DbG9zZSgpIHsgY29uc29sZS5sb2coJ2luZm8nKTsgfSxcbiAgICB9O1xuICAgIGNvbnN0IGVycm9yUHJvcHMgPSB7XG4gICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICBjbG9zZVRleHQ6ICflhbPpl60nLFxuICAgICAgbWVzc2FnZTogJ2Vycm9y5L+h5oGvJyxcbiAgICAgIG9uQ2xvc2UoKSB7IGNvbnNvbGUubG9nKCdlcnJvcicpOyB9LFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDQwMCB9fT5cbiAgICAgICAgPEFsZXJ0IHsuLi5pbmZvUHJvcHN9IC8+XG4gICAgICAgIDxBbGVydCB7Li4uZXJyb3JQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9hbGVydC9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vLi4vYnJlYWRjcnVtYic7XG5cbmNvbnN0IENydW1iID0gQnJlYWRjcnVtYi5JdGVtO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmVhZGNydW1iRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJyZWFkY3J1bWIgc2VwYXJhdG9yPVwiPlwiIGhhc0JhY2tJY29uPlxuICAgICAgICAgIDxDcnVtYj5ob21lPC9DcnVtYj5cbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cIi9jb21wb25lbnQvYnV0dG9uXCI+QnV0dG9uPC9DcnVtYj5cbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cIi9jb21wb25lbnQvc3RlcHNcIj5TdGVwczwvQ3J1bWI+XG4gICAgICAgICAgPENydW1iPmJiYjwvQ3J1bWI+XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cblxuICAgICAgICA8QnJlYWRjcnVtYiBoYXNCYWNrSWNvbj5cbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cIi9cIj5ob21lPC9DcnVtYj5cbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cIi9jb21wb25lbnQvYnV0dG9uXCI+QnV0dG9uPC9DcnVtYj5cbiAgICAgICAgICA8Q3J1bWIgaHJlZj1cIi9jb21wb25lbnQvc3RlcHNcIj5TdGVwczwvQ3J1bWI+XG4gICAgICAgICAgPENydW1iPmJiYjwvQ3J1bWI+XG4gICAgICAgIDwvQnJlYWRjcnVtYj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9icmVhZGNydW1iL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz7mjInpkq7nsbvlnos8L2gzPlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRoPuS4u+aMiemSrjwvdGg+XG4gICAgICAgICAgICA8dGg+5qyh5oyJ6ZKuPC90aD5cbiAgICAgICAgICAgIDx0aD7omZrnur/mjInpkq48L3RoPlxuICAgICAgICAgICAgPHRoPuWNsemZqeaMiemSrjwvdGg+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dGQ+PEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPuS4u+aMiemSrjwvQnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICA8dGQ+PEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCI+5qyh5oyJ6ZKuPC9CdXR0b24+PC90ZD5cbiAgICAgICAgICAgIDx0ZD48QnV0dG9uIHR5cGU9XCJkYXNoZWRcIj7omZrnur/mjInpkq48L0J1dHRvbj48L3RkPlxuICAgICAgICAgICAgPHRkPjxCdXR0b24gdHlwZT1cImRhbmdlclwiPuWNsemZqeaMiemSrjwvQnV0dG9uPjwvdGQ+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGgzPuaMiemSruWwuuWvuDwvaDM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cImxhcmdlXCI+5Li76KaB5oyJ6ZKuKOWkpyk8L0J1dHRvbj5cbiAgICAgICAgJm5ic3A7XG4gICAgICAgIDxCdXR0b24+5Li76KaB5oyJ6ZKuKOS4rSk8L0J1dHRvbj5cbiAgICAgICAgJm5ic3A7XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCI+5Li76KaB5oyJ6ZKuKOWwjyk8L0J1dHRvbj5cbiAgICAgICAgPGgzPuS4jeWPr+eUqOeKtuaAgTwvaDM+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cImxhcmdlXCIgZGlzYWJsZWQ+5LiN5Y+v55So5oyJ6ZKuPC9CdXR0b24+XG4gICAgICAgICZuYnNwO1xuICAgICAgICA8QnV0dG9uIGRpc2FibGVkPuS4jeWPr+eUqOaMiemSrjwvQnV0dG9uPlxuICAgICAgICAmbmJzcDtcbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBkaXNhYmxlZD7kuI3lj6/nlKjmjInpkq48L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9idXR0b24vZGVtby9pbmRleC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4uL2luZGV4JztcblxuY29uc3QgeyBNb250aFBpY2tlciwgUmFuZ2VQaWNrZXIgfSA9IERhdGVQaWNrZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGVQaWNrZXJEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGRhdGU6IG1vbWVudCgpLmFkZCgxLCAnTScpLFxuICB9XG4gIG9uQ2hhbmdlKG0pIHtcbiAgICBjb25zb2xlLmxvZyhtKTtcbiAgfVxuICBjaGFuZ2VEaXNhYmxlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRpc2FibGVkOiAhdGhpcy5zdGF0ZS5kaXNhYmxlZCxcbiAgICB9KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRlLCBkaXNhYmxlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZURpc2FibGVkfVxuICAgICAgICAgIC8+IOemgeeUqFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aDI+5pel5pyf6YCJ5oupPC9oMj5cbiAgICAgICAgPGgzPumdnuWPl+aOp+aWueW8jzwvaDM+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aDM+5Y+X5o6n5pa55byPPC9oMz5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgdmFsdWU9e2RhdGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZGF0ZTogZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxwPumAieaLqeaXtumXtDoge2RhdGUuZm9ybWF0KCl9PC9wPlxuICAgICAgICA8aDI+5LiN5Y+v6YCJ5pel5pyfPC9oMj5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZGlzYWJsZWREYXRlPXsoY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQgJiYgY3VycmVudC52YWx1ZU9mKCkgPCBEYXRlLm5vdygpO1xuICAgICAgICAgIH19XG4gICAgICAgID48L0RhdGVQaWNrZXI+XG4gICAgICAgIDxoMj7mnIjku73pgInmi6k8L2gyPlxuICAgICAgICA8TW9udGhQaWNrZXIgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgICAgICAgPGgyPuiMg+WbtOmAieaLqTwvaDI+XG4gICAgICAgIDxSYW5nZVBpY2tlciBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2RhdGVQaWNrZXIvZGVtby9pbmRleC5qcyIsImltcG9ydCBCdXR0b24gZnJvbSAncXVhcmstdWkvYnV0dG9uJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi9Ecm9wZG93bic7XG5cbmNvbnN0IHsgTWVudSB9ID0gRHJvcGRvd247XG5jb25zdCB7IEl0ZW0gfSA9IE1lbnU7XG5cbmNvbnN0IERyb3Bkb3duRGVtbyA9ICgpID0+IHtcbiAgY29uc3QgbWVudSA9IChcbiAgICA8TWVudT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWh1b2RpLmNvbVwiPuaYk+i0p+WYgDwvYT5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5sdWppbmc1Ni5jbi9cIj7pmYbpsrg8L2E+XG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZWNhcmdvLmVodW9kaS5jb20vXCI+5Yqg55uf6L2m6Zif566h55CG57O757ufPC9hPlxuICAgICAgPC9JdGVtPlxuICAgIDwvTWVudT5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPuW4puS4i+aLieahhueahOaMiemSrjwvaDM+XG4gICAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudX0+XG4gICAgICAgIDxCdXR0b24+6I+c5Y2VPC9CdXR0b24+XG4gICAgICA8L0Ryb3Bkb3duPlxuICAgICAgPGgzPkRyb3Bkb3du5YaF572u5oyJ6ZKuPC9oMz5cbiAgICAgIDxEcm9wZG93bi5CdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG92ZXJsYXk9e21lbnV9IHRyaWdnZXI9eydjbGljayd9PlxuICAgICAgICDoj5zljZVcbiAgICAgIDwvRHJvcGRvd24uQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25EZW1vO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2Ryb3Bkb3duL2RlbW8vaW5kZXguanMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjI4LjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy4xLjMuM0Bwb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTMhLi9pbmRleC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8uMC4xNi4xQHN0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLjAuMjguMEBjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLjEuMy4zQHBvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy4wLjI4LjBAY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy4xLjMuM0Bwb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTMhLi9pbmRleC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvaWNvbi9kZW1vL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcG9uZW50cy9pY29uL2RlbW8vaW5kZXguY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IEljb25MaXN0ID0gW1xuICAnZWxsaXBzaXMnLFxuICAnY2F1dGlvbicsXG4gICdxdWVzdGlvbicsXG4gICdhY2NvdW50JyxcbiAgJ3NldHRpbmcnLFxuICAncGFwZXInLFxuICAnZmluYW5jZScsXG4gICdjaGVjaycsXG4gICdhcnJvdy1sZWZ0JyxcbiAgJ2Fycm93LXJpZ2h0JyxcbiAgJ2NoZWNrJyxcbiAgJ2hvbWUnLFxuICAnaW5mbycsXG5dO1xuXG5jb25zdCBJY29uRGVtbyA9ICgpID0+IChcbiAgPGRpdj5cbiAgICB7XG4gICAgICBJY29uTGlzdC5tYXAobmFtZSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ0ljb24tLWdyaWQnXX0ga2V5PXtuYW1lfT5cbiAgICAgICAgICA8SWNvbiBzaXplPXs0OH0gbmFtZT17bmFtZX0gLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc1snSWNvbi1uYW1lJ119PntuYW1lfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgIH1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uRGVtbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9pY29uL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51JztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2ljb24vSWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICB0aGVtZTogJ2RhcmsnLFxuICAgIGN1cnJlbnQ6ICcuJG0wJyxcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBsZXQga2V5ID0gKGUua2V5IHx8ICcnKS5yZXBsYWNlKC9cXC5cXCQvZywgJycpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY3VycmVudDogZS5rZXlcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhrZXkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAx44CB5rC05bmz6I+c5Y2V77yM5a2Q6I+c5Y2V5rC05bmzXG4gICAgICAgIDxNZW51XG4gICAgICAgICAgICAvL3RoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIHN0eWxlTmFtZT17XCJtZW51XCJ9XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1t0aGlzLnN0YXRlLmN1cnJlbnRdfVxuICAgICAgICAgICAgdHlwZT1cImhvcml6b250YWwtaFwiPlxuXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMFwiPlxuICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwiaWNvblwiIHNpemU9ezE0fSBuYW1lPXsncGFwZXInfSAvPlxuICAgICAgICAgICAgICDoj5zljZXmjInpkq5cbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMVwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNlTwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkxXCI+5LqM57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTJcIj7kuoznuqfoj5zljZUyPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMlwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNleWIhue7hDwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcxaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJnMWkyXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMmcyaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJnMmkyXCI+5LqM57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtM1wiIGRpc2FibGVkIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wiZmluYW5jZVwifS8+PHNwYW4+5LiN5Y+v55So5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0zaTFcIj7kuoznuqfoj5zljZU0PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTNpMlwiPuS6jOe6p+iPnOWNlTU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtNFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPuS4jeWPr+eUqOiPnOWNleaMiemSrlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudT5cblxuICAgICAgICA8YnIvPjxici8+PGJyLz5cblxuICAgICAgICAy44CB5rC05bmz6I+c5Y2V77yM5a2Q6I+c5Y2V5Z6C55u0XG4gICAgICAgIDxNZW51XG4gICAgICAgICAgICAvL3RoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICAgIHN0eWxlTmFtZT17XCJtZW51XCJ9XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1t0aGlzLnN0YXRlLmN1cnJlbnRdfVxuICAgICAgICAgICAgdHlwZT1cImhvcml6b250YWwtdlwiPlxuXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0wXCI+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJwYXBlclwifS8+XG4gICAgICAgICAgICAgIOiPnOWNleaMiemSrlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0xXCIgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJwYXBlclwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkzXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0xbTFcIiB0aXRsZT1cIuS4iee6p+iPnOWNlVwiPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFtMWkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFtMWkyXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMlwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNleWIhue7hDwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0yZzFcIiB0aXRsZT1cIuWIhue7hDFcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpMVwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0yZzJcIiB0aXRsZT1cIuWIhue7hDFcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpMVwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMm0yXCIgdGl0bGU9XCLkuInnuqfoj5zljZVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVwibTJtMmcxXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMWkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzFpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMm0yZzJcIiB0aXRsZT1cIuWIhue7hDJcIj5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJtMmcyaTFcIj7kuInnuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMmkyXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0zXCIgZGlzYWJsZWQgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJmaW5hbmNlXCJ9Lz48c3Bhbj7kuI3lj6/nlKjkuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTNpMVwiPuS6jOe6p+iPnOWNlTQ8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtM2kyXCI+5LqM57qn6I+c5Y2VNTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm00XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJwYXBlclwifS8+5LiN5Y+v55So6I+c5Y2V5oyJ6ZKuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuXG4gICAgICAgIDxiciAvPjxiciAvPjxiciAvPlxuXG4gICAgICAgIDPjgIHlnoLnm7Toj5zljZXvvIzlrZDoj5zljZXmsLTlubPlkJHlj7PlvLnlh7pcbiAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIC8vdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCwgaGVpZ2h0OiA1MDAgfX1cbiAgICAgICAgICAgIHN0eWxlTmFtZT17XCJtZW51XCJ9XG4gICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1snLiRtMSddfVxuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzPXtbdGhpcy5zdGF0ZS5jdXJyZW50XX1cbiAgICAgICAgICAgIHR5cGU9XCJ2ZXJ0aWNhbC1oXCI+XG5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0wXCI+XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9eydwYXBlcid9IC8+XG4gICAgICAgICAgICAgIOiPnOWNleaMiemSrlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0xXCIgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJwYXBlclwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkzXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0xbTFcIiB0aXRsZT1cIuS4iee6p+iPnOWNlVwiPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFtMWkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFtMWkyXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMlwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNleWIhue7hDwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0yZzFcIiB0aXRsZT1cIuWIhue7hDFcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpMVwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0yZzJcIiB0aXRsZT1cIuWIhue7hDFcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpMVwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMm0yXCIgdGl0bGU9XCLkuInnuqfoj5zljZVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVwibTJtMmcxXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMWkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzFpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMm0yZzJcIiB0aXRsZT1cIuWIhue7hDJcIj5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJtMmcyaTFcIj7kuInnuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMmkyXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0zXCIgZGlzYWJsZWQgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJmaW5hbmNlXCJ9Lz48c3Bhbj7kuI3lj6/nlKjkuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTNpMVwiPuS6jOe6p+iPnOWNlTQ8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtM2kyXCI+5LqM57qn6I+c5Y2VNTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm00XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJwYXBlclwifS8+5LiN5Y+v55So6I+c5Y2V5oyJ6ZKuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuXG4gICAgICAgIDxiciAvPjxiciAvPjxiciAvPlxuXG4gICAgICAgIDTjgIHlnoLnm7Toj5zljZXvvIzlrZDoj5zljZXlhoXltYzlnKjoj5zljZXljLrln59cbiAgICAgICAgPE1lbnVcbiAgICAgICAgICAgIC8vdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxuICAgICAgICAgICAgc3R5bGVOYW1lPXtcIm1lbnVcIn1cbiAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17WycuJG0xJ119XG4gICAgICAgICAgICBzZWxlY3RlZEtleXM9e1t0aGlzLnN0YXRlLmN1cnJlbnRdfVxuICAgICAgICAgICAgdHlwZT1cInZlcnRpY2FsLXZcIj5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0wXCI+XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9eydwYXBlcid9IC8+XG4gICAgICAgICAgICAgIOiPnOWNleaMiemSrlxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0xXCIgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJwYXBlclwifS8+PHNwYW4+5LiL5ouJ6I+c5Y2VPC9zcGFuPjwvc3Bhbj59PlxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0xaTFcIj7kuoznuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMWkzXCI+5LqM57qn6I+c5Y2VMzwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0xbTFcIiB0aXRsZT1cIuS4iee6p+iPnOWNlVwiPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFtMWkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTFtMWkyXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8L01lbnUuU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMlwiIHRpdGxlPXs8c3Bhbj48SWNvbiBjbGFzc05hbWU9XCJpY29uXCIgc2l6ZT17MTR9IG5hbWU9e1wicGFwZXJcIn0vPjxzcGFuPuS4i+aLieiPnOWNleWIhue7hDwvc3Bhbj48L3NwYW4+fT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0yZzFcIiB0aXRsZT1cIuWIhue7hDFcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpMVwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzFpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbUdyb3VwIGtleT1cIm0yZzJcIiB0aXRsZT1cIuWIhue7hDFcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpMVwiPuS6jOe6p+iPnOWNlTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpMlwiPuS6jOe6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0yZzJpM1wiPuS6jOe6p+iPnOWNlTM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgPE1lbnUuU3ViTWVudSBrZXk9XCJtMm0yXCIgdGl0bGU9XCLkuInnuqfoj5zljZVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtR3JvdXAga2V5PVwibTJtMmcxXCIgdGl0bGU9XCLliIbnu4QxXCI+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMWkxXCI+5LiJ57qn6I+c5Y2VMTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtMm0yZzFpMlwiPuS4iee6p+iPnOWNlTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbUdyb3VwPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW1Hcm91cCBrZXk9XCJtMm0yZzJcIiB0aXRsZT1cIuWIhue7hDJcIj5cbiAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTJtMmcyaTFcIj7kuInnuqfoj5zljZUxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm0ybTJnMmkyXCI+5LiJ57qn6I+c5Y2VMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtR3JvdXA+XG4gICAgICAgICAgICAgIDwvTWVudS5TdWJNZW51PlxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8TWVudS5TdWJNZW51IGtleT1cIm0zXCIgZGlzYWJsZWQgdGl0bGU9ezxzcGFuPjxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJmaW5hbmNlXCJ9Lz48c3Bhbj7kuI3lj6/nlKjkuIvmi4noj5zljZU8L3NwYW4+PC9zcGFuPn0+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwibTNpMVwiPuS6jOe6p+iPnOWNlTQ8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJtM2kyXCI+5LqM57qn6I+c5Y2VNTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPC9NZW51LlN1Yk1lbnU+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIm00XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImljb25cIiBzaXplPXsxNH0gbmFtZT17XCJwYXBlclwifS8+5LiN5Y+v55So6I+c5Y2V5oyJ6ZKuXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWVudS9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24nO1xuaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi4vaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IG1lc3NhZ2UuaW5mbygn6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGv77yI5L+h5oGv5YaF5a6577yJ44CCJyk7IH19PmluZm88L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4geyBtZXNzYWdlLnN1Y2Nlc3MoJ+i/meaYr+S4gOadoeaPkOekuuS/oeaBr++8iOS/oeaBr+WGheWuue+8ieOAgicpOyB9fT5zdWNjZXNzPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHsgbWVzc2FnZS5lcnJvcign6L+Z5piv5LiA5p2h5o+Q56S65L+h5oGv77yI5L+h5oGv5YaF5a6577yJ44CCJyk7IH19PmVycm9yPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IHsgbWVzc2FnZS53YXJuaW5nKCfov5nmmK/kuIDmnaHmj5DnpLrkv6Hmga/vvIjkv6Hmga/lhoXlrrnvvInjgIInKTsgfX0+d2FybmluZzwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbWVzc2FnZS9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcbmltcG9ydCBCdXR0b24gZnJvbSAncXVhcmstdWkvYnV0dG9uJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxEZW1vIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vcGVuTW9kYWwgPSB0aGlzLm9wZW5Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZpc2libGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbW9kYWxQcm9wcyA9IHtcbiAgICAgIHRpdGxlOiAndGl0bGUnLFxuICAgICAgdmlzaWJsZSxcbiAgICAgIG9uT2s6ICgpID0+IHsgdGhpcy5jbG9zZU1vZGFsKCk7IH0sXG4gICAgICBvbkNhbmNlbDogKCkgPT4geyB0aGlzLmNsb3NlTW9kYWwoKTsgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+5Z+65pysPC9oMz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25DbGljaz17dGhpcy5vcGVuTW9kYWx9Pm9wZW4gbW9kYWw8L0J1dHRvbj5cbiAgICAgICAgPE1vZGFsIHsuLi5tb2RhbFByb3BzfT5cbiAgICAgICAgICA8cD5maXJzdCBNb2RhbDwvcD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPGgzPuS/oeaBr+aPkOekujwvaDM+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBNb2RhbC5pbmZvKHtcbiAgICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+aPkOekuuS/oeaBrycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+aW5mbzwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgTW9kYWwuc3VjY2Vzcyh7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/miJDlip/mtojmga8nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPnN1Y2Nlc3M8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIE1vZGFsLmVycm9yKHtcbiAgICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+mUmeivr+aPkOekuicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+ZXJyb3I8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIE1vZGFsLndhcm5pbmcoe1xuICAgICAgICAgICAgICBjb250ZW50OiAn6L+Z5piv6K2m5ZGK5L+h5oGvJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID53YXJuaW5nPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbW9kYWwvZGVtby9pbmRleC5qcyIsImltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL1BhZ2luYXRpb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0aW9uRGVtbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGN1cnJlbnQ6IDMsXG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz7lj5fmjqfmlrnlvI88L2gzPlxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgdG90YWw9ezUwfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoYykgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnQ6IGMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aDM+6Z2e5Y+X5o6n5pa55byPPC9oMz5cbiAgICAgICAgPFBhZ2luYXRpb24gZGVmYXVsdEN1cnJlbnQ9ezF9IHRvdGFsPXs1MH0gLz5cbiAgICAgICAgPGgzPuabtOWkmuWIhumhtTwvaDM+XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgZGVmYXVsdEN1cnJlbnQ9ezF9XG4gICAgICAgICAgdG90YWw9ezUwMH1cbiAgICAgICAgICBzaG93U2l6ZUNoYW5nZXJcbiAgICAgICAgICBvblNpemVDaGFuZ2U9eyhzaXplLCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2l6ZTogJHtzaXplfSBjdXJyZW50OiAke2N1cnJlbnR9YCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGgzPui3s+i9rDwvaDM+XG4gICAgICAgIDxQYWdpbmF0aW9uIHNob3dUb3RhbCB0b3RhbD17MTAwfSBzaG93UXVpY2tKdW1wZXIgLz5cbiAgICAgICAgPGgzPui/t+S9oDwvaDM+XG4gICAgICAgIDxQYWdpbmF0aW9uIHRvdGFsPXsxMDB9IHNob3dRdWlja0p1bXBlciBzaG93U2l6ZUNoYW5nZXIgc2l6ZT1cInNtYWxsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi4vUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzc0RlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDHjgIHmoIflh4bnmoTov5vluqbmnaFcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17MzB9IC8+XG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezUwfSBzdGF0dXM9XCJhY3RpdmVcIiAvPlxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXs3MH0gc3RhdHVzPVwiZXhjZXB0aW9uXCIgLz5cbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17MTAwfSAvPlxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXs1MH0gc2hvd0luZm89e2ZhbHNlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgMuOAgeWwj+Wei+i/m+W6puadoe+8jOmAguWQiOaUvuWcqOi+g+eLreeqhOeahOWMuuWfn+WGheOAglxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAxNzAgfX0+XG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezMwfSBzdHJva2VXaWR0aD17NX0gLz5cbiAgICAgICAgICA8UHJvZ3Jlc3MgcGVyY2VudD17NTB9IHN0cm9rZVdpZHRoPXs1fSBzdGF0dXM9XCJhY3RpdmVcIiAvPlxuICAgICAgICAgIDxQcm9ncmVzcyBwZXJjZW50PXs3MH0gc3Ryb2tlV2lkdGg9ezV9IHN0YXR1cz1cImV4Y2VwdGlvblwiIC8+XG4gICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezEwMH0gc3Ryb2tlV2lkdGg9ezV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3Byb2dyZXNzL2RlbW8vaW5kZXguanMiLCJpbXBvcnQgU3RlcHMgZnJvbSAnLi4vU3RlcHMnO1xuXG5jb25zdCBTdGVwID0gU3RlcHMuU3RlcDtcblxuY29uc3QgU3RlcERlbW8gPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPGgzPuaoquWQkeatpemqpOadoTwvaDM+XG4gICAgPFN0ZXBzIGN1cnJlbnQ9ezF9PlxuICAgICAgPFN0ZXAgdGl0bGU9XCJGaW5pc2hlZFwiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiIC8+XG4gICAgICA8U3RlcCB0aXRsZT1cIkluIFByb2dyZXNzXCIgLz5cbiAgICAgIDxTdGVwIHRpdGxlPVwiV2FpdGluZ1wiIC8+XG4gICAgPC9TdGVwcz5cbiAgICA8U3RlcHMgY3VycmVudD17Mn0+XG4gICAgICA8U3RlcCB0aXRsZT1cIkZpbmlzaGVkXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCIgLz5cbiAgICAgIDxTdGVwIHRpdGxlPVwiSW4gUHJvZ3Jlc3NcIiAvPlxuICAgICAgPFN0ZXAgdGl0bGU9XCJXYWl0aW5nXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCIgLz5cbiAgICA8L1N0ZXBzPlxuICAgIDxoMz7nq5blkJHmraXpqqTmnaE8L2gzPlxuICAgIDxTdGVwcyBjdXJyZW50PXsxfSBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPFN0ZXAgdGl0bGU9XCJGaW5pc2hlZFwiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiIC8+XG4gICAgICA8U3RlcCB0aXRsZT1cIkluIFByb2dyZXNzXCIgZGVzY3JpcHRpb249XCJUaGlzIGlzIGEgZGVzY3JpcHRpb24uXCIgLz5cbiAgICAgIDxTdGVwIHRpdGxlPVwiV2FpdGluZ1wiIGRlc2NyaXB0aW9uPVwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uLlwiIC8+XG4gICAgPC9TdGVwcz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwRGVtbztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9zdGVwcy9kZW1vL2luZGV4LmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAnLi4vVHJpZ2dlcic7XG5cbmNvbnN0IFBMQUNFTUVOVF9FTlVNID0ge1xuICBsZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gIH0sXG4gIHRvcDoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICdiciddLFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gIH0sXG59O1xuXG5jb25zdCBBY3Rpb25UeXBlID0gW1xuICAnaG92ZXInLFxuICAnY2xpY2snLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpZ2dlckRlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIGFjdGlvbjogJ2NsaWNrJyxcbiAgfVxuICBvbkNoYW5nZVBsYWNlbWVudCA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwbGFjZW1lbnQ6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIG9uQ2hhbmdlQWN0aW9uVHlwZSA9IChlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3Rpb246IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG4gIHJlbmRlclBsYWNlbWVudFNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHsgcGxhY2VtZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VsZWN0IHZhbHVlPXtwbGFjZW1lbnR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlUGxhY2VtZW50fT5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC5rZXlzKFBMQUNFTUVOVF9FTlVNKS5tYXAocCA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17cH0+e3B9PC9vcHRpb24+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGxhY2VtZW50LFxuICAgICAgYWN0aW9uLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBsYWNlbWVudFwiPuWvuem9kOaWueW8jzwvbGFiZWw+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnJlbmRlclBsYWNlbWVudFNlbGVjdG9yKClcbiAgICAgICAgfVxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjdGlvblwiPuinpuWPkeaWueW8jzwvbGFiZWw+XG4gICAgICAgIHtcbiAgICAgICAgICBBY3Rpb25UeXBlLm1hcCh0eXBlID0+IChcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWN0aW9uXCIga2V5PXt0eXBlfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUFjdGlvblR5cGV9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3R5cGV9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dHlwZSA9PT0gYWN0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dHlwZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8VHJpZ2dlclxuICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgIHBvcHVwPXtcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICMwMDAnLCBwYWRkaW5nOiAxMCwgYmFja2dyb3VuZDogJyNmZmYnIH19PnBvcHVwIGNvbnRlbnQ8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgcGxhY2VtZW50PXtQTEFDRU1FTlRfRU5VTVtwbGFjZW1lbnRdLnBvaW50c31cbiAgICAgICAgICBtb3VzZUxlYXZlRGVsYXk9ezEwMH1cbiAgICAgICAgPlxuICAgICAgICAgIHtgJHthY3Rpb259IG1lYH1cbiAgICAgICAgPC9UcmlnZ2VyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3RyaWdnZXIvZGVtby9pbmRleC5qcyIsImltcG9ydCBVcGxvYWQgZnJvbSAnLi4vVXBsb2FkJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uLy4uL2ljb24vSWNvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbi9CdXR0b24nO1xuaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi4vLi4vbWVzc2FnZS9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZERlbW8gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlMVN0YXRlOiB7fVxuICAgIH07XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgbmFtZTogJ2ZpbGUnLFxuICAgICAgYWN0aW9uOiAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGF1dGhvcml6YXRpb246ICdhdXRob3JpemF0aW9uLXRleHQnLFxuICAgICAgfSxcbiAgICAgIG9uQ2hhbmdlKGluZm8pIHtcbiAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XG4gICAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykge1xuICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0g5paH5Lu25LiK5Lyg5oiQ5YqfLmApOyAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0g5paH5Lu25LiK5Lyg5aSx6LSl77yBYCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIFxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFVwbG9hZCB7Li4ucHJvcHN9PlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgdHlwZT1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgPEljb24gc2l6ZT17MTJ9IG5hbWU9XCJob21lXCIgLz4gQ2xpY2sgdG8gVXBsb2FkXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVXBsb2FkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL3VwbG9hZC9kZW1vL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7O0FBM0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFSQTtBQWdCQTs7OztBQW5CQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFQQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkE7QUFxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkJBO0FBeUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNCQTtBQThCQTs7OztBQWpDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBUEE7QUFDQTtBQUNBOzs7QUFNQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbkNBO0FBc0NBOzs7O0FBdERBO0FBQ0E7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBV0E7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFGQTtBQURBO0FBQ0E7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUE1QkE7QUFpQ0E7QUFBQTtBQUFBO0FBbkNBO0FBc0NBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFMQTtBQVhBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUE5Q0E7QUFtREE7QUFBQTtBQUFBO0FBekZBO0FBNEZBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUpBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTEE7QUFYQTtBQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBaERBO0FBcURBO0FBQUE7QUFBQTtBQWpKQTtBQW9KQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBWEE7QUFzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQS9DQTtBQXBKQTtBQTBNQTs7OztBQTNOQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBT0E7Ozs7QUFmQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFBQTtBQUFBO0FBL0JBO0FBeUNBOzs7O0FBcEVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBREE7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBUEE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXpCQTtBQTRCQTs7OztBQW5DQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVZBO0FBa0JBOzs7O0FBckJBO0FBQ0E7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQURBO0FBQ0E7QUFxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQXRCQTtBQUNBO0FBMEJBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFGQTtBQVFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUEE7QUFEQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFOQTtBQVFBO0FBUkE7QUFuQkE7QUErQkE7Ozs7QUFoRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQURBO0FBUUE7Ozs7QUEzQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=0.js.map