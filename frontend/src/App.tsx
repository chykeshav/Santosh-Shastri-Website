import React from 'react';
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

function App() {
  const path = window.location.pathname.replace(/\/+$/, '');

  if (path === '/admin') return <AdminDashboard />;
  if (path === '/about-us') return <AboutUs />;
  if (path === '/privacy-policy') return <PrivacyPolicy />;
  if (path === '/terms-and-conditions') return <Terms />;
  if (path === '/contact-us') return <ContactUs />;

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <BookingForm />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
