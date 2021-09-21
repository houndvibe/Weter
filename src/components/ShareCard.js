import React from 'react';
import '../css/ShareCard.css'

const ShareCard = (props) => {
  return (
    <div className='sharecard'>

      <div className='sharecard__title title'>
        {props.count ? props.count + ' долей' : 'больше'}
      </div>

      {!props.count && 'посмотреть выгодные предложения'}


      {props.cost
        &&
        <div >
          $ {props.cost} за долю
      </div>
      }

      {props.perMonth
        &&
        <div >
          $ {props.perMonth}/мес
      </div>
      }

      {props.perOne
        &&
        <div>
          $ {props.perOne} за долю
        </div>
      }

      {props.extra
        &&
        <div>
          {props.extra}
        </div>
      }

      {props.perMonth
        &&
        <div className='sharecard__extra'>
          на 10 месяцев
       </div>
      }

    </div>
  );
}

export default ShareCard;