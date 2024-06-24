const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Image {
    src: String
    alt: String
  }


  type ProjectScreen {
    id: ID!
    title: String
    subtitle: String
    image: Image
    description: [String]
  }

  type WorkScreen {
    id: ID!
    title: String
    image: Image
    description: [String]
  }

  type Story {
    title: String
    subtitle: String
    story_description: String
    descriptions: [String]
  }

  type Query {
    projectScreens: [ProjectScreen]
    workScreens: [WorkScreen]
    story: Story
  }
`;

module.exports = typeDefs;
