import illustration from "assets/images/problem2.svg";
import Image from "components/Image";
import SectionHeading from "components/SectionHeading";
import ScrollAnimation from "react-animate-on-scroll";
import { Box, Container, Flex, Text } from "theme-ui";

const WhatWeDo = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <Flex sx={styles.flex}>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Box sx={styles.image}>
              <Image
                src={illustration}
                alt="Illustration"
                width={500}
                height={500}
              />
            </Box>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
            <Box sx={styles.content}>
              <SectionHeading
                title="What we do"
                description="Connecting businesses and students"
              />
              <Text as="p">
                Virsity selects some of the world's most promising talent - and
                allows you, the business, to select a specific challenge you'd
                like to tackle. We make it easy to get started with exploring
                artificial intelligence, consumer or business applications, data
                strategy and more. Each challenge is only a fraction of the cost
                of traditional ICT consulting houses.
              </Text>
              <Text as="p">
                Get in touch with our team today, and we will provide all the
                assistance you need to post your first challenge on Virsity !
              </Text>
            </Box>
          </ScrollAnimation>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhatWeDo;

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
