
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMrWs3fg67JpZAfCUV0n3FtVDwqkNtme0",
    authDomain: "mitflix-ft.firebaseapp.com",
    projectId: "mitflix-ft",
    storageBucket: "mitflix-ft.appspot.com",
    messagingSenderId: "17971185180",
    appId: "1:17971185180:web:d8823a36acc347a6abc1d9",
    measurementId: "G-PGT9WNQDCG"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
