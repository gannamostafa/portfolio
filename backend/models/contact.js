const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    sectionTitle: String,

    email: String,

    phone: String,

    github: String,

    linkedin: String,

    showEmail: Boolean,

    showPhone: Boolean,

    showGithub: Boolean,

    showLinkedin: Boolean

});

module.exports = mongoose.model("Contact", contactSchema);