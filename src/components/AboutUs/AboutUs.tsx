import { useLanguage } from '../../contexts/LanguageContext';
import './AboutUs.css';

const AboutUs = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            line1: 'About',
            line2: 'Us',
            p1: 'Kochin Kitchen was conceived by three people hailing from the Southern Indian state of Kerala.',
            p2: 'The management and staff at Kochin Kitchen are united by one passion — authentic food experience. Hence, we use the finest of ingredients in perfect proportions to create an oasis of flavors.',
            readMore: 'Read More',
        },
        fr: {
            line1: 'À',
            line2: 'Propos',
            p1: 'Kochin Kitchen a été conçu par trois personnes originaires de l\'état du Kerala, dans le sud de l\'Inde.',
            p2: 'La direction et le personnel de Kochin Kitchen sont unis par une seule passion — l\'expérience culinaire authentique. Nous utilisons les meilleurs ingrédients dans des proportions parfaites pour créer une oasis de saveurs.',
            readMore: 'En Savoir Plus',
        },
    };

    const t = content[language];

    return (
        <section className="aboutus">
            <div className="aboutus__inner">

                {/* LEFT: text */}
                <div className="aboutus__left">
                    <p className="aboutus__p">{t.p1}</p>
                    <p className="aboutus__p">{t.p2}</p>
                    <button className="aboutus__btn">{t.readMore}</button>
                </div>

                {/* Divider */}
                <div className="aboutus__divider" />

                {/* RIGHT: heading */}
                <div className="aboutus__right">
                    <h2 className="aboutus__heading">
                        <span>{t.line1}</span>
                        <span>{t.line2}</span>
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;