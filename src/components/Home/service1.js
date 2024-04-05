// refyndata_react/src/CartAnimation.css
import React from "react";
import { Link } from 'react-router-dom';
//import "./CartAnimation.css"; // refyndata_react/src/components/Home/CartAnimation.css

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional, adds smooth scrolling animation
  });
};

const CartAnimation = () => {
  return (
    <div>
      <div className="service_head_text font-poppins">
        <h1>We Expertise On This Fields</h1>
        <div className="service_sub_text">
          More than just services, we're your partner. We collaborate with you
          to <br /> understand your unique needs and deliver customized
          solutions that <br /> drive real results.
        </div>
      </div>

      {/* Consultancy */}
      <div className="Service_cart">
        <div className="cart_item">
          <div className="content">
            <div className="background_content">
              <span className="span_con"> Consultancy</span>
              <p className="cart_text">
                Unlock strategic business insights to transform your
                organization's performance with expert consultation.{" "}
              </p>
              <Link to="/services" onClick={scrollToTop}><button className="button_cart">More...</button></Link>  
            </div>
          </div>
          <div className="background"></div>
          <img
            className="item_images"
            src="home_image/service_image/consultation.png"
            alt="consultation"
          />

          <p className="serivce_text_on">Consultancy</p>
        </div>

        {/* Application Development */}
        <div className="cart_item">
          <div className="content">
            <div className="background_content">
              <span className="span_con"> Application Development</span>
              <p className="cart_text">
              Expert application development for seamless user experiences and optimal performance.{" "}
              </p>
              <Link to="/services" onClick={scrollToTop}><button className="button_cart">More...</button></Link>  
            </div>
          </div>
          <div className="background"></div>
          <img
            className="item_image"
            src="home_image/service_image/application_development.png"
            alt="consultation"
          />

          <p className="serivce_text_on">Application Development</p>
        </div>

        {/* Quality Analysis */}
        <div className="cart_item">
          <div className="content">
            <div className="background_content">
              <span className="span_con"> Project Management</span>
              <p className="cart_text">
              We identify opportunities for the improvement of your entire project management process .{" "}
              </p>
              <Link to="/services" onClick={scrollToTop}><button className="button_cart">More...</button></Link>  
            </div>
          </div>
          <div className="background"></div>
          <img
            className="item_image"
            src="home_image/service_image/project_management.png"
            alt="consultation"
          />

          <p className="serivce_text_on">Project Management</p>
        </div>
        {/* Big Data */}
        <div className="cart_item relative overflow-hidden border border-gray-200 rounded-lg cursor-pointer group">
    <div className="content absolute w-full h-full flex justify-center items-center bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform group-hover:-rotate-y-180">
        <div className="background_content text-center">
            <span className="span_con block text-xl font-bold text-blue-500">Big Data</span>
            <p className="cart_text mt-4 text-sm text-gray-600">
                Harness big data for actionable insights and strategic decision-making
            </p>
            <Link to="/services" onClick={scrollToTop} className="button_cart mt-4 inline-block bg-blue-500 text-white rounded px-4 py-2">More...</Link>  
        </div>
    </div>
    <div className="background absolute w-full h-full bg-blue-500 -z-10"></div>
    <img
        className="item_image w-24 h-24 transform group-hover:rotate-y-180 transition-transform duration-500 ease-in-out"
        src="home_image/service_image/big_data.png"
        alt="consultation"
    />
    <p className="serivce_text_on absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white font-bold group-hover:hidden">Big Data</p>
</div>


        {/* Business Analysis */}
        <div className="cart_item">
          <div className="content">
            <div className="background_content">
              <span className="span_con"> Business 
Analysis</span>
              <p className="cart_text">
              Business analysis uncovers insights for strategic planning and performance improvement.{" "}
              </p>
              <Link to="/services" onClick={scrollToTop}><button className="button_cart">More...</button></Link>  
            </div>
          </div>
          <div className="background"></div>
          
          <img
            className="item_image"
            src="home_image/service_image/business_analysis.png"
            alt="consultation"
          />

          <p className="serivce_text_on">Business <br></br>
Analysis</p>
          
          
          
        </div>

        {/* Mobile App Development */}
        <div className="cart_item">
          <div className="content">
            <div className="background_content">
              <span className="span_con"> Mobile App
Development </span>
              <p className="cart_text">
              Creating innovative, user-friendly mobile applications for seamless experiences{" "}
              </p>
              <Link to="/services" onClick={scrollToTop}><button className="button_cart">More...</button></Link>  
            </div>
          </div>
          <div className="background"></div>
          <img
            className="item_image"
            src="home_image/service_image/mobile.png"
            alt="consultation"
          />

          <p className="serivce_text_on">Mobile App
Development</p>
        </div>
      </div>
    </div>
  );
};

export default CartAnimation;
