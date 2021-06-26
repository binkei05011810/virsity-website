/** @jsx jsx */
import { AuthContext } from "auth/auth-context";
import { auth, provider } from "../../firebase";
import { useContext } from "react";
import { Button } from "theme-ui";

function LoginForm() {
  const { state, dispatch } = useContext(AuthContext);

  const loginWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        dispatch({
          type: "login",
          payload: {
            credential: result.credential,
            user: result.user,
          },
        });
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Button variant="primary" onClick={loginWithGoogle}>
        Login with google
      </Button>
    </div>
  );
}

export default LoginForm;
