import React from 'react'
import bgImg from '../assets/bg.jpg'
import heroImg from '../assets/heroImg.png'
import msLogo from '../assets/logo.png'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
        <div className='px-10 pt-5'>
            <img src={msLogo} className='w-24 h-auto' />
        </div>

        <div className="grid mb-8">
            <div className='col-span-8 pl-10 pr-10 pt-5'>
                <div className='p-6 rounded-lg shadow-md border border-gray-200' style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'left'}}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div className='text-center md:text-left'>
                        <h3 className='text-2xl font-bold text-white mb-3'>
                            <span className='text-lg'>MCAPS ACADEMY</span><br />
                            CONTENT LIBRARY MANAGEMENT
                        </h3>
                        <p className='text-white text-[14px] mb-4'>
                            The Content Library Management App is designed as a single point for managing both the content library and the digital assets that are owned by Sales Skilling. Users can confirm metadata, supply key classification details, and upload all supporting documents.
                        </p>
                        <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
                            <div className='pr-3'>
                            <span className='text-[12px] font-semibold text-white'><span className='text-[14px]'>📖</span> Manage courses</span>
                            </div>
                            <div className='px-3'>
                            <span className='text-[12px] font-semibold text-white'><span className='text-[14px]'>🗂️</span> Confirm metadata</span>
                            </div>
                            <div className='px-3'>
                            <span className='text-[12px] font-semibold text-white'><span className='text-[14px]'>📤</span> Upload documents</span>
                            </div>
                        </div>
                        </div>
                        <div className='flex justify-center'>
                        <img src={heroImg} className='w-[75%] max-w-md h-auto ml-auto mr-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="btn-section px-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link to='/published-courses' className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 flex items-center cursor-pointer">
                <div className="bg-purple-100 flex items-center justify-center px-3 py-4">
                    <div className="bg-[#CE84D1] rounded-full p-3">
                    <span className='text-2xl'>📚</span>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full px-3 py-2">
                    <div className='text-left'>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                        Manage published courses
                    </h4>
                    <p className="text-gray-600 text-xs">
                        Lorem Ipsum is simply dummy text of printing industry.
                    </p>
                    </div>
                </div>
                </Link>

                <Link to='/courses' className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200 flex items-center cursor-pointer">
                    <div className="bg-purple-100 flex items-center justify-center px-3 py-4">
                        <div className="bg-[#CE84D1] rounded-full p-3">
                        <span className='text-2xl'>📝</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full px-3 py-2">
                        <div className='text-left'>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">
                            Create new request
                        </h4>
                        <p className="text-gray-600 text-xs">
                            Lorem Ipsum is simply dummy text of printing industry.
                        </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>

        
    </>
  )
}

export default Home
