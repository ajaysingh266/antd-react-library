import React from 'react'
import Menu from './Menu'
import Menu_Item from './Menu_Item'
import Menu_SubMenu from './Menu_SubMenu'
import Menu_ItemGroup from './Menu_ItemGroup'
import { AiOutlineMail, AiFillSetting, AiOutlineAppstore } from 'react-icons/ai'



const items = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <AiOutlineMail />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AiOutlineAppstore />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <AiFillSetting />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];
  

const Index = () => {

    const [current, setCurrent] = React.useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <>

            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} value = {current} />
         
        </>
    )
}

export default Index
