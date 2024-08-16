import Link from "next/link";
import React from "react";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <div className="fixed flex items-center justify-between py-5 top-60 right-0 z-10">
      <div className="bg-[#F1F1F1] p-3 rounded-l-md shadow-inner">
        <div className="relative group">
          <Link href="mailto:info@zmediostech.com" target="_blank">
            <IoMdMail
              size={24}
              className="text-black hover:text-primary transition-transform transform group-hover:scale-150"
            />
            <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
              Mail
            </span>
          </Link>
        </div>
        <hr className="mt-3" />
        <div className="relative group mt-3">
          <Link href="tel:+91-9319062156" target="_blank">
            <IoMdCall
              size={24}
              className="text-black hover:text-primary transition-transform transform group-hover:scale-150"
            />
            <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
              Phone
            </span>
          </Link>
        </div>
        <hr className="mt-3" />
        <div className="relative group mt-3">
          <Link href="https://wa.me/91-9319062156" target="_blank">
            <FaWhatsapp
              size={24}
              color="#25D366"
              className="transition-transform transform group-hover:scale-150"
            />
            <span className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
              Whatsapp
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingButtons;
