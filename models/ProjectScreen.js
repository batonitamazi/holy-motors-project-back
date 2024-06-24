const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    src: String,
    alt: String,
});

const ProjectScreenSchema = new mongoose.Schema({
    title: String,
    subtitle: String,
    image: ImageSchema,
    description: [String],
});

module.exports = mongoose.model('ProjectScreen', ProjectScreenSchema);
