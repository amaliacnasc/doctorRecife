import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import MiddleCta from './components/middleCTA/MiddleCTA';
import About from './components/About/About'
import Doctors from './components/Doctors/Doctors';
import ClientFeedback from './components/Feedback/Feedback';
import FooterDoc from './components/footer/FooterDoc';

const App = () => {
  console.log("App loaded");
  return (
    <div> {/* Removido o <view> */}
     <Navbar ></Navbar>
     <Home></Home>
     <MiddleCta></MiddleCta>
     <About></About>
     <Doctors></Doctors>
      <ClientFeedback></ClientFeedback>
      <FooterDoc></FooterDoc>
    </div>
  );
};

export default App;
