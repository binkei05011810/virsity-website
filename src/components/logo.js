/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
import LogoImg from "assets/images/logo.png";
import LogoImgWhite from "assets/images/logo-white.png";

export default function Logo({ isWhite, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <img src={!isWhite ? LogoImg : LogoImgWhite} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    img: {
      height: "auto",
      width: [128, null, 128],
    },
  },
};
