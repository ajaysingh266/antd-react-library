import React from 'react'
// import message from '../Message/Mesage'
import Webopopconfirm from './Popconfirm'
import Webobuttton from '../Button/Button'

const Index = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
  return (
    <>
      <div className='mt-2 ml-4'>
      <Webopopconfirm
      title="Title"
      visible={visible}
      onConfirm={handleOk}
      okButtonProps={{
        loading: confirmLoading,
      }}
      onCancel={handleCancel}
    >
      <Webobuttton type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Webobuttton>
    </Webopopconfirm>
      </div>
    </>
  )
}

export default Index
