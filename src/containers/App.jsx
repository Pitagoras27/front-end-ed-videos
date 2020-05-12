import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Seach from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/CarouselItem/CarouselItem';
import Footer from '../components/Footer/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/initalStates')
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  const { mylist, trends, originals } = videos;
  return (
    <div>
      <Header />
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

      <Footer />
    </div>
  );
};

export default App;
