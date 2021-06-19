/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from "theme-ui";
import { rgba } from "polished";
import Image from "components/image";
import bottomDecor from "assets/images/bottomDecor.png";
import mission from "assets/images/mission.png";
import student from "assets/images/student.png";
import projects from "assets/images/projects.png";

const styles = {
    about: {
        padding: "0 100px 0 100px",
        position: "relative",
        width: "100%",
        backgroundColor: "#fff6e9",
        pt: [14, null, null, null, null, 0],
        pb: [6, null, null, 7, 11, 0],
        overflow: "hidden"
    },

    headerWrapper: {
        textAlign: "center",
        h1: {
            fontWeight: 700,
            fontSize: "4.5rem",
            lineHeight: [1.26, null, null, 1.5, 1.2, 1.26],
            letterSpacing: [0, null, null, null, "-1.5px"],
            color: "#08164b",
            fontFamily: "Londrina Shadow, cursive",
            "@media screen and (min-width: 1441px) and (max-width:1600px)": {
                fontSize: 12,
                lineHeight: 1.5,
            },
        },
    },

    bottomDecor: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },

    mainContent: {
        paddingTop: "70px"
    },

    aboutContent: {
        width: "50%",
        textAlign: [null, null, null, "center", "left"],
        p: {
            fontSize: "1rem",
            lineHeight: [1.5, null, null, 2, null, 2.33],
            color: "black",
            maxWidth: [470],
            m: [null, null, null, "30px auto", 0],
            mt: [3, null, null, null, 5],
        },
    },
    aboutImage: {
        width: "50%",
        zIndex: 5,
        alignItems: "center",
        justifyContent: "flex-start",

        img: {
            width: "50vw"
        }
    },
    contentPoint: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px",
        img: {
            marginRight: "20px",
            width: "30%"
        },
        p: {
            fontSize: "1rem",
            width: "70%",
            margin: 0
        }
    }
};

const About = () => {
    return (
        <Box p={0} as="section" id="about" sx={styles.about}>
            <Image sx={styles.bottomDecor} src={bottomDecor} />
            <Box sx={styles.headerWrapper}>
                <Heading as="h1">
                    What we do
            </Heading>
            </Box>
            <Flex sx={styles.mainContent}>
                <Box sx={styles.aboutContent}>
                    <Flex sx={styles.contentPoint}>
                        <Image src={student} />
                        <Text as="p">
                            Making use of youthful and innovative talents to solve companies’
                            intriguing problems
                        </Text>
                    </Flex>

                    <Flex sx={styles.contentPoint}>
                        <Image src={projects} />
                        <Text as="p">
                            Offer students opportunities to apply theoretical knowledge in
                            real-life cases throughout challenges from companies all around the world.
                        </Text>
                    </Flex>
                </Box>

                <Flex as="figure" sx={styles.aboutImage}>
                    <Image src={mission} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default About;

