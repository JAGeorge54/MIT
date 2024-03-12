const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected!');

    //database name
    const dbName = 'myproject';
    const db = client.db(dbName);
});