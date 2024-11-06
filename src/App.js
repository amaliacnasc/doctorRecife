import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import MiddleCta from './components/middleCTA/MiddleCTA';
import About from './components/About/About'
import Doctors from './components/Doctors/Doctors';

const App = () => {
  console.log("App loaded");
  return (
    <div> {/* Removido o <view> */}
     <Navbar></Navbar>
     <Home></Home>
     <MiddleCta></MiddleCta>
     <About></About>
     <Doctors></Doctors>
    </div>
  );
};

export default App;
