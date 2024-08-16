"use client"
import React, { useState } from 'react'
import { freelancerData } from '../../lib/data';
import FreelancerCard from './freelancerCard';

const FreelancerSearch = () => {
    
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTechnology, setSelectedTechnology] = useState('');

    // Filter freelancers based on the search query
    // const filteredFreelancers = freelancers.filter(freelancer =>
    //     freelancer.userName.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    // Filter freelancers based on selected technology
    const filteredFreelancers = freelancerData.filter(freelancer => {
        const techMatch = selectedTechnology ? freelancer.skills.includes(selectedTechnology) : true;
        return techMatch;
    });

    
    return (
        <div className='container-ack my-2 pt-2 pb-6 bg-[#F0F0F0]'>
            <div className="flex justify-center">
                <div className='w-[823px] h-[56px] flex justify-center items-center gap-6'>
                    {/* <input
                        type="text"
                        placeholder="Search for a freelancer..."
                        className="w-full p-2 border border-gray-300 rounded"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    /> */}
                    <select 
                        id="technology" 
                        className="px-6 py-1 border-2 rounded-lg bg-white focus:outline-none"
                        onChange={(e) => setSelectedTechnology(e.target.value)}
                    >
                        <option value="">Technology</option>
                        <option value="ReactJS">ReactJS</option>
                        <option value="Node.js">Node.js</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="AWS">AWS</option>
                        <option value="GraphQL">GraphQL</option>
                        <option value="kafka">Kafka</option>
                    </select>
                    <select id="technology" className="px-6 py-1 border-2 rounded-lg bg-white focus:outline-none">
                        <option value="">Role</option>
                        <option value="backend">Core backend programming</option>
                        <option value="frontend">Core frontend programming</option>
                    </select>
                    <button className='px-4 py-1 border rounded-lg bg-orange-500 text-white'>Search</button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-6 px-4">
                {filteredFreelancers.length > 0 ? (
                    filteredFreelancers.map((freelancer, index) => (
                        // <div key={index} className="border p-4 rounded">
                        //     <h2 className="text-lg font-bold">{freelancer.userName}</h2>
                        //     <p>{freelancer.technology}</p>
                        //     <p>{freelancer.location}</p>
                        // </div>
                        <FreelancerCard 
                            key={index} 
                            user={freelancer}
                        />
                    ))
                ) : (
                    <p className='col-span-3 text-center'>No freelancers found.</p>
                )} 
            </div>
        </div>
    )
}

export default FreelancerSearch