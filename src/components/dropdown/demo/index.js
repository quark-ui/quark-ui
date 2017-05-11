import Button from 'quark-ui/button';
import Dropdown from '../Dropdown';

const { Menu } = Dropdown;
const { Item } = Menu;

const DropdownDemo = () => {
  const menu = (
    <Menu>
      <Item>
        <a href="https://www.ehuodi.com">易货嘀</a>
      </Item>
      <Item>
        <a href="http://www.lujing56.cn/">陆鲸</a>
      </Item>
      <Item>
        <a href="https://ecargo.ehuodi.com/">加盟车队管理系统</a>
      </Item>
    </Menu>
  );
  return (
    <div>
      <h3>带下拉框的按钮</h3>
      <Dropdown overlay={menu}>
        <Button>菜单</Button>
      </Dropdown>
      <h3>Dropdown内置按钮</h3>
      <Dropdown.Button type="secondary" overlay={menu} trigger={'click'}>
        菜单
      </Dropdown.Button>
    </div>
  );
};

export default DropdownDemo;
