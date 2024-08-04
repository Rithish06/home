import React from "react";
import '../css/home.css'
import Navbar from "./navbar";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="index_container">
          {/* container 1 */}
          <div className="container_1">
          <div className="main_nav">
            </div>
            
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

          {/* <div className="container_2">
            <div className="container_2_content">
                <div className="con_2_heading">Who we are</div>
                <div className="con_2_para">
                    Invention Minds team comes with a unique strategy and our market analyses are accurate and subject-orientated. We are best at providing consistently successful strategies, unique, and forward-thinking digital marketing solutions that consider each client’s individual requirements and unique demands.
                </div>
                <div className="con_2_para">
                    We pursue perfection via expertise, knowledge, and excellence. Our content is relevant and results-driven, as opposed to just creating links. We assist brands in understanding customer expectations and communicating this understanding in insightful language. The basic ideals at Invention Minds are quality over quantity, context over substance, and accuracy over-production.
                </div>
            </div>
            <div className="container_2_images">

            </div>
          </div> */}

        </div>
      </>
    );
  }
}

export default Home
