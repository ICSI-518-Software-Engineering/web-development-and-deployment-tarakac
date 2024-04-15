const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Dummy data store for users
const users = [];

app.use(bodyParser.json());

// Endpoint for handling signup requests
app.post('/api/signup', (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(400).send('Username already exists');
    }

    // Add new user
    users.push({ username, password });
    res.status(201).send('Signup successful');
});

// Endpoint for handling login requests
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists and password matches
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    res.status(200).send('Login successful');
});

// Endpoint for fetching user data
app.get('/api/user', (req, res) => {
    // Dummy implementation, you might use authentication middleware here to identify the user
    // For simplicity, just return the first user in the array
    res.json(users[0]);
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
