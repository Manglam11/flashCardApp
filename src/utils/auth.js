import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth/web-extension";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error creating user with email and password", error.message);
    throw error;
  }
};

export const dosignInWithEmailAndPassword = async (email, password) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error signing in with email and password", error.message);
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  } catch (error) {
    console.log("Error signing in with google", error.message);
    throw error;
  }
};

export const doSignInWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  } catch (error) {
    console.log("Error signing in with github", error.message);
    throw error;
  }
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
