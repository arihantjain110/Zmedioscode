import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-ack">
      <div className="flex bg-[#D9D9D9] py-10 px-4 items-center justify-between">
        <div className="flex flex-col gap-10 w-[752px]">
          <p className="font-normal text-6xl">
            92,098000000+ candidates match your search!
          </p>
          <p className="text-[#FF6A1A] font-normal text-5xl">
            Signup to connect with them now.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <Link href="hire-developer/registration">
            <button className="bg-[#FF6A1A] text-white font-semibold text-2xl rounded-md py-3 px-6">
              Unlock Candidates
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-[#FF6A1A] text-white font-medium text-2xl w-full rounded-md py-3 px-6">
              Get a callback
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
