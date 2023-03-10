const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Game {
  _id: ID
  name: String!
  released: String
  rating: Float
}

type Profile {
  _id: ID
  name: String
  email: String
  password: String
  games: [Game]
}

  type Auth {
    token: ID!
    profile: Profile
  }

  input AddGameInput {
    gameId: ID!
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    games: [Game]
    game(gameId: ID!): Game
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth 
    removeProfile: Profile
    addGame(gameId: ID!, name: String!, rating: Float, released: String ): Profile
  }
`;


module.exports = typeDefs;
