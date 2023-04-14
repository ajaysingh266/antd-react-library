import React from 'react';
// import { NavLink } from 'react-router-dom';
import "./Dashboard.css";
 

const Index = () => {
    return (
        <>
            <div className='header bg-blue-300 flex justify-between items-center h-16'>
                <div className='flex-none mx-2'>
                    <img src='http://sams.webologixglobal.com/static/images/logo/CD_Logo-Full_White.png' className=' h-16' />
                </div>
                <div className=" flex flex-1  items-start" >
                    <span className='cursor-pointer hover:bg-blue-300 ml-16 font-sans  text-lg'>
                        <p className='font-semibold text-white'> Dashboard</p> </span>
                    <div className='dropdown  cursor-pointer  ml-8 '>
                        <p className='font-semibold font-sans  text-lg text-white'> Academics</p>
                        <div className='dropdown-content text-base'>
                            <p className=' hover:bg-blue-300 py-2 px-2 text-blue-500 '>Students</p>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '>Syllabus</p>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '>Time Table</p>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '>Test Create</p>
                        </div>
                    </div>
                    <div className='dropdown  cursor-pointer  ml-8 '>
                        <p className='font-semibold font-sans  text-lg text-white'> Users</p>
                        <div className='dropdown-content text-base'>
                            <p className='hover:bg-blue-300 py-2  px-2 text-blue-500 '> Users</p>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '> Reviewers</p>
                        </div>
                    </div>
                    <div className='dropdown  cursor-pointer  ml-8 '>
                        <p className='font-semibold font-sans   text-lg text-white'> Other</p>
                        <div className='dropdown-content text-base'>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '> CMS</p>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '> Subcriptions</p>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '> App Organisers</p>


                        </div>
                    </div>
                    <div className='dropdown  cursor-pointer  ml-8  '>
                        <p className='font-semibold font-sans   text-lg text-white'>Website</p>
                        <div className='dropdown-content text-base'>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '>Web blogs </p>
                            <p className='hover:bg-blue-300 py-2 px-2 text-blue-500 '>courses </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center  cursor-pointer '>
                    <div className=' bg-white mr-6 rounded-xl '>
                        <i className="fa-solid fa-magnifying-glass ml-2"></i>
                        <input className="text-center rounded-xl focus:outline-none  cursor-pointer h-6 w-20" placeholder="Search"></input>
                    </div>

                    <div className=' down  cursor-pointer'><button className='circle square bg-white text-center mr-6'><i class="fa-solid fa-user "></i></button>
                        <div className='down-content'>
                            <p className='py-2 px-2 text-blue-500 hover:bg-blue-300'> My Profile</p>
                            <p className='py-2 px-2 text-blue-500 hover:bg-blue-300'> Change Password</p>
                            <p className='py-2 px-2 text-blue-500 hover:bg-blue-300'> Logout</p>
                        </div>
                    </div>
                </div>
            </div >
            <div>
               
                
            </div>

        </>
    )
}

export default Index
