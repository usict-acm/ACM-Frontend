// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"
import "firebase/compat/storage";

// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7zTYmhFI7Ygvhf_f1VTHTWAAGN9VlJoI",
  authDomain: "forms-clone-127b9.firebaseapp.com",
  projectId: "forms-clone-127b9",
  storageBucket: "forms-clone-127b9.appspot.com",
  messagingSenderId: "356296216795",
  appId: "1:356296216795:web:df779d62a4322f75a43cfe",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
