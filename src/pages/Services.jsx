import { useState } from 'react';
import servicesData from '../components/data/services.json';
import { Link } from 'react-router-dom';

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData.services[0]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  return (
      <div className="container mx-auto p-4 font-poppins lg:px-5">
        <div className="mb-10">
        <h1 className="text-md font-bold"><Link to="/" >Home / Service</Link></h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-[20px] lg:gap-x-[60px]">

          {/* Table of Contents (Left Column) */}
         
          <div className="md:col-span-1 mb-10"> 
          <div className='w-full border border-gray-400 rounded-md  md:p-1 lg:p-5'>
          <p className="text-2xl font-bold py-2">Services:</p>
            <table className="w-full  ">
              <tbody>
                {servicesData.services.map((service, index) => (
                  <tr key={index} onClick={() => handleServiceSelect(service)} className="cursor-pointer hover:bg-gray-200">
                    <td className="px-8 py-2 font-semibold">{service.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
          {/* Content (Right Column) */}
          <div className="md:col-span-2  ">
            <div>
              <h2 className='text-3xl font-bold text-gray-800'>Services</h2>
              <p className="border-t border-gray-600 my-3"></p>
              <h3 className="text-2xl font-bold mb-2">{selectedService.topic}</h3>
              <p className='w-full font-regular font text-[17px] mb-5'>{selectedService.special_line}</p>
              {/* <img src={selectedService.image} alt={selectedService.topic} className="w-[600px] md:h-[400px] my-8 rounded-md" /> */}
              <p className='w-full font-regular font md:text-lg'>{selectedService.description.paragraph1}</p>
              <br/>
              <p className='w-full font-regular font md:text-lg' >{selectedService.special_line2}</p>
            <ul className='mb-4'>
                {selectedService.points.map((point, index) => (
                  <li key={index} className='md:text-lg '>{point} </li>
                ))}
              </ul>
              <p className='w-full font-regular font md:text-lg'>{selectedService.description.paragraph2}</p>
              <br />
              <p className='w-full font-regular font md:text-lg'>{selectedService.description.paragraph3}</p>
              
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Services;
