import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './drawer.css'

const Drawer = (props) => {
    // const [visible, setVisible] = React.useState(false)
    const[place, setPlace]=React.useState()
  const [size, setSize] = React.useState();


   React.useEffect(()=>{
    switch(props.placement){
        case"top":
        setPlace('wg-placement-top')
        break;
        case"bottom":
        setPlace('wg-placement-bottom')
        break;
        case"left":
        setPlace('wg-placement-left')
        break;
        case"right":
        setPlace('wg-placement-right')
        break; 
    }
    switch(props.size){
        case"default":
        setSize('wg-size-default')
        break;

        case"large":
        setSize('wg-size-large')
        break;
        

    }
   }, [])
console.log("place", place);
console.log("props", props.placement);
console.log("size", size);

    return (
        <>
            {props.visible ?
                <div className={'wg-drawer-content-wrapper ' + place + size }>
                    <div onClick={props.onClose} className="wg-drawer-content">
                        <div className='wg-drawer-wrapper-body'>
                            <div className='wg-drawer-header' >
                                <div className='wg-drawer-header-title'  >
                                    <button className='wg-drawer-close'>
                                        <span className='wg-icon'>
                                            <AiOutlineCloseCircle />
                                        </span>
                                    </button>
                                    <div className='wg-drawer-title'>
                                        {props.title}
                                        
                                    </div>

                                </div>
                                
                            </div>
                            <div className='wg-drawer-body'>
                                    {props.children}
                                </div>
                        </div>

                    </div>
                </div>
                :
                " "

            }


        </>
    )
}

export default Drawer
