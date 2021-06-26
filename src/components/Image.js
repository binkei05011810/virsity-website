import { Image as Img } from "theme-ui";

export default function ({ src, alt, ...rest }) {
  return <Img src={src} alt={alt} {...rest} />;
}

const styles = {
  image: {
    position: "relative",
    width: [200, 200, 250, 250],
    height: [200, 200, 250, 250],
  },
};
