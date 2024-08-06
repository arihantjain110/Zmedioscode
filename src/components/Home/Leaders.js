import React from "react";
import Image from "next/image"
import ComponentHead from "../Common/ComponentHead";

const Leaders = () => {
  const cardData = [
   
    // {
    //   name: 'Varun Kumar',
    //   img: '/assets/images/advisor/avtarZmedios.webp',
    //   role: 'Co-Founder & CFO',
    // }
    {
      name: 'Sumit Swankar',
      img: '/assets/images/advisor/avtarZmedios.webp',
      role: 'Founder & CEO',
    },
    {
      name: 'Rakesh Panwar',
      img: '/assets/images/advisor/avtarZmedios.webp',
      role: 'Co-Founder & CTO',
    },
  ]
  return (
    <div className="container-ack md:px-0 px-5 md:pt-0 pt-16">
      <ComponentHead
        title="Leaders"
        sub="Our Creators"
        head="Revolutionizing industries through innovation: Empowering your business with our Leaders"
      />

      <div className="grid md:grid-cols-2 gap-0">
        {cardData.map((item, key) => {
          return (
            <div className="cardBox" key={key}>
              <div className="">
                <div className="front">
                  <div className="flex flex-col justify-center items-center pt-8">
                    <div>
                      <Image
                        src={item.img}
                        alt=""
                        className="w-40 h-40 flex justify-center ml-50%"
                      />
                    </div>
                    <p className="text-lg font-semibold text-black pt-5">
                      {item.name}
                    </p>
                    <p className="text-textcolor text-base">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Leaders;
