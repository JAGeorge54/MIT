var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { buildSchema } = require("graphql")

// Construct a schema, using GraphQL schema language

    const restaurants = [
      {
        "name": "WoodsHill ",
        "description": "American cuisine, farm to table, with fresh produce every day",
        "dishes": [
          {
            "name": "Swordfish grill",
            "price": 27
          },
          {
            "name": "Roasted Broccily ",
            "price": 11
          }
        ]
      },
      {
        "name": "Fiorellas",
        "description": "Italian-American home cooked food with fresh pasta and sauces",
        "dishes": [
          {
            "name": "Flatbread",
            "price": 14
          },
          {
            "name": "Carbonara",
            "price": 18
          },
          {
            "name": "Spaghetti",
            "price": 19
          }
        ]
      },
      {
        "name": "Karma",
        "description": "Malaysian-Chinese-Japanese fusion, with great bar and bartenders",
        "dishes": [
          {
            "name": "Dragon Roll",
            "price": 12
          },
          {
            "name": "Pancake roll ",
            "price": 11
          },
          {
            "name": "Cod cakes",
            "price": 13
          }
        ]
      }
    ]

var schema = buildSchema(`
  type Query {
    restaurant(id: Int): Restaurant
    restaurants: [Restaurant]
  },
  type Restaurant {
    name: String
    description: String
    dishes: [Dish]
  },
  type Dish {
    name: String
    price: Int
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  restaurant : (arg)=> restaurants[arg.id],
  restaurants : ()=> restaurants
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
app.listen(port,()=>{
  console.log(`Running on Port:${port}`)
})