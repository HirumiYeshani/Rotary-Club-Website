import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import History from "./Pages/HistoryPage";
import Projects from "./Pages/Projects";
import Calendar from "./Pages/CalendarPage";
import ContactPage from "./Pages/ContactUs";
import JoinUs from "./Pages/Join";
import Leadership from "./Pages/LeadershipPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/leadership" element={<Leadership/>}/>
        <Route path="/projects1" element={<Projects />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/join" element={<JoinUs />} /> 
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;