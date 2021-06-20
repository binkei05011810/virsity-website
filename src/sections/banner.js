/** @jsx jsx */
import { jsx, Box, Flex, Heading, Text } from "theme-ui";
import { rgba } from "polished";
import Image from "components/image";
import SubscriptionForm from "components/subscription-form";
import illustration from "assets/images/connect.svg";
import decor3 from "assets/images/decor3.png";
import Countdown from "react-countdown";
import renderer from "../components/header/timer";
import { FaCentercode } from "react-icons/fa";

const styles = {
  section: {
    position: "relative",
    backgroundColor: "#08164b",
    pt: [14, null, null, null, null, 0],
    pb: [6, null, null, 7, 11, 0],
    overflow: "hidden"
  },

  flexWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  contentWrapper: {
    margin: 0,
    minHeight: ["auto", null, null, null, "38vh", "100vh"],
    alignItems: "center",
    zIndex: 5
  },

  bannerLeft: {
    padding: " 200px 100px 0 100px",
    flexDirection: "column",
    width: "50%"
  },

  bannerContent: {
    width: "100%",
    textAlign: [null, null, null, "center", "left"],
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "white",
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
    p: {
      fontSize: "1rem",
      lineHeight: [1.5, null, null, 2, null, 2.33],
      color: "white",
      maxWidth: [470],
      m: [null, null, null, "30px auto", 0],
      mt: [3, null, null, null, 5],
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
      zIndex: 5
    },
    button: {
      fontSize: [0, 1, null, null, 2],
      minHeight: [40, 50, null, null, null, 60],
      zIndex: 5
    },
    zIndex: 5
  },

  bannerImage: {
    padding: "0 50px 0 50px",
    width: "50%",
    zIndex: 5,
    alignItems: "center"
  },

  decor3: {
    width: "auto",
    height: "48vw",
    position: "absolute",
    top: "calc(50% - 24vw)",
    right: "-20%",
  },

  timerContent: {
    paddingTop: "100px"
  }
};

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Image src={decor3} sx={styles.decor3} />
      <Flex sx={styles.contentWrapper}>
        <Flex sx={styles.bannerLeft}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">A bridge between students and companies</Heading>
            <Text as="p">
              Virsity is all about making use of youthful and innovative talents
              to solve companies’ intriguing problems. We offer students
              opportunities to apply theoretical knowledge in real-life cases
              throughout challenges from companies all around the world
                </Text>
            <SubscriptionForm sx={styles.subscriptionForm} />
          </Box>
          <Box sx={styles.timerContent}>
            <Countdown date={Date.now() + 10000000} renderer={renderer} />
          </Box>
        </Flex>

        <Flex as="figure" sx={styles.bannerImage}>
          <Image src={illustration} alt="illustration" />
        </Flex>
      </Flex>
    </Box >
  );
};

export default Banner;

