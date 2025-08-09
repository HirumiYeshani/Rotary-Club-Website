import { Contact } from 'lucide-react';
import React from 'react';
import Navbar from '../Components/Navbar'; // Added import
import ContactComponent from '../Components/Contact'; // Renamed import
import Footer from '../components/Footer';

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