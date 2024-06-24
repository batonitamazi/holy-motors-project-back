const ProjectScreen = require('../models/ProjectScreen');
const WorkScreen = require('../models/WorkScreen');
const Story = require('../models/Story');

const resolvers = {
    Query: {
        projectScreens: async () => await ProjectScreen.find(),
        workScreens: async () => await WorkScreen.find(),
        story: async () => await Story.findOne(),
    },
};

module.exports = resolvers;
