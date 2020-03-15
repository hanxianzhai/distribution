import '@babel/polyfill'
import express from 'express'
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const server = new ApolloServer({
    modules: [
        require('./GraphQL/designer_data_directories.js'),
    ],
});

server.applyMiddleware({ app });
const version = require("../package.json").version;
app.get('/', (req, res) => res.send(version));

app.listen({ port: 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:5000`),
);
