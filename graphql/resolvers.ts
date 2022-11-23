import { Resolvers } from "./resolvers-types";
import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();

export const resolvers: Resolvers = {
  Query: {
    pins: async (_, args, ctx) => await ctx.prisma?.pins.findMany(),
  },
  Mutation: {
    createPins: async (_, { input }, ctx) =>
      await ctx.prisma?.pins.create({ data: input }),
  },
};
