import React, { useEffect } from 'react';
import DashboardBox from '../Components/DashboardBox';
import { CiBoxList } from "react-icons/ci";
import { IoHardwareChipOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { VscIssueReopened } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

function Dashboard() {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(!token) 
      navigate('/')
  }, [navigate])

  return (
    <div className='w-full py-4 px-2'>

      <div className='noto-sans-tcss text-4xl text-center'>Welcome to IoT LAB, ECE Dept., JIIT Noida</div>
      <div className='roboto-condensed-tcss lg:text-2xl text-center mt-2'>Where Innovation Meets Inventory</div>

      <br />

      <div className='flex flex-wrap justify-center items-center gap-4 max-w-screen-xl mx-auto'>
        <DashboardBox name="Inventory" color="bg-blue-400" icon={<CiBoxList />} to="/inventory" />
        <DashboardBox name="Add Components" color="bg-green-400" icon={<IoMdAddCircleOutline />} to="/add-components" />
        <DashboardBox name="Issue Components" color="bg-orange-400" icon={<IoHardwareChipOutline />} to="/issue-components" />
        <DashboardBox name="Return Components" color="bg-yellow-400" icon={<VscIssueReopened />} to="/return-components" />
      </div>

    </div>

  );
}

export default Dashboard;
