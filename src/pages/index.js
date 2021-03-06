import React from "react";
import { ThemeProvider } from "theme-ui";
import { ToastContainer } from "react-toastify";
import theme from "theme";
import SEO from "components/SEO";
import Layout from "components/Layout";
import Banner from "sections/banner";
import Competition from "sections/competition";
import AboutApp from "sections/about-app";
import OurTeam from "sections/our-team";
import Subscribe from "sections/subscribe";
import Description from "sections/description";
import AuthProvider from "auth/auth-context";
import Digitalisation from "sections/digitalization";
import WhatWeDo from "sections/what-we-do";

export default function IndexPage() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Layout>
          <SEO
            title="Virsity"
            description="Virsity is all about making use of youthful and innovative talents to solve companiesâ€™ problems"
          />
          <Banner />
          <Competition />
          <Digitalisation />
          <WhatWeDo />
          <AboutApp />
          <OurTeam />
          <Subscribe />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}
