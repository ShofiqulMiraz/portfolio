import "../styles/globals.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "aos/dist/aos.css";

// spinner disabled
NProgress.configure({ showSpinner: false });

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
