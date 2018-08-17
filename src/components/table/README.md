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


### Api