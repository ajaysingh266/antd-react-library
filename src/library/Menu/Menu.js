import React from 'react'
import './index.css'
import Menu_Item from './Menu_Item'
import Menu_SubMenu from './Menu_SubMenu'

const Menu = (props) => {
    const [change, setChange] = React.useState(props.selectedKeys)
    const onChange = (e) => {
        console.log("e.key",e.key);
        if (props.onClick)
            props.onClick(e)
        setChange(e.target.change)
    }
    console.log("event", change);
    console.log("selected", props.selectedKeys[0]);

    return (
        <div className={props.mode === 'horizontal' ? 'flex items-center justify-evenly' : ''} >
            {
                props.items.map(
                    (element, index) => {
                        if (element.children) {
                            return <Menu_SubMenu item={element} key={index} selectedKey={props.selectedKeys[0]} onClick={onChange} />
                        }
                        else {
                            return <Menu_Item item={element}  />
                        }
                    }
                )
            }
        </div>
    )
}

export default Menu
