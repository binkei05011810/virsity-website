/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Text, Heading, Link } from "theme-ui";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "components/image";

const TeamMember = ({ member }) => {
  return (
    <Box sx={styles.section}>
      <Flex as="figure" sx={styles.avatar}>
        <Image src={member?.avatar} alt={member?.name} />
      </Flex>
      <Box sx={styles.about}>
        <Heading as="h3">{member?.name}</Heading>
        <Text as="p">{member?.designation}</Text>
        <Box sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <Link href={social?.link} key={index}>
              {social?.name === "linkedin" && (
                <FaLinkedin size="18px" color="#161614" />
              )}
              {social?.name === "github" && (
                <FaGithub size="18px" color="#161614" />
              )}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  about: {
    mt: [4],
    textAlign: ["center", null, null, "left"],
    h3: {
      color: "heading",
      fontFamily: "body",
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: "#7589A1",
      letterSpacing: "-0.2px",
      mt: [2],
    },
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["center", null, null, "left"],
    mt: [3],
    a: {
      display: "inline-flex",
      mr: [2],
    },
  },
};
