const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  // new user
  var name = 'user' + Math.floor(Math.random()*10000);
  var email = name + '@mit.edu';
  //insert into customer table
  var collection = db.collection('customers');
  var doc = {name, email};
  collection.insertOne(doc, {w:1}, function(err, result) {
      console.log('Document insert')
    })

    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs){
            console.log('collection:',docs)

            client.close();
        })


  // the following code examples can be pasted here...

//   return 'done.';
}

main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';

// MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
//     console.log('Connected!')

//     //database name
//     const dbName = 'myproject';
//     const db = client.db(dbName);

//     // new user
//     var name = 'user' + Math.floor(Math.random()*10000);
//     var email = name + '@mit.edu';

//     //insert into customer table
//     var collection = db.collection('customers');
//     var doc = {name, email};
//     collection.insertOne(doc, {w:1}, function(err, result) {
//         console.log('Document insert')
//     })
// });