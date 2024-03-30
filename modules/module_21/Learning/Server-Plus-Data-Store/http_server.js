const express = require('express');
const app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// configure express to serve static files from public directory
// ------------------------------------------------------------------
app.use(express.static('public'));

// init the data store
db.defaults({ posts: []}).write();

db.get('posts')

// list posts
app.get('/data', function(req, res){     

    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

    var post = {
        'id' : req.params.id,
        'title' : req.params.title,
        'published' : req.params.published,
    }
    db.get('posts').push(post).write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value());

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    const boolean = req.params.boolean;

    const filtered = db.get('posts').filter({ published: boolean }).value()
    console.log(filtered);
    res.send(filtered)

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    const change = {
        "id": req.params.id,
        "boolean": req.params.boolean
    }

    console.log(db.get('posts').find({ id: change.id}).value())

    db.get('posts')
        .find({ id: change.id})
        .assign({ published: change.boolean})
        .write()
    
    console.log(db.get('posts').find({ id: change.id}).value())
    res.send(db.get('posts').find({ id: change.id}).value())



});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    const newId = req.params.id;

    console.log(db.get('posts').value())
    const deleted = db.get('posts').filter({ id: newId }).value()
    db.get('posts')
        .remove({ id: newId})
        .write()

        console.log(db.get('posts').value())
        res.send(db.get('posts').value())
        console.log(`${deleted} has been deleted`)
});

// start server
// -----------------------
app.listen(3000, function(){
    console.log('Running on port 3000!')
})
