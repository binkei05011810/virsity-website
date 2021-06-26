/** @jsx jsx */
import { jsx, Text } from "theme-ui";
import { Link } from "components/Link";
import Image from "components/Image";
import LogoImg from "assets/images/logo.svg";

export default function Logo({ isWhite, showLogo, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {showLogo ? <Image sx={styles.logoImg} src={LogoImg} /> : null}
      <Text sx={styles.name} className={isWhite ? "name__white" : ""}>
        Virsity
      </Text>
    </Link>
  );
}
const styles = {
  logoImg: {
    width: [42, null, 42],
    height: "auto",
    marginRight: "10px",
  },
  name: {
    fontSize: "1.5rem",
    verticalAlign: "middle",
    fontFamily: "Hussar Ekologiczny, cursive",
    textTransform: "uppercase",
  },
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    ".name__white": {
      color: "white",
    },
  },
};
