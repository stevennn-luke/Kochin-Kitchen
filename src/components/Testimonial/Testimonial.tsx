import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import './Testimonial.css';

const Testimonial = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const content = {
        en: {
            sectionHeading: 'Guest Impressions',
            quote: '"...As for the other mouth-watering dishes at Kochin Kitchen, I wouldn\'t change a single spicy thing."',
            author: 'Peter Hum, Ottawa Citizen',
            sub: 'We are thrilled to bring our flavours to the Ottawa-Gatineau community and cannot wait to fill your tastebuds.',
            btn: 'Book a Table',
        },
        fr: {
            sectionHeading: 'Impressions des Invites',
            quote: '"...Pour ce qui est des autres plats appetissants de Kochin Kitchen, je ne changerais pas un seul detail epice."',
            author: 'Peter Hum, Ottawa Citizen',
            sub: 'Nous sommes ravis d\'apporter nos saveurs a la communaute d\'Ottawa-Gatineau et avons hate de ravir vos papilles.',
            btn: 'Reserver une Table',
        },
    };

    const t = content[language];

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
                    <blockquote className="testimonial__quote">{t.quote}</blockquote>
                    <p className="testimonial__author">{t.author}</p>
                    <p className="testimonial__sub">{t.sub}</p>
                    <button className="testimonial__btn" onClick={() => navigate('/contact')}>
                        {t.btn}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;