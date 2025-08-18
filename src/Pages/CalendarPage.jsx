import React from 'react';
import Calendar from '../Components/Calendar';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function calendar() {
  return (
    <div className="CalendarPage">
    <Navbar/>
    <Calendar/>
    <Footer/>
    </div>
  );
}

export default calendar;