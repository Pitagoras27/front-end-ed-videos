import React from 'react';
import '../../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src='https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      alt='People'
    />
    <div className='carousel-item__details'>
      <div>
        <img src='../assets/play-icon.png' alt='Play' />
        <img src='../assets/plus-icon.png' alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>
        Título descriptivo
      </p>
      <p className='carousel-item__details--subtitle'>
        2019 16+ 114 minutos
      </p>
    </div>
  </div>
);

export default CarouselItem;