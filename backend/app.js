const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const profileRoutes = require('./routes/profile');
const contactRouter = require("./routes/contact");

const app = express();
const PORT = 5000; 

app.use(cors());
app.use(express.json()); 
app.use(express.static("public"));
app.use("/admin", express.static("admin"));

mongoose.connect('mongodb://localhost:27017/portfolio_db')
    .then(() => console.log('Connected'))
    .catch(err => console.error('Error', err));

app.use('/api', profileRoutes);
app.use('/api/contact', contactRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT} 🚀`);
});