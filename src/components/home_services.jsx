import React, { useEffect, useState } from "react";
import "../css/home_services.css";

const content = {
  digitalMarketing: {
    title: "Digital Marketing",
    para_1:
      "Invention Minds stands out among the myriad of online marketing firms by treating each client as a unique project. We customize our services to develop tailored strategies and individual plans, ensuring that every business receives personalized attention. Our team is dedicated to elevating your brand through conversion-optimized websites and targeted digital marketing solutions, focusing on exponential growth and enhanced online presence.",
    para_2:
      "With a committed team of experts in SEO, social media marketing, PPC, and a holistic approach to digital marketing, Invention Minds is your trusted partner in reaching your potential customers effectively. We specialize in designing and developing successful digital marketing solutions, offering a comprehensive range of services from content development to digital campaigns and brand advertising. Our goal is to deliver high ROI and establish a strong online presence for businesses across diverse industries.",
    btn_cls: "btns color_1",
  },
  websiteDevelopment: {
    title: "Web Designing and Web Development",
    para_1:
      "Crafting a unique online presence is crucial, as your website serves as your digital identity. Web development encompasses a range of projects, from simple static web pages to complex internet applications, electronic businesses, or social network services. Similar to advertisements, a website's function is to impress customers with the aesthetics and presentation of your products and services while offering comprehensive information about your company.",
    para_2:
      "At Invention Minds, we understand the significance of a business website and offer creative web design services to meet your digital requirements. We cater to businesses of all sizes. Our services blend creative conception, brand sensitivity, technical expertise, and design execution. We priorities engaging, informative, and user-friendly designs to make a positive impression on every visitor. Depending on your needs, we can incorporate graphics, special effects, videos, audio, and more into the website",
    btn_cls: "btns color_2",
  },
  seo: {
    title: "SEO For Any Business",
    para_1:
      "We specialize in providing SEO services for businesses of all kinds. Our expert team employs a variety of techniques to enhance your website's popularity with search engines, ensuring a robust online presence. Experience high rankings and a significant boost in traffic with our dedicated SEO solutions.",
    para_2: null,
    btn_cls: "btns color_3",
  },
  UiUx: {
    title: "UI & UX Design",
    para_1:
      "The success of a website hinges greatly on its User Interface (UI) and User Experience (UX). The UI encompasses the visual elements of a site, from its color schemes to typography, ensuring a cohesive and aesthetically pleasing design that resonates with the brand identity. Equally important is the UX, which focuses on the overall experience of the user. This involves understanding the target audience through research and crafting a journey that is intuitive and seamless. Clear navigation, responsive design across various devices, and accessibility features are paramount for a positive UX. Additionally, incorporating feedback loops and iterative design processes enable continuous improvement. By prioritizing both UI and UX, a website can effectively engage users, foster trust, and drive conversions.",
    para_2: null,
    btn_cls: "btns color_4",
  },
};

const AccordianCard = () => {
  const [activetab, setActiveTab] = useState("digitalMarketing");
  const [buttonCls_1, SetButtonCls_1] = useState("hide");
  const [buttonCls_2, SetButtonCls_2] = useState("button" + " " + "color_2");
  const [buttonCls_3, SetButtonCls_3] = useState("button" + " " + "color_3");
  const [buttonCls_4, SetButtonCls_4] = useState("button" + " " + "color_4");
  const [description, setDescriptionCls] = useState("hide");
  const [cardAnime_1, setCardAnime_1] = useState("card_1");
  const [cardAnime_2, setCardAnime_2] = useState("hide");
  const [cardAnime_3, setCardAnime_3] = useState("hide");
  const [cardAnime_4, setCardAnime_4] = useState("hide");
  const [contentAnime, setContentAnime] = useState("content")



  const btn_1 = () => {
    setActiveTab("digitalMarketing");
    setDescriptionCls("card_caption" + "_1" + " " + "color_1");
    SetButtonCls_1("hide");
    SetButtonCls_2("button" + " " + "color_2");
    SetButtonCls_3("button" + " " + "color_2");
    SetButtonCls_4("button" + " " + "color_2");
    setCardAnime_1("card_1");    
    setCardAnime_2('hide')
    setCardAnime_3('hide')
    setCardAnime_4('hide')
    setContentAnime("content")
};

  const btn_2 = () => {
    setActiveTab("websiteDevelopment");
    setDescriptionCls("card_caption" + "_2" + " " + "color_2");
    SetButtonCls_1("button" + " " + "color_2");
    SetButtonCls_2("hide");
    SetButtonCls_3("button" + " " + "color_2");
    SetButtonCls_4("button" + " " + "color_2");
    setCardAnime_1("hide");    
    setCardAnime_2('card_1')
    setCardAnime_3('hide')
    setCardAnime_4('hide')
    setContentAnime("content")
  };

  const btn_3 = () => {
    setActiveTab("seo");
    setDescriptionCls("card_caption" + "_3" + " " + "color_3");
    SetButtonCls_1("button" + " " + "color_2");
    SetButtonCls_2("button" + " " + "color_2");
    SetButtonCls_3("hide");
    SetButtonCls_4("button" + " " + "color_2");
    setCardAnime_1("hide");    
    setCardAnime_2('hide')
    setCardAnime_3('card_1')
    setCardAnime_4('hide')
    setContentAnime("content")
  };

  const btn_4 = () => {
    setActiveTab("UiUx");
    setDescriptionCls("card_caption" + "_4" + " " + "color_4");
    SetButtonCls_1("button" + " " + "color_2");
    SetButtonCls_2("button" + " " + "color_2");
    SetButtonCls_3("button" + " " + "color_2");
    SetButtonCls_4("hide");
    setCardAnime_1("hide");    
    setCardAnime_2('hide')
    setCardAnime_3('hide')
    setCardAnime_4('card_1')
    setContentAnime("content")
  };

  return (
    <div className="root_container">
      {/* leftside */}
      <div className="container_3">
        <div className="accordians">
            {/* card 1 */}
          <div className="box_1">
            <div className={cardAnime_1}>
              <div className="caption_container">
                <div className={description}>
                  {content.digitalMarketing.title}
                </div>
              </div>
            </div>
            <div className={buttonCls_1}>
              <button className="button color_1" onClick={() => btn_1()}>
                {content.digitalMarketing.title}
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className="box_1">
            <div className={cardAnime_2}>
              <div className="caption_container">
                <div className={description}>
                  {content.websiteDevelopment.title}
                </div>
              </div>
            </div>
            <div className={buttonCls_2}>
              <button className="button color_2" onClick={() => btn_2()}>
                {content.websiteDevelopment.title}
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className="box_1">
            <div className={cardAnime_3}>
              <div className="caption_container">
                <div className={description}>{content.seo.title}</div>
              </div>
            </div>
            <div className={buttonCls_3}>
              <button className="button color_3" onClick={() => btn_3()}>
                {content.seo.title}
              </button>
            </div>
          </div>
          {/* card 4 */}
          <div className="box_1">
            <div className={cardAnime_4}>
              <div className="caption_container">
                <div className={description}>{content.UiUx.title}</div>
              </div>
            </div>
            <div className={buttonCls_4}>
              <button className="button color_4" onClick={() => btn_4()}>
                {content.UiUx.title}
              </button>
            </div>
          </div>
        </div>
        <div className={contentAnime}>
      {/* rightside */}
      <div className="content">
        <div className="heading">{content[activetab].title}</div>
        <div className="para_1">{content[activetab].para_1}</div>
        <div className="para_1">{content[activetab].para_2}</div>
        <div className="content_button_container">
            <button className="explore_more">Explore More</button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AccordianCard;
