/** @jsx jsx */
import { jsx, Box, Flex, Button } from "theme-ui";
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Text,
} from "theme-ui";

const styles = {
  name: {
    justifyContent: "space-between",
  },

  nameBox: {
    width: "48%",
  },

  formContainer: {
    width: "500px",
    position: "relative",
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      height: "40px",
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    h2: {
      mb: 5,
    },

    "@media screen and (max-width:560px)": {
      width: "90vw",
    },
  },

  closeBtn: {
    color: "black",
    position: "absolute",
    top: 0,
    right: 0,
    "&:hover": {
      cursor: "pointer",
    },
  },
};
const RegistrationForm = ({ closeModal }) => {
  return (
    <Box
      sx={styles.formContainer}
      as="form"
      onSubmit={(e) => e.preventDefault()}
    >
      <Text as="h2">Registration Form</Text>
      <Box sx={styles.closeBtn} onClick={closeModal}>
        <i class="far fa-times-circle"></i>
      </Box>
      <Flex sx={styles.name}>
        <Box sx={styles.nameBox}>
          <Label sx={styles.label} htmlFor="firstname">
            First name
          </Label>
          <Input sx={styles.input} name="firstname" id="firstname" mb={3} />
        </Box>
        <Box sx={styles.nameBox}>
          <Label sx={styles.label} htmlFor="lastname">
            Last name
          </Label>
          <Input sx={styles.input} name="firstname" id="lastname" mb={3} />
        </Box>
      </Flex>

      <Flex mb={3}>
        <Label>
          <Radio name="letter" />
          Individual
        </Label>
        <Label>
          <Radio name="letter" />
          With team
        </Label>
      </Flex>

      <Label sx={styles.label} htmlFor="teamname">
        Team name (optional)
      </Label>
      <Input sx={styles.input} name="teamname" id="teamname" mb={3} />
      <Button>Submit</Button>
    </Box>
  );
};

export default RegistrationForm;

