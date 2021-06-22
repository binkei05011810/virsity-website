import { jsx, Box, Button, Grid, Heading, Text, Flex } from "theme-ui";

const styles = {
  mainTimer: {
    width: "355px",
  },

  days: {
    backgroundColor: "rgba(31, 220, 255, 0.8)",
    height: "100px",
    width: "100px",
    boxShadow: "1px 1px 15px 2px rgba(118, 218, 255, 0.5)",

    p: {
      fontFamily: "Rubik, sans - serif",
      fontWeight: 100,
      textAlign: "center",
      margin: "0px auto",
      padding: 0,
      fontSize: "42px",
    },

    span: {
      textAlign: "center",
      margin: "0px auto",
      width: "100%",
      position: "relative",
      float: "left",
      fontAize: "14px",
      fontWeight: 800,
    },
  },

  hours: {
    backgroundColor: "rgba(255, 135, 220, 0.8)",
    height: "120px",
    width: "100px",
    boxShadow: "1px 1px 15px 1px rgba(255, 135, 220, 0.5)",

    p: {
      fontFamily: "Rubik, sans - serif",
      fontWeight: 100,
      textAlign: "center",
      margin: "0px auto",
      padding: 0,
      fontSize: "42px",
    },

    span: {
      textAlign: "center",
      margin: "0px auto",
      width: "100%",
      position: "relative",
      float: "left",
      fontAize: "14px",
      fontWeight: 800,
    },
  },

  min: {
    backgroundColor: "rgba(24, 241, 200, 0.9)",
    height: "170px",
    width: "100px",
    boxShadow: "1px 1px 15px 1px rgba(24, 241, 200, 0.5)",

    p: {
      fontFamily: "Rubik, sans - serif",
      fontWeight: 100,
      textAlign: "center",
      margin: "0px auto",
      padding: 0,
      fontSize: "42px",
    },

    span: {
      textAlign: "center",
      margin: "0px auto",
      width: "100%",
      position: "relative",
      float: "left",
      fontAize: "14px",
      fontWeight: 800,
    },
  },

  sec: {
    backgroundColor: "rgba(253, 168, 84, 0.8)",
    height: "110px",
    width: "100px",
    boxShadow: "1px 1px 15px 1px rgba(253, 168, 84, 0.5)",

    p: {
      fontFamily: "Rubik, sans - serif",
      fontWeight: 100,
      textAlign: "center",
      margin: "0px auto",
      padding: 0,
      fontSize: "42px",
    },

    span: {
      textAlign: "center",
      margin: "0px auto",
      width: "100%",
      position: "relative",
      float: "left",
      fontAize: "14px",
      fontWeight: 800,
    },
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
        <Box sx={styles.mainTimer}>
          <Flex>
            <Box sx={styles.days}>
              <p>{days}</p>
              <span>DAYS</span>
            </Box>
            <Box sx={styles.hours}>
              <p>{hours}</p>
              <span>HOURS</span>
            </Box>

            <Box sx={styles.min}>
              <p>{minutes}</p>
              <span>MINUTES</span>
            </Box>

            <Box sx={styles.sec}>
              <p>{seconds}</p>
              <span>SEC</span>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  }
};

export default renderer;

