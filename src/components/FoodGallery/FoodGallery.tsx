import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FoodGallery.css';

const foodImages = [
  { img: 'food1.png', title: 'Signature Dish', sub: 'Kerala cuisine' },
  { img: 'food2.png', title: 'Fresh Catch', sub: 'Coastal flavours' },
  { img: 'food3.png', title: 'Sharing Platter', sub: 'Designed to share' },
  { img: 'food4.png', title: 'Spice Route', sub: 'Aromatic spices' },
];

const FoodGallery = () => {
  const { language } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!trackRef.current || !barRef.current) return;
    const el = trackRef.current;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    barRef.current.style.width = `${progress * 100}%`;
  };

  return (
    <section className="foodgallery">
      <div className="foodgallery__track" ref={trackRef} onScroll={handleScroll}>
        {foodImages.map((item, i) => (
          <div className="foodgallery__card" key={i}>
            <div className="foodgallery__img-wrap">
              {/* Replace with <img src={`/src/assets/images/${item.img}`} alt={item.title} /> */}
              <div className="foodgallery__placeholder">{item.img}</div>
            </div>
            <div className="foodgallery__card-body">
              <p className="foodgallery__card-sub">{item.sub}</p>
              <h3 className="foodgallery__card-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="foodgallery__progress-track">
        <div className="foodgallery__progress-bar" ref={barRef} />
      </div>
    </section>
  );
};

export default FoodGallery;