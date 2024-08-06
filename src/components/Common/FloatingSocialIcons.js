import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const FloatingSocialIcons = () => {
    return (
        <div className="fixed flex items-center justify-between py-5 top-60 left-0 z-10">
            <div className="bg-[#F1F1F1] p-3 rounded-l-md shadow-inner">
                <div className="relative group">
                    <Link href="">
                        <FaFacebook
                            size={24}
                            className="text-black hover:text-primary transition-transform transform group-hover:scale-150"
                        />
                        <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
                            Facebook
                        </span>
                    </Link>
                </div>
                <hr className="mt-3" />
                <div className="relative group mt-3">
                    <Link href="">
                        <FaInstagram
                            size={24}
                            className="text-black hover:text-primary transition-transform transform group-hover:scale-150"
                        />
                        <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
                            Instagram
                        </span>
                    </Link>
                </div>
                <hr className="mt-3" />
                <div className="relative group mt-3">
                    <Link href="">
                        <CiLinkedin
                            size={24}
                            className="text-black hover:text-primary transition-transform transform group-hover:scale-150"
                        />
                        <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
                            LinkedIn
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FloatingSocialIcons;
