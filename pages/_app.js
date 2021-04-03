import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// spinner disabled
NProgress.configure({ showSpinner: false });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  // for making height globally accessible
  const [height, setheight] = useState(0);

  // tracking scroll position
  const handleScroll = () => {
    window.addEventListener("scroll", () => {
      setheight(window.scrollY);
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    handleScroll();
  }, []);

  return (
    <>
      <Component {...pageProps} height={height} />
    </>
  );
}

export default MyApp;
