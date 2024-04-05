import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional, adds smooth scrolling animation
  });
};

const Footer = () => {
  return (
    <footer className="mt-12 md:pl-10 py-10 z-50 bg-[#F2F5F8] font-poppins  mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 sm:gap-x-10 md:gap-x-20 lg:gap-x-[80px] px-10 md:px-10 lg:px-5">
          {/* Column 1 */}
          <div className="  mb-4 md:mb-0">
          <Link to="/" onClick={scrollToTop}><h3 className=" text-xl md:text-2xl font-semibold mb-3">Refyndata</h3></Link>
            {/* <img
              src="/footer/E-Verify_Logo-2x.png"
              alt="company_verification"
              className="h-8 md:h-10 mb-3 "
            /> */}
            <p className="mb-3">
            Bridging the gap between employees and employers with expert consulting services.
            </p>
          </div>

          {/* Column 2 */}
          {/* <div className="mb-4 md:mb-0 text-[#0B1320]">
            <h3 className="text-xl font-semibold mb-3">Company</h3>
            <div className="flex flex-col">
              <a href="/about" className=" mb-3 transform transition-transform hover:translate-y-[-5px]" onClick={scrollToTop}>
                About Us
              </a>
              <a href="/services" className=" mb-3 transform transition-transform hover:translate-y-[-5px]">
                Services
              </a>
              <a href="/careers" className="mb-3  transform transition-transform hover:translate-y-[-5px]">
                Career
              </a>
              <a href="/clients" className=" mb-3 transform transition-transform hover:translate-y-[-5px]">
                Clients
              </a>
              
            </div>
          </div> */}

          {/* Column 3 */}
          <div className="mb-4 md:mb-0 text-[#0B1320]">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
           
            <a href="tel:+1 301-591-0989" className="mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1 text-[15px] md:text-[16px]">Contact: +1 301-591-0989 ext: 403</a>
            <br></br> 
            <a href="mailto:example@example.com" className="text-[15px] md:text-[16px] mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1">Email: info@refyndata.com</a>

            <br></br>
            <a href="/contact" className="mb-2 md:mb-3 inline-block transition-transform hover:-translate-y-1 text-[15px] md:text-[16px]"> Write to Us
            </a>
          </div>

          {/* Column 4 */}
          <div className="mb-4 md:mb-0 text-[#0B1320] ">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="">
              <a
                href="https://www.linkedin.com/in/refyn-d-47489b21/"
                className="inline-flex mb-3 transform transition-transform hover:translate-y-[-5px] "
                target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="mr-2 my-auto text-[#0A66C2]"/>LinkedIn 
                  
              </a>
              {/* <a href="#" className=" block mb-3 transform transition-transform hover:translate-y-[-5px]">
                Twitter
              </a>
              <a href="#" className="mb-3  block transform transition-transform hover:translate-y-[-5px]">
                Facebook
              </a> */}
            </div>
          </div>
        </div>
        {/* Line below the footer */}
        <div className="border-t border-gray-600 my-4 mx-5">
          <div className="container mx-auto">
            <div className="flex justify-between items-center text-[#0B1320]">
              <p className="text-xs ">Refyndata @ 2024 All rights reserved</p>
              <div className="flex space-x-4">
                <a href="#" className=" text-xs">
                  Terms and Conditions
                </a>
                <a href="#" className="text-xs">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


{/* 
<Link to="/" >Home</Link>
<Link to="/about" ></Link>
<Link to="/services" ></Link>
<Link to="/careers" ></Link>
<Link to="/clients" ></Link>
<Link to="/contact" ></Link> 
*/}