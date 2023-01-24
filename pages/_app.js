import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import "../styles/case_details.css";
import "../styles/faq.css";
import "../styles/media_query.css";
import "../styles/service.css";
import "../styles/solution.css";
import "../styles/common.css";
import "../styles/main.css";
import 'bootstrap/dist/css/bootstrap.min.css' ;


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
    AOS.init();
  }, []);

  return (
    <main className="page_content" style={{ minHeight: "100vh" }} id="main">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
