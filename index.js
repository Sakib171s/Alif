const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./GraphQL/typeDefs');
const resolvers = require('./Resolvers');
const { MONGODB } = require('./config.js');



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }) 
});

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> {
    console.log('MongoDb');
    return server.listen({port: 5000});
})
    .then((res) => {
        console.log(`Sever Running at ${res.url}`)
    })
    .catch(err => {
        console.error(err)
    })

