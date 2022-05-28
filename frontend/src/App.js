import React from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import RecommendedMovies from './Components/RecommendedMovie/RecommendedMovies';
import Footer from './Components/Footer/Footer';
import AboutRS from './Components/AboutRS/AboutRS';

const App = () => {
  
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutRS />
      <RecommendedMovies />
      <Footer />
    </div>
  );
}

export default App;
