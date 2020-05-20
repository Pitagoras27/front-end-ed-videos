import React from 'react';
import Seach from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/CarouselItem/CarouselItem';
import initialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalStates';
const Home = () => {
  const dataApi = initialState(API);
  const { mylist, trends, originals } = dataApi;
  return (
    <>
      <Seach />
      {
        mylist.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
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

export default Home;
