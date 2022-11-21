import { ApolloServer, gql } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
import Cors from "micro-cors";
import { typeDefs } from "../../../graphql/typeDefs";
import { resolvers } from "../../../graphql/resolvers";
import { context } from "../../../graphql/context";
import { NextApiHandler } from "next";
import { RequestHandler } from "micro";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context });
const startServer = server.start();

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  const apolloHandler = server.createHandler({ path: "/api/graphql" });

  return apolloHandler(req, res);
};

export default cors(handler as RequestHandler);
