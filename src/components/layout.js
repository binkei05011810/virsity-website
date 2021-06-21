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
        background: [
          `url(${bannerBackgroundMobile})`,
          null,
          `url(${bannerBackground})`,
          null,
        ],
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: "auto 100%",
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
