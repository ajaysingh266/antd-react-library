import React, { useState, useEffect } from 'react'
import SuccessSvg from '../../assets/success_svg.svg'
import WarningSvg from '../../assets/warning_svg.svg'
import ErrorSvg from '../../assets/error_svg.svg'



const Result = (props) => {
  const [icon, setIcon] = useState(SuccessSvg)

  useEffect(() => {
    switch (props.status) {
      case 'success':
        setIcon(<img className='wg-result-svg ' src={SuccessSvg} />)
        break;
      case 'warning':
        setIcon(<img className='wg-result-svg ' src={WarningSvg} />)
        break;
      case '403':
        setIcon(<img className='wg-result-svg ' src={ErrorSvg} />)
        break;
      case '404':
        setIcon(<img className='wg-result-svg ' src={ErrorSvg} />)
        break;
      case '500':
        setIcon(<img className='wg-result-svg ' src={ErrorSvg} />)
        break;
      case 'error':
        setIcon(<img className='wg-result-svg ' src={ErrorSvg} />)
        break;
    }

  }, [])

  
  return (
    <>
      <section className='wg-result-container' >
        <div>
          {icon}
        </div>
        <span className='wg-result-container-title'> {props.title}</span>
        <div className='wg-result-container-subtitle'>{props.subTitle} </div>

        <div className='wg-result-container-extra'>
          {props.extra.map(i => {
            return (i)
          })}
        </div>
      </section>
    </>
  )
}

export default Result
