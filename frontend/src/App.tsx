import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import AdminDashboard from './components/AdminDashboard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
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
