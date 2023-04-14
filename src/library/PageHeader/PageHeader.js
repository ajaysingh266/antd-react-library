import React from 'react'
import Descriptions from '../Descriptions/Descriptions'
import Description_items from '../Descriptions/Description_items'
import {BiArrowBack} from 'react-icons/bi'


const PageHeader = (props) => {
    return (
        <>
            <div className=' wg_pageheader site_page_header'>
                <div className='wg_pageheader_heading'>
                    <div className='wg_pageheader_heading_left'>
                        <div className='wg_pageheader_back'>
                            <div className='wg_pageheader_back_button'>{props.onBack}
                                <BiArrowBack/>
                            </div>
                        </div>
                        <span className='wg_pageheader_heading_title'>{props.title}</span>
                        <span className='wg_pageheader_heading_sub_title'>{props.subTitle}</span>
                        

                    </div>
                    <span className='wg-pageheader_heading_extra'>{props.extra}</span>
                </div>
                
                        <Descriptions  column={3}>
                            <Description_items label="Created">Lili Qu</Description_items>
                            <Description_items label="Association">
                                <a>421421</a>
                            </Description_items>
                            <Description_items label="Creation Time">2017-01-10</Description_items>
                            <Description_items label="Effective Time">2017-10-10</Description_items>
                            <Description_items label="Remarks">
                                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                            </Description_items>
                        </Descriptions>,
            </div>

        </>
    )
}

export default PageHeader
