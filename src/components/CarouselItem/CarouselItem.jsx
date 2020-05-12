import React from 'react';
import '../../assets/styles/components/CarouselItem.scss';
import playIcon from '../../assets/static/play-icon.png';
import plusIcon from '../../assets/static/plus-icon.png';

const CarouselItem = ({ cover, description, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={cover}
      alt='People'
    />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='Play' />
        <img src={plusIcon} alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>
        {description}
      </p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
