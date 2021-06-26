import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../firebase.config";

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default app;
export { provider, auth };
