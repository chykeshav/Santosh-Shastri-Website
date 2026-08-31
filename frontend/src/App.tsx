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

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error caught by ErrorBoundary:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-cream text-maroon text-center">
          <h1 className="text-3xl font-bold font-serif mb-2">Santosh Shastri Services</h1>
          <p className="text-gray-600 mb-4">Something went wrong. Please refresh the page.</p>
          <button onClick={() => window.location.reload()} className="btn-3d px-6 py-2">
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '');

  if (path === '/admin') return <AdminDashboard />;

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
