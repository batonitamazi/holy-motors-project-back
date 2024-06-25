const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

async function startServer() {
    const app = express();

    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app });

    mongoose.connect('mongodb://127.0.0.1:27017/holy_motors_db')
        .then(() => {
            console.log('Connected to MongoDB');

            app.listen({ port: 3000 }, () => {
                console.log(`Server ready at http://localhost:3000${server.graphqlPath}`);
            });
        })
        .catch(err => {
            console.error('Error connecting to MongoDB', err);
        });
}

startServer();
