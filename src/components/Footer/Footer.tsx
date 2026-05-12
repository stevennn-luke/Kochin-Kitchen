import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const enContent = {
        tagline: 'Authentic Kerala cuisine in the heart of the community.',
        email: 'Lacuisinedekochin@gmail.com',
        phone: '819-243-2111',
        explore: 'Explore',
        exploreItems: ['Eat & Drink', 'Events & Catering', 'Reservations', 'Contact'],
        visit: 'Visit',
        hours: 'Hours',
        hoursItems: ['Tue - Sun', '12:00 pm - 3:30 pm', '5:00 pm - 9:00 pm', 'Monday: Closed'],
        copy: 'KOCHIN KITCHEN 2026',
        privacy: 'Privacy Policy',
        terms: 'Terms and Conditions',
        service: 'Responsible Service',
    };

    const frContent = {
        tagline: 'Cuisine authentique du Kerala au coeur de la communaute.',
        email: 'Lacuisinedekochin@gmail.com',
        phone: '819-243-2111',
        explore: 'Explorer',
        exploreItems: ['Manger et Boire', 'Evenements et Traiteur', 'Reservations', 'Nous joindre'],
        visit: 'Nous Trouver',
        hours: 'Horaires',
        hoursItems: ['Mar - Dim', '12h00 - 15h30', '17h00 - 21h00', 'Lundi : Ferme'],
        copy: 'KOCHIN KITCHEN 2026',
        privacy: 'Politique de confidentialite',
        terms: 'Conditions generales',
        service: 'Service responsable',
    };

    const t = language === 'en' ? enContent : frContent;

    return (
        <footer className="footer">
            <div className="footer__top">

                <div className="footer__brand">
                    <p className="footer__logo" onClick={() => navigate('/')}>
                        KOCHIN KITCHEN
                    </p>
                    <p className="footer__tagline">{t.tagline}</p>
                    <div className="footer__brand-contact">
                        <a href="mailto:info@kochinkitchen.ca" className="footer__brand-link">
                            {t.email}
                        </a>
                        <a href="tel:6135624461" className="footer__brand-link">
                            {t.phone}
                        </a>
                    </div>
                    <div className="footer__socials">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="https://x.com/kochinkitchen" target="_blank" rel="noreferrer" aria-label="X">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.594l4.254 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Explore + Hours grouped side by side */}
                <div className="footer__col-group">
                    <div className="footer__col">
                        <h4 className="footer__col-heading">{t.explore}</h4>
                        <ul className="footer__col-list">
                            {t.exploreItems.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__col-divider" />
                    <div className="footer__col">
                        <h4 className="footer__col-heading">{t.hours}</h4>
                        <ul className="footer__col-list">
                            {t.hoursItems.map((item, i) => (
                                <li key={i} style={{ cursor: 'default' }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer__col">
                    <h4 className="footer__col-heading">{t.visit}</h4>
                    <a
                        href="https://maps.app.goo.gl/bjSEaELovzEMvdS98"
                        target="_blank"
                        rel="noreferrer"
                        className="footer__address-link"
                    >
                        <span>2 Av. du Pont</span>
                        <span>Gatineau, QC J8V 1A2</span>
                        <span>Canada</span>
                    </a>
                </div>

            </div>

            <div className="footer__legal">
                <div className="footer__legal-links">
                    <a onClick={() => navigate('/privacy')} style={{cursor:'pointer'}}>{t.privacy}</a>
                    <span className="footer__legal-sep">|</span>
                    <a onClick={() => navigate('/terms')} style={{cursor:'pointer'}}>{t.terms}</a>
                    <span className="footer__legal-sep">|</span>
                    <a onClick={() => navigate('/responsible-service')} style={{cursor:'pointer'}}>{t.service}</a>
                </div>
            </div>

            <div className="footer__bottom">
                <p>{t.copy}</p>
            </div>

        </footer>
    );
};

export default Footer;