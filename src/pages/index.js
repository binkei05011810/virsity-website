import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/SEO";
import Layout from "components/Layout";
import Banner from "sections/banner";
import Competition from "sections/competition";
import AboutApp from "sections/about-app";
import OurTeam from "sections/our-team";
import Subscribe from "sections/subscribe";
import AuthProvider from "auth/auth-context";

export default function IndexPage() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO
            title="Virsity"
            description="Virsity is all about making use of youthful and innovative talents to solve companies’ problems"
          />
          <Banner />
          <Competition />
          <AboutApp />
          <OurTeam />
          <Subscribe />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}
