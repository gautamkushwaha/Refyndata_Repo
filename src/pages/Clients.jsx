
"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const logos = [
  { name_company: 'Client 1', logo: '/clients/amway.jpeg', alt: 'AMWAY', name: "AMWAY" },
  { name_company: 'Client 2', logo: '/clients/baptist.jpeg', alt: 'BAPTIST HEALTH CARE', name: "BAPTIST HEALTH CARE" },
  { name_company: 'Client 2', logo: '/clients/cisco.png', alt: 'CISCO', name: "CISCO" },
  { name_company: 'Client 2', logo: '/clients/ec_infosystems.png', alt: 'EC INFOSYSTEMS', name: "EC INFOSYSTEMS" },
  { name_company: 'Client 2', logo: '/clients/fox_entertainment.png', alt: 'FOX ENTERTAINMENT', name: "FOX ENTERTAINMENT"},
  { name_company: 'Client 2', logo: '/clients/HItachi_logo.png', alt: 'HITACHI', name: "HITACHI" },
  { name_company: 'Client 2', logo: '/clients/jp_morgan_chase.png', alt: 'JPMORGAN CHASE', name: "JPMORGAN CHASE" },
  { name_company: 'Client 2', logo: '/clients/marriot_international.png', alt: 'MARRIOTT INTERNATIONAL', name: "MARRIOTT INTERNATIONAL" },
  { name_company: 'Client 2', logo: '/clients/National_broadcast_company.png', alt: 'NATIONAL BROADCASTING COMPANY', name: "NATIONAL BROADCASTING COMPANY"},
  { name_company: 'Client 2', logo: '/clients/northwestern_mutual.png', alt: 'NORTHWESTERN MUTUAL', name: "NORTHWESTERN MUTUAL" },
  { name_company: 'Client 2', logo: '/clients/OneAmerica_sm_rgb.svg', alt: 'ONE AMERICA', name: "ONE AMERICA" },
  { name_company: 'Client 2', logo: '/clients/panera_bread.png', alt: 'PANERA BREAD', name: "PANERA BREAD" },
  { name_company: 'Client 2', logo: '/clients/ritz_carlton.jpeg', alt: 'RITZ CARLTON', name: "RITZ CARLTON" },
  { name_company: 'Client 2', logo: '/clients/service_now.png', alt: 'SERVICENOW', name: "SERVICENOW" },
  { name_company: 'Client 2', logo: '/clients/TRC.png', alt: 'TRC HEALTH CARE', name: "TRC HEALTH CARE " },
  { name_company: 'Client 2', logo: '/clients/verizons.png', alt: 'VERIZON', name: "VERIZON" },

];

const Clients = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const numCols = windowWidth > 768 ? 4 : 2; // Change to 768 for tablet breakpoint

  return (
      <div className="container mx-auto p-4 font-poppins sm:px-3 md:px-5 lg:px-20">
        <div className="mb-10">
        <h1 className="text-md font-bold"><Link to="/" >Home / Client</Link></h1>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold "> Our Clients</h2>
          <div className="flex-grow border-b border-gray-400"></div>
          {/* <hr className="border-b-2 border-gray-400 mx-auto w-32" /> */}
          <p className=' lg:w-[100%] text-[16px] md:text-[17px] lg:text-[18px] py-3'>At Refyn Data, our clients are at the heart of everything we do. Partner with us for personalized solutions tailored to your business needs. Experience efficiency, reliability, and a workforce that propels your success forward.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 ">
          {logos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center justify-center  right-0 bottom-0 shadow my-auto  p-3 md:p-4 lg:p-5">
               <div className="flex items-center justify-center h-full">

              <img src={logo.logo} alt={logo.alt} className="my-auto" />
              </div>
              <div className="mt-2  text-center">
                <p className='text-[15px]'>{logo.name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
  );
};

export default Clients;


