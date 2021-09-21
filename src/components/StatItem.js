import React from 'react';
import '../css/StatItem.css'

const StatItem = ({ title, number, subtitle }) => {
  return (
    <div className='statitem'>
      <div className='statitem__info'>
        <div className='statitem__title'>
          {title}
        </div>
        <div className='statitem__number'>
          {number}
        </div>
        <div className='statitem__subtitle'>
          {subtitle}
        </div>
      </div>
      <div className='statitem__button'>
        Узнать больше
      </div>
    </div>
  );
}

export default StatItem;