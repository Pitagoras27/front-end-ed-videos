import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import setFavorite from '../../actions';
import '../../assets/styles/components/CarouselItem.scss';
import playIcon from '../../assets/static/play-icon.png';
import plusIcon from '../../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { cover, description, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover, description, year, contentRating, duration,
    });
  };

  return (
    <div className='carousel-item'>
      <img
        className='carousel-item__img'
        src={cover}
        alt='People'
      />
      <div className='carousel-item__details'>
        <div>
          <img src={playIcon} alt='Play' />
          <img
            src={plusIcon}
            alt='Plus'
            onClick={handleSetFavorite}
          />
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
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

CarouselItem.defaultProps = {
  cover: 'image',
  description: 'description',
  year: 0,
  contentRating: '+',
  duration: 0,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
