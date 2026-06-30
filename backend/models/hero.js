const mongoose = require('mongoose');
const heroSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    profileImage: { 
      type: String
    },
    description: {
        type: String
    },
    technologies: {
    type: [String]
    },
    email: {
        type: String
    },
    github: {
        type: String
    },
    linkedin: {
        type: String
    }
});

const Hero = mongoose.model('Hero', heroSchema);
module.exports = Hero;