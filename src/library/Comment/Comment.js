import React from 'react'

const Comment = (props) => {
  console.log(props);
  return (
    <>
    
      <div className='wg-comment'>
        <div className='wg-comment-inner'>
          <div className='wg-comment-avatar'>
            <span className='wg-avatar wg-avatar-circle wg-avatar-image'>
              {props.avatar}
            </span>
          </div>
          <div className='wg-comment-content'>
            <div className='wg-comment-content-author'>
              <span className='wg-comment-content-author-name'>
                <a>{props.author}</a>
              </span>
            </div>
            <div className='wg-comment-content-detail'>
              <p>{props.content}</p>
            </div>
            <ul className='wg-comment-actions'>
              <li>
                <span>                 
                    {props.actions}                  
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment
