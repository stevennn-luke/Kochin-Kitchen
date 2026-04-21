import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer.tsx';
import './WhatsOnPage.css';

const weeklyCards = [
    { img: 'event1.png', title: 'Long Lunch', sub: 'Weekly special', color: '#4a8c8c' },
    { img: 'event2.png', title: 'Express Lunch', sub: '$22 special', color: '#2a5c5c' },
    { img: 'event3.png', title: 'Happy Hour', sub: 'Drinks & bites', color: '#5a2a3a' },
];

const upcomingCards = [
    { img: 'upcoming1.png', title: "Mother's Day", date: 'Sunday 11th May', desc: 'Spoil Mum with a special dining experience this Mother\'s Day!' },
];

const WhatsOnPage = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const trackRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!trackRef.current || !barRef.current) return;
        const el = trackRef.current;
        const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
        barRef.current.style.width = `${progress * 100}%`;
    };

    const labels = {
        en: { weekly: 'Weekly Specials', upcoming: 'Upcoming Events', readMore: 'Read More', enquiry: 'Function Enquiry' },
        fr: { weekly: 'Spéciaux de la Semaine', upcoming: 'Événements à Venir', readMore: 'En Savoir Plus', enquiry: 'Demande de Fonction' },
    };
    const t = labels[language];

    return (
        <>
            {/* Page header — same style as contact */}
            <header className="whatson-header">
                <div className="whatson-header__top">
                    <div className="whatson-header__left">
                        <div className="whatson-header__socials">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="https://x.com/kochinkitchen?lang=en" target="_blank" rel="noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.594l4.254 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="whatson-header__center" onClick={() => navigate('/')}>
                        <span className="whatson-header__logo">KOCHIN KITCHEN</span>
                    </div>
                    <div className="whatson-header__right">
                        <button className="whatson-header__enquiry" onClick={() => navigate('/contact')}>{t.enquiry}</button>
                        <button className="whatson-header__book" onClick={() => navigate('/contact')}>
                            {language === 'en' ? 'Book a table' : 'Réserver'}
                        </button>
                    </div>
                </div>
                <div className="whatson-header__nav">
                    <ul className="whatson-header__links">
                        <li onClick={() => navigate('/')}>{language === 'en' ? 'Eat & Drink' : 'Manger & Boire'}</li>
                        <li className="whatson-header__links--active">{language === 'en' ? 'What\'s On' : 'À l\'Affiche'}</li>
                        <li onClick={() => navigate('/contact')}>{language === 'en' ? 'Events & Catering' : 'Événements'}</li>
                        <li onClick={() => navigate('/contact')}>{language === 'en' ? 'Reservations' : 'Réservations'}</li>
                        <li onClick={() => navigate('/contact')}>{language === 'en' ? 'Contact' : 'Contact'}</li>
                    </ul>
                </div>
            </header>

            {/* Weekly Specials */}
            <section className="whatsonpage">
                <h2 className="whatsonpage__heading">{t.weekly}</h2>
                <div className="whatsonpage__track" ref={trackRef} onScroll={handleScroll}>
                    {weeklyCards.map((card, i) => (
                        <div className="whatsonpage__card" key={i}>
                            <div className="whatsonpage__card-img">
                                <div className="whatsonpage__card-placeholder">{card.img}</div>
                            </div>
                            <div className="whatsonpage__card-banner" style={{ background: card.color }}>
                                <p className="whatsonpage__card-title">{card.title}</p>
                                <p className="whatsonpage__card-sub">{card.sub}</p>
                            </div>
                            <p className="whatsonpage__card-label">{card.title}</p>
                        </div>
                    ))}
                </div>
                <div className="whatsonpage__progress-track">
                    <div className="whatsonpage__progress-bar" ref={barRef} />
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="whatsonpage whatsonpage--upcoming">
                <h2 className="whatsonpage__heading">{t.upcoming}</h2>
                {upcomingCards.map((card, i) => (
                    <div className="whatsonpage__event-row" key={i}>
                        <div className="whatsonpage__event-img">
                            <div className="whatsonpage__card-placeholder">{card.img}</div>
                        </div>
                        <div className="whatsonpage__event-content">
                            <h3 className="whatsonpage__event-title">{card.title}</h3>
                            <p className="whatsonpage__event-date">{card.date}</p>
                            <p className="whatsonpage__event-desc">{card.desc}</p>
                            <button className="whatsonpage__event-btn">{t.readMore}</button>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </>
    );
};

export default WhatsOnPage;