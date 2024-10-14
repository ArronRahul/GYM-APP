import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import { ToastContainer } from 'react-toastify';

const Hero = lazy(() => import('./components/Hero'));
const WorkoutSession = lazy(() => import('./components/WorkoutSession'));
const Gallery = lazy(() => import('./components/Gallery'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
const BMICal = lazy(() => import('./components/BMICal'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/workouts" element={<WorkoutSession />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bmi-calculator" element={<BMICal />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer theme='dark' position='top-center' />
    </Router>
  );
};

export default App;
