import React from 'react'
import WeboPagination from './Pagination'
import { Pagination } from 'antd';

const Index = () => {



    return (
        <>
            <Pagination
                defaultCurrent={1}
                total={100}
            />;
            <WeboPagination
                defaultCurrent={1}
                total={100}
            />

            {/* <Pagination defaultCurrent={6} total={500} />
            <WeboPagination defaultCurrent={6} total={500} /> */}



        </>
    )
}

export default Index


