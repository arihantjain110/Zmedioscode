import React from 'react'
import Image from 'next/image'
import { skillIconsImage } from '../../lib/data';
import { truncate } from '../../lib/utils';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";

const FreelancerCard = ({user}) => {
    return (
        <div className="border rounded-xl p-4 bg-white flex flex-col gap-2">
            <div className='flex justify-between px-2 py-2'>
                <div className='flex justify-between items-center gap-2'>
                    <img 
                        width={40} height={40} 
                        src={"/assets/images/avatar.jpg"} alt='Picture of freelancer'
                        className='rounded-full'
                    />
                    <div>
                        <h2 className="text-sm blur-sm">{user.userName}</h2>
                        <p className='bg-[#36B37E29] text-[#1B806A] text-[10px] px-2 py-1 rounded'>{user.userStatus}</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='border border-orange-500 text-orange-500 bg-white text-xs font-semibold px-1 rounded'>Resume</button>
                </div>
            </div>
            <div className='flex justify-between items-center bg-[#F5F5F5] text-xs px-2 py-1 rounded-md'>
                <div>Experience <span className='font-bold'>{`${user.experience} years`}</span></div>
                <div>Can join in <span className='font-bold'>{`${user.expectedJoining}`}</span></div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2 items-center'>
                    <CiLocationOn size={16}/>
                    <p className='text-xs'>{truncate(user.location, 40)}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <HiOutlineBuildingOffice size={16}/>
                    <p className='text-xs'>{truncate(user.currentCompany, 40)}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaGraduationCap size={16}/>
                    <p className='text-xs'>{truncate(user.college, 40)}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <BiMoney size={16}/>
                    <p className='text-xs'>{user.expectedSalary}</p>
                </div>
            </div>
            <div className='flex flex-wrap gap-2'>
                {user.skills.map((skill, i)=>(
                    <div key={i} className='flex gap-1 justify-between items-center text-xs bg-[#F3F1FF] px-2 py-1 w-fit rounded-md'>
                        {skillIconsImage[skill] && 
                            <img  
                                width={14} height={14}
                                src={skillIconsImage[skill]} alt={`${skill} Logo`}
                            />
                        }
                        <div>{skill}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FreelancerCard