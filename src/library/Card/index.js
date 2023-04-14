import Card from './Card'
import React, { useState } from 'react';

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];
const contentList = {
  tab1: <p>content 1</p>,
  tab2: <p>content 2</p>,
};


const App = () => {
  const [activeTabKey, setActiveTabKey] = useState('tab1');

  const handleChange = (key) => {
    console.log("index", key);
    setActiveTabKey(key);
  };

 

  return (
    <>
      

      <Card
        style={{
          width: '100%',
        }}
        title="Card title"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          handleChange(key);
        }}
      >
        {contentList[activeTabKey]}
      </Card>
      
    </>
  );
};

export default App;