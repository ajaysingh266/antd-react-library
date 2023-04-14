
import './App.css';
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Input from './library/Input/index'
import Sel from './library/select/index'
import Rad from './library/Radio/index'
import Check from './library/Checkbox/index'
import BackTop from './library/Backtop/index'
import Result from './library/Result/index'
import Button from './library/Button/index';
import Notification from './library/Notification/index'
import Rate from './library/Rate/index';
import Tooltip from './library/Tooltip/index';
import Carousel from './library/Carousel/index'
import Descriptions from './library/Descriptions/index'

import Modal from './library/Modal/index'
import Timeline from './library/Timeline/index'
import PageHeader from './library/PageHeader/index';
import Popover from './library/Popover/index'
import Pagintion from './library/Pagination/index'
import Progress from './library/Progress/index'
import Image from './library/Image/Index'
import Empty from './library/Empty/index'
import Dropdown from './library/Dropdown/index'
import Card from './library/Card/index'
import Breadcrum from './library/Breadcrumb/index'
import Alert from './library/Alert/index'
import Anchor from './library/Anchor/Anchor'
import Spin from './library/Spin/index'
import WeboSwitch from './library/Switch/Switch'
import Avatar from './library/Avatar/Index'
import Steps from './library/Steps/index'
import Dashboard from './components/dashboard'
import Message from './library/Message/index'
import Cascader from './library/Cascader/index'
import Weboswitch from './library/Switch/index'
import WeboTree from './library/Tree/index'
import WeboTabs from './library/Tabs/index'
import Collapse from './library/Collapse/index';
import Webosegment from './library/Segmented/index'
import Weboform from './library/Form/index'
import Webotag from './library/Tag/index'
import Webolist from './library/List/index'
import Webomessage from './library/Message/index'
import Webopopconfirm from './library/Popconfirm/index'
import Webostat from './library/Statistics/index'
import Webotree from './library/Tree/index'
import Comment from './library/Comment/index'
import message from './library/Message/Mesage'
import Webobutton from './library/Button/Button'
import Upload from './library/Upload/Upload'
import Webomenu from './library/Menu/index'


function App() {
    // const props = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //         authorization: 'authorization-text',
    //     },

    //     onChange(info) {
    //         console.log(info);
    //         // if (info.file.status !== 'uploading') {
    //         //     console.log(info.file, info.fileList);
    //         // }
    //         // if (info.file.status === 'done') {
    //         //     message.success(`${info.file.name} file uploaded successfully`);
    //         // } else if (info.file.status === 'error') {
    //         //     message.error(`${info.file.name} file upload failed.`);
    //         // }
    //     },
    // };
    return (
        // <div>
        //     <Upload {...props}>
        //         <Webobutton>Click to Upload</Webobutton>
        //     </Upload>
        // </div >
        <>
            {/* <Webomenu /> */}
            {/* <Dropdown /> */}
            {/* <Progress /> */}
            <Modal/>
        </>

    )
}


export default App;
