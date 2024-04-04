<!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-database.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-auth.js"></script>
  <script src="./assets/js/chat.js"></script>
const firebaseConfig = {
    apiKey: "AIzaSyDXfCOHp-MQ3Q3loOF1WWlxK1RwaJ8UUBU",
    authDomain: "eagles-5fc88.firebaseapp.com",
    databaseURL: "https://eagles-5fc88.firebaseio.com",
    projectId: "eagles-5fc88",
    storageBucket: "eagles-5fc88.appspot.com",
    messagingSenderId: "422055144725",
    appId: "1:422055144725:web:5d96c54b03888fab698d1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.then((resp) => {
      console.log('User Signup + Login Response: ', resp);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
      write.style.display = 'inline';
      updateCurrentUser(resp.user.email);
    });
    promise.catch((e) => console.log(e.message));