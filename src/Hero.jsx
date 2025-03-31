import React from "react";
import heroImg from './assets/hero.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            consectetur maxime similique accusamus praesentium eum totam
            repudiandae consequuntur, porro dolor hic cumque nisi natus
            perspiciatis vel eligendi iusto dolorum illo!
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman" className="img"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
