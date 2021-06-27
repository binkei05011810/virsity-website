import React from "react";
import LoginForm from "components/forms/LoginForm";
import { useContext } from "react";
import { Flex, Button } from "@theme-ui/components";
import Modal from "react-modal";
import { AuthContext } from "auth/auth-context";
import { toast } from "react-toastify";

function SignInButton({ inDrawer, openModal }) {
  return (
    <Button
      variant="white"
      onClick={openModal}
      sx={
        inDrawer
          ? {
              ...styles.signIn,
              display: "flex",
              m: "0 auto",
            }
          : styles.signIn
      }
    >
      Sign In
    </Button>
  );
}

function LogOutButton({ inDrawer, logOut }) {
  return (
    <Button
      variant="white"
      onClick={logOut}
      sx={
        inDrawer
          ? {
              ...styles.signIn,
              display: "flex",
              m: "0 auto",
            }
          : styles.signIn
      }
    >
      Log Out
    </Button>
  );
}

function GetStartedButton({ inDrawer }) {
  return (
    <Button
      variant="primary"
      sx={
        inDrawer
          ? {
              ...styles.getStarted,
              display: "flex",
              m: "0 auto",
              mb: "20px",
            }
          : styles.getStarted
      }
    >
      Get Started
    </Button>
  );
}

function ButtonGroupNav({ inDrawer }) {
  const [state, dispatch] = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const logOut = () => dispatch({ type: "logout" });

  const loginWithFacebook = () => {
    /* Todo */
  };

  const loginWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "login",
          payload: {
            credential: result.credential,
            user: result.user,
          },
        });
        closeModal();
      })
      .catch((error) => {
        closeModal();
        console.log(error);
        toast("Oops, Failed to log you in.. 😅");
      });
  };

  return (
    <Flex sx={inDrawer ? { flexDirection: "column" } : null}>
      {state.loggedIn ? (
        <LogOutButton inDrawer={inDrawer} logOut={logOut} />
      ) : (
        <SignInButton inDrawer={inDrawer} openModal={openModal} />
      )}
      <GetStartedButton inDrawer={inDrawer} />

      <Modal
        isOpen={modalIsOpen}
        style={styles.modal}
        contentLabel="Login Form"
        onRequestClose={closeModal}
        preventScroll={true}
      >
        <LoginForm
          closeModal={closeModal}
          loginWithGoogle={loginWithGoogle}
          loginWithFacebook={loginWithFacebook}
        />
      </Modal>
    </Flex>
  );
}

const styles = {
  getStarted: {
    backgroundColor: "primary",
    color: "textSecondary",
    ml: [6],
    minHeight: ["40px", "40px", "40px", "40px", "40px", "50px"],
    padding: ["0 25px", "0 25px", "0 25px", "0 30px"],
    display: ["none", null, null, null, "flex"],
  },
  signIn: {
    minHeight: ["40px", "40px", "40px", "40px", "40px", "50px"],
    padding: ["0 25px", "0 25px", "0 25px", "0 30px"],
    display: ["none", null, null, null, "flex"],
  },

  modal: {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: 15,
      boxShadow: "0px 9px 30px rgba(69, 88, 157, 0.08)",
      padding: "50px",
    },
    overlay: {
      zIndex: 100,
      backdropFilter: "blur(3px)",
    },
  },
};

export default ButtonGroupNav;
