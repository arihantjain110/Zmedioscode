import React from "react";
import Image from "next/image";

export default function TopHeaderCareer() {
  return (
    <>
      <div className="container-custom  md:px-0 px-5">
        <div className="w-full relative">
         
          <div className="TopCarerBnr">
            <Image
              src="/assets/images/career-img/bnnnrContactus-bnr.jpg"
              alt="Carimg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
