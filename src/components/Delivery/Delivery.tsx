import { useLanguage } from '../../contexts/LanguageContext';
import './Delivery.css';

const Delivery = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            line1: 'Order',
            line2: 'In',
            body: 'We deliver around Gatineau & Ottawa using our trusted delivery partners. Every order is carefully packed to ensure your food arrives fresh, hot, and full of flavour.',
        },
        fr: {
            line1: 'Commander',
            line2: 'Chez Vous',
            body: 'Nous livrons à Gatineau et Ottawa via nos partenaires de livraison de confiance. Chaque commande est soigneusement emballée pour que votre repas arrive frais, chaud et savoureux.',
        },
    };

    const t = content[language];

    return (
        <section className="delivery">
            <div className="delivery__inner">
                {/* Heading LEFT (Order In comes first) */}
                <div className="delivery__right">
                    <h2 className="delivery__heading">
                        <span>{t.line1}</span>
                        <span>{t.line2}</span>
                    </h2>
                </div>
                <div className="delivery__divider" />
                {/* Text + logos RIGHT */}
                <div className="delivery__left">
                    <p className="delivery__body">{t.body}</p>
                    <div className="delivery__logos">
                        <div className="delivery__logo-pill">SKIP</div>
                        <div className="delivery__logo-pill">DOORDASH</div>
                        <div className="delivery__logo-pill">UBER EATS</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delivery;