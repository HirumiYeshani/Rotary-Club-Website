import { Contact } from 'lucide-react';
import React from 'react';
import Navbar from '../Components/Navbar'; 
import ContactComponent from '../Components/Contact'; 
import Footer from '../Components/Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <ContactComponent /> 
      <Footer />
    </div>
  );
};

export default ContactPage;