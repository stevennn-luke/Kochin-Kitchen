import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import './LegalPage.css';

type LegalType = 'privacy' | 'terms' | 'service';

const legalContent: Record<LegalType, { en: { title: string; sections: { heading: string; body: string }[] }; fr: { title: string; sections: { heading: string; body: string }[] } }> = {
  privacy: {
    en: {
      title: 'Privacy Policy',
      sections: [
        { heading: 'Information We Collect', body: 'When you make a reservation or contact us through our website, we collect information you provide directly to us, such as your name, email address, phone number, and any messages you send. We may also collect information about how you interact with our website through standard server logs.' },
        { heading: 'How We Use Your Information', body: 'We use the information we collect to process your reservation requests, respond to your enquiries, send you information about our restaurant including special events and promotions (with your consent), and improve our services. We do not sell, trade, or otherwise transfer your personal information to outside parties.' },
        { heading: 'Data Retention', body: 'We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.' },
        { heading: 'Cookies', body: 'Our website may use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some parts of our website may not function properly.' },
        { heading: 'Security', body: 'We implement reasonable security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.' },
        { heading: 'Contact Us', body: 'If you have questions about this Privacy Policy, please contact us at Lacuisinedekochin@gmail.com or by phone at 819-243-2111.' },
      ],
    },
    fr: {
      title: 'Politique de Confidentialité',
      sections: [
        { heading: 'Informations que nous collectons', body: 'Lorsque vous faites une réservation ou nous contactez via notre site web, nous collectons les informations que vous nous fournissez directement, telles que votre nom, adresse e-mail, numéro de téléphone et tout message que vous envoyez.' },
        { heading: 'Comment nous utilisons vos informations', body: 'Nous utilisons les informations que nous collectons pour traiter vos demandes de réservation, répondre à vos demandes de renseignements, vous envoyer des informations sur notre restaurant et améliorer nos services. Nous ne vendons pas vos informations personnelles à des tiers.' },
        { heading: 'Conservation des données', body: 'Nous conservons vos informations personnelles uniquement aussi longtemps que nécessaire pour atteindre les objectifs pour lesquels elles ont été collectées.' },
        { heading: 'Cookies', body: 'Notre site web peut utiliser des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies.' },
        { heading: 'Sécurité', body: 'Nous mettons en œuvre des mesures de sécurité raisonnables pour protéger vos informations personnelles contre tout accès non autorisé.' },
        { heading: 'Contactez-nous', body: 'Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à Lacuisinedekochin@gmail.com ou par téléphone au 819-243-2111.' },
      ],
    },
  },
  terms: {
    en: {
      title: 'Terms and Conditions',
      sections: [
        { heading: 'Reservations', body: 'Reservations are accepted via our website, by phone, or by email. We hold reservations for 15 minutes past the booked time. If you are running late, please call us as soon as possible. For large parties (8 or more), a credit card may be required to secure the reservation.' },
        { heading: 'Cancellations', body: 'We kindly ask for at least 24 hours notice for cancellations. For parties of 8 or more, 48 hours notice is required. Failure to provide adequate notice may result in a cancellation fee.' },
        { heading: 'Dietary Requirements', body: 'We do our best to accommodate dietary requirements and allergies. Please inform us at the time of booking or upon arrival. While we take every precaution, we cannot guarantee a completely allergen-free environment due to shared kitchen equipment.' },
        { heading: 'Responsible Service of Alcohol', body: 'Kochin Kitchen is committed to responsible service of alcohol. We reserve the right to refuse service of alcohol to anyone who appears to be intoxicated or is under the legal drinking age. Valid photo ID may be requested.' },
        { heading: 'Conduct', body: 'We expect all guests to behave in a manner that is respectful to other diners and our staff. We reserve the right to ask guests to leave if their behaviour is disruptive or inappropriate.' },
        { heading: 'Liability', body: 'Kochin Kitchen is not liable for any loss or damage to personal belongings left on our premises. We recommend keeping personal items secure at all times.' },
        { heading: 'Changes to Terms', body: 'We reserve the right to amend these terms and conditions at any time. Updated terms will be posted on our website.' },
      ],
    },
    fr: {
      title: 'Conditions Générales',
      sections: [
        { heading: 'Réservations', body: 'Les réservations sont acceptées via notre site web, par téléphone ou par e-mail. Nous maintenons les réservations pendant 15 minutes après l\'heure réservée. Pour les grands groupes (8 personnes ou plus), une carte de crédit peut être requise.' },
        { heading: 'Annulations', body: 'Nous demandons un préavis d\'au moins 24 heures pour les annulations. Pour les groupes de 8 personnes ou plus, un préavis de 48 heures est requis.' },
        { heading: 'Exigences alimentaires', body: 'Nous faisons de notre mieux pour répondre aux exigences alimentaires et aux allergies. Veuillez nous en informer au moment de la réservation ou à votre arrivée.' },
        { heading: 'Service responsable d\'alcool', body: 'Kochin Kitchen s\'engage à un service responsable d\'alcool. Nous nous réservons le droit de refuser le service d\'alcool à toute personne qui semble être en état d\'ivresse ou qui est mineure.' },
        { heading: 'Conduite', body: 'Nous attendons de tous les clients qu\'ils se comportent de manière respectueuse envers les autres clients et notre personnel.' },
        { heading: 'Responsabilité', body: 'Kochin Kitchen n\'est pas responsable de la perte ou des dommages aux effets personnels laissés dans nos locaux.' },
        { heading: 'Modifications des conditions', body: 'Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les conditions mises à jour seront publiées sur notre site web.' },
      ],
    },
  },
  service: {
    en: {
      title: 'Responsible Service',
      sections: [
        { heading: 'Our Commitment', body: 'Kochin Kitchen is committed to the responsible service of alcohol. We take our obligations seriously and aim to provide a safe and enjoyable environment for all of our guests.' },
        { heading: 'Age Verification', body: 'It is illegal to serve alcohol to anyone under the legal drinking age (18+ in Québec). Our staff will request valid photo ID from anyone who appears to be under 25. We reserve the right to refuse service if ID cannot be provided.' },
        { heading: 'Intoxication', body: 'We will not serve alcohol to any person who appears to be intoxicated. Signs of intoxication include slurred speech, unsteady movement, aggressive behaviour, or impaired judgment. Our staff are trained to recognise these signs and act accordingly.' },
        { heading: 'Staff Training', body: 'All of our staff who serve alcohol have completed responsible service of alcohol training. We are committed to ongoing education and refresher courses to maintain the highest standards.' },
        { heading: 'Safe Transportation', body: 'We encourage all guests to plan their transportation in advance. If you require assistance arranging a taxi or ride-share, please ask a member of our team. Designated driver programs are supported and non-alcoholic beverage options are always available.' },
        { heading: 'Unaccompanied Minors', body: 'Minors are welcome in our restaurant when accompanied by a parent or legal guardian. We do not permit minors in areas of the restaurant designated for alcohol service only.' },
        { heading: 'Reporting Concerns', body: 'If you have concerns about responsible service at our restaurant, please speak to a manager or contact us at Lacuisinedekochin@gmail.com.' },
      ],
    },
    fr: {
      title: 'Service Responsable',
      sections: [
        { heading: 'Notre engagement', body: 'Kochin Kitchen s\'engage à servir l\'alcool de manière responsable. Nous prenons nos obligations au sérieux et visons à offrir un environnement sûr et agréable à tous nos clients.' },
        { heading: 'Vérification de l\'âge', body: 'Il est illégal de servir de l\'alcool à quiconque est mineur (18 ans et plus au Québec). Notre personnel demandera une pièce d\'identité avec photo valide à toute personne qui semble avoir moins de 25 ans.' },
        { heading: 'Intoxication', body: 'Nous ne servirons pas d\'alcool à une personne qui semble être en état d\'ivresse. Notre personnel est formé pour reconnaître les signes d\'ivresse et agir en conséquence.' },
        { heading: 'Formation du personnel', body: 'Tout notre personnel qui sert de l\'alcool a suivi une formation sur le service responsable. Nous nous engageons à une formation continue pour maintenir les normes les plus élevées.' },
        { heading: 'Transport sécuritaire', body: 'Nous encourageons tous les clients à planifier leur transport à l\'avance. Si vous avez besoin d\'aide pour organiser un taxi, veuillez demander à un membre de notre équipe.' },
        { heading: 'Mineurs non accompagnés', body: 'Les mineurs sont les bienvenus dans notre restaurant lorsqu\'ils sont accompagnés d\'un parent ou d\'un tuteur légal.' },
        { heading: 'Signalement des préoccupations', body: 'Si vous avez des préoccupations concernant le service responsable dans notre restaurant, veuillez parler à un gérant ou nous contacter à Lacuisinedekochin@gmail.com.' },
      ],
    },
  },
};

interface LegalPageProps {
  type: LegalType;
}

const LegalPage = ({ type }: LegalPageProps) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const content = legalContent[type][language];

  return (
    <div className="legal-page">
      <div className="legal-page__header">
        <button className="legal-page__back" onClick={() => navigate(-1)}>← {language === 'en' ? 'Back' : 'Retour'}</button>
        <p className="legal-page__brand" onClick={() => navigate('/')}>KOCHIN KITCHEN</p>
      </div>
      <div className="legal-page__content">
        <h1 className="legal-page__title">{content.title}</h1>
        {content.sections.map((section, i) => (
          <div key={i} className="legal-page__section">
            <h2 className="legal-page__section-heading">{section.heading}</h2>
            <p className="legal-page__section-body">{section.body}</p>
          </div>
        ))}
        <p className="legal-page__footer">
          {language === 'en' ? 'Last updated: January 2026' : 'Dernière mise à jour : Janvier 2026'}
        </p>
      </div>
    </div>
  );
};

export default LegalPage;
