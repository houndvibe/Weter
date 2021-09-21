import React from 'react';
import '../css/PaymentMethodCard.css'

const PaymentMethodCard = ({ title, imgs }) => {
  return (
    <div className='pmcard'>
      <div className='pmcard__title'>
        {title}
      </div>
      <div className='pmcard__imgs'>
        {imgs && imgs.map((img, index) => {
          return (
            <img
              className={imgs.length > 1 ? 'imgS' : 'imgL'}
              src={img}
              alt='img'
              key={index * Math.random()}
            />
          )
        })}
      </div>
    </div>
  );
}

export default PaymentMethodCard;