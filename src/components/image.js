import { Image as Img } from "theme-ui";

export default function ({ src, ...rest }) {
  return <Img src={src} {...rest} sx={styles.image} />;
}

const styles = {
  image: {
    img: {
      width: [200, 200, 250, 250],
      height: [200, 200, 250, 250],
    },
  },
};
