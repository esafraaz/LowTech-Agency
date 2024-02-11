import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: "Crafting innovative mobile apps for seamless user experiences, blending functionality and satisfaction in every interaction and quality.",
  },

  {
    icon: "ri-code-s-slash-line",
    title: "Web Design",
    desc: "Transforming visions into captivating web designs, harmonizing creativity and functionality for visually stunning, user-friendly websites.",
  },

  {
    icon: "ri-landscape-line",
    title: "Graphics Design",
    desc: "Unlocking visual storytelling's power, we create eye-catching designs communicating your brand message effectively across various mediums."
  },

  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Ignite your brand's online presence with our strategic solutions, from targeted campaigns to engaging content for impactful digital experiences."
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight"> our best services</h2>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
