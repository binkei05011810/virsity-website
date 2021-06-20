import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Competition from "sections/competition";
import AboutApp from "sections/about-app";
import OurTeam from "sections/our-team";
import Subscribe from "sections/subscribe";

export default function IndexPage() {
  return (
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
  );
}
