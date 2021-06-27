import { Button, Flex } from "theme-ui";

function LoginForm({ loginWithGoogle, loginWithFacebook, ...props }) {
  return (
    <Flex {...props}>
      <Button variant="primary" onClick={loginWithGoogle}>
        Login with google
      </Button>
      <Button variant="primary" onClick={loginWithFacebook}>
        Login with facebook
      </Button>
    </Flex>
  );
}

export default LoginForm;
