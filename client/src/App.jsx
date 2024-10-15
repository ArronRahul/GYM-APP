import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  Navbar,
  Hero,
  WorkoutSession,
  Gallery,
  Pricing,
  Contact,
  BMICal,
  Footer
} from './components';
import './App.css';  

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMICal />
      <Footer />
      
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
