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
  const isReservation = location.pathname === '/reservation';
  const isEvents = location.pathname === '/events';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToContact = () => navigate('/contact');
  const goToHome = () => navigate('/');
  const goToWhatsOn = () => navigate('/whatson');
  const goToReservation = () => navigate('/reservation');
  const goToEvents = () => navigate('/events');
  const goToMenu = () => navigate('/menu');
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsOnLabel = language === 'en' ? "What's On" : "A l'Affiche";

  const renderHeader = () => {
    if (isContact || isWhatsOn || isReservation || isEvents) {
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
                  {(isWhatsOn || isEvents) && (
                    <button className="contact-header__enquiry" onClick={goToContact}>
                      {language === 'en' ? 'Function Enquiry' : 'Demande de Fonction'}
                    </button>
                  )}
                  <button className="contact-header__book" onClick={goToReservation}>
                    {language === 'en' ? 'Book a table' : 'Reserver'}
                  </button>
                  <button className="navbar__hamburger contact-header__hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                    <span /><span /><span />
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
                        <li onClick={goToMenu}>{t.nav.menuItem}</li>
                      </ul>
                    )}
                  </li>
                  <li onClick={goToWhatsOn} className={isWhatsOn ? 'nav-active' : ''}>{whatsOnLabel}</li>
                  <li onClick={goToEvents} className={isEvents ? 'nav-active' : ''}>{t.nav.events}</li>
                  <li onClick={goToReservation} className={isReservation ? 'nav-active' : ''}>{t.nav.reservations}</li>
                  <li onClick={goToContact} className={isContact ? 'nav-active' : ''}>{t.nav.contact}</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="contact-header__scrolled-nav">
              <ul className="navbar__links">
                <li onClick={goToHome}>{t.nav.eatDrink}</li>
                <li onClick={goToWhatsOn}>{whatsOnLabel}</li>
                <li onClick={goToEvents}>{t.nav.events}</li>
                <li onClick={goToReservation}>{t.nav.reservations}</li>
                <li onClick={goToContact}>{t.nav.contact}</li>
              </ul>
              <div className="navbar__scrolled-right">
                <button className="navbar__book" onClick={goToReservation}>
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
        {scrolled ? (
          /* ── SCROLLED: compact single row ── */
          <div className="navbar__scrolled-inner">
            <ul className="navbar__links navbar__links--scrolled">
              <li className="navbar__item navbar__item--dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>{t.nav.eatDrink} <span className="chevron">&#8964;</span></span>
                {dropdownOpen && (
                  <ul className="navbar__dropdown">
                    <li onClick={goToMenu}>{t.nav.menuItem}</li>
                  </ul>
                )}
              </li>
              <li onClick={goToWhatsOn}>{whatsOnLabel}</li>
              <li onClick={goToEvents}>{t.nav.events}</li>
              <li onClick={goToReservation}>{t.nav.reservations}</li>
              <li onClick={goToContact}>{t.nav.contact}</li>
            </ul>
            <div className="navbar__scrolled-right">
              <button className="navbar__book navbar__book--sm" onClick={goToReservation}>
                {language === 'en' ? 'Book a Table' : 'Réserver'}
              </button>
              <button className="navbar__hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        ) : (
          /* ── HERO: 1-row layout ── */
          <div className="navbar__hero-inner">
            <div className="navbar__hero-left" onClick={goToHome}>
              <span className="navbar__hero-logo">KOCHIN KITCHEN</span>
            </div>
            <ul className="navbar__links navbar__links--hero">
              <li className="navbar__item navbar__item--dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span>{t.nav.eatDrink} <span className="chevron">&#8964;</span></span>
                {dropdownOpen && (
                  <ul className="navbar__dropdown">
                    <li onClick={goToMenu}>{t.nav.menuItem}</li>
                  </ul>
                )}
              </li>
              <li onClick={goToWhatsOn}>{whatsOnLabel}</li>
              <li onClick={goToEvents}>{t.nav.events}</li>
              <li onClick={goToReservation}>{t.nav.reservations}</li>
              <li onClick={goToContact}>{t.nav.contact}</li>
            </ul>
            <div className="navbar__hero-right">
              <button className="navbar__lang navbar__lang--desktop" onClick={toggleLanguage}>
                <span className={language === 'fr' ? 'navbar__lang--active' : ''}>FR</span>
                <span className="navbar__lang-sep">/</span>
                <span className={language === 'en' ? 'navbar__lang--active' : ''}>EN</span>
              </button>
              <button className="navbar__book navbar__book--sm" onClick={goToReservation}>
                {language === 'en' ? 'Book a Table' : 'Réserver'}
              </button>
              {/* Mobile controls */}
              <button className="navbar__lang navbar__lang--mobile-inline" onClick={toggleLanguage}>
                <span className={language === 'fr' ? 'navbar__lang--active' : ''}>FR</span>
                <span className="navbar__lang-sep">/</span>
                <span className={language === 'en' ? 'navbar__lang--active' : ''}>EN</span>
              </button>
              <button className="navbar__hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  };

  return (
    <>
      {renderHeader()}

      {/* ── Mobile overlay menu ── */}
      <div className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-top">
          <span className="navbar__mobile-logo" onClick={() => { goToHome(); setMobileOpen(false); }}>
            KOCHIN KITCHEN
          </span>
        </div>

        <ul className="navbar__mobile-links">
          <li onClick={() => { goToMenu(); setMobileOpen(false); }}>{t.nav.eatDrink}</li>
          <li onClick={() => { goToWhatsOn(); setMobileOpen(false); }}>{whatsOnLabel}</li>
          <li onClick={() => { goToEvents(); setMobileOpen(false); }}>{t.nav.events}</li>
          <li onClick={() => { goToReservation(); setMobileOpen(false); }}>{t.nav.reservations}</li>
          <li onClick={() => { goToContact(); setMobileOpen(false); }}>{t.nav.contact}</li>
        </ul>

        <div className="navbar__mobile-book">
          <button onClick={() => { goToReservation(); setMobileOpen(false); }}>
            {language === 'en' ? 'Book a Table' : 'Réserver une Table'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;