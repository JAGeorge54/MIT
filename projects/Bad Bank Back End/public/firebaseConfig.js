const firebaseConfig = {
    apiKey: "AIzaSyCo-r9QlRHMdkEhuittdIQ0cZX5_tAjNcs",
    authDomain: "bad-bank-1c01f.firebaseapp.com",
    projectId: "bad-bank-1c01f",
    storageBucket: "bad-bank-1c01f.appspot.com",
    messagingSenderId: "167211093853",
    appId: "1:167211093853:web:ef51730ac2600a09e4e2b4",
    measurementId: "G-QWQB0JHFTR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
    // const promise = auth.createUserWithEmailAndPassword(
    //   email.value,
    //   password.value
    // );
    // promise.then((resp) => {
    //   console.log('User Signup + Login Response: ', resp);
    //   logout.style.display = 'inline';
    //   login.style.display = 'none';
    //   signup.style.display = 'none';
    //   write.style.display = 'inline';
    //   updateCurrentUser(resp.user.email);
    // });
    // promise.catch((e) => console.log(e.message));