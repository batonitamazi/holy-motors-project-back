const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    src: String,
    alt: String,
});

const WorkScreenSchema = new mongoose.Schema({
    title: String,
    image: ImageSchema,
    description: [String],
});

module.exports = mongoose.model('WorkScreen', WorkScreenSchema);
