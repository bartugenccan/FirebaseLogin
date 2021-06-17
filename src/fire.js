import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCiIJjW8CBLCNjZE5-KYEwY2Ntl4M6zzqM",
  authDomain: "login-592b2.firebaseapp.com",
  projectId: "login-592b2",
  storageBucket: "login-592b2.appspot.com",
  messagingSenderId: "841734960673",
  appId: "1:841734960673:web:3aba3fada56e185e449560",
  measurementId: "G-64WRFM6EMR",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;

