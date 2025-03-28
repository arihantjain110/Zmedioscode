import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/careerStyles.css";
import FloatingButtons from "../components/Common/FloatingButtons";
import FloatingSocialIcons from "../components/Common/FloatingSocialIcons";
import GoogleTag from "../components/GoogleAnalytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (window.gtag) {
        window.gtag("config", "G-5QKG8PH1QR", {
          page_path: url,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5QKG8PH1QR"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5QKG8PH1QR', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
 <GoogleTag />
      <Component {...pageProps} />
      <FloatingSocialIcons />
      <FloatingButtons />
    </>
  );
}
