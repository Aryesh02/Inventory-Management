import React from 'react';
import { Link } from 'react-router-dom';

function DashboardBox(props) {
    return (
        <Link to={props.to} className={`w-75 h-[200px] ${props.color} rounded-2xl text-white flex flex-col gap-2 items-center justify-center shadow-lg hover:bg-gray-900 transition cursor-pointer`}>
            <div className='text-3xl border-2 bg-white text-black p-2 rounded-full'>{props.icon}</div>
            <div className='text-xl'>{props.name}</div>
        </Link>
    );
}

export default DashboardBox;
