import React from 'react'
import { notification } from './Notification'
import Button from '../Button/Button'
import { AiOutlineClose, AiOutlineSmile } from 'react-icons/ai'



const Index = () => {

  
  const openNotificationWithIcon = (type) => {
    notification[type]({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
     setTimeout(() => {
        notification.close();
    }, 10000)
};


const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
            console.log('Notification Clicked!', openNotification);
        },
    });

    setTimeout(() => {
        notification.close();
    }, 10000)

};

 
  
  return (
    <div>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>

      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </div>
  )
}

export default Index