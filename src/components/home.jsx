import React from "react";
import "../css/home.css";
import { useForm } from "react-hook-form";
import Navbar from "./navbar";
import HomeSerevice from "./home_services";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const logos = [
    "/Home_page/Aksha.png",
    "/Home_page/Rashtrotthana.png",
    "/Home_page/ssrvm.png",
    "/Home_page/Dspace.png",
    "/Home_page/VDental.png",
    "/Home_page/Sapients.png",
];

  return (
    <>
      <div className="index_container">
        {/* container 1 */}
        <div className="container_1">
          <div className="main_nav"></div>

          {/* container 1 animation */}
          <div className="container_1_animation">
            <div className="big_ellipse_box">
              <div className="big_elipse orange_ellipse"></div>
              <div className="big_elipse blue_ellipse"></div>
            </div>
            <div className="small_ellipse_box">
              <div className="small_elipse small_orange_ellipse"></div>
              <div className="small_elipse small_blue_ellipse"></div>
            </div>
          </div>
        </div>

        {/* container 1 content */}
        <div className="con_1_contents">
          <div className="welcome_im">Welcome to Invention Minds</div>
          <div className="con_1_head">We Partner With You</div>
          <div className="caption">To Drive Business Growth</div>
          <button className="learn_more">
            Learn More{" "}
            <span className="material-symbols-outlined">call_made</span>
          </button>
        </div>

        {/* container 2 */}

        <div className="container_2">
          <div className="container_2_content">
            <div className="container_2_heading">Who we are</div>
            <div className="container_2_para">
              Invention Minds team comes with a unique strategy and our market
              analyses are accurate and subject-orientated. We are best at
              providing consistently successful strategies, unique, and
              forward-thinking digital marketing solutions that consider each
              client’s individual requirements and unique demands.
            </div>
            <div className="container_2_para">
              We pursue perfection via expertise, knowledge, and excellence. Our
              content is relevant and results-driven, as opposed to just
              creating links. We assist brands in understanding customer
              expectations and communicating this understanding in insightful
              language. The basic ideals at Invention Minds are quality over
              quantity, context over substance, and accuracy over-production.
            </div>
          </div>
          <div className="scroller">
            <div className="scroll_1">
              <div className="scroll_images_1">
                <img src="/Home_page/Rectangle 37.png" alt="Image 1" />
                <img src="/Home_page/Rectangle 38.png" alt="Image 2" />
                <img src="/Home_page/Rectangle 39.png" alt="Image 3" />
                <img src="/Home_page/Rectangle 40.png" alt="Image 4" />
              </div>

              <div className="scroll_images_1">
                <img src="/Home_page/Rectangle 37.png" alt="Image 1" />
                <img src="/Home_page/Rectangle 38.png" alt="Image 2" />
                <img src="/Home_page/Rectangle 39.png" alt="Image 3" />
                <img src="/Home_page/Rectangle 40.png" alt="Image 4" />
              </div>

            </div>
            <div className="scroll_2">
              <div className="scroll_images_2">
                <img src="/Home_page/Rectangle 41.png" alt="Image 1" />
                <img src="/Home_page/Rectangle 42.png" alt="Image 2" />
                <img src="/Home_page/Rectangle 43.png" alt="Image 3" />
                <img src="/Home_page/Rectangle 44.png" alt="Image 4" />
              </div>

              <div className="scroll_images_2">
                <img src="/Home_page/Rectangle 41.png" alt="Image 1" />
                <img src="/Home_page/Rectangle 42.png" alt="Image 2" />
                <img src="/Home_page/Rectangle 43.png" alt="Image 3" />
                <img src="/Home_page/Rectangle 44.png" alt="Image 4" />
              </div>
            </div>
          </div>
        </div>

        {/* container 3 */}
        {/* <div className="container_3">
          <HomeSerevice />
        </div> */}

        {/* container 4 */}

        <div className="container_4">
          <div className="vision">
            <div className="vision_heading">Vision</div>
            <div className="vision_para">
              Empower brands through cutting-edge digital prowess. We envision a
              dynamic agency that pioneers creativity, leverages data insights
              and forges authentic connections. Our mission: catalyze business
              growth by crafting strategies that redefine digital marketing's
              impact.
            </div>
          </div>
          <div className="mission">
            <div className="mission_heading">Mission</div>
            <div className="mission_para">
              Our mission statement serves as a constant reminder that we want
              to build happy teams who, in turn, build satisfied clients. Our
              company depends heavily on its clients, therefore keeping them
              happy is key.
            </div>
          </div>
        </div>

        {/* container 5 */}

        <div className="container_5">
          <div className="container_5_heading">Our Clients</div>
          <div className="client_logos">
            <div className="images">
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt="" className="clien_logo_img" />
              ))}
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt="" className="clien_logo_img" />
              ))}
              {logos.map((logo, index) => (
                <img key={index} src={logo} alt="" className="clien_logo_img" />
              ))}
            </div>
          </div>
        </div>

        {/* container 6 */}

        <div className="container_6">
          <div className="con_6_left_side">
            <img src="/Home_page/container_6.png" alt="" />
          </div>
          <div className="con_6_form">
            <div className="join_us">JOIN US</div>
            <div className="rootElement">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}

                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-z]}$/,
                      message: "Invalid Name (must be A-Z or a-z)",
                    },
                  })}
                  placeholder="Name"
                  className="form_input name"
                />
                {errors.phone && (
                  <span className="error_msg">{errors.name.message}</span>
                )}

                {/* email */}

                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email",
                    },
                  })}
                  placeholder="email"
                  className="form_input email"
                />
                {errors.phone && (
                  <span className="error_msg">{errors.email.message}</span>
                )}

                {/* Phone Number */}

                <input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number (must be 10 digits)",
                    },
                  })}
                  placeholder="Phone Number"
                  className="form_input phone_number"
                />
                {errors.phone && (
                  <span className="error_msg">{errors.phone.message}</span>
                )}

                {/* Select */}

                <select
                  id="selection"
                  {...register("selection", {
                    required: "Selection is required",
                  })}
                  className="form_input form_select"
                >
                  <option className="form_dropdown" value="">
                    Select Category
                  </option>
                  <option className="option" value="option1">
                    Option 1
                  </option>
                  <option className="option" value="option2">
                    Option 2
                  </option>
                  <option className="option" value="option3">
                    Option 3
                  </option>
                </select>
                {errors.selection && (
                  <span className="error_msg">{errors.selection.message}</span>
                )}

                {/* button */}
                <div className="form_btn">
                  <button className="Submit_button">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
