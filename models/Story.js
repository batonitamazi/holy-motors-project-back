const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    story_description: String,
    descriptions: [String],
});

module.exports = mongoose.model('Story', StorySchema);
