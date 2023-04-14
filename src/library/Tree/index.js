import React from 'react';
import WeboTree from './Tree'
import Tree from 'antd/lib/tree';

const Index = () => {
    const treeData = [
        {
            title: '0-0',
            key: '0-0',
            children: [
                {
                    title: '0-0-0',
                    key: '0-0-0',
                    children: [
                        {
                            title: '0-0-0-0',
                            key: '0-0-0-0',
                        },
                        {
                            title: '0-0-0-1',
                            key: '0-0-0-1',
                        },
                        {
                            title: '0-0-0-2',
                            key: '0-0-0-2',
                        },
                    ],
                },
                {
                    title: '0-0-1',
                    key: '0-0-1',
                    children: [
                        {
                            title: '0-0-1-0',
                            key: '0-0-1-0',
                        },
                        {
                            title: '0-0-1-1',
                            key: '0-0-1-1',
                        },
                        {
                            title: '0-0-1-2',
                            key: '0-0-1-2',
                        },
                    ],
                },
                {
                    title: '0-0-2',
                    key: '0-0-2',
                },
            ],
        },
        {
            title: '0-1',
            key: '0-1',
            children: [
                {
                    title: '0-1-0-0',
                    key: '0-1-0-0',
                },
                {
                    title: '0-1-0-1',
                    key: '0-1-0-1',
                },
                {
                    title: '0-1-0-2',
                    key: '0-1-0-2',
                },
            ],
        },
        {
            title: '0-2',
            key: '0-2',
        },
    ];


    const [checked, setChecked] = React.useState([])
    console.log(checked)




    return (
        <div>
            <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }}>
                    <Tree treeData={treeData} checkable onCheck={setChecked} defaultCheckedKeys={['0-0-0', '0-0-1']} />
                </div>
                <div style={{ flex: 1 }}>
                    <WeboTree treeData={treeData} checkable onCheck={setChecked} defaultCheckedKeys={['0-0-0', '0-0-1']} />
                </div>
            </div>
        </div>
    )
}

export default Index
