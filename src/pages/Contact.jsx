


import React from "react";
import { Link } from 'react-router-dom';
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


export default function Contact() {
  return (
    <div className="container mx-auto p-4 font-poppins sm:px-3 md:px-5 lg:px-20">
      <div className="mb-10">
        <h1 className="text-md font-bold"><Link to="/" >Home / Contact</Link></h1>
      </div>
      <div className="mb-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <div className="border border-gray-300 my-2"></div>
          <div className="mb-5">
      
        
        <p className="text-lg">
          Begin the Dialogue<br></br>
          Thank you for reaching out to us. If you have any queries please reach out to us through email, phone, social medias or any of the locations.
        </p>
      </div>
        </div>

      {/* email and phone contacts */}
      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-x-4 lg:gap-x-20 ">
        {/* Phone number */}
        <div className="flex items-center mx-[20px]">
          {/* <img
              src="/contact_us/phone.png"
              alt="phone_icon"
              width={16}
              height={16}
              className="mb-3"
            /> */}
          
        </div>
        {/* Email */}
        <div className="flex items-center mx-[20px]">
          {/* <img
            src="/contact_us/email.png"
            alt="email_icon"
            width={20}
            height={20}
            className="mb-3"
          /> */}
        

        </div>
        {/* Empty column */}
        <div></div>
      </div>


      {/*  Address and location*/}
      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-x-4 lg:gap-x-20 my-5 md:px-2 lg:px-0">

        {/*Registered Office  */}
        <Link to="https://maps.app.goo.gl/8VhdYJpt6cyVfLPn6" target="_blank" rel="noopener noreferrer">
          <div className="mx-[10px] lg:mx-[30px]">
            <img
              src="/contact_us/virginia_meryland.png"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2 items-center"
            />
            <p className="text-xl mb-1 font-semibold">Registered Office:</p>
            <p className="text-sm  mb-1 font-semibold">Clarksburg, West Virginia</p>
            <p className="text-sm mb-5">
              11504 ELKHORN DRIVE,CLARKSBURG-MD-20871{" "}
            </p>
          </div></Link>

        {/* Corporate Office: */}
        <Link to="https://maps.app.goo.gl/qQoeapZDNDp2uduZ6" target="_blank" rel="noopener noreferrer">
          <div className="mx-[10px] lg:mx-[30px]">
            <img
              src="/contact_us/cororate.png"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2"
            />
            <p className="text-xl mb-1 font-semibold">Corporate Office:</p>
            <p className="text-sm  mb-1 font-semibold">Herndon,Virginia</p>
            <p className="text-sm mb-5">
              13800 Coppermine RD Suite #162,Herndon,VA-20171{" "}
            </p>
          </div>
        </Link>

        {/* Innovative Center: */}
        <Link to="https://maps.app.goo.gl/m9CeNJ8Cj2sczYhu6" target="_blank" rel="noopener noreferrer">
          <div className="mx-[10px] lg:mx-[30px]">
            <img
              src="/contact_us/visakhapatnam.png"
              alt="nnovative Cente"
              className=" w-60 h-40 rounded-lg shadow-md mb-2"
            />
            <p className="text-xl mb-1 font-semibold">Innovative Center:</p>
            <p className="text-sm mb-1 font-semibold">Visakhapatnam, India</p>
            <p className="text-sm">
              A-hub, Andhra University incubation center,AU North
              Campus, Visakhapatnam, AP-530003{" "}
            </p>
          </div>
        </Link>
      </div>
      <div className="mx-[10px] lg:mx-[30px]">
      <a href="tel:+1 301-591-0989" className="flex items-center mb-3">
            <FaPhoneVolume className="mr-2" />Phone:
            +1 301-591-0989 ext: 403
          </a>
           <a href="mailto:example@example.com" className="flex items-center  mb-3">
      <MdEmail className="mr-2" />Email:
      info@refyndata.com
    </a></div>
    </div>

  );
}


