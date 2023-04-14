import React, { useEffect, useState } from 'react';
import Webolist from './List'
import Webolistitem from './Listitem'
import Weboavatar from '../Avatar/Avatar'
import Webolistitemmeta from './Listitemmeta'
import Webobutton from '../Button/Button'
// import { AiOutlineMessage, AiOutlineLike, AiOutlineStar } from 'react-icons/ai'SSSS
import './list.css'

const count = 3;
const DataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const Index = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(DataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);

  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
    fetch(DataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

        window.dispatchEvent(new Event('resize'));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Webobutton type="primary" onClick={onLoadMore}>Loading more</Webobutton>
      </div>
    ) : null;


  return (
    <>
      <div className='ml-2'>
      <Webolist
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <Webolistitem
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          {/* <Skeleton avatar title={false} loading={item.loading} active> */}
            <Webolistitemmeta
              avatar={<Weboavatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          {/* </Skeleton> */}
        </Webolistitem>
      )}
    />
      </div>
    </>
  )
}

export default Index
