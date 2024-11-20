import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloatingSocialIcons = () => {
  return (
    <div className="fixed flex items-center justify-between top-20 z-10">
      {/* <div className="relative group">
          <Link
            href="https://www.facebook.com/profile.php?id=61564364654262&mibextid=ZbWKwL?hl=en"
            target="_blank"
          >
            <FaFacebook
              size={24}
              color="blue"
              className="transition-transform transform group-hover:scale-150"
            />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
              Facebook
            </span>
          </Link>
        </div>
        <hr className="mt-3" />
        <div className="relative group mt-3">
          <Link
            href="https://www.instagram.com/zmedios_technology_pvt_ltd_/?hl=en"
            target="_blank"
          >
            <FaInstagram
              size={24}
              color="red"
              className="transition-transform transform group-hover:scale-150"
            />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
              Instagram
            </span>
          </Link>
        </div>
        <hr className="mt-3" />
        <div className="relative group mt-3">
          <Link
            href="https://www.linkedin.com/company/zmedios-technology-pvt-ltd/"
            target="_blank"
          >
            <CiLinkedin
              size={24}
              color="#004182"
              className="transition-transform transform group-hover:scale-150"
            />
            <span className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black p-1 rounded shadow-lg">
              LinkedIn
            </span>
          </Link>
        </div> */}

      <div className="relative group mt-40 right-1">
        <nav className="social">
          <ul>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=61564364654262&mibextid=ZbWKwL?hl=en"
                target="_blank"
              >
                Facebook
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-xl"
                  style={{ color: "#104094" }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/zmedios_technology_pvt_ltd_/?hl=en"
                target="_blank"
              >
                Instagram
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-xl"
                  style={{ color: "#b02166" }}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/zmedios-technology-pvt-ltd/"
                target="_blank"
              >
                Linkedin
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-xl"
                  style={{ color: "#104094" }}
                />
              </Link>
            </li>
            <li>
              <Link href="mailto:info@zmedios.com" target="_blank">
                Email
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-600 text-xl"
                />
              </Link>
            </li>

            {/* Phone */}
            <li>
              <Link href="tel:+1234567890" target="_blank">
                Call
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-500 text-xl"
                />
              </Link>
            </li>

            {/* WhatsApp */}
            <li>
              <Link href="https://wa.me/1234567890" target="_blank">
                WhatsApp
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-green-600 text-xl"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FloatingSocialIcons;
