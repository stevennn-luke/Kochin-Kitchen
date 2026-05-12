import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import WhatsOn from './components/WhatsOn/WhatsOn'
import Restaurant from './components/Restaurant/Restaurant';
import AboutUs from './components/AboutUs/AboutUs';
import Functions from './components/Functions/Functions';
import Testimonial from './components/Testimonial/Testimonial';
import Hours from './components/Hours/Hours';
import FoodGallery from './components/FoodGallery/FoodGallery';
import Delivery from './components/Delivery/Delivery';
import Contact from './components/Contact/Contact';
import Reservation from './components/Reservation/Reservation';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import WhatsOnPage from './components/WhatsOn/WhatsOnPage';
import Menu from './components/Menu/Menu';
import LegalPage from './components/Legal/LegalPage';
import './App.css';

const HomePage = () => (
  <div>
    <Hero />
    <About />
    <WhatsOn />
    <Restaurant />
    <AboutUs />
    <Functions />
    <Hours />
    <FoodGallery />
    <Delivery />
    <Testimonial />
    <Footer />
  </div>
);

const ContactPage = () => (
  <div>
    <Contact />
    <Footer />
  </div>
);

const ReservationPage = () => (
  <div>
    <Reservation />
    <Footer />
  </div>
);

const EventsPage = () => (
  <div>
    <Events />
    <Footer />
  </div>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/whatson" element={<WhatsOnPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/responsible-service" element={<LegalPage type="service" />} />
      </Routes>
    </div>
  );
};

export default App;