/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from "theme-ui";
import { rgba } from "polished";
import Image from "components/image";
import bottomDecor from "assets/images/bottomDecor.png";
import mission from "assets/images/mission.png";
import student from "assets/images/student.png";
import projects from "assets/images/projects.png";
import curveDecor from "assets/images/curveDecor.png";

const styles = {
    about: {
        padding: 0,
        position: "relative",
        width: "100%",
        backgroundColor: "#fff6e9",
        pt: [14, null, null, null, null, 0],
        pb: [6, null, null, 7, 11, 0],
        overflow: "hidden",
    },

    headerWrapper: {
        paddingTop: "250px",
        textAlign: "center",
        h1: {
            fontWeight: 700,
            fontSize: "3.5rem",
            color: "#08164b",
            fontFamily: "Bungee, cursive",
        },

        "@media screen and (max-width: 1200px)": {
            paddingTop: 0
        },
    },

    bottomDecor: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },

    curveDecor: {
        width: "200px",
        position: "absolute",
        top: "300px",
        left: "-10px"
    },

    curveDecor2: {
        width: "200px",
        position: "absolute",
        bottom: "0",
        right: 0
    },

    mainWrapper: {
        padding: "80px 150px 100px 150px",

        "@media screen and (max-width: 1200px)": {
            padding: "80px 80px 0 80px",
        },
    },

    mainContent: {
        borderRadius: "1rem",
        boxShadow: "rgb(38, 57, 77) 0px 30px 30px -0px",

        "@media screen and (max-width: 1023px)": {
            flexDirection: "column",
        }
    },

    aboutContent: {
        padding: "0 30px",
        height: "38vw",
        width: "50%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff6e9",
        borderRadius: "1rem 0 0 1rem",
        p: {
            fontSize: "1rem",
            lineHeight: "2rem",
            color: "black",
            maxWidth: [470],
        },

        "@media screen and (max-width: 1023px)": {
            borderRadius: " 1rem 1rem 0 0",
            width: "100%",
            height: "50vw"
        }
    },

    aboutImage: {
        height: "38vw",
        background: "-webkit-linear-gradient(90deg, hsla(216, 100%, 50%, 1) 0%, hsla(326, 100%, 82%, 1) 100%)",
        width: "50%",
        zIndex: 5,
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: " 0 1rem 1rem 0",

        img: {
            width: "80vw"
        },

        "@media screen and (max-width: 1023px)": {
            borderRadius: "0 0 1rem 1rem",
            width: "100%",
            height: "50vw"
        }
    },
    contentPoint: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "40px",
        img: {
            marginRight: "20px",
            width: "30%",

            "@media screen and (max-width: 1023px)": {
                width: "20%",
            }
        },
        p: {
            fontSize: "1rem",
            width: "70%",
            margin: 0
        },

        "@media screen and (max-width: 1023px)": {
            borderRadius: " 1rem 1rem 0 0",
            width: "100%"
        }
    }
};

const About = () => {
    return (
        <Box p={0} as="section" id="about" sx={styles.about}>
            <Image sx={styles.bottomDecor} src={bottomDecor} />
            <Image sx={styles.curveDecor} src={curveDecor} />
            <Image sx={styles.curveDecor2} src={curveDecor} />
            <Box sx={styles.headerWrapper}>
                <Heading as="h1">What we do</Heading>
            </Box>
            <Box sx={styles.mainWrapper}>
                <Flex sx={styles.mainContent}>
                    <Flex sx={styles.aboutContent}>
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
                    </Flex>

                    <Flex as="figure" sx={styles.aboutImage}>
                        <Image src={mission} />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default About;

