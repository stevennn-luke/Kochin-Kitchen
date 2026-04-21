import { useLanguage } from '../../contexts/LanguageContext';
import { en } from '../../translations/en';
import { fr } from '../../translations/fr';
import './About.css';

const IconCalendar = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
    </svg>
);

const IconFork = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <path d="M21 2c0 4.97-2.69 9-6 9v11" />
    </svg>
);

const IconBubble = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const icons = [<IconCalendar />, <IconFork />, <IconBubble />];
const quickLinkKeys = ['book', 'flavours', 'gather'] as const;

const About = () => {
    const { language } = useLanguage();
    const t = language === 'en' ? en : fr;

    return (
        <section className="about">
            <div className="about__inner">
                <div className="about__left">
                    <h2 className="about__heading">
                        <span className="about__heading-line1">
                            {language === 'en' ? 'Meet Kochin' : 'Rencontrez Kochin'}
                        </span>
                        <span className="about__heading-line2">Kitchen</span>
                    </h2>
                    <p className="about__lead">{t.about.p1}</p>
                    <p className="about__body">{t.about.p2}</p>
                    <p className="about__body">{t.about.p3}</p>
                </div>

                <div className="about__right">
                    <p className="about__links-heading">{t.quickLinks.heading}</p>
                    <ul className="about__links">
                        {quickLinkKeys.map((key, i) => (
                            <li key={key}>
                                <span className="about__icon">{icons[i]}</span>
                                {t.quickLinks[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;