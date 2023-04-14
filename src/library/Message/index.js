import React from 'react'
import Webobutton from '../Button/Button'
import message from './Mesage'
import { RiErrorWarningFill } from "react-icons/ri"





const Index = () => {
    const openMessage = () => {
        message.open(
            
                'This is a normal message',
           
          
            
        );

        setTimeout(() => {
            message.close();
        }, 2000)
    };
    const success = () => {
        message.success('This is a success message');
        setTimeout(() => {
            message.close();
        }, 2000)
    };
    const error = () => {
        message.error('This is an error message');
        setTimeout(() => {
            message.close();
        }, 2000)
    };
    const warning = () => {

        message.warning({
            description: 'This is a warning message'
        });

        message.warning(
            'This is a warning message'
        );

        setTimeout(() => {
            message.close();
        }, 2000)
    };
    const succcess = () => {

        message.loading({
            description: 'Action in progress'
        });

        message.loading(
            'Action in progress'
        );

        setTimeout(() => {
            message.close();
        }, 2000)
    };
    return (
        <>
            <div className=' mt-36'>
                <Webobutton type="primary" onClick={openMessage}> Display normal message</Webobutton>
            </div>
            <div className='mt-10 '>
                <Webobutton onClick={success}> Success </Webobutton>
                <Webobutton onClick={error}> Error </Webobutton>
                <Webobutton onClick={warning}> Warning </Webobutton>
            </div>
            <div className=' mt-10 '>
                <Webobutton onClick={succcess}> Display a loading indicator </Webobutton>
            </div>
        </>
    )
}

export default Index;







