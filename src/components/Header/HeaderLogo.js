import Link from "next/link";
import React from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";

const HeaderLogo = () => {
  return (
    <div className="md:grid grid-cols-9 gap-10 items-center pt-3 hidden">

      <div className="flex items-center gap-20 col-span-5">
        <div className="">
          <Link href="/">
            <div>
            <img src="/assets/images/ZmediosLogo.png" class="w-76 h-16 object-cover"/>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-between space-x-6 items-center col-span-4">
        <div className="grid grid-cols-2 gap-4 items-center">
          <Link href="mailto:info@Zmediostech.com">
            <div className="flex space-x-2 items-center justify-end group">
              <IoMdMail
                size={20}
                className="text-black group-hover:text-primary"
              />
              <h2 className="text-[12px] group-hover:text-primary ">info@zmediostech.com</h2>
            </div>
          </Link>
          <Link href="tel:+91-9340609004">
            <div className="flex space-x-2 items-center justify-end group">
              <IoMdCall
                size={20}
                className="text-black group-hover:text-primary"
              />
              <h2 className="text-[12px] group-hover:text-primary">+91-9340609004</h2>
            </div>
          </Link>
        </div>


        <div className="flex justify-end ">
          <Link href="/contact">
            <button className="button-2 px-5 py-2 rounded-md">
              <div className="eff-2"></div>
              <span className="text-base flex items-center ">
                {" "}
                Contact Us
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
