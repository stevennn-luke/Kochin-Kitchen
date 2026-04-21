import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

const MAP_STYLE = [{ "elementType": "geometry", "stylers": [{ "color": "#1d2c4d" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#8ec3b9" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#1a3646" }] }, { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [{ "color": "#4b6878" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#023e58" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#283d6a" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#023e58" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#304a7d" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#98a5be" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#2c6675" }] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [{ "color": "#283d6a" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#0e1626" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#4e6d70" }] }];

declare global {
    interface Window { google: any; initMap: () => void; }
}

const Contact = () => {
    const { language } = useLanguage();
    const mapRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', mobile: '', message: '',
    });

    const labels = {
        en: {
            heading: 'Get In Touch',
            contactDetails: 'Contact details',
            address: ['2 Av. du Pont', 'Gatineau, QC J8V 1A2', 'Canada'],
            email: 'info@kochinkitchen.ca',
            phone: '613-562-4461',
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
            email: 'info@kochinkitchen.ca',
            phone: '613-562-4461',
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

    useEffect(() => {
        const initMap = () => {
            if (!mapRef.current || !window.google) return;
            const location = { lat: 45.4795, lng: -75.7278 };
            const map = new window.google.maps.Map(mapRef.current, {
                zoom: 15,
                center: location,
                styles: MAP_STYLE,
                disableDefaultUI: true,
                zoomControl: true,
            });
            new window.google.maps.Marker({ position: location, map });
        };

        if (window.google) {
            initMap();
        } else {
            window.initMap = initMap;
            const existing = document.getElementById('gmap-script');
            if (!existing) {
                const script = document.createElement('script');
                script.id = 'gmap-script';
                // Replace YOUR_API_KEY with your actual Google Maps API key
                script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="contact" id="contact">

            {/* GET IN TOUCH */}
            <div className="contact__inner">
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
                    <button className="contact__btn">{t.send}</button>
                </div>
            </div>

            {/* GETTING HERE */}
            <div className="contact__map-section">
                <h2 className="contact__map-heading">{t.getting}</h2>
                <p className="contact__map-text">{t.gettingText}</p>
                <div className="contact__map-wrap" ref={mapRef} />
            </div>

        </section>
    );
};

export default Contact;