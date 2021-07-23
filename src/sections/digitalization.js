import Image from "components/Image";
import { Box, Container, Flex, Heading, Text, Link } from "theme-ui";
import illustration from "assets/images/problem1.svg";
import ScrollAnimation from "react-animate-on-scroll";
import SectionHeading from "components/SectionHeading";

const Digitalisation = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Box sx={styles.content}>
              <SectionHeading
                title="Welcome to Virsity !"
                description="Virsity - a platform to solve business problems"
              />
              <Text as="p">
                Digitalisation, data science and software development are
                increasingly critical skills every business should make use of.
                In the real world however, it may be difficult, expensive and
                time-consuming to hire these specialists before you can
                visualise what your ROI will be.
              </Text>
            </Box>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
            <Box sx={styles.image}>
              <Image
                src={illustration}
                alt="Illustration"
                width={500}
                height={500}
              />
            </Box>
          </ScrollAnimation>
        </Flex>
      </Container>
    </Box>
  );
};

export default Digitalisation;

const styles = {
  section: {
    pb: [
      "45px",
      "50px",
      null,
      "90px",
      "100px",
      null,
      "120px",
      "140px",
      "150px",
    ],
  },
  container: {
    position: "relative",
  },
  flex: {
    display: "flex",
    gap: 0,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column-reverse", null, null, "row"],
  },
  image: {
    width: ["100%"],
    mt: ["30px"],
    textAlign: ["center", null, null, "left"],
    img: {
      mx: ["auto", null, null, null, "0"],
      display: "flex",
    },
  },
  content: {
    textAlign: ["center", null, null, "left"],
    flex: ["0 0 100%", null, null, null, "0 0 50%"],
    pl: ["0", null, null, "40px", "50px"],
    mx: [null, null, null, "auto", "0"],
    maxWidth: [null, null, null, "395px", "475px", null, "600px"],
    p: {
      color: "text",
      fontSize: ["15px", null, "16px"],
      lineHeight: [1.9, null, 2.5],
      maxWidth: "465px",
      mb: ["22px", "30px", null, null, null, "40px"],
      mx: ["auto", null, null, null, "0"],
    },
  },
};
