import React from 'react';
import { connect } from 'react-redux';

import Seach from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/CarouselItem/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Seach />
      {
        mylist.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              {
                mylist.map((items, index) => (
                  <CarouselItem key={index} {...items} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }

      {
        trends.length > 0 && (
          <Categories title='tendencias'>
            <Carousel>
              {
                trends.map((items) => {
                  return (
                    <CarouselItem
                      key={items.id}
                      cover={items.cover}
                      description={items.description}
                      year={items.year}
                      contentRating={items.contentRating}
                      duration={items.duration}
                    />
                  );
                })
              }
            </Carousel>
          </Categories>
        )
      }

      {
        originals.length > 0 && (
          <Categories title='originales'>
            <Carousel>
              {
                originals.map((items) => (
                  <CarouselItem key={items.id} {...items} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  mylist: state.mylist,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
