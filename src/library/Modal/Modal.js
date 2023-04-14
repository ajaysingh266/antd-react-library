import ReactDOM from "react-dom";
import Button from '../Button/Button'
import {AiOutlineClose} from 'react-icons/ai'
import './Modal.css'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <>
            {props.visible ?
                <div className='modal_container'  >
                    <div className='modal' >
                        <header className='modal_header'>
                            <h1 className='modal_header_title'>{props.title}</h1>
                            <button className='close' ><AiOutlineClose/></button>
                        </header>
                        <main className='modal_content'>{props.children}</main>
                        <footer className='modal_footer'>
                            {/* <Button className='modal_cancel'  onClick={()=> props.onCancel()}>Cancel</Button>
                            <Button type="primary" className='submit' onClick={()=> props.onOk()}>ok</Button> */}
                            {props.footer.map((item)=>{
                                return item 
                            })}
                        </footer>
                    </div>
                </div>
                : null
            }
        </>
        ,document.getElementsByTagName("body")[0]
    )
}

// const Modal =  (props)=>{
//     return ReactDOM.createPortal(<ModalComponent {...props}/>,document.getElementsByTagName("body")[0])
// }

export default Modal
