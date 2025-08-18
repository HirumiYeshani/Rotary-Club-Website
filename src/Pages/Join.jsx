import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import JoinComponent from '../Components/join';

function JoinPage() { 
  return (
    <div>
      <Navbar/>
      <JoinComponent/> 
      <Footer/>
    </div>
  );
}

export default JoinPage; 