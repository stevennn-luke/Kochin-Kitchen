import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Reservation.css';

const Reservation = () => {
    const { language } = useLanguage();
    const [partySize, setPartySize] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', mobile: '', message: '',
    });

    const labels = {
        en: {
            heading: 'Make a Reservation',
            partySizeLabel: 'Select Party Size',
            contactDetails: 'Contact Details',
            firstName: 'First Name*',
            lastName: 'Last Name*',
            emailLabel: 'E-mail*',
            mobile: 'Mobile*',
            message: 'Add a Message',
            send: 'Request Booking',
            address: ['2 Av. du Pont', 'Gatineau, QC J8V 1A2', 'Canada'],
            email: 'Lacuisinedekochin@gmail.com',
            phone: '819-243-2111',
            hours: 'Restaurant Hours',
            days: 'Tuesday – Sunday',
            slot1: '12:00 pm – 3:30 pm',
            slot2: '5:00 pm – 9:00 pm',
            closed: 'Monday: Closed',
        },
        fr: {
            heading: 'Faire une Réservation',
            partySizeLabel: 'Nombre de Personnes',
            contactDetails: 'Coordonnées',
            firstName: 'Prénom*',
            lastName: 'Nom*',
            emailLabel: 'Courriel*',
            mobile: 'Mobile*',
            message: 'Ajouter un Message',
            send: 'Demander une Réservation',
            address: ['2 Av. du Pont', 'Gatineau, QC J8V 1A2', 'Canada'],
            email: 'Lacuisinedekochin@gmail.com',
            phone: '819-243-2111',
            hours: 'Horaires du Restaurant',
            days: 'Mardi – Dimanche',
            slot1: '12h00 – 15h30',
            slot2: '17h00 – 21h00',
            closed: 'Lundi : Fermé',
        },
    };

    const t = labels[language];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Reservation Request — Party of ${partySize ?? 'N/A'}`);
        const body = encodeURIComponent(
            `Party Size: ${partySize ?? 'Not selected'}\nFirst Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:Lacuisinedekochin@gmail.com?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="reservation" id="reservation">
            <div className="reservation__inner">

                {/* LEFT — info */}
                <div className="reservation__left">
                    <h2 className="reservation__heading">{t.heading}</h2>

                    <div className="reservation__details-block">
                        <h3 className="reservation__sub">{t.contactDetails}</h3>
                        {t.address.map((line, i) => (
                            <p key={i} className="reservation__detail-text">{line}</p>
                        ))}
                        <p className="reservation__detail-text">
                            <a href={`mailto:${t.email}`} className="reservation__detail-link">{t.email}</a>
                        </p>
                        <p className="reservation__detail-text">
                            <a href={`tel:${t.phone.replace(/-/g, '')}`} className="reservation__detail-link">{t.phone}</a>
                        </p>
                    </div>

                    <div className="reservation__details-block">
                        <h3 className="reservation__sub">{t.hours}</h3>
                        <p className="reservation__detail-text">{t.days}</p>
                        <p className="reservation__detail-text">{t.slot1}</p>
                        <p className="reservation__detail-text">{t.slot2}</p>
                        <p className="reservation__detail-text">{t.closed}</p>
                    </div>
                </div>

                {/* RIGHT — form */}
                <div className="reservation__right">

                    {/* Party size */}
                    <div className="reservation__party-block">
                        <p className="reservation__party-label">{t.partySizeLabel}</p>
                        <div className="reservation__party-grid">
                            {Array.from({ length: 50 }, (_, i) => i + 1).map(n => (
                                <button
                                    key={n}
                                    className={`reservation__party-btn ${partySize === n ? 'reservation__party-btn--active' : ''}`}
                                    onClick={() => setPartySize(n)}
                                    aria-label={`${n} guest${n > 1 ? 's' : ''}`}
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact form */}
                    <form className="reservation__form" onSubmit={handleSubmit}>
                        <p className="reservation__party-label">{t.contactDetails}</p>

                        <div className="reservation__fields-row">
                            <div className="reservation__field">
                                <label className="reservation__label">{t.firstName}</label>
                                <input className="reservation__input" name="firstName" value={formData.firstName} onChange={handleChange} />
                            </div>
                            <div className="reservation__field">
                                <label className="reservation__label">{t.lastName}</label>
                                <input className="reservation__input" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="reservation__fields-row">
                            <div className="reservation__field">
                                <label className="reservation__label">{t.emailLabel}</label>
                                <input className="reservation__input" name="email" type="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="reservation__field">
                                <label className="reservation__label">{t.mobile}</label>
                                <input className="reservation__input" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="reservation__field">
                            <label className="reservation__label">{t.message}</label>
                            <textarea className="reservation__input reservation__textarea" name="message" value={formData.message} onChange={handleChange} />
                        </div>

                        <button type="submit" className="reservation__btn">{t.send}</button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Reservation;
