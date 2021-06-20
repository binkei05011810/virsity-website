/** @jsx jsx */
import { jsx, Box, Button, Grid, Heading, Text, Flex } from "theme-ui";
import Accordion from "components/accordion/accordion";
import Countdown from "react-countdown";
import Image from "components/image";

const styles = {
  problemWrapper: {
    alignItems: "center",
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
    color: "#f1faee",
    textAlign: ["center"],
    fontFamily: "Raleway, sans-serif",

    m: "15px auto",
    maxWidth: [null, null, null, 600, "none"],

    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, "100%"],
        top: ["4px", "8px", null, null, "4px", "8px"],
      },
      mb: "4px",
      color: "#4cc9f0"
    },
    p: {
      fontSize: [null, null, null, 2],
      mt: "4px",

    },
  },
  leftContent: {
    width: "50%",
    display: "flex",
    minHeight: "500px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },

  rightContent: {
    width: "50%",
  },

  accordionGroup: {
    m: [null, null, null, "0 auto", "unset"],
    maxWidth: [null, null, null, 600, "none"],
  },
  register: {
    m: "0 auto",
    backgroundColor: "#0066ff",
  },
};


const Completionist = () => {
  <Text>Times Up!</Text>;
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <Box sx={styles.timerWrap}>
        <Box sx={styles.timer}>
          <Text as="span">{days}</Text>
          <Heading as="h3">Days</Heading>
        </Box>
        <Box sx={styles.timer}>
          <Text as="span">{hours}</Text>
          <Heading as="h3">Hours</Heading>
        </Box>
        <Box sx={styles.timer}>
          <Text as="span">{minutes}</Text>
          <Heading as="h3">Minutes</Heading>
        </Box>
        <Box sx={styles.timer}>
          <Text as="span">{seconds}</Text>
          <Heading as="h3">Seconds</Heading>
        </Box>
      </Box>
    );
  }
};

const Problem = ({ prob }) => {
  const { name, description, illustration, details } = prob;
  return (
    <Flex sx={styles.problemWrapper}>
      <Box sx={styles.leftContent}>
        <Image src={illustration} alt="illustration" />
        <Button variant="primary" sx={styles.register}>
          Register Now !
        </Button>
      </Box>
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
        <Countdown date={Date.now() + 10000000} renderer={renderer} />
      </Box>
    </Flex>
  );
};

export default Problem;
