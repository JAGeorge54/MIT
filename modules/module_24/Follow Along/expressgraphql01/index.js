var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

var contacts = [
  {
    id:1,
    name: "peter parker",
    age: 21,
    email: "peter@mit.edu",
    courses: [
      { number: "1.00", name: "engr comp" },
      { number: "3.00", name: "intro bio" }
    ]
  },
  {
    id:2,
    name: "bruce wayne",
    age: 32,
    email: "bruce@mit.edu",
    courses: [
      { number: "2.00", name: "intro ME" },
      { number: "3.00", name: "intro MS" }
    ]
  },
  {
    id:3,
    name: "diana prince",
    age: 25,
    email: "diana@mit.edu",
    courses: [
      { number: "2.00", name: "intro arch" },
      { number: "1.00", name: "intro chem" }
    ]
  },
];

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    contacts: [contact]
  },
  type Contact {
    name: String
    email: String
    age: Int
    courses: [Courses]
  },
  type Course {
    number:String
    name: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  contacts : ()=> contacts
};

var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
const port = 4000;
app.listen(port, () => {
  console.log(`Running Graphql on Port:${port}`)
});