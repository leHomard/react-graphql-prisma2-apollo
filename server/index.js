const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');

const { schema } = require('./schema');

const Prisma = new PrismaClient();

const server = new GraphQLServer({
  schema,
  context: { Prisma }
});

const options = {
  port: 4444,
  endpoint: '/graphql'
}

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
