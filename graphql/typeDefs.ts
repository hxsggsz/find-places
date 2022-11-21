import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type pins {
    id: String
    name: String
    image: String
    latitude: Float
    longitude: Float
    description: String
  }

  type Query {
    pins: [pins]
  }
`;
