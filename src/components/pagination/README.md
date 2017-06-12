---
author:
  name: ryan.bian
  homepage: https://github.com/macisi/
  email: macisi528@gmail.com
---

## Pagination

Pagination Component.

### Props
|name|type|default|description|
|---|---|---|---|
| current | number | - | 当前页数 |
| current | number | 1 | 默认当前页数 |
| total | number | 0 | 总数 |
| pageSize | number | - | 每页条数 |
| defaultPageSize | number | 10 | 默认每页条数 |
| onChange | function(page, pageSize) | noop | 页码改变回调，参数 |
| showSizeChanger | boolean | false | 显示分页条数选择 |
| onSizeChange | function(size, current) | noop | pageSize 变化回调 |
| pageSizeOptions| number[] | [10, 20, 30, 40] | 指定每页可以显示多少条 |
| showQuickJumper| boolean | false | 是否展示跳转输入框 |
| size| string | '' | `small` 指定小尺寸分页  |
| showTotal | boolean | false | 展示总数 |

### Api