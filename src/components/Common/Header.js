import React from "react";
import HeaderLogo from "../Header/HeaderLogo";
import Navbar from "../Header/Navbar";
const Header = () => {
  return (
    <>
      <div
        className="bg-right px-4"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}>
        <div className="container-ack">
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;800&display=swap"
            rel="stylesheet"
          />
          <HeaderLogo />
          <hr />
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
