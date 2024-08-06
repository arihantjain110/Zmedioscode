import React from "react";
import Image from "next/image";

const List = () => {
  const clientsData = [
    {
      id: 1,

      image: "/assets/images/testimonialone.png",
      text: "Name",
      designation: "(Designation)",
      para: "The project is a grand success. The user feedback is absolutely overwhelming.",
    },
    {
      id: 2,

      image: "/assets/images/testimonialtwo.png",
      text: "Name",
      designation: "(Designation)",
      para: "Lorem Ipsum is simply dummy text of the printing andtypesetting industryLorem Ipsum is simply dummy text of the printing and typesetting Industry typese",
    },
    {
      id: 3,

      image: "/assets/images/testimonialthree.png",
      text: "Name",
      designation: "(Designation)",
      para: "Lorem Ipsum is simply dummy text of the printing andtypesetting industryLorem Ipsum is simply dummy text of the printing and typesetting Industry typese",
    },
    {
      id: 4,

      image: "/assets/images/testimonialone.png",
      text: "Name",
      designation: "(Designation)",
      para: "Lorem Ipsum is simply dummy text of the printing andtypesettin gindustryLorem Ipsum is simply dummy text of the printing and typesetting Industry typese",
    },
    {
      id: 5,
      image: "/assets/images/testimonialtwo.png",
      text: "Name",
      designation: "(Designation)",
      para: "Lorem Ipsum is simply dummy text of the printing andtypeset tingindustryLorem Ipsum is simply dummy text of the printing and typesetting Industry typese",
    },
    {
      id: 6,
      image: "/assets/images/testimonialthree.png",
      text: "Name",
      designation: "(Designation)",
      para: "Lorem Ipsum is simply dummy text of the printing andtypesetti ngindustryLorem Ipsum is simply dummy text of the printing and typesetting Industry typese",
    },
  ];

  return (
    <div className="container-ack md:pt-0 md:pb-0 pt-10 pb-5">
      <div
        className=" bg-no-repeat "
        style={{
          backgroundImage: 'url("/assets/images/backgroundtestimonial.png ")',
        }}
      >
        <div className="">
          <div className="relative">
            <div className="md:text-[10rem] text-[3rem] text-white tracking-wider text-center texttransparent font-bold  md:pt-10 ">
              Testimonial
            </div>
            <div className="absolute md:top-[11.5rem] top-[4rem] inset-x-0 flex justify-center">
              <div className="text-3xl  text-center font-bold max-w-xl">
                Testimonial
              </div>
            </div>
          </div>
          <p className="text-base text-gray-400 text-center w-[80%] mx-auto ">
            Nunc convallis semper justo quis tempor. Praesent molestie, lorem
            sed imperdiet tempor, libero urna semper urna, facilisis vulputate
            velit arcu vitae mi. Donec ac nisi ex
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-7 pt-10">
            {clientsData.map((item, e) => (
              <>
                <div className="group py-10 relative" key={e}>
                  <div className="hover:bg-[#F6F8F9] border-2 border-[#F6F8F9] text-left mx-3 py-8 rounded-md  hovertestimonial">
                    <div className="flex flex-col items-center justify-left">
                      <img
                        src={item.image}
                        alt=" "
                        className="  rounded-lg w-[25%] absolute top-0  left-[9rem]"
                      />
                      <div className="px-4 pt-6">
                        <div className="text-secondary pt-4 text-center">
                          {item.para}
                        </div>
                        <div className="text-xl font-semibold pt-3 text-black text-center">
                          {item.text}
                        </div>
                        <div className="text-black text-sm text-center">
                          {item.designation}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className=" flex justify-center items-center md:pb-10">
            <button className="bg-white border-2 border-secondary text-secondary px-12 py-2 rounded-md hover:bg-secondary hover:text-white">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
