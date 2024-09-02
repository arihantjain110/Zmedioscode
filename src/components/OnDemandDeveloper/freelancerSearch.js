"use client";
import React, { useState } from "react";
import { freelancerData } from "../../lib/data";
import FreelancerCard from "./freelancerCard";

const FreelancerSearch = () => {
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [filteredTechnology, setFilteredTechnology] = useState("");

  // Filter freelancers based on the filtered technology
  const filteredFreelancers = freelancerData.filter((freelancer) => {
    const techMatch = filteredTechnology
      ? freelancer.skills.includes(filteredTechnology)
      : true;
    return techMatch;
  });

  const handleSearch = () => {
    setFilteredTechnology(selectedTechnology);
  };

  return (
    <div className="container-ack my-2 pt-2 pb-6 bg-[#F0F0F0]">
      <div className="flex justify-center">
        <div className="w-[823px] h-[56px] flex justify-center items-center gap-6">
          <select
            id="technology"
            className="px-6 py-1 border-2 rounded-lg bg-white focus:outline-none"
            onChange={(e) => setSelectedTechnology(e.target.value)}
          >
            <option value="">Technology</option>
            <option value="ReactJS">ReactJS</option>
            <option value="Angular">Angular</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Node.js">Node.js</option>
            <option value="TypeScript">TypeScript</option>
            <option value="AWS">AWS</option>
            <option value="GraphQL">GraphQL</option>
            <option value="Kafka">Kafka</option>
            <option value="Microservices">Microservices</option>
          </select>
          <button
            onClick={handleSearch}
            className="px-4 py-1 border rounded-lg bg-orange-500 text-white"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-6 px-4">
        {filteredFreelancers.length > 0 ? (
          filteredFreelancers.map((freelancer, index) => (
            <FreelancerCard key={index} user={freelancer} />
          ))
        ) : (
          <p className="col-span-3 text-center">No freelancers found.</p>
        )}
      </div>
    </div>
  );
};

export default FreelancerSearch;
