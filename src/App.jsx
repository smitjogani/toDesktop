import React from 'react';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App