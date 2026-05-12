import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import './Testimonial.css';

const Testimonial = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const reviews = {
        en: [
            {
                quote: '"...As for the other mouth-watering dishes at Kochin Kitchen, I wouldn\'t change a single spicy thing."',
                author: 'Peter Hum, Ottawa Citizen',
            },
            {
                quote: '"Kochin Kitchen is a gem — every dish is bursting with authentic Kerala flavour, warm spices, and genuine love for food."',
                author: 'Sarah K., Google Reviews',
            },
            {
                quote: '"The coastal seafood dishes transported me straight to Kerala. An extraordinary dining experience in the heart of Gatineau."',
                author: 'Marc L., TripAdvisor',
            },
        ],
        fr: [
            {
                quote: '"Pour ce qui est des autres plats appetissants de Kochin Kitchen, je ne changerais pas un seul detail epice."',
                author: 'Peter Hum, Ottawa Citizen',
            },
            {
                quote: '"Kochin Kitchen est un bijou — chaque plat regorge de saveurs authentiques du Kerala, d\'épices chaleureuses et d\'amour pour la cuisine."',
                author: 'Sarah K., Google Avis',
            },
            {
                quote: '"Les plats de fruits de mer côtiers m\'ont transporté directement au Kerala. Une expérience gastronomique extraordinaire."',
                author: 'Marc L., TripAdvisor',
            },
        ],
    };

    const content = {
        en: {
            sectionHeading: 'Guest Impressions',
            sub: 'We are thrilled to bring our flavours to the Ottawa-Gatineau community and cannot wait to fill your tastebuds.',
            btn: 'Make a Reservation',
        },
        fr: {
            sectionHeading: 'Impressions des Invites',
            sub: 'Nous sommes ravis d\'apporter nos saveurs a la communaute d\'Ottawa-Gatineau et avons hate de ravir vos papilles.',
            btn: 'Faire une Réservation',
        },
    };

    const t = content[language];
    const currentReviews = reviews[language];
    const total = currentReviews.length;
    const isFirst = activeIndex === 0;
    const isLast = activeIndex === total - 1;

    const prev = () => { if (!isFirst) setActiveIndex(i => i - 1); };
    const next = () => { if (!isLast) setActiveIndex(i => i + 1); };

    return (
        <section className="testimonial">
            <div className="testimonial__inner">
                <div className="testimonial__left">
                    <div className="testimonial__img-frame">
                        <div className="testimonial__img-placeholder">restaurant.png</div>
                    </div>
                </div>
                <div className="testimonial__right">
                    <p className="testimonial__section-heading">{t.sectionHeading}</p>

                    <div className="testimonial__carousel">
                        <blockquote className="testimonial__quote" key={activeIndex}>
                            {currentReviews[activeIndex].quote}
                        </blockquote>
                        <p className="testimonial__author">{currentReviews[activeIndex].author}</p>

                        <div className="testimonial__nav">
                            <button
                                className={`testimonial__nav-btn ${isFirst ? 'testimonial__nav-btn--disabled' : ''}`}
                                onClick={prev}
                                aria-label="Previous review"
                                disabled={isFirst}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                className={`testimonial__nav-btn ${isLast ? 'testimonial__nav-btn--disabled' : ''}`}
                                onClick={next}
                                aria-label="Next review"
                                disabled={isLast}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <p className="testimonial__sub">{t.sub}</p>
                    <button className="testimonial__btn" onClick={() => navigate('/reservation')}>
                        {t.btn}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;