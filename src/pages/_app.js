import "../styles/globals.css";
import "../styles/careerStyles.css";
import FloatingButtons from "../components/Common/FloatingButtons";
import FloatingSocialIcons from "../components/Common/FloatingSocialIcons";
export default function App({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
        <FloatingSocialIcons />
        <FloatingButtons />
    </>
  );
}
