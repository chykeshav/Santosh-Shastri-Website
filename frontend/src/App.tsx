import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import ContactUs from './components/ContactUs';
import Testimonials from './components/Testimonials';

function App() {
  const path = window.location.pathname.replace(/\/+$/, '');

  if (path === '/admin') return <AdminDashboard />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {path === '/about-us' ? <AboutUs /> :
       path === '/privacy-policy' ? <PrivacyPolicy /> :
       path === '/terms-and-conditions' ? <Terms /> :
       path === '/contact-us' ? <ContactUs /> :
       <>
         <Hero />
         <Services />
         <BookingForm />
         <Gallery />
         <Testimonials />
       </>}
       
      <Footer />
    </div>
  );
}

export default App;
