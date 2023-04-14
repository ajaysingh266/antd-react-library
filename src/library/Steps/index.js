import React, { useState } from 'react'
import Steps from './Steps'
import Step from './Step'
import Button from '../Button/index'

const Index = () => {
    // const titleArray = ["Finished", "In Progress", "Waiting"];
    // const [currentStep, updateCurrentStep] = useState(1)
    // const updateStep = (step) => {
    //     updateCurrentStep(step)
    // }
    return (
        <>
            {/* <Steps titleArray={titleArray} currentStep={currentStep} updateCurrentStep={updateCurrentStep}> 
            <p>selected step:{currentStep}</p>
            <Button type="primary" onClick={() => updateStep(currentStep - 1)}>Previous Step</Button>
            <Button type="primary" onClick={() => updateStep(currentStep + 1)}>Next Step</Button> */}
            <Steps>
                <Step title="Finished"

                    description="This is a description." dot={<span role="img" aria-label='check' className='anticon anticon-check ant-steps-finish-icon'>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                    </span>} >

                </Step>
                <Step title="In Progress" dot={2} subTitle="Left 00:00:08" description="This is a description." > </Step>
                <Step title="Waiting" dot={3} description="This is a description." />
            </Steps>
            <div className=' mt-48'>
                <Steps size={""}>
                    <Step title="Finished"

                        description="This is a description." dot={<span role="img" aria-label='check' className='anticon anticon-check ant-steps-finish-icon'>
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="check" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg>
                        </span>} >

                    </Step>
                    <Step title="In Progress" dot={2} subTitle="Left 00:00:08" description="This is a description." > </Step>
                    <Step title="Waiting" dot={3} description="This is a description." />
                </Steps>
            </div>
            {/* <div className=' mt-24  '>
                <Steps current={1} percent={60}>
                    <Step title="Login"

                        icon={<i class="fa-solid fa-user text-3xl  "></i>} >


                    </Step>
                    <Step title="Verification" icon={<i class="fa-solid fa-building-user text-3xl " ></i>}  > </Step>
                    <Step title="Pay" icon={<i class="fa-solid fa-circle-notch text-3xl  "></i>} />
                    <Step title="Done" icon={<i class="fa-solid fa-face-smile-beam text-3xl "></i>} />


                </Steps>
            </div> */}
        </>
    )
}

export default Index
