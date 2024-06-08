require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./UserDetailsSchema');
const Feedback = require('./FeedbackSchema');

const app = express();
const port = 3000;

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const allowedOrigins = ['https://youtubis.netlify.app', 'https://youtubis-youtube-clone.onrender.com'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(bodyParser.json());

// Details submission
app.post('/user', async (req, res) => {
    const { name, email, photo } = req.body;
    const currentDate = new Date().toISOString().split('T')[0];

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const newUser = new User({
            name,
            email,
            photo,
            loginDate: currentDate,
        });

        await newUser.save();
        res.status(200).json({ message: 'User added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user', error });
    }
});

// Feedback submission
app.post('/feedback', async (req, res) => {
    const { name, email, feedback } = req.body;

    const newFeedback = new Feedback({
        name,
        email,
        feedback,
    });

    try {
        await newFeedback.save();
        res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error submitting feedback', error });
    }
});

app.get("/", (req, res) => {
    res.send("Adding data in MongoDB...");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
