import React from 'react';
import './style.css';

const Ad = ({children}) => {
  return (
    <div className='ad-container'>
        <div className='ad'>
          {children}
        </div>
    </div>
  )
}

export default Ad