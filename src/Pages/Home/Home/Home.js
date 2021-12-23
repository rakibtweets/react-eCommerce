import React from 'react';
import Products from '../../Products/Products/Products';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeBanner />
      <Products />
    </div>
  );
};

export default Home;
