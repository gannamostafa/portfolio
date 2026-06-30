const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({

    fullName: String,

    jobTitle: String,

    description: String,

    btn1Text: String,

    btn1Link: String,

    btn2Text: String,

    btn2Link: String,

    github: String,

    linkedin: String,

    email: String

});

module.exports = router;