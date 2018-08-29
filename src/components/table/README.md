---
author:
  name: yan
  homepage: https://github.com/october-yan/
  email: yanw.87@163.com
---

## Table

展示行列数据。

### Props
|name|type|default|description|
|---|---|---|---|
| bordered | boolean | false | 是否展示外边框和列边框 |
| width | number | - | 表格的宽度 |
| height | number | - | 表格的高度（除去表头） |
| emptyText | string | 暂无数据 | 表格暂无数据 |

### 列配置项(jsxcolumns)
|name|type|default|description|
|---|---|---|---|
| title | string | - | 列头标题 |
| dataIndex | string | - | 表格的数据中用于查看模式展示的字段 |
| width | number | - | 列宽 |
| fixed | string | - | 固定位置，固定在左侧还是右侧,包含‘left’,'right' |
| render | function | - | 在查看模式下，用户定制渲染的方式，返回一个 jsx 格式|
| sorter | Function\boolean | - | 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)|
| sortOrder | boolean\string | - | 排序的受控属性，外界可用此控制列的排序|

### 选择功能的配置(rowSelection)
|name|type|default|description|
|---|---|---|---|
| selectedRowKeys | string[] | [] | 指定选中项的 key 数组，需要和 onChange 进行配合 |
| onSelectChange | Function(selectedRowKeys) | [] | 用户手动选择/取消选择某列的回调 |
| selections | 'all-data' | - | 配置头部全选 |


### Api