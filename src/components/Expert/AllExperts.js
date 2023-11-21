import Link from "next/link";
import React from "react";

const All = () => {
  const advisors = [
    {
      id: 1,
      image: "/assets/images/advisor/Rakeshpic.JPEG",
      name: "Mr. Rakesh Panwar",
      designation: "Chief Technology Officer",
      desc: "Everything you’ve ever wanted is on the other side of fear."
    },
    {
      id: 2,
      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Mr. Sachin Shani",
      designation: "CEO & Founder",
      desc: "Dance is the hidden language of the soul.",
    },
     {
       id: 3,
      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Mr. Varun Kumar",
      designation: "CFO & Co-Founder",
      desc: "The only way to do great work is to love what you do.",
    },
    {
      id: 4,
      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Rahul Tiwari",
      designation: "Business Advisor",
      desc: "Dance is the hidden language of the soul.",
    },
    {
      id: 5,
      image: "/assets/images/advisor/sumit_swarnkaric.webp",
      name: "Mr. Sumit Swarankar",
      designation: "CMO & Co-Founder",
      desc: "Everything you’ve ever wanted is on the other side of fear.",
    },
    {
      id: 6,
      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Raj Kumar Yadav",
      designation: "Chief People Officer",
      desc: "The only way to do great work is to love what you do.",
    },
    {
      id: 7,
      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Surender Singh Gaur",
      designation: "General Manager",
      desc: "Everything you’ve ever wanted is on the other side of fear.",
    },
    // {
    //   id: 8,
    //   image: "/assets/images/advisor/avtarZmedios.webp",
    //   name: "Mr.",
    //   designation: "Country Manager",
    //   desc: "The only way to do great work is to love what you do.",
    // },
    // {
    //   id: 9,
    //   image: "/assets/images/advisor/avtarZmedios.webp",
    //   name: "Ms. Anupriya Roy",
    //   designation: "General Manager",
    //   desc: "Everything you’ve ever wanted is on the other side of fear.",
    // },
  ];
  return (
    <div className="container-ack">
      <div className="grid md:grid-cols-3 gap-3 pb-10">
        {advisors.map((item, index) => (
          <>
            <div className="group p-6" key={index}>
              <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl ">
                <div className="inline-flex justify-center items-center rounded-md md:mt-8">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-[100%] w-20 h-20 mx-auto"
                  />
                </div>

                <h2 className="font-semibold text-lg py-3 text-black text-center">
                  {item.name}
                </h2>
                <p className="text-primary pb-4 text-center px-3 text-sm">
                  {item.designation}
                </p>
                {/* <p className="text-black/50 group-hover:text-black text-center px-3 text-sm">
                  {item.desc}
                </p> */}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default All;
