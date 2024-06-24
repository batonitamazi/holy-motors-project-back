const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const ProjectScreen = require('./models/ProjectScreen');
const WorkScreen = require('./models/WorkScreen');
const Story = require('./models/Story');

mongoose.connect('mongodb://localhost:27017/holy_motors_db', { useNewUrlParser: true, useUnifiedTopology: true });

const typeDefs = gql`
  type Image {
    src: String
    alt: String
  }

  type ProjectScreen {
    id: ID
    title: String
    subtitle: String
    image: Image
    description: [String]
    style: Style
  }

  type WorkScreen {
    id: ID
    title: String
    image: Image
    description: [String]
  }

  type Style {
    backgroundColor: String
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

const resolvers = {
    Query: {
        projectScreens: async () => await ProjectScreen.find(),
        workScreens: async () => await WorkScreen.find(),
        story: async () => await Story.findOne(),
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
});
