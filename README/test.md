## 单元测试
### 测试命令解析

| 命令名称    | 运行示例                   |  参数  |   描述     |
| ---- | ---- | ---- | ---- |
| test       |  npm test                   | 无    |跑src目录下所有组件的测试用例 |
| test-unit  |  npm run test-unit './src/**/button/**/*.test.js'|   对应单测地址    | 跑单独的某个组件下的测试用例|
| test-karma |  npm run test-karma        |   无  | 测试谷歌浏览器兼容性|
| test-all   |  npm run test-all          |   无  | 测试所有浏览器兼容性|
