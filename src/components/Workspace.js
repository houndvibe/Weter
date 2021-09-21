import React from 'react';
import '../css/Workspace.css'
import ContentWrapper from './ContentWrapper';
import Menu from './Menu';

const Workspace = ({ routes }) => {
  return (
    <div className='workspace'>
      <Menu />
      <ContentWrapper routes={routes} />
    </div>
  );
}

export default Workspace;