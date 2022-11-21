import { Resolvers } from "./resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    pins: async (_, args, ctx) => await ctx.prisma.pins.findMany(),
  },
};
