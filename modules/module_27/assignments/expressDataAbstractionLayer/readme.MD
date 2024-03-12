In this activity, you will go through some of the steps seen in this week’s videos to set up an Express.js DAL with MongoDB and Docker.

First, download the starter files Links to an external site.and run npm install from that directory. All code you will run in this activity will be from that directory and the only file you will need to modify will be the dal.js file in Section 2.

Section 1: MongoDB Setup
The steps in this section come from the Standalone MongoDB video. Make sure to watch the video before completing this section.

Before you complete this activity, you should already have Docker installed on your local machine. If you do not, use the Docker setup guide Links to an external site.to get you started.

If you already have Docker installed, proceed to Step 1.

Step 1: Run Docker

First, run the following command in your terminal:

docker run -p 27017:27017 --name badbank -d mongo
Once it is running, check that it is functioning by navigating to localhost:27017 in a browser. You should see the following:

Note: If you do not complete this activity in one sitting and need to restart your MongoDB Docker container, you may need to remove the previously created “bad bank” container with the command: docker rm /badbank before re-running the command above.

Step 2: Test MongoDB

To verify that the test has been successful, you will need to download Robo 3T Links to an external site., which will allow you to browse your MongoDB database.

You will then be able to interact with your database programmatically by running the same test file as that shown in the video, as follows:

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

 

// connect to mongo

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {

  console.log("Connected successfully to server");




    // database Name

    const dbName = 'myproject';

    const db = client.db(dbName);




    // new user

    var name = 'user' + Math.floor(Math.random()*10000);

    var email = name + '@mit.edu';




    // insert into customer table

    var collection = db.collection('customers');

    var doc = {name, email};

    collection.insertOne(doc, {w:1}, function(err, result) {

        console.log('Document insert');

    });




    var customers = db

        .collection('customers')

        .find()

        .toArray(function(err, docs) {

            console.log('Collection:',docs);




            // clean up

            client.close();            

    });    




});

Name the file mongo_test.js and run the node mongo_test.js command in the same directory as the file to test out your Docker MongoDB instance. 

Note: You will need to both initialize a node project in the same folder and run the npm install mongodb command in order to run the file as is.

You should then see something like the following as the terminal output:

image1.png


Next, use Robo 3T to check the contents of your MongoDB database. If you have just installed Robo 3T, you should see something like this (note that the below screenshot is specific to the Windows operating system): 

image5.png

Start by selecting the Create link at the top of the smaller window:

image7.png

Since you started MongoDB in localhost, port 27017, the default settings will work for you as they did in the videos. Select Save on the default connection to create the connection to your DB:

image3.png

Now choose the newly created connection and select Connect: 

image8.png

Once you have done so, you should be able to navigate to check the contents, as shown in the following screenshot:

image2.png

You now have a working MongoDB database that you can interact with through JavaScript files, as seen in the mongo_test.js file.

Section 2: Express Data Access Layer Setup
The steps in this section come from the Connect Express And MongoDB video, which you should watch before starting this activity. You will need to follow along with the steps in the video to complete this section.

In this section, you should refer to the following files:

The index.js file, which contains the express routes the bad bank expects. 
The dal.js file, which contains some of the functions you need in order to make those routes functional.
In this section, you will complete the create() and all() functions inside the dal.js file. In order to do this, follow along with the Connect Express And MongoDB video and populate the functions according to the steps there. As an additional reference, look up the MongoClient functions in the official MongoDB documentation Links to an external site.to understand how each of the methods work.

Once you have populated the functions, you should be able to go to your browser and navigate to localhost:3000/account/create/peter/peter@mit.edu/secret. You should receive a JSON response like that shown in the following screenshot: 

image6.png


Next, please do the following:

Create one or two more users. 
Test out the http://localhost:3000/account/all Links to an external site.route and take a screenshot of your response, which should show all the users you created. 
Submit your screenshot of the account/all route, showing with your unique users, in order to complete this activity.