/** @jsx jsx */
import { jsx, Box, Button, Grid, Heading, Text } from "theme-ui";
import Accordion from "components/accordion/accordion";
import Image from "components/image";
import ScrollAnimation from "react-animate-on-scroll";

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
    minHeight: "500px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
  register: {
    m: "0 auto",
  },
};

const Problem = ({ prob, openModal }) => {
  const { name, description, illustration, details } = prob;
  return (
    <Grid sx={styles.grid}>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <Box sx={styles.leftContent}>
          <Image src={illustration} alt="illustration" />
          <Button variant="primary" onClick={openModal} sx={styles.register}>
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
