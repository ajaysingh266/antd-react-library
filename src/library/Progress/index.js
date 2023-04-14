import React from 'react';
import WeboProgress from './progress';
import './progress.css'
import WeboDynamic from './Dynamicprogress';

const Index = () => {
  return (
    <>
      <div className='ml-8 '>
        <label className='' >Downloading Progress </label>
        <span className='bg-black '>
          <WeboProgress percent={30} />
        </span>
        <WeboProgress percent={50} size='small' />

        <div className='flex items-center'>
          <WeboProgress percent={70} size='large' status="exception" showInfo={false} />
          <span className='circle  square'><i class="fa-solid fa-circle-xmark"></i></span></div>

        <div className='flex items-center'>
          <WeboProgress percent={100} status='active' showInfo={false} />
          <span className='circle  square'><i class="fa-solid  fa-circle-check"></i></span>
        </div>

      </div>
      <WeboDynamic />

    </>
  )
}

export default Index
