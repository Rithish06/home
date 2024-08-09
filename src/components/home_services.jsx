import React from "react";
import "../css/home_services.css";
import { useState } from "react";
import DigitalMarketing from "../assets/Rectangle 49.png";
import WebsiteDesignDevelopment from "../assets/Rectangle 50.png";
import SEOForAnyBusiness from "../assets/Rectangle 51.png";
import UIUXDesign from "../assets/Rectangle 52.png";

const content = {
    digitalMarketing: {
      title: "Digital Marketing",
      para_1:
        "Invention Minds stands out among the myriad of online marketing firms by treating each client as a unique project. We customize our services to develop tailored strategies and individual plans, ensuring that every business receives personalized attention. Our team is dedicated to elevating your brand through conversion-optimized websites and targeted digital marketing solutions, focusing on exponential growth and enhanced online presence.",
      para_2:
        "With a committed team of experts in SEO, social media marketing, PPC, and a holistic approach to digital marketing, Invention Minds is your trusted partner in reaching your potential customers effectively. We specialize in designing and developing successful digital marketing solutions, offering a comprehensive range of services from content development to digital campaigns and brand advertising. Our goal is to deliver high ROI and establish a strong online presence for businesses across diverse industries.",
      image: DigitalMarketing,
      btn_cls : "btns color_1"
    },
    websiteDevelopment: {
      title: "Web Designing and Web Development",
      para_1:
        "Crafting a unique online presence is crucial, as your website serves as your digital identity. Web development encompasses a range of projects, from simple static web pages to complex internet applications, electronic businesses, or social network services. Similar to advertisements, a website's function is to impress customers with the aesthetics and presentation of your products and services while offering comprehensive information about your company.",
      para_2:
        "At Invention Minds, we understand the significance of a business website and offer creative web design services to meet your digital requirements. We cater to businesses of all sizes. Our services blend creative conception, brand sensitivity, technical expertise, and design execution. We priorities engaging, informative, and user-friendly designs to make a positive impression on every visitor. Depending on your needs, we can incorporate graphics, special effects, videos, audio, and more into the website",
      image: WebsiteDesignDevelopment,
      btn_cls : "btns color_2",
    },
    seo: {
      title: "SEO For Any Business",
      para_1:
        "We specialize in providing SEO services for businesses of all kinds. Our expert team employs a variety of techniques to enhance your website's popularity with search engines, ensuring a robust online presence. Experience high rankings and a significant boost in traffic with our dedicated SEO solutions.",
      para_2: null,
      image: SEOForAnyBusiness,
      btn_cls : "btns color_3",
    },
    UiUx: {
      title: "UI & UX Design",
      para_1:
        "The success of a website hinges greatly on its User Interface (UI) and User Experience (UX). The UI encompasses the visual elements of a site, from its color schemes to typography, ensuring a cohesive and aesthetically pleasing design that resonates with the brand identity. Equally important is the UX, which focuses on the overall experience of the user. This involves understanding the target audience through research and crafting a journey that is intuitive and seamless. Clear navigation, responsive design across various devices, and accessibility features are paramount for a positive UX. Additionally, incorporating feedback loops and iterative design processes enable continuous improvement. By prioritizing both UI and UX, a website can effectively engage users, foster trust, and drive conversions.",
      para_2: null,
      image: UIUXDesign,
      btn_cls : "btns color_4"
    },
  };

const HomeSerevice = () => {
  const [activeTab, setActiveTab] = useState("digitalMarketing");
  const [animate, setAnimate] = useState(false);

  

  function handleTabChange(tab) {
    setActiveTab(tab);
    setAnimate(true);
  }

  return (
    <div className="root_container">
      <div className="sidebar">
        {Object.keys(content).map((key) => (
          <div key={key} className="button-container">
            {activeTab === key && (
              <img
                src={content[key].image}
                alt={content[key].title}
                className={`content-image ${animate ? "slide-down" : ""}`}
              />
            )}
            <button className={content[key].btn_cls} onClick={() => handleTabChange(key)}>
              {content[key].title}
            </button><br />
          </div>
        ))}
      </div>
      <div className="con_3_content">
        {activeTab && (
          <div className= "content">
            <div className= "heading">{content[activeTab].title}</div>
            <div className= "para_1">{content[activeTab].para_1}</div>
            <div class= "para_1 para_2">{content[activeTab].para_2}</div>
            <button className = "explore_more_btn">Explore More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSerevice;
