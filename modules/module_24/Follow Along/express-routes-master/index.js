const express = require('express')

var restaurants = [{id:0,name:"Woodshill"},{id:1,name:"Fiorellas"}]

const app = express();
app.use(express.json());
let options = {
    dotfiles: "ignore",
    redirect:false
}
// allows access to files in public folder
app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.send('Hello World!')
}
)
app.get("/restaurants", (req,res)=>{
    res.send(restaurants);
})

app.post("/restaurant",(req,res)=>{
    res.send(`${req.body.name} created`)
})


app.listen(4000,()=>console.log('Listening on 4000'))