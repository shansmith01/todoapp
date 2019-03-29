import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChPh0fp089gllfzUIBmEuSXyWLP8W0cRM",
  authDomain: "todo-2926a.firebaseapp.com",
  databaseURL: "https://todo-2926a.firebaseio.com",
  projectId: "todo-2926a",
  storageBucket: "todo-2926a.appspot.com",
  messagingSenderId: "792169899935"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
