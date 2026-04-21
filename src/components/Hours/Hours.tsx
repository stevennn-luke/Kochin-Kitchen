import { useLanguage } from '../../contexts/LanguageContext';
import './Hours.css';

const Hours = () => {
    const { language } = useLanguage();

    const data = {
        en: {
            heading: 'Be Our Guests!',
            colTitle: 'Restaurant Hours',
            days: 'Tuesday - Sunday',
            slot1: '12:00 pm - 3:30 pm',
            slot2: '5:00 pm - 9:00 pm',
            closed: 'Monday: Closed',
            brunchTitle: 'Brunch Buffet',
            brunchDays: 'Saturday & Sunday',
            brunchTime: '11:30 am - 3:00 pm',
        },
        fr: {
            heading: 'Soyez les Bienvenus!',
            colTitle: 'Horaires du Restaurant',
            days: 'Mardi - Dimanche',
            slot1: '12h00 - 15h30',
            slot2: '17h00 - 21h00',
            closed: 'Lundi : Ferme',
            brunchTitle: 'Brunch Buffet',
            brunchDays: 'Samedi & Dimanche',
            brunchTime: '11h30 - 15h00',
        },
    };

    const t = data[language];

    return (
        <section className="hours">
            <div className="hours__inner">
                <div className="hours__left">
                    <h2 className="hours__heading">{t.heading}</h2>
                </div>
                <div className="hours__right">
                    <h3 className="hours__col-title">{t.colTitle}</h3>
                    <div className="hours__row">
                        <span className="hours__days">{t.days}</span>
                        <div className="hours__times">
                            <span>{t.slot1}</span>
                            <span>{t.slot2}</span>
                        </div>
                    </div>
                    <div className="hours__row">
                        <span className="hours__days">{t.closed}</span>
                    </div>
                    <h3 className="hours__col-title hours__col-title--brunch">{t.brunchTitle}</h3>
                    <div className="hours__row hours__row--last">
                        <span className="hours__days">{t.brunchDays}</span>
                        <div className="hours__times">
                            <span>{t.brunchTime}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hours;