'use client'; 

import Script from 'next/script';

const GoogleTag = () => {
  return (
    <>
    <meta name="google-site-verification" content="igKNeRPAB1hbSCqDFcJnykdzNu0dyIi0ry-kZ6HagHo" /> 
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-5QKG8PH1QR`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-5QKG8PH1QR');
        `}
      </Script>
    </>
  );
};

export default GoogleTag;