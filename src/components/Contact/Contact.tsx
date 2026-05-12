import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', mobile: '', message: '',
    });

    const labels = {
        en: {
            heading: 'Get In Touch',
            contactDetails: 'Contact details',
            address: ['2 Av. du Pont', 'Gatineau, QC J8V 1A2', 'Canada'],
            email: 'Lacuisinedekochin@gmail.com',
            phone: '819-243-2111',
            hours: 'Restaurant Hours',
            days: 'Tuesday – Sunday',
            slot1: '12:00 pm – 3:30 pm',
            slot2: '5:00 pm – 9:00 pm',
            closed: 'Monday: Closed',
            firstName: 'First Name*',
            lastName: 'Last Name*',
            emailLabel: 'E-mail*',
            mobile: 'Mobile*',
            message: 'Message*',
            send: 'Send Message',
            getting: 'Getting Here',
            gettingText: 'Find us at 2 Av. du Pont, Gatineau, QC. Parking is available nearby.',
        },
        fr: {
            heading: 'Nous Contacter',
            contactDetails: 'Coordonnées',
            address: ['2 Av. du Pont', 'Gatineau, QC J8V 1A2', 'Canada'],
            email: 'Lacuisinedekochin@gmail.com',
            phone: '819-243-2111',
            hours: 'Horaires du Restaurant',
            days: 'Mardi – Dimanche',
            slot1: '12h00 – 15h30',
            slot2: '17h00 – 21h00',
            closed: 'Lundi : Fermé',
            firstName: 'Prénom*',
            lastName: 'Nom*',
            emailLabel: 'Courriel*',
            mobile: 'Mobile*',
            message: 'Message*',
            send: 'Envoyer',
            getting: 'Nous Trouver',
            gettingText: 'Retrouvez-nous au 2 Av. du Pont, Gatineau, QC. Des places de stationnement sont disponibles à proximité.',
        },
    };

    const t = labels[language];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent('Contact Form — Kochin Kitchen');
        const body = encodeURIComponent(
            `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:Lacuisinedekochin@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="contact" id="contact">
            {/* GET IN TOUCH */}
            <form className="contact__inner" onSubmit={handleSubmit}>
                <div className="contact__left">
                    <h2 className="contact__heading">{t.heading}</h2>

                    <div className="contact__details-block">
                        <h3 className="contact__sub">{t.contactDetails}</h3>
                        {t.address.map((line, i) => (
                            <p key={i} className="contact__detail-text">{line}</p>
                        ))}
                        <p className="contact__detail-text">
                            <a href={`mailto:${t.email}`} className="contact__detail-link">{t.email}</a>
                        </p>
                        <p className="contact__detail-text">
                            <a href={`tel:${t.phone.replace(/-/g, '')}`} className="contact__detail-link">{t.phone}</a>
                        </p>
                    </div>

                    <div className="contact__details-block">
                        <h3 className="contact__sub">{t.hours}</h3>
                        <p className="contact__detail-text">{t.days}</p>
                        <p className="contact__detail-text">{t.slot1}</p>
                        <p className="contact__detail-text">{t.slot2}</p>
                        <p className="contact__detail-text">{t.closed}</p>
                    </div>
                </div>

                <div className="contact__right">
                    <div className="contact__field">
                        <label className="contact__label">{t.firstName}</label>
                        <input className="contact__input" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="contact__field">
                        <label className="contact__label">{t.lastName}</label>
                        <input className="contact__input" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                    <div className="contact__field">
                        <label className="contact__label">{t.emailLabel}</label>
                        <input className="contact__input" name="email" type="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="contact__field">
                        <label className="contact__label">{t.mobile}</label>
                        <input className="contact__input" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} />
                    </div>
                    <div className="contact__field">
                        <label className="contact__label">{t.message}</label>
                        <textarea className="contact__input contact__textarea" name="message" value={formData.message} onChange={handleChange} />
                    </div>
                    <button type="submit" className="contact__btn">{t.send}</button>
                </div>
            </form>

            {/* GETTING HERE */}
            <div className="contact__map-section">
                <h2 className="contact__map-heading">{t.getting}</h2>
                <p className="contact__map-text">{t.gettingText}</p>
                <div className="contact__map-wrap">
                    <iframe
                        title="Kochin Kitchen location"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-75.7276%2C45.4217%2C-75.7076%2C45.4317&layer=mapnik&marker=45.4267%2C-75.7176"
                        style={{ width: '100%', height: '100%', border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

        </section>
    );
};

export default Contact;