import resolvers from './resolvers'
import schema from './schema'
import {graphqlHTTP} from 'express-graphql'
const express = require('express')

const app = express()

app.get("/", (req, res) =>{
    res.send("Up and running with graphql crash")
})
const root = {lco: ()=>console.log("learncode.in")}
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: ture
}))

app.listen(8082, () => console.log("runing server"))