import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "./firebase";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error creating user with email and password", error.message);
    throw error;
  }
};

export const dosignInWithEmailAndPassword = async (
  email,
  password,
  rememberMe
) => {
  try {
    const persistence = rememberMe
      ? browserLocalPersistence
      : browserSessionPersistence;
    await setPersistence(auth, persistence);

    return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("Error signing in with email and password", error.message);
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    const result = await signInWithPopup(auth, provider);
    console.log("Google sign-in successful", result.user);
    return result;
  } catch (error) {
    console.error("Error signing in with Google", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
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
  try {
    return auth.signOut();
  } catch (error) {
    console.log("Error signing out", error.message);
    throw error;
  }
};

export const doPasswordReset = (email) => {
  try {
    return sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log("Error resetting password", error.message);
    throw error;
  }
};

export const doPasswordChange = (password) => {
  try {
    return updatePassword(auth.currentUser, password);
  } catch (error) {
    console.log("Error changing password", error.message);
    throw error;
  }
};

export const doSendEmailVerification = () => {
  try {
    return sendEmailVerification(auth.currentUser, {
      url: `${window.location.origin}/home`,
    });
  } catch (error) {
    console.log("Error sending email verification", error.message);
    throw error;
  }
};
