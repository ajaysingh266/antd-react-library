import React from 'react'
import './index.css'
import Tabs from './Tabs'
import TabPane from './TabPane'
import {AiOutlineApple} from 'react-icons/ai'



const Index = (props) => {
    const [active, setActive] = useState(props.defaultActiveKey ? props.defaultActiveKey : props.children.length ? props.children[0].key : "");
    const handleChange = (key) => {
        setActive(key)
    }
    const activeContent = props.children.find(item => item.key === active);
    return (
        <div>
            <Tabs defaultActiveKey="3" >
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" disabled key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
                <TabPane tab="Tab 4" key="4" icon  = {<AiOutlineApple />}>
                    Content of Tab Pane 4
                </TabPane>
            </Tabs>
           
        </div>
    )
}
export default Index






