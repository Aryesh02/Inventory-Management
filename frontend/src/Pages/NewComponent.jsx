import axios from "axios";
import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function NewComponent() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token)
            navigate('/')
    }, [navigate])

    const component_name = useRef(null);
    const component_description = useRef(null);
    const component_quantity = useRef(null);
    const component_location = useRef(null);
    const component_type = useRef(null);

    const apiUrl = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = component_name.current.value;
        const description = component_description.current.value;
        const quantity = component_quantity.current.value;
        const location = component_location.current.value;
        const type = component_type.current.value;

        if (!name || !description || !quantity || !location || !type)
            return alert("Please enter al the details.")

        try {
            const response = await axios.post(`${apiUrl}/newcomponent`, {
                name,
                description,
                quantity,
                location,
                type
            });
            alert(response.data.message)

            component_name.current.value = "";
            component_description.current.value = "";
            component_quantity.current.value = "";
            component_location.current.value = "";
            component_type.current.value = "";
        } catch (error) {

        }
    }

    const inputClass =
        "border-2 border-gray-400 w-full noto-sans-tcss p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base";

    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
                <h1 className="poppins-medium text-2xl mb-6 text-center text-gray-800">
                    Add New Component
                </h1>

                {/* Form Grid */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <label className="poppins-medium text-lg block mb-2">Component Name</label>
                            <input type="text" ref={component_name} className={inputClass} />
                        </div>

                        <div>
                            <label className="poppins-medium text-lg block mb-2">Quantity</label>
                            <input type="number" ref={component_quantity} className={inputClass} />
                        </div>

                        <div className="lg:col-span-2">
                            <label className="poppins-medium text-lg block mb-2">Description</label>
                            <textarea
                                ref={component_description}
                                className={`${inputClass} resize-none`}
                                rows={3}
                            ></textarea>
                        </div>


                        <div>
                            <label className="poppins-medium text-lg block mb-2">Storage Location</label>
                            <input type="text" ref={component_location} className={inputClass} />
                        </div>
                        <div>
                            <label className="poppins-medium text-lg block mb-2">Type of Component</label>
                            <input type="text" ref={component_type} className={inputClass} />
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <button onClick={handleSubmit} className="bg-[#0466c8] hover:bg-[#0353a4] text-white px-6 py-3 text-lg rounded-lg transition poppins-medium">
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewComponent;
