// import { Button, Statistic } from 'antd';
import React from 'react';
import Webostatistics from './Statistics'
import Webobutton from '../Button/Button'
import './statistics.css'
import {AiOutlineLike} from 'react-icons/ai'

const App = () => (
  <>
    <Webostatistics title="Active Users" value={112893} prefix={<AiOutlineLike />} />
    <Webostatistics title="Account Balance (CNY)" value={112893}  suffix="/ 100" />
    <Webobutton
      style={{
        marginTop: 16,
      }}
      type="primary"
    >
      Recharge
    </Webobutton>
    {/* <Webostatistics title="Active Users" value={112893} loading /> */}
  </>
);

export default App;