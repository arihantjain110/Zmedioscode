import React from "react";
import Image from "next/image";

const Technology = ({tech}) => {

  return (

    <div className="grid md:grid-cols-3 pb-20 gap-8">
    {tech.map((item, e) => (
        <>
            <div key={e} className="group tech flex justify-start items-center border rounded-md p-3 gap-3">
                <Image src={item.img} alt="" className='w-[34px]' />
                <div>
                    <span className="font-semibold text-lg pt-3 text-black ">
                        {item.name}
                    </span>
                </div>
            </div>
        </>
    ))}
</div>
  );
};

export default Technology;
