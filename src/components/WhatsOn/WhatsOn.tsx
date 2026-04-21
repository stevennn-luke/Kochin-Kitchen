import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { en } from '../../translations/en';
import { fr } from '../../translations/fr';
import './WhatsOn.css';

const cards = [
    { img: 'img1.png', labelKey: 'card1' },
    { img: 'img2.png', labelKey: 'card2' },
    { img: 'img3.png', labelKey: 'card3' },
];

const WhatsOn = () => {
    const { language } = useLanguage();
    const t = language === 'en' ? en : fr;
    const trackRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (!trackRef.current || !barRef.current) return;
        const el = trackRef.current;
        const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
        barRef.current.style.width = `${progress * 100}%`;
    };

    return (
        <section className="whatson">
            <div className="whatson__track" ref={trackRef} onScroll={handleScroll}>
                {cards.map((card, i) => {
                    const cardData = t.whatsOn[card.labelKey as 'card1' | 'card2' | 'card3'];
                    return (
                        <div className="whatson__card" key={i}>
                            <div className="whatson__card-img-wrap">
                                {/* Replace src with actual image when ready */}
                                <div className="whatson__card-placeholder">
                                    <span>{card.img}</span>
                                </div>
                            </div>
                            <div className="whatson__card-body">
                                <p className="whatson__card-sub">{cardData.sub}</p>
                                <h3 className="whatson__card-title">{cardData.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Scroll progress indicator */}
            <div className="whatson__progress-track">
                <div className="whatson__progress-bar" ref={barRef} />
            </div>
        </section>
    );
};

export default WhatsOn;