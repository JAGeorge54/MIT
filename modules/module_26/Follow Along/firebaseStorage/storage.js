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

    // Create a root reference
    let storage = firebase.storage();
    let storageRef = storage.ref();

    // get UI elements
    const file     = document.getElementById('file');
    const upload   = document.getElementById('upload');
    const download = document.getElementById('download');
    const status   = document.getElementById('status');
    const image    = document.getElementById('image');

    //upload file
    upload.addEventListener('click', e => {
        // Create a file reference
        let ref = storageRef.child('globe');
        let photo = document.getElementById('file').files[0];

        // upload
        ref.put(photo).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
            status.innerHTML = 'Uploaded blob or file!'
        });
    });

    // download file
    download.addEventListener('click', e => {
        // file reference
        let ref = storage.ref('globe');

        ref.getDownloadURL().then(function(url) {
            //inserturl into an <img> tag to 'download'
            image.src = url;
            status.innerHTML = 'Downloaded blob or file!'

        }).catch(function(error){console.log(error)});
    });
}());