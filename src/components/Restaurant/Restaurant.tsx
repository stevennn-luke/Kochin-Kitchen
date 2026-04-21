import { useLanguage } from '../../contexts/LanguageContext';
import { en } from '../../translations/en';
import { fr } from '../../translations/fr';
import './Restaurant.css';

const Restaurant = () => {
    const { language } = useLanguage();
    const t = language === 'en' ? en : fr;

    return (
        <section className="restaurant">
            <div className="restaurant__inner">
                <div className="restaurant__left">
                    <h2 className="restaurant__heading">{t.restaurant.heading}</h2>
                    <p className="restaurant__body">{t.restaurant.body}</p>
                    <button className="restaurant__btn">{t.restaurant.readMore}</button>
                </div>
                <div className="restaurant__right">
                    <div className="restaurant__img-frame">
                        {/* Replace with <img src="..." /> when ready */}
                        <div className="restaurant__img-placeholder">restaurant.png</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Restaurant;