import React from 'react';
import '../css/ContentWrapper.css'
import UserStats from './UserStats';

const ContentWrapper = ({ routes }) => {
  return (
    <div className='content-wrapper'>
      <UserStats />
      <div className='content'>
        {routes}
      </div>
    </div>
  );
}

export default ContentWrapper;