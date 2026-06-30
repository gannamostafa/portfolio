const express = require("express");
const router = express.Router();
const Profile = require("../models/hero");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post("/upload-image", upload.single("profileImage"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const imageUrl = "http://localhost:3000/uploads/" + req.file.filename;
    res.json({ imageUrl: imageUrl });
});

router.post("/profile", (req, res) => {
    console.log("data", req.body);

    const updatedData = {
        fullName: req.body.fullName,
        jobTitle: req.body.jobTitle,
        description: req.body.description || "",
        email: req.body.email || "",
        github: req.body.github || "",
        linkedin: req.body.linkedin || "",
        profileImage: req.body.profileImage || "",
        technologies: Array.isArray(req.body.technologies) ? req.body.technologies : []
    };

    Profile.findOneAndUpdate({}, updatedData, { returnDocument: 'after', upsert: true, runValidators: true }) 
            .then((savedProfile) => {
            console.log("data saved");
            res.status(200).json(savedProfile);
        })
        .catch((error) => {
            console.error("Error", error.message);
            res.status(500).json({ error: error.message });
        });
});

router.get("/profile", (req, res) => {
    Profile.findOne()
        .then((profile) => res.json(profile))
        .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = router;