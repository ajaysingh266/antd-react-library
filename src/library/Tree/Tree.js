import React from 'react';

const Index = (props) => {

    const [checked, setChecked] = React.useState(props.defaultCheckedKeys ? props.defaultCheckedKeys : [])
    let check = props.checkedKeys ? props.checkedKeys : checked

    const updateChecked = (e) => {
        let temp;
        if (e.target.checked) {
            temp = [...check, e.target.name]
        } else {
            temp = check.filter(item => item !== e.target.name)
        }
        if (props.onCheck)
            props.onCheck(temp)
        setChecked(temp)
    }

    const treeItem = (data) => {
        return <div style={{marginLeft: "1rem"}}>
            {
                data.map((item1, index) => {
                    return <>
                        <div key={item1.key} className="text-blue-400">
                            {props.checkable ? <input type="checkbox" name={item1.key} onChange={updateChecked} checked={check.includes(item1.key)}/> : ""} {item1.title}
                        </div>
                        {
                            item1.children ? treeItem(item1.children) : ""
                        }
                    </>
                })
            }
        </div>
    }

    return (
        <>
            {treeItem(props.treeData)}
        </>
    );
};

export default Index;