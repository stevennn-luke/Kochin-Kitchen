import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const menuDataEN = {
  appetizers: {
    title: 'Appetizers',
    note: null,
    items: [
      { name: 'Soup of the Day', desc: "Chef's refined seasonal soup crafted with fresh ingredients and delicate spices", price: 9 },
      { name: 'Coriander Shrimp', desc: 'Succulent shrimp in a vibrant coriander emulsion with aromatic spices', price: 13 },
      { name: 'Pepper Scallop', desc: 'Pan-seared scallops with ginger, garlic, and cracked black pepper', price: 15 },
      { name: 'Chicken Pakora', desc: 'Chickpea-battered chicken with curry leaves and green chilies', price: 11 },
      { name: 'Puli Inji Wings', desc: 'Crispy wings glazed with ginger, tamarind, and jaggery', price: 13 },
      { name: 'Chicken 65', desc: 'Crispy fried chicken infused with Kerala spices', price: 13 },
      { name: 'Beef Dry Fry (BDF)', desc: "Thinly sliced beef fried with the chef's signature spice blend", price: 14 },
      { name: 'Beef Cutlet', desc: 'Breaded beef and potato patties with chili-lime sauce', price: 9 },
      { name: 'Samosa', desc: 'Golden pastry filled with spiced vegetables and mint chutney (6pcs)', price: 9 },
      { name: 'Onion Pakora', desc: 'Crispy onion fritters with spices and curry leaves', price: 8 },
    ],
  },
  dosa: {
    title: 'Dosa – Idli – Vada',
    note: 'Served With Sambar and Chutney',
    items: [
      { name: 'Masala Dosa', desc: 'Crispy dosa filled with a fragrant spiced potato masala', price: 18 },
      { name: 'Plain Dosa', desc: 'A delicate, golden rice and lentil crêpe, crisped to perfection', price: 17 },
      { name: 'Idli', desc: 'Steamed rice cakes, light and airy with a subtle tang', price: 16 },
      { name: 'Uthappam', desc: 'A soft, thick rice-lentil pancake topped with fresh vegetables', price: 17 },
      { name: 'Paneer Uthappam', desc: 'Fluffy uthappam layered with spiced paneer and garden vegetables', price: 18 },
      { name: 'Vada', desc: 'Crisp lentil fritter with a soft center, seasoned with aromatic spices', price: 9 },
    ],
  },
  seafood: {
    title: 'Seafood',
    note: 'Mains above $15 come with a side of basmati rice or Kerala porotta',
    items: [
      { name: 'Venad Lobster Masala', desc: 'Lobster in a rich, spiced red gravy with bold coastal flavors', price: 32 },
      { name: 'Shrimp Masala', desc: 'Shrimp cooked to perfection in a rich, spiced red gravy', price: 17 },
      { name: 'Elayil Pollichathu', desc: 'Masala-marinated salmon, wrapped in banana leaf and delicately grilled', price: 27 },
      { name: 'King Fish Curry', desc: 'King fish gently simmered in a signature blend of coastal spices and tangy tamarind', price: 23 },
      { name: 'Kochin Shrimp Curry', desc: 'Tender shrimp gently cooked in a light coconut milk curry', price: 22 },
      { name: 'Salmon Aleppy', desc: 'Salmon delicately cooked in coconut milk, infused with turmeric, chili, and tamarind', price: 22 },
    ],
  },
  chicken: {
    title: 'Chicken',
    note: 'Mains above $15 come with a side of basmati rice or Kerala porotta',
    items: [
      { name: 'Kodanadu Chicken', desc: "Roasted coconut paste and chef's secret spice blend", price: 23 },
      { name: 'Kerala Kozhi', desc: 'Traditional Kerala chicken curry with a coconut milk sauce', price: 21 },
      { name: 'Butter Chicken', desc: 'Tandoori marinated chicken cooked in a creamy cashew, onion, and tomato sauce', price: 21 },
    ],
  },
  beef: {
    title: 'Beef',
    note: 'Mains above $15 come with a side of basmati rice or Kerala porotta',
    items: [
      { name: 'Naadan Beef Roast', desc: 'Slow roasted in onion and authentic Kerala spices', price: 24 },
      { name: 'Beef Fry', desc: 'Tossed in masala and coconut chunks', price: 25 },
      { name: 'Beef Curry', desc: 'Traditional beef curry cooked in coconut gravy', price: 23 },
    ],
  },
  lamb: {
    title: 'Lamb',
    note: 'Mains above $15 come with a side of basmati rice or Kerala porotta',
    items: [
      { name: 'Pepper Lamb', desc: 'Slow cooked lamb in Indian peppercorn sauce', price: 22 },
      { name: 'Lamb Khorma', desc: 'Tender pieces of lamb in a smooth coconut gravy', price: 22 },
    ],
  },
  vegetarian: {
    title: 'Vegetarian',
    note: 'Mains above $15 come with a side of basmati rice or Kerala porotta',
    items: [
      { name: 'Paneer Spinach Khorma', desc: 'Paneer in a silky, delicately spiced spinach and cream sauce', price: 21 },
      { name: 'Paneer Peas Makhanwala', desc: 'Paneer and green peas in a rich, buttery cashew gravy', price: 21 },
      { name: 'Vegetable Khorma', desc: 'Seasonal vegetables in a fragrant coconut and spice blend', price: 19 },
      { name: 'Neelagiri Mushroom', desc: 'Mushrooms in a creamy coconut milk sauce', price: 20 },
      { name: 'Eggplant', desc: 'Roasted eggplant in a bold tamarind, chili, and ginger-garlic sauce', price: 13 },
      { name: 'Egg Roast', desc: 'Boiled eggs in a thick and spicy onion gravy', price: 18 },
    ],
  },
  biriyani: {
    title: 'Biriyani',
    note: 'All biriyanis are served with a side of raitha (yoghurt mixture) and achar (spicy Indian pickle)',
    intro: 'Fragrant basmati rice layered with aromatic spices and slow-cooked in the traditional dum style, allowing each grain to absorb deep, rich flavors. Served with your choice of beef, chicken, shrimp, egg, or vegetables for a perfectly balanced and indulgent dish.',
    items: [
      { name: 'Beef', desc: '', price: 22 },
      { name: 'Chicken', desc: '', price: 21 },
      { name: 'Shrimp', desc: '', price: 21 },
      { name: 'Egg', desc: '', price: 18 },
      { name: 'Vegetable', desc: '', price: 17 },
    ],
  },
  dessert: {
    title: 'Dessert',
    note: null,
    items: [
      { name: 'Vermicelli Payasam', desc: 'Creamy milk pudding with roasted vermicelli, cardamom, and toasted nuts', price: 8 },
      { name: 'Lentil Payasam', desc: 'Sweet lentil pudding with jaggery, coconut milk, and warm spices', price: 8 },
      { name: 'Gulab Jamun', desc: 'Soft fried milk dumplings soaked in fragrant rose-cardamom syrup', price: 8 },
      { name: 'Gulab Jamun with Ice Cream', desc: 'Gulab Jamun served with decadent vanilla ice cream', price: 10 },
      { name: 'Ice Cream', desc: 'Ask server which flavour we have in house!', price: 6 },
    ],
  },
  sides: {
    title: 'Sides',
    note: null,
    items: [
      { name: 'Basmati Rice', desc: 'Long-grain aromatic rice, light, fluffy, and delicately fragrant', price: 5 },
      { name: 'Kerala Rice', desc: 'Matta, or kerala red rice with a firm texture and rich flavor', price: 6 },
      { name: 'Kerala Porotta', desc: 'Flaky, layered flatbread with a crisp exterior and soft layers', price: 3 },
    ],
  },
  extras: {
    title: 'Extras',
    note: null,
    items: [
      { name: 'Sambar', desc: '', price: 3 },
      { name: 'Chutneys', desc: '', price: 1.50 },
    ],
  },
};

const menuDataFR: typeof menuDataEN = {
  appetizers: {
    title: 'Entrées',
    note: null,
    items: [
      { name: 'Soupe du Jour', desc: 'Soupe saisonnière raffinée du chef, préparée avec des ingrédients frais et des épices délicates', price: 9 },
      { name: 'Crevettes à la Coriandre', desc: 'Crevettes succulentes dans une émulsion de coriandre vibrante avec des épices aromatiques', price: 13 },
      { name: 'Pétoncles au Poivre', desc: 'Pétoncles poêlés au gingembre, à l\'ail et au poivre noir concassé', price: 15 },
      { name: 'Pakora de Poulet', desc: 'Poulet en pâte de pois chiche avec des feuilles de curry et des piments verts', price: 11 },
      { name: 'Ailes Puli Inji', desc: 'Ailes croustillantes glacées au gingembre, tamarin et jaggery', price: 13 },
      { name: 'Poulet 65', desc: 'Poulet frit croustillant infusé aux épices du Kerala', price: 13 },
      { name: 'Bœuf Dry Fry (BDF)', desc: 'Bœuf finement tranché frit avec le mélange d\'épices signature du chef', price: 14 },
      { name: 'Galette de Bœuf', desc: 'Galettes de bœuf et pommes de terre panées avec sauce chili-lime', price: 9 },
      { name: 'Samosa', desc: 'Pâte dorée garnie de légumes épicés et de chutney à la menthe (6 pcs)', price: 9 },
      { name: 'Pakora d\'Oignon', desc: 'Beignets d\'oignon croustillants aux épices et feuilles de curry', price: 8 },
    ],
  },
  dosa: {
    title: 'Dosa – Idli – Vada',
    note: 'Servi avec Sambar et Chutney',
    items: [
      { name: 'Masala Dosa', desc: 'Dosa croustillant farci d\'une masala de pommes de terre parfumée', price: 18 },
      { name: 'Dosa Nature', desc: 'Une crêpe délicate dorée de riz et lentilles, croustillante à la perfection', price: 17 },
      { name: 'Idli', desc: 'Gâteaux de riz cuits à la vapeur, légers et aériens avec une légère acidité', price: 16 },
      { name: 'Uthappam', desc: 'Une épaisse crêpe de riz et lentilles garnie de légumes frais', price: 17 },
      { name: 'Uthappam au Paneer', desc: 'Uthappam moelleux garni de paneer épicé et de légumes du jardin', price: 18 },
      { name: 'Vada', desc: 'Beignet de lentilles croustillant avec un centre moelleux, assaisonné d\'épices aromatiques', price: 9 },
    ],
  },
  seafood: {
    title: 'Fruits de Mer',
    note: 'Les plats principaux de plus de 15 $ sont accompagnés de riz basmati ou de porotta du Kerala',
    items: [
      { name: 'Masala de Homard Venad', desc: 'Homard dans une sauce rouge riche et épicée avec des saveurs côtières prononcées', price: 32 },
      { name: 'Masala de Crevettes', desc: 'Crevettes cuites à la perfection dans une sauce rouge riche et épicée', price: 17 },
      { name: 'Elayil Pollichathu', desc: 'Saumon mariné à la masala, enveloppé dans une feuille de bananier et délicatement grillé', price: 27 },
      { name: 'Curry de Poisson Roi', desc: 'Poisson roi mijoté doucement dans un mélange signature d\'épices côtières et de tamarin acidulé', price: 23 },
      { name: 'Curry de Crevettes Kochin', desc: 'Crevettes tendres cuites doucement dans un curry léger au lait de coco', price: 22 },
      { name: 'Saumon Aleppy', desc: 'Saumon délicatement cuit au lait de coco, infusé de curcuma, piment et tamarin', price: 22 },
    ],
  },
  chicken: {
    title: 'Poulet',
    note: 'Les plats principaux de plus de 15 $ sont accompagnés de riz basmati ou de porotta du Kerala',
    items: [
      { name: 'Poulet Kodanadu', desc: 'Pâte de noix de coco rôtie et mélange d\'épices secret du chef', price: 23 },
      { name: 'Kerala Kozhi', desc: 'Curry de poulet traditionnel du Kerala avec sauce au lait de coco', price: 21 },
      { name: 'Poulet Beurre', desc: 'Poulet mariné tandoori cuit dans une sauce crémeuse aux noix de cajou, oignon et tomate', price: 21 },
    ],
  },
  beef: {
    title: 'Bœuf',
    note: 'Les plats principaux de plus de 15 $ sont accompagnés de riz basmati ou de porotta du Kerala',
    items: [
      { name: 'Rôti de Bœuf Naadan', desc: 'Lentement rôti dans des épices authentiques du Kerala et des oignons', price: 24 },
      { name: 'Bœuf Frit', desc: 'Sauté dans une masala et des morceaux de noix de coco', price: 25 },
      { name: 'Curry de Bœuf', desc: 'Curry de bœuf traditionnel cuit dans une sauce à la noix de coco', price: 23 },
    ],
  },
  lamb: {
    title: 'Agneau',
    note: 'Les plats principaux de plus de 15 $ sont accompagnés de riz basmati ou de porotta du Kerala',
    items: [
      { name: 'Agneau au Poivre', desc: 'Agneau cuit lentement dans une sauce aux poivres indiens', price: 22 },
      { name: 'Khorma d\'Agneau', desc: 'Morceaux tendres d\'agneau dans une sauce lisse à la noix de coco', price: 22 },
    ],
  },
  vegetarian: {
    title: 'Végétarien',
    note: 'Les plats principaux de plus de 15 $ sont accompagnés de riz basmati ou de porotta du Kerala',
    items: [
      { name: 'Khorma de Paneer aux Épinards', desc: 'Paneer dans une sauce crémeuse et délicatement épicée aux épinards', price: 21 },
      { name: 'Paneer Peas Makhanwala', desc: 'Paneer et petits pois dans une sauce crémeuse et beurrée aux noix de cajou', price: 21 },
      { name: 'Khorma de Légumes', desc: 'Légumes de saison dans un mélange parfumé de noix de coco et d\'épices', price: 19 },
      { name: 'Champignons Neelagiri', desc: 'Champignons dans une sauce crémeuse au lait de coco', price: 20 },
      { name: 'Aubergine', desc: 'Aubergine rôtie dans une sauce audacieuse au tamarin, piment et ail-gingembre', price: 13 },
      { name: 'Rôti d\'Œufs', desc: 'Œufs durs dans une sauce épaisse et épicée aux oignons', price: 18 },
    ],
  },
  biriyani: {
    title: 'Biriyani',
    note: 'Tous les biriyanis sont servis avec un raitha (mélange de yaourt) et un achar (cornichon indien épicé)',
    intro: 'Riz basmati parfumé en couches avec des épices aromatiques et cuit lentement à l\'étouffée dans le style dum traditionnel, permettant à chaque grain d\'absorber des saveurs profondes et riches. Servi avec votre choix de bœuf, poulet, crevettes, œufs ou légumes.',
    items: [
      { name: 'Bœuf', desc: '', price: 22 },
      { name: 'Poulet', desc: '', price: 21 },
      { name: 'Crevettes', desc: '', price: 21 },
      { name: 'Œuf', desc: '', price: 18 },
      { name: 'Légume', desc: '', price: 17 },
    ],
  },
  dessert: {
    title: 'Desserts',
    note: null,
    items: [
      { name: 'Payasam aux Vermicelles', desc: 'Pouding au lait crémeux avec des vermicelles grillés, de la cardamome et des noix grillées', price: 8 },
      { name: 'Payasam aux Lentilles', desc: 'Pouding aux lentilles sucrées avec jaggery, lait de coco et épices chaudes', price: 8 },
      { name: 'Gulab Jamun', desc: 'Beignets de lait moelleux trempés dans un sirop parfumé à la rose et à la cardamome', price: 8 },
      { name: 'Gulab Jamun avec Crème Glacée', desc: 'Gulab Jamun servi avec une délicieuse crème glacée à la vanille', price: 10 },
      { name: 'Crème Glacée', desc: 'Demandez à votre serveur quelle saveur est disponible aujourd\'hui!', price: 6 },
    ],
  },
  sides: {
    title: 'Accompagnements',
    note: null,
    items: [
      { name: 'Riz Basmati', desc: 'Riz aromatique à grains longs, léger, moelleux et délicatement parfumé', price: 5 },
      { name: 'Riz du Kerala', desc: 'Matta, ou riz rouge du Kerala avec une texture ferme et une saveur riche', price: 6 },
      { name: 'Porotta du Kerala', desc: 'Pain plat feuilleté et croustillant à l\'extérieur avec des couches moelleuses', price: 3 },
    ],
  },
  extras: {
    title: 'Suppléments',
    note: null,
    items: [
      { name: 'Sambar', desc: '', price: 3 },
      { name: 'Chutneys', desc: '', price: 1.50 },
    ],
  },
};

const SectionDivider = ({ title }: { title: string }) => (
  <div className="menu__section-divider">
    <span className="menu__section-line" />
    <h2 className="menu__section-title">{title.split('').join(' ')}</h2>
    <span className="menu__section-line" />
  </div>
);

const Menu = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const data = language === 'en' ? menuDataEN : menuDataFR;

  const renderGrid = (items: typeof data.appetizers.items) => (
    <div className="menu__grid">
      {items.map((item, i) => (
        <div key={i} className="menu__item">
          <div className="menu__item-header">
            <span className="menu__item-name">{item.name}</span>
            <span className="menu__item-price">${Number.isInteger(item.price) ? item.price : item.price.toFixed(2)}</span>
          </div>
          {item.desc && <p className="menu__item-desc">{item.desc}</p>}
        </div>
      ))}
    </div>
  );

  const renderBiriyaniList = (items: typeof data.biriyani.items) => (
    <div className="menu__biriyani-list">
      {items.map((item, i) => (
        <div key={i} className="menu__biriyani-row">
          <span className="menu__item-name">{item.name}</span>
          <span className="menu__item-price">${item.price}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="menu-page">
      {/* Header */}
      <div className="menu-page__header">
        <button className="menu-page__back" onClick={() => navigate('/')}>← {language === 'en' ? 'Back' : 'Retour'}</button>
        <h1 className="menu-page__logo">KOCHIN KITCHEN</h1>
        <p className="menu-page__subtitle">{language === 'en' ? 'Menu – Eat In & Takeaway' : 'Menu – Sur Place & À Emporter'}</p>
      </div>

      <div className="menu-page__content">

        {/* Appetizers */}
        <SectionDivider title={data.appetizers.title} />
        {renderGrid(data.appetizers.items)}

        {/* Dosa */}
        <SectionDivider title={data.dosa.title} />
        {renderGrid(data.dosa.items)}
        {data.dosa.note && <p className="menu__note menu__note--italic">{data.dosa.note}</p>}

        {/* Seafood */}
        <SectionDivider title={data.seafood.title} />
        {renderGrid(data.seafood.items)}
        {data.seafood.note && <p className="menu__note">{data.seafood.note}</p>}

        {/* Chicken */}
        <SectionDivider title={data.chicken.title} />
        {renderGrid(data.chicken.items)}

        {/* Beef */}
        <SectionDivider title={data.beef.title} />
        {renderGrid(data.beef.items)}

        {/* Lamb */}
        <SectionDivider title={data.lamb.title} />
        {renderGrid(data.lamb.items)}

        {/* Vegetarian */}
        <SectionDivider title={data.vegetarian.title} />
        {renderGrid(data.vegetarian.items)}

        {/* Biriyani */}
        <SectionDivider title={data.biriyani.title} />
        <p className="menu__biriyani-intro">{data.biriyani.intro}</p>
        {data.biriyani.note && <p className="menu__note menu__note--small">{data.biriyani.note}</p>}
        {renderBiriyaniList(data.biriyani.items)}

        {/* Dessert */}
        <SectionDivider title={data.dessert.title} />
        {renderGrid(data.dessert.items)}

        {/* Sides */}
        <SectionDivider title={data.sides.title} />
        {renderGrid(data.sides.items)}

        {/* Extras */}
        <SectionDivider title={data.extras.title} />
        {renderGrid(data.extras.items)}

        <p className="menu__footer-note">
          {language === 'en'
            ? 'Come and enjoy our rotating specials of the week on the weekends!'
            : 'Venez profiter de nos spéciaux rotatifs de la semaine les week-ends!'}
        </p>
      </div>
    </div>
  );
};

export default Menu;
