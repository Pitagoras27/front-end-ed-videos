import React from 'react';
import Header from '../components/Header/Header';
import Seach from '../components/Search/Search';
import Categories from '../components/Categories/Categories';
import Carousel from '../components/Carousel/Carousel';
import CarouselItem from '../components/CarouselItem/CarouselItem';
import Footer from '../components/Footer/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div>
    <Header />
    <Seach />
    <Categories>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
