import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Events.css';

const spaces = [
    {
        name: 'The Spice Garden',
        capacity: 60,
        type: 'Semi-private',
        desc: 'Our signature dining room, draped in warm Kerala textiles and soft candlelight. Perfect for intimate celebrations, corporate dinners, and everything in between. A private bar and dedicated waitstaff ensure your guests are looked after throughout.',
    },
    {
        name: 'The Courtyard',
        capacity: 120,
        type: 'Exclusive',
        desc: 'An open-air courtyard surrounded by lush tropical greenery, inspired by the backwaters of Kerala. Ideal for cocktail receptions, large gatherings, and festive celebrations of up to 120 guests seated or 200 cocktail style.',
    },
    {
        name: 'The Malabar Room',
        capacity: 30,
        type: 'Private',
        desc: 'A fully enclosed private dining room for the most intimate of occasions. Hand-painted murals, curated Kerala artefacts, and a bespoke menu experience make this space truly one of a kind.',
    },
];

const Events = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();

    const t = {
        en: {
            heroTag: 'Events & Catering',
            heading: 'Events & Catering',
            body1: 'Kochin Kitchen is inspired by the rich communal traditions of Kerala, where every gathering is a celebration of food, family, and culture. Our unique riverside setting is the perfect backdrop for your next event.',
            body2: 'Each event space at Kochin Kitchen has been carefully designed to draw inspiration from traditional Kerala culture, where gatherings are about celebrating flavourful food in good company. Through an assortment of intimate dining rooms and an open-air courtyard, Kochin Kitchen has an overall capacity of 200 guests.',
            body3: 'With versatile spaces to suit everything from intimate celebrations to large-scale events, we have a space for every occasion.',
            body4: 'Enquire with us today!',
            enquire: 'Enquire Now',
            ourSpaces: 'Our Spaces',
            viewSpace: 'View Space',
            guests: 'guests',
        },
        fr: {
            heroTag: 'Événements & Traiteur',
            heading: 'Événements & Traiteur',
            body1: 'Kochin Kitchen s\'inspire des riches traditions communautaires du Kerala, où chaque rassemblement est une célébration de la nourriture, de la famille et de la culture.',
            body2: 'Chaque espace événementiel de Kochin Kitchen a été soigneusement conçu pour s\'inspirer de la culture traditionnelle du Kerala, où les rassemblements consistent à célébrer une nourriture savoureuse en bonne compagnie.',
            body3: 'Avec des espaces polyvalents adaptés à tout, des célébrations intimes aux événements à grande échelle, nous avons un espace pour chaque occasion.',
            body4: 'Renseignez-vous avec nous aujourd\'hui!',
            enquire: 'S\'informer',
            ourSpaces: 'Nos Espaces',
            viewSpace: 'Voir l\'Espace',
            guests: 'invités',
        },
    }[language];

    return (
        <div className="events-page">

            {/* ── HERO IMAGE RECTANGLE ── */}
            <div className="events-hero">
                <div className="events-hero__img-placeholder" />
            </div>

            {/* ── MAIN INFO ── */}
            <section className="events-info">
                <div className="events-info__inner">
                    <div className="events-info__left">
                        <h2 className="events-info__heading">{t.heading}</h2>
                    </div>
                    <div className="events-info__right">
                        <p className="events-info__body">{t.body1}</p>
                        <p className="events-info__body">{t.body2}</p>
                        <p className="events-info__body">{t.body3}</p>
                        <p className="events-info__body events-info__body--cta">{t.body4}</p>
                        <button
                            id="enquiry"
                            className="events-info__btn"
                            onClick={() => navigate('/contact')}
                        >
                            {t.enquire}
                        </button>
                    </div>
                </div>
            </section>

            {/* ── OUR SPACES ── */}
            <section className="events-spaces">
                <div className="events-spaces__inner">
                    <h2 className="events-spaces__heading">{t.ourSpaces}</h2>
                    <div className="events-spaces__grid">
                        {spaces.map((space, i) => (
                            <div className="events-spaces__card" key={i}>
                                <div className="events-spaces__card-img" />
                                <div className="events-spaces__card-body">
                                    <h3 className="events-spaces__card-name">{space.name}</h3>
                                    <div className="events-spaces__card-meta">
                                        <span className="events-spaces__card-meta-item">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                            {space.capacity} {t.guests}
                                        </span>
                                        <span className="events-spaces__card-meta-item">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
                                            </svg>
                                            {space.type}
                                        </span>
                                    </div>
                                    <p className="events-spaces__card-desc">{space.desc}</p>
                                    <button
                                        className="events-spaces__card-btn"
                                        onClick={() => navigate('/contact')}
                                    >
                                        {t.viewSpace}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Events;
