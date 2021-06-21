/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import Header from "./header/header";
import Footer from "./footer/footer";
import bannerBackground from "assets/images/banner-background.svg";
import bannerBackgroundMobile from "assets/images/banner-background-mobile.svg";

export default function Layout({ children }) {
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Header />
      <main
        sx={{
          variant: "layout.main",
        }}
      >
        {children}
      </main>
      <Footer />
    </Flex>
  );
}
