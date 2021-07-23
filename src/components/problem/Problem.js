/** @jsx jsx */
import { jsx, Box, Button, Grid, Heading, Text } from "theme-ui";
import Accordion from "components/accordion/Accordion";
import Image from "components/Image";
import ScrollAnimation from "react-animate-on-scroll";
import { useContext } from "react";
import { AuthContext } from "auth/auth-context";
import { toast } from "react-toastify";

const styles = {
  grid: {
    alignItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
  },
  timerWrap: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    m: "30px auto",
  },

  timer: {
    flex: "0 0 auto",
    m: ["0 15px", null, "0 20px"],
    span: {
      lineHeight: 1,
      fontSize: ["22px", null, "28px", "32px", "36px"],
      letterSpacing: "-1px",
      fontWeight: 600,
      color: "body",
    },
    h3: {
      lineHeight: 1.3,
      color: "heading",
      fontSize: ["14px", "15px"],
      fontWeight: "body",
      mt: "5px",
    },
  },
  heading: {
    textAlign: ["center"],

    m: "15px auto",
    maxWidth: [null, null, null, 600, "none"],

    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, "100%"],
        top: ["4px", "8px", null, null, "4px", "8px"],
      },
      mb: "4px",
    },
    p: {
      fontSize: [null, null, null, 2],
      mt: "4px",
    },
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
  companyInfo: {
    mt: 10,
    borderRadius: 10,
    p: ["15px", "20px 30px", "30px 45px", "20px 25px", "20px 35px"],
    boxShadow: "0px 9px 30px rgba(69, 88, 157, 0.08)",
    h2: {
      mb: 4,
    },
  },
  register: {
    m: "30px auto",
  },
  grid: {
    alignItems: "center",
    gridTemplateColumns: [
      "1fr",
      null,
      null,
      null,
      "1fr 431px",
      "1fr 530px",
      "1fr 550px",
    ],
  },
};

const Problem = ({ prob, openModal }) => {
  const { state } = useContext(AuthContext);
  const { name, description, details, companyName, companyLogo } = prob;
  const handleRegistration = () => {
    if (state.loggedIn) {
      toast(
        "Thank you for registering for our competition ! We will send further details of the competition by mail !."
      );
    } else {
      openModal();
    }
  };

  return (
    <Grid sx={styles.grid}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Box sx={styles.leftContent}>
          <Box sx={styles.companyInfo}>
            <Heading as="h2">{companyName}</Heading>
            <Image src={companyLogo} alt="company-logo" />
          </Box>
          <Button
            variant="primary"
            onClick={handleRegistration}
            sx={styles.register}
          >
            Register Now !
          </Button>
        </Box>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
        <Box sx={styles.rightContent}>
          <Box sx={styles.heading}>
            <Heading as="h2">{name}</Heading>
            <Text as="p" sx={styles.description}>
              {description}
            </Text>
          </Box>
          <Box sx={styles.accordionGroup}>
            <Accordion items={details} />
          </Box>
        </Box>
      </ScrollAnimation>
    </Grid>
  );
};

export default Problem;
