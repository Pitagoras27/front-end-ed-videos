import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Seach from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/CarouselItem/CarouselItem';
import Footer from '../components/Footer/Footer';
import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalStates')
      .then(res => res.json())
      .then(data => setVideos(data));
  }, []);

  console.log(videos);

  return (
    <div>
      <Header />
      <Seach />
      <Categories title='Mi Lista'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='tendencias'>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title='originales'>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
