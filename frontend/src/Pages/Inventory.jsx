import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";


function Inventory() {

  const navigate = useNavigate();
  const [components, setComponents] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/')
      return
    }

    const fetchComponents = async () => {
      try {
        const response = await axios.get(`${apiUrl}/allcomponents`);
        setComponents(response.data.components);
      } catch (error) {
        console.error("Error fetching components:", error);
      }
    }
    fetchComponents();
  }, [navigate])

  try {

  } catch (error) {

  }


  return (
    <div className="p-6">
      <div className="mx-auto">
        <h1 className="poppins-medium text-2xl mb-6 text-center text-gray-800">
          Inventory
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-4 lg:px-20 place-items-center'>
          {components.map((comp) => (
            <div key={comp.id} className='w-full lg:w-[85%] bg-white min-h-[300px] shadow-lg shadow-gray-400'>
            <h2 className="poppins-medium text-2xl mb-6 pt-4 pl-4 text-center text-black"><strong>{comp.name}</strong></h2>
            <h3 className="poppins-medium text-lg mb-6 pl-4 text-gray-600">W{comp.description}</h3>
            <div className='flex flex-row'>
              <h3 className="poppins-medium text-xl mb-6 pl-4 text-gray-900 w-56"><strong>Total Quantity</strong></h3>
              <h3 className="poppins-medium text-xl mb-6 pl-4 text-gray-600">{comp.total_quantity}</h3>
            </div>
            <div className='flex flex-row'>
              <h3 className="poppins-medium text-xl mb-6 pl-4 text-gray-900 w-56"><strong>Available Quantity</strong></h3>
              <h3 className="poppins-medium text-xl mb-6 pl-4 text-gray-600">{comp.available_quantity}</h3>
            </div>
            <hr />
            <div className='flex flex-row justify-around mb-4 pt-4'>
              <div className='bg-green-500 border-2 border-green-500 text-white text-xl poppins-medium px-2 py-1 rounded text-center cursor-pointer'>{comp.location}</div>
              <div onClick={() => {navigate(`/${comp.id}`)}} className='bg-blue-500 border-2 border-blue-500 text-white text-xl poppins-medium px-2 py-1 rounded text-center flex flex-row cursor-pointer hover:bg-white hover:border-2 hover:border-blue-500 hover:text-blue-500'>
                View More
                <FaChevronRight size={24}/>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Inventory