import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
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