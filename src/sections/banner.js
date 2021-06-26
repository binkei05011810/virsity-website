/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from "theme-ui";
import { rgba } from "polished";
import Image from "components/Image";
import SubscriptionForm from "components/forms/SubscriptionForm";
import illustration from "assets/images/banner.svg";
import ignite from "assets/images/ignite.png";
import bannerBackground from "assets/images/banner-background.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Countdown from "react-countdown";
import renderer from "../components/Timer";

const logos = [
  {
    name: "Ignite",
    src: ignite,
  },
];

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <img src={bannerBackground} sx={styles.blobDecor} />
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <ScrollAnimation
              animateIn="fadeInDown"
              duration={0.6}
              animateOnce={true}
            >
              <Heading as="h1">A bridge between students and companies</Heading>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInDown"
              duration={0.6}
              animateOnce={true}
              delay={250}
            >
              <Text as="p">
                Virsity is all about making use of young, innovative talents to
                solve companies’ problems. We offer students opportunities to
                apply theoretical knowledge in real-life cases through
                challenges from companies all around the world.
              </Text>
            </ScrollAnimation>
            <SubscriptionForm sx={styles.subscriptionForm} />
            <Flex sx={styles.sponsoredBy}>
              <Text as="span">Sponsored by:</Text>
              <Flex sx={styles.sponsor}>
                {logos?.map((logo, index) => (
                  <Flex as="figure" key={index}>
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      sx={styles.sponsor.logo}
                    />
                  </Flex>
                ))}
              </Flex>
            </Flex>
          </Box>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={1}
            animateOnce={true}
            delay={400}
          >
            <Flex as="figure" sx={styles.bannerImage}>
              <Image src={illustration} alt="illustration" />
            </Flex>
          </ScrollAnimation>
        </Box>

        <Box sx={styles.timerContent}>
          <Countdown date={Date.now() + 10000000} renderer={renderer} />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: "relative",
    pt: [12, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
    overflow: "hidden",
  },
  blobDecor: {
    position: "absolute",
    left: "45%",
    width: "65%",
    zIndex: "-1",
  },
  contentWrapper: {
    gap: ["50px 50px", null, null, null, "100px 100px", "100px 100px"],
    display: ["block", null, null, null, "grid"],
    gridTemplateColumns: [null, null, null, null, "1fr 1fr", "0.95fr 1.05fr"],
    alignItems: "center",
    minHeight: ["auto", null, null, null, "38vh", "100vh"],
    pt: [null, null, null, 8, 0, 9, null],
    "@media only screen and (min-width:1900px)": {
      pt: 10,
    },
  },
  bannerContent: {
    margin: [null, null, null, "0 auto", 0],
    maxWidth: [null, null, null, 600, "none"],
    textAlign: [null, null, null, "center", "left"],
    h1: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 45, null, 12, 13],
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "text",
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: [1, null, null, 2, 3],
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: "text",
      maxWidth: [470],
      m: [null, null, null, "30px auto", 0],
      mt: [8, null, null, 10, 10],
    },
  },
  subscriptionForm: {
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [6],
    input: {
      backgroundColor: "#FFFFFF",
      border: "0 none",
      fontFamily: "body",
      fontSize: [1, null, null, null, 2],
      px: [5],
      boxShadow: "0px 16px 40px rgba(72, 59, 26, 0.08)",
      minHeight: [40, 50, null, null, null, 60],
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("#02073E", 0.4),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
    },
  },
  sponsoredBy: {
    alignItems: "center",
    display: ["none", null, "block", null],
    maxWidth: [null, null, null, 470, "none"],
    m: [null, null, null, "30px auto", "30px 0 0"],
    mt: [3, 6, null, null],
    span: {
      fontSize: ["13px", null, null, null, 2],
      lineHeight: 2.62,
      color: rgba("#566272", 0.6),
    },
  },
  sponsor: {
    alignItems: "center",
    figure: {
      ml: [2, null, null, null, 4, 5],
    },
    logo: {
      maxWidth: ["60px", null, null, null, "60px", "60px"],
      maxHeight: ["60px", null, null, null, "60px", "60px"],
    },
  },

  bannerImage: {
    alignItems: "center",
    mt: [9, null, null, null, 0],
    img: {
      maxWidth: ["80%", null, null, "80%", "100%"],
      m: ["0 auto", "0 auto", "0 auto", "0 auto", 0],
    },
  },
};
