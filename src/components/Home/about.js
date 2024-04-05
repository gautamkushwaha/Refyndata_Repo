// components/AboutUs.js

import React from 'react';

export default function AboutUs() {
  return (
    <section className="bg-[#F2F5F8] py-5 md:py-8 lg:py-12 font-poppins mx-auto ">
      <div className="container mx-auto">
        {/* About Us Heading */}
        <div className="text-center mb-8 px-50 pb-5">
          <h2 className=" text-2xl lg:text-3xl font-bold pb-5">What makes us different?</h2>
          <p className="text-gray-600 mt-2 px-50  w-[100%] md:w-[90%]  text-center mx-1 md:mx-auto text-[15px] lg:text-[17px]">
            <span>At REFYNDATA</span> IS A BUSINESS PLATFORM BUILT ON SPECIALIZED TECHNOLOGY AND IT-RELATED SERVICES, RUN BY A BUNCH OF SMART, KNOWLEDGEABLE, AND EXPERIENCED PEOPLE.</p>
        </div>

        {/* Read More Link */}
        {/* <div className="text-center mb-8">
          <a href="#" className="text-blue-500 font-semibold text-lg">More about us &gt;</a>
        </div> */}

        {/* Card Section */}
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 sm:px-3 md:px-5 lg:px-20">
          {/* Card 1 */}
          <div className=" overflow-hidden">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="home_image/about_us/exclusive.svg" alt="exlusive service" className="w-16 h-16 rounded-full object-cover object-center" />
            </div>
            <div className="m-2 ">
              <h3 className="text-xl font-semibold mb-2 text-center ">Exclusive Service</h3>
              <p className="text-gray-600 text-center">We serve small, medium, and large scale organizations with the belief that no business or technological initiative is too difficult for us to handle</p>
            </div>
          </div> 

          {/* Card 2 */}
          <div className=" overflow-hidden">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="home_image/about_us/superfast.svg" alt="superFast" className="w-16 h-16 rounded-full object-cover object-center" />
            </div>
            <div className="m-2 ">
              <h3 className="text-xl font-semibold mb-2 text-center ">Super Fast </h3>
              <p className="text-gray-600 text-center">From cloud migration to managed IT, Refyn Data's quick-deploy solutions & top talent get you online and optimized - fast</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" overflow-hidden">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <img src="home_image/about_us/quality_r.svg" alt="Best Quality" className="w-16 h-16 rounded-full object-cover object-center" />
            
            </div>
            <div className="m-2 ">
              <h3 className="text-xl font-semibold mb-2 text-center ">Best Quality</h3>
              <p className="text-gray-600 text-center">Refyn Data's top-notch IT solutions go beyond fixing problems. They proactively optimize your systems, ensuring smooth sailing for your business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// /Users/gautam/Desktop/untitled folder/refyndata_react/src/components/Home/about.js