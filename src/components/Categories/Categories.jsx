import React from 'react';
import '../../assets/styles/components/Categories.scss';

const Categories = ({ children }) => (
  <div className='categories'>
    <h3 className='categories__title'>
      {children}
    </h3>
  </div>
);

export default Categories;
