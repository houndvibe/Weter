import React from 'react';
import '../css/UserStats.css';
import StatItem from './StatItem'

const UserStats = (props) => {
  return (
    <div className='userstats'>
      <div className='userstats__title title'>
        Статистика пользователя
      </div>
      <div className='userstats__info'>
        <StatItem title={'qwe'} number={'500'} subtitle={'долей'} />
        <StatItem title={'баланс на счете'} number={'0.00'} subtitle={'рублей'} />
        <StatItem title={'структура доходов'} number={'0(0)'} subtitle={'участников'} />
        <StatItem title={'савокупный доход'} number={'0'} subtitle={'рублей'} />
      </div>

    </div>
  );
}

export default UserStats;