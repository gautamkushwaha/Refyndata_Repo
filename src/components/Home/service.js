import React from "react";
import { Link } from "react-router-dom";
import "./flipanimation.css"; // refyndata_react/src/components/Home/CartAnimation.css

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional, adds smooth scrolling animation
  });
};

const CartAnimation = () => {
  return (
    <div>
      <div className="py-10 font-poppins text-center">
        <h1 className="font-bold lg:text-3xl md:text-2xl py-2 mt-5">
          We Expertise On This Fields
        </h1>
        <div className="pb-2">
          More than just services, we're your partner. We collaborate with you
          to understand your unique needs and deliver customized <br />{" "}
          solutions that drive real results.
        </div>
      </div>

      {/* Consultancy */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-7 lg:gap-10  mx-[65px] md:mx-[20px] pro:mx-[100px] lg:mx-[200px]">
        {/* first cart */}
        <div class="scene">
          <div className="w-[250px] h-[225px] md:w-[312px] md:h-[290px]">
            <div className="card rounded-sm z-100   shadow-2xl">
              <div className="card-face front relative ">
                {/* Image as a background covering the whole card */}
                <img
                  src="./home_image/service_image/consultation.png"
                  alt="Service"
                  className="rounded-[10px] w-[100%] h-[100%] object-cover absolute top-0 left-0 z-0"
                />
                {/* Text overlay with semi-transparent background for readability */}
                <div class="absolute bottom-0 left-0 w-full flex justify-center items-end">
                  <span class="text-white text-xl bg-black bg-opacity-50 w-full text-center py-2 rounded-[10px]">
                    consultancy
                  </span>
                </div>
              </div>
              <div className="card-face back flex justify-center items-center">
                <h3 class="text-xl font-bold">Consultancy</h3>
                <p className="px-5 py-2">
                  Unlock strategic business insights to transform your
                  organization's performance with expert consultation.
                </p>
                <Link to="/services" > <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  More...
                </button></Link>
              </div>
            </div>
          </div>
        </div>

        <div class="scene">
          <div className="w-[250px] h-[225px] md:w-[312px] md:h-[290px]">
            <div className="card rounded-sm z-100  shadow-2xl">
              <div className="card-face front relative">
                {/* Image as a background covering the whole card */}
                <img
                  src="./home_image/service_image/mobile_development.png"
                  alt="Service"
                  className="rounded-[10px] w-[100%] h-[100%] object-cover absolute top-0 left-0 z-0"
                />
                {/* Text overlay with semi-transparent background for readability */}
                <div class="absolute bottom-0 left-0 w-full flex justify-center items-end">
                  <span class="text-white text-xl bg-black bg-opacity-50 w-full text-center py-2 rounded-[10px]">
                    Mobile App Development
                  </span>
                </div>
              </div>
              <div className="card-face back flex justify-center items-center">
                <h3 class="text-xl font-bold ">
                  Mobile App <br></br> Development
                </h3>
                <p className="px-5 py-2">
                  Creating innovative, user-friendly mobile applications for
                  seamless experiences
                </p>
                <Link to="/services" > <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  More...
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div class="scene">
          <div className="w-[250px] h-[225px] md:w-[312px] md:h-[290px]">
            <div className="card rounded-sm z-100  shadow-2xl">
              <div className="card-face front relative">
                {/* Image as a background covering the whole card */}
                <img
                  src="./home_image/service_image/project_management.png"
                  alt="Service"
                  className="rounded-[10px] w-[100%] h-[100%] object-cover absolute top-0 left-0 z-0"
                />
                {/* Text overlay with semi-transparent background for readability */}
                <div class="absolute bottom-0 left-0 w-full flex justify-center items-end">
                  <span class="text-white text-xl bg-black bg-opacity-50 w-full text-center py-2 rounded-[10px]">
                    Project Management
                  </span>
                </div>
              </div>
              <div className="card-face back flex justify-center items-center">
                <h3 class="text-xl font-bold"> Project Management</h3>
                <p className="px-5 py-2">
                  {" "}
                  We identify opportunities for the improvement of your entire
                  project management process .
                </p>
                <Link to="/services" > <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  More...
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div class="scene">
          <div className="w-[250px] h-[225px] md:w-[312px] md:h-[290px]">
            <div className="card rounded-sm z-100  shadow-2xl">
              <div className="card-face front relative">
                {/* Image as a background covering the whole card */}
                <img
                  src="./home_image/service_image/big_data.png"
                  alt="Service"
                  className="rounded-[10px] w-[100%] h-[100%] object-cover absolute top-0 left-0 z-0"
                />
                {/* Text overlay with semi-transparent background for readability */}
                <div class="absolute bottom-0 left-0 w-full flex justify-center items-end">
                  <span class="text-white text-xl bg-black bg-opacity-50 w-full text-center py-2 rounded-[10px]">
                    Big Data
                  </span>
                </div>
              </div>
              <div className="card-face back flex justify-center items-center">
                <h3 class="text-xl font-bold">Big Data</h3>
                <p className="px-5 py-2">
                  Harness big data for actionable insights and strategic
                  decision-making
                </p>
                <Link to="/services" > <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  More...
                </button></Link>
              </div>
            </div>
          </div>
        </div>
        <div class="scene">
          <div className="w-[250px] h-[225px] md:w-[312px] md:h-[290px]">
            <div className="card  rounded-sm z-100  shadow-2xl">
              <div className="card-face front relative">
                {/* Image as a background covering the whole card */}
                <img
                  src="./home_image/service_image/business_analysis.png"
                  alt="Service"
                  className=" rounded-[10px] w-[100%] h-[100%] object-cover absolute top-0 left-0 z-0"
                />
                {/* Text overlay with semi-transparent background for readability */}
                <div class="absolute bottom-0 left-0 w-full flex justify-center items-end">
                  <span class="text-white text-xl bg-black bg-opacity-50 w-full text-center py-2 rounded-[10px]">
                    Business Analysis
                  </span>
                </div>
              </div>
              <div className="card-face back flex justify-center items-center">
                <h3 class="text-xl font-bold">Business Analysis</h3>
                <p className="px-5 py-2">
                  Business analysis uncovers insights for strategic planning and
                  performance improvement.
                </p>
                <Link to="/services" > <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  More...
                </button></Link>
               
              </div>
            </div>
          </div>
        </div>
        <div class="scene">
          <div className="w-[250px] h-[225px] md:w-[312px] md:h-[290px]">
            <div className="card z-100  shadow-2xl">
              <div className="card-face front relative">
                {/* Image as a background covering the whole card */}
                <img
                  src="./home_image/service_image/application_development.png"
                  alt="Service"
                  className=" rounded-[10px] w-[100%] h-[100%] object-cover absolute top-0 left-0 z-0"
                />
                {/* Text overlay with semi-transparent background for readability */}
                <div class="absolute bottom-0 left-0 w-full flex justify-center items-end">
                  <span class="text-white text-xl bg-black bg-opacity-50 w-full text-center py-2 rounded-[10px]">
                    Application Development
                  </span>
                </div>
              </div>
              <div className="card-face back flex justify-center items-center">
                <h3 class="text-xl font-bold">
                  Application <br></br> Development
                </h3>
                <p className="px-5 py-2">
                  We identify opportunities for the improvement of your entire
                  project management process .
                </p>
                <Link to="/services" > <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                  More...
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAnimation;
