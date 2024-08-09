import React, { useState } from 'react'
import { freelancerData } from '../../lib/data';
import FreelancerCard from './freelancerCard';

const FreelancerSearch = () => {
    
    const [searchQuery, setSearchQuery] = useState('');

    // Filter freelancers based on the search query
    // const filteredFreelancers = freelancers.filter(freelancer =>
    //     freelancer.userName.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    
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
                    <select id="technology" className="px-6 py-1 border-2 rounded-lg bg-white focus:outline-none">
                        <option value="">Technology</option>
                        <option value="reactjs">React</option>
                        <option value="nodejs">NodeJs</option>
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
                {freelancerData.map((freelancer, index) => (
                    // <div key={index} className="border p-4 rounded">
                    //     <h2 className="text-lg font-bold">{freelancer.userName}</h2>
                    //     <p>{freelancer.technology}</p>
                    //     <p>{freelancer.location}</p>
                    // </div>
                    <FreelancerCard 
                        key={index} 
                        user={freelancer}
                    />
                ))} 
            </div>
        </div>
    )
}

export default FreelancerSearch