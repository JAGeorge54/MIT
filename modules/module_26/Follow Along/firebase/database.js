(function() {
    // Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyBDE4gVWQeNfsguvIy3Qdyr5GnwdMInZnI",
        authDomain: "courso-10521.firebaseapp.com",
        projectId: "courso-10521",
        storageBucket: "courso-10521.appspot.com",
        messagingSenderId: "709929043728",
        appId: "1:709929043728:web:cfd5395358a229d9580795",
        measurementId: "G-BK1F6NGQY9"
      };

    // Initialize Firebase
	firebase.initializeApp(firebaseConfig);


	// handle on firebase db
	const db = firebase.database();

    // get elements
    const message = document.getElementById('message');
    const write   = document.getElementById('write');
    const read    = document.getElementById('read');
    const status  = document.getElementById('status');

    //write
    write.addEventListener('click', e => {
        const messages = db.ref('messages');

        //simple id - ok for example, do not use in production
        const id = (new Date).getTime();

        //write to db
        messages.child(id).set({'message' : message.value})
            .then(function() {
                status.innerHTML = 'wrote to DB!';
            })
    });

    //read
    read.addEventListener('click', e => {
        status.innerHTML = '';
        const messages = db.ref('messages');

        messages.once('value')
            .then(function(dataSnapshot) {
                let data = dataSnapshot.val();
                let keys = Object.keys(data);

                keys.forEach(function(key) {
                    console.log(data[key]);
                    status.innerHTML += JSON.stringify(data[key]) + '<br>';
                })
            })
    })
}());