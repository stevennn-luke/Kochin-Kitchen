import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { en } from '../../translations/en';
import { fr } from '../../translations/fr';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = language === 'en' ? en : fr;
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isContact = location.pathname === '/contact';
  const isWhatsOn = location.pathname === '/whatson';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToContact = () => navigate('/contact');
  const goToHome = () => navigate('/');
  const goToWhatsOn = () => navigate('/whatson');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsOnLabel = language === 'en' ? "What's On" : "A l'Affiche";

  if (isContact || isWhatsOn) {
    return (
      <header className={`contact-header ${scrolled ? 'contact-header--scrolled' : ''}`}>
        {!scrolled ? (
          <div>
            <div className="contact-header__top">
              <div className="contact-header__left">
                <div className="contact-header__socials">
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="https://x.com/kochinkitchen" target="_blank" rel="noreferrer">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.594l4.254 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="contact-header__center" onClick={goToHome}>
                <span className="contact-header__logo">KOCHIN KITCHEN</span>
              </div>
              <div className="contact-header__right">
                {isWhatsOn && (
                  <button className="contact-header__enquiry" onClick={goToContact}>
                    {language === 'en' ? 'Function Enquiry' : 'Demande de Fonction'}
                  </button>
                )}
                <button className="contact-header__book" onClick={goToContact}>
                  {language === 'en' ? 'Book a table' : 'Reserver'}
                </button>
              </div>
            </div>
            <div className="contact-header__nav">
              <ul className="contact-header__links">
                <li
                  className="navbar__item--dropdown"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <span>{t.nav.eatDrink} <span className="chevron">&#8964;</span></span>
                  {dropdownOpen && (
                    <ul className="navbar__dropdown">
                      <li>{t.nav.menuItem}</li>
                    </ul>
                  )}
                </li>
                <li onClick={goToWhatsOn}>{whatsOnLabel}</li>
                <li onClick={goToHome}>{t.nav.events}</li>
                <li onClick={goToHome}>{t.nav.reservations}</li>
                <li onClick={goToContact}>{t.nav.contact}</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="contact-header__scrolled-nav">
            <ul className="navbar__links">
              <li onClick={goToHome}>{t.nav.eatDrink}</li>
              <li onClick={goToWhatsOn}>{whatsOnLabel}</li>
              <li onClick={goToHome}>{t.nav.events}</li>
              <li onClick={goToContact}>{t.nav.contact}</li>
            </ul>
            <div className="navbar__scrolled-right">
              <button className="navbar__book" onClick={goToContact}>
                {language === 'en' ? 'Book Now' : 'Reserver'}
              </button>
            </div>
          </div>
        )}
      </header>
    );
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--hero'}`}>
      <div className="navbar__inner">
        {scrolled ? (
          <div className="navbar__scrolled-inner">
            <ul className="navbar__links">
              <li
                className="navbar__item navbar__item--dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>{t.nav.eatDrink} <span className="chevron">&#8964;</span></span>
                {dropdownOpen && (
                  <ul className="navbar__dropdown">
                    <li>{t.nav.menuItem}</li>
                  </ul>
                )}
              </li>
              <li onClick={goToWhatsOn}>{whatsOnLabel}</li>
              <li onClick={() => scrollToSection('events')}>{t.nav.events}</li>
              <li onClick={() => scrollToSection('reservations')}>{t.nav.reservations}</li>
              <li onClick={goToContact}>{t.nav.contact}</li>
            </ul>
            <div className="navbar__scrolled-right">
              <button className="navbar__book" onClick={goToContact}>
                {language === 'en' ? 'Book Now' : 'Reserver'}
              </button>
            </div>
          </div>
        ) : (
          <div className="navbar__hero-inner">
            <ul className="navbar__links navbar__links--centered">
              <li
                className="navbar__item navbar__item--dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>{t.nav.eatDrink} <span className="chevron">&#8964;</span></span>
                {dropdownOpen && (
                  <ul className="navbar__dropdown">
                    <li>{t.nav.menuItem}</li>
                  </ul>
                )}
              </li>
              <li onClick={goToWhatsOn}>{whatsOnLabel}</li>
              <li onClick={() => scrollToSection('events')}>{t.nav.events}</li>
              <li onClick={() => scrollToSection('reservations')}>{t.nav.reservations}</li>
              <li onClick={goToContact}>{t.nav.contact}</li>
            </ul>
            <div className="navbar__right">
              <button className="navbar__lang" onClick={toggleLanguage}>
                <span className={language === 'en' ? 'navbar__lang--active' : ''}>EN</span>
                <span className="navbar__lang-sep">/</span>
                <span className={language === 'fr' ? 'navbar__lang--active' : ''}>FR</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;