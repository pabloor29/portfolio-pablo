import React from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ContactForm from '../../../components/ContactForm';

function Contact() {
  return (
    <>
    <Navbar />
    <div className="bg-dots">
        <ContactForm />
    </div>
    <Footer />
    </>
  );
}

export default Contact