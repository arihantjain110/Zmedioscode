import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="container-ack">
      <div className="md:grid grid-cols-3 gap-8 md:space-y-0 space-y-4 md:px-0 px-5">
        <div className="shadow-lg  rounded-lg">
           <Image alt="" src="/assets/images/memories/gallery1.png" />
        </div>
        <div className="flex flex-col justify-between row-span-2">
          <Image
            src="/assets/images/memories/gallery2.png" alt=""
            className="shadow-lg rounded-lg"
          />
          <Image
            src="/assets/images/memories/gallery2.png" alt=""
            className="h-56 w-full object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="shadow-lg rounded-lg">
          <Image src="/assets/images/memories/gallery3.png" alt="" />
        </div>
        <div className="shadow-lg rounded-lg">
          <Image src="/assets/images/memories/gallery3.png" alt="" />
        </div>
        <div className="shadow-lg rounded-lg">
          <Image src="/assets/images/memories/gallery1.png" alt="" />
        </div>
        <div className="shadow-lg rounded-lg col-span-2">
          <Image src="/assets/images/memories/gallery4.png" alt="" />
        </div>

        <div className="shadow-lg rounded-lg">
          <Image src="/assets/images/memories/gallery5.png" alt="" />
        </div>
        <div className="shadow-lg rounded-lg row-span-2">
          <Image src="/assets/images/memories/gallery6.png" alt="" className="h-full" />
        </div>
        <div className="flex flex-col justify-between row-span-2 space-y-4">
          <Image
            src="/assets/images/memories/gallery2.png" alt=""
            className="shadow-lg rounded-lg h-96"
          />
          <Image
            src="/assets/images/memories/gallery2.png" alt=""
            className="h-40 w-full object-cover shadow-lg rounded-lg"
          />
        </div>
        <div className="shadow-lg rounded-lg row-span-2">
          <Image src="/assets/images/memories/gallery6.png" alt="" className="h-full" />
        </div>
      </div>
      <div className="text-center py-4">
        <button className="px-8 py-2 rounded text-black border border-black hover:bg-primary hover:border-primary">
          View All
        </button>
      </div>
    </div>
  );
};

export default Gallery;
