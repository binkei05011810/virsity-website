import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
import "rc-drawer/assets/index.css";
import "rc-tabs/assets/index.css";
import "assets/css/modal.css";
import "animate.css/animate.compat.css";
import "swiper/swiper-bundle.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return <Component {...pageProps} />;
}
