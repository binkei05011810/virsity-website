import firebase from "firebase";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
