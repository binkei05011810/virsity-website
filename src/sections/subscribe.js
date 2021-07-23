/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import { rgba } from "polished";
import SectionHeading from "components/SectionHeading";
import SubscriptionForm from "components/forms/SubscriptionForm";
import ScrollAnimation from "react-animate-on-scroll";

const Subscribe = () => {
  return (
    <Box as="section" id="contact" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Get in touch with our team today, and we will provide all the assistance you need to post your first challenge on Virsity."
          description="By subscribing with your mail, you will accept our privacy policy"
        />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={500}>
          <SubscriptionForm sx={styles.subscriptionForm} />
        </ScrollAnimation>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles = {
  section: {
    pt: [9, null, null, null, 10, 13, null],
    pb: [9, null, null, null, 11, 14, null],
  },
  heading: {
    mb: [7, null, null, 8, 9, 10],
    h2: {
      color: "text",
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "text",
      fontSize: [2, null, null, 3],
      m: ["15px auto 0", null, null, "10px auto 0"],
    },
  },
  subscriptionForm: {
    m: ["30px auto 0"],
    maxWidth: [555],
    flexDirection: ["column", null, null, "row"],
    input: {
      backgroundColor: rgba("black", 0.08),
      border: "0 none",
      color: rgba(0, 0, 0, 0.8),
      fontFamily: "body",
      px: [5],
      minHeight: [50, null, null, null, 60],
      boxShadow: "0px 16px 40px rgba(72, 59, 26, 0.08)",
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      "::placeholder": {
        color: rgba("black", 0.8),
        opacity: 1 /* Firefox */,
      },
    },
    button: {
      fontSize: [1, null, null, 2],
      minHeight: [50, null, null, null, 60],
      ml: [0, null, null, 3],
      mt: [4, null, null, 0],
    },
  },
};
