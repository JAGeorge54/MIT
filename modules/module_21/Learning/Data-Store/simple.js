var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: []}).write();
 
console.log(db.get('posts').value());

// Add a post
// db.get('posts')
//   .push({ id: 2, title: 'lowdb is awesome', published: true})
//   .write()
// db.get('posts')
//   .push({ id: 3, title: 'lowdb is awesome', published: true})
//   .write()
// db.get('posts')
//   .push({ id: 4, title: 'lowdb is awesome', published: true})
//   .write()

// count posts
// ----------------------------
// YOUR CODE
let count = db.get("posts").size().value();
console.log("count", count);

// find all posts ids
// ----------------------------
// YOUR CODE
let allPosts = db
  .get("posts")
  .value()
  .map((post) => post.id);
console.log("allPosts", allPosts);

// all matches of published false
// ----------------------------
// YOUR CODE
let unpublished = db.get("posts").filter({ published: false }).value();
console.log("unpublished", unpublished);

// find post with published false
// ----------------------------
// YOUR CODE
let unpublishedPost = db.get("posts").find({ published: false }).value();
console.log("unpublishedPost", unpublishedPost);
