const { gql } = require("apollo-server");
const typeDefs = gql`
  type User {
      id: ID!
      name: String!
      userName:String!
      age:Int!
      nationality:Nationality!
      friends: [User]
  }
  type Movie {
      id: ID!
      name: String!
      year: Int!
      isOtt:Boolean!
  }
  type Query {
      users: [User!]!
      user(id:ID!) : User!
      movies: [Movie!]!
      movie(name:String!): Movie 
  }
  input CreateUserInput {
      name: String!
      userName: String!
      age: Int!
      nationality: Nationality!
  }
  type Mutation {
      createUser(input: CreateUserInput!) : User
  }
  enum Nationality {
      CANADA
      BRAZIL
      GERMANY
      CHINA
      INDIA
  }
`;

module.exports = { typeDefs }