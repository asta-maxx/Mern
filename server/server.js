const express = require('express');
const cors = require('cors');
const app = express();
const UserModel = require('./User');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// Create API End Points (HTTP Request, Response)
app.get('/', (req, res) => {
    res.send('Welcome to Node JS Server');
});

// Register API Route
app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(() => res.json('Data Saved Successfully'))
        .catch(err => res.status(400).json(err));
});

// Config PORT and Start Server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/Company')
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));
