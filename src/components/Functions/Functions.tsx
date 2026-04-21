import { useLanguage } from '../../contexts/LanguageContext';
import { en } from '../../translations/en';
import { fr } from '../../translations/fr';
import './Functions.css';

const Functions = () => {
    const { language } = useLanguage();
    const t = language === 'en' ? en : fr;

    return (
        <section className="functions" id="events">
            <div className="functions__inner">
                <div className="functions__left">
                    <div className="functions__img-frame">
                        <div className="functions__img-placeholder">functions.png</div>
                    </div>
                </div>
                <div className="functions__right">
                    <h2 className="functions__heading">{t.functions.heading}</h2>
                    <p className="functions__body">{t.functions.body}</p>
                    <button className="functions__btn">{t.functions.readMore}</button>
                </div>
            </div>
        </section>
    );
};

export default Functions;