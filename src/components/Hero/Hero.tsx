import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/*
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      */}
            <div className="hero__overlay" />
            <div className="hero__content">
                <h1 className="hero__title">KOCHIN KITCHEN</h1>
            </div>
            <div className="hero__scroll-hint">↓</div>
        </section>
    );
};

export default Hero;