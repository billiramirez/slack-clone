import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress,graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models';

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});


const myGraphQLSchema = schema; // ... define or import your schema here!
const PORT = 8080;

const app = express();
const graphqlEndpoint = '/grapqhl'

// bodyParser is needed just for POST.
app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));


app.listen(PORT);

//In order to understand this code, please read the documentation of apollo server and apollo schema create
