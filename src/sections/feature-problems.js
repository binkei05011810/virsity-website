/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from "theme-ui";
import Image from "components/image";
import Problem from "components/problem/problem";
import problem1 from "assets/images/connect.svg";
import bottomDecor from "assets/images/bottomDecor1.png";
import curveDecor from "assets/images/curveDecor.png";

const problems = [
  {
    name: "Challenge",
    description: "Prepare a quote dataset of your choice containing famous quotes or meaningful pieces of text anywhere online.",
    illustration: problem1,
    details: [
      {
        title: "Classification",
        contents: (
          <div>
            Classify quotes into different topics (including some that belong to
            5 elements of SISU (Gratitude, Love, Courage, Passion, Perseverance),
            and basic analysis on the text: categorization, topic modeling and
            semantic analysis.
          </div>
        ),
      },
      {
        title: "Style Transfer",
        contents: (
          <div>
            Transforming quotes into text of different mediums (poetry, text in
            a specific writer’s styles, comedy, rap, etc.
          </div>
        ),
      },
      {
        title: "BONUS",
        contents: (
          <div>
            Based on training data, auto-generate quotes related to specific
            categories and topics.
          </div>
        ),
      },
    ],
  },
];

const styles = {
  section: {
    paddingTop: "150px",
    position: "relative",
    backgroundColor: "#08164b"
  },

  carousel: {
    "&.swiper-container": {
      pb: [8],
      pl: [6, null, null, 0],
      pr: [6, null, null, 0],
    },
  },

  bottomDecor: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },

  headerWrapper: {
    paddingTop: "160px",
    textAlign: "center",
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
      letterSpacing: [0, null, null, null, "-1.5px"],
      color: "#fff6e9",
      fontFamily: "Bungee, cursive",
      "@media screen and (min-width: 1441px) and (max-width:1600px)": {
        fontSize: 12,
        lineHeight: 1.5,
      },
    },
  },

  container: {
    paddingTop: "20px",
    marginRight: 0,
    marginLeft: 0
  }
};

const FeatureProblems = () => {
  const options = {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
  };

  return (
    <section id="features" sx={styles.section}>
      <Image sx={styles.bottomDecor} src={bottomDecor} />
      <Box sx={styles.headerWrapper}>
        <Heading as="h1">On-going challenges</Heading>
      </Box>
      <Container sx={styles.container}>
        <Box sx={styles.carousel} {...options}>
          {problems.map((prob, index) => (
            <Box key={index}>
              <Problem prob={prob} />
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default FeatureProblems;


