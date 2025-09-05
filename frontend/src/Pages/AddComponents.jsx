import React, { useEffect } from 'react'
import { useRef } from 'react';
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function AddComponents() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token)
      navigate('/')
  }, [navigate])

  const search = useRef(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const comp_search = search.current.value;
    if(!search.current.value) 
      return alert("Please enter Component Name.")

    try {
      console.log("Calling the API.")
      const response = await axios.post(`${apiUrl}/addcomponents`, {
        comp_search
      })

      console.log(response.data.comp_search)
    } catch (error) {
      
    }
  }

  return (
    <div className='p-4'>
      <div className='flex flex-row'>
        <input type="text" ref={search} placeholder='Please Enter Component Name' className="border-2 border-r-0 rounded-l px-2 py-1 w-full lg:w-[280px] outline-none" />
        <div className="border-2 border-l-0 rounded-r flex items-center justify-center px-2">
          <CiSearch size={24} onClick={handleSubmit} className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default AddComponents