import Link from "next/link";
import React from "react";

const List = () => {
  const advisors = [
    {
      id: 1,

      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Amit Chauhan",
      desc: "Technology and business visionary with over 4+ years of successful & fruitful career in IT Management, who provided strategic direction on technology initiatives such as implementing Multiple ERP Modules in line with the core organizational goals and business & profit objectives of the company.",
      link: "/advisorDetailPage",
    },
    {
      id: 2,

      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Rahul Sharma",
      desc: "Rahul Sharma is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      link: "/advisorDetailPage",
    },
    {
      id: 3,

      image: "/assets/images/advisor/avtarZmedios.webp",
      name: "Vishal Gaur",
      desc: "Vishal Gaur, a digipreneur and Web3 specialist has initiated D369 & is raising $1 bn for 250+ start-ups under the patronage of the Royal Family of UAE & multiple renowned Venture Capitalists and will be entirely based on Web3 and Metaverse..",
      link: "/advisorDetailPage",
    },
    {
      id: 4,

      image: "/assets/images/advisor/avtarZmedios.webp",
      name: " Deepak Chaudhary",
      desc: "Deepak Chaudhary is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      link: "/advisorDetailPage",
    },

  ];
  return (
    <div className="container-ack">
      <div className="grid md:grid-cols-3 gap-6 pb-16 pt-6">
        {advisors.map((item, index) => (
          <>
            <div className="group " key={index}>
              <div className="relative text-center py-6 border-2 border-[#F6F8F9] duration duration-200 group-hover:-translate-y-2  hover:drop-shadow-sm hover:bg-[#F6F8F9]/40 hover:border-2 rounded-xl md:h-[27rem]">
                <div className="inline-flex justify-center items-center rounded-md md:mt-8 ">
                  <img
                    src={item.image}
                    alt=""
                    className="  rounded-lg w-20 h-20 mx-auto "
                  />
                </div>

                <h2 className="font-semibold text-lg py-3 text-black text-center">
                  {item.name}
                </h2>

                <p className="text-black/50 group-hover:text-black py-2 pb-4  text-justify tracking-tighter  px-5 text-sm ">
                  {item.desc}
                </p>

                <div className="pb-5">
                  {/* if link will be used only in one in maping */}
                  {/* <Link href={item.link ? item?.link : ''}> */}
                  {/* <Link href={item.link}>
                    <button className="text-black py-2 text-sm border-b group-hover:border-primary group-hover:border-b-2">
                      See More
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default List;
