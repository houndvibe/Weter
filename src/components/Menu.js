import React from 'react';
import '../css/Menu.css'
import MenuItem from './MenuItem';

const Menu = (props) => {
  return (
    <div className='menu'>
      <MenuItem path={'/stock-payment'} title={'Купить доли'} />
      <MenuItem path={'/history'} title={'Мои инвестиции'} />
      <MenuItem path={'/payouts'} title={'Вывод средств'} />
    </div>
  );
}

export default Menu;