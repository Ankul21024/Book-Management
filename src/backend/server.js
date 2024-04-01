// Import necessary modules
import express from 'express';
import { MongoClient } from 'mongodb';

// Create an Express app
const app = express();
const port = 5000;

// MongoDB connection string
const uri = 'mongodb://localhost:27017/bookstore';

// Use JSON middleware
app.use(express.json());

// Enable CORS for all requests
// Enable CORS for all requests
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Connect to MongoDB
MongoClient.connect(uri)
    .then(client => {
        console.log('Connected to MongoDB');
        const db = client.db('bookstore');
        const collection = db.collection('users');

        app.post('/register', async (req, res) => {
            console.log('Registering user:', req.body);
            try {
                const { email, password } = req.body;
                // Check if user already exists
                const existingUser = await collection.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ success: false, message: 'User already exists' });
                }
                // If user doesn't exist, insert new user
                await collection.insertOne({ email, password }); // You might want to encrypt the password before storing it
                console.log('User registered successfully');
                res.status(201).json({ success: true, message: 'User registered successfully' });
            } catch (error) {
                console.error('Error registering user:', error);
                res.status(500).json({ success: false, message: 'Failed to register user' });
            }
        });
        app.post('/login', async (req, res) => {
            console.log('Logging in user:', req.body);
            try {
              const { email, password } = req.body;
              // Check if user exists and password matches
              const user = await collection.findOne({ email, password });
              if (user) {
                console.log('User logged in successfully');
                res.status(200).json({ success: true, message: 'User logged in successfully' });
              } else {
                console.log('Invalid email or password');
                res.status(401).json({ success: false, message: 'Invalid email or password' });
              }
            } catch (error) {
              console.error('Error logging in user:', error);
              res.status(500).json({ success: false, message: 'Failed to log in user' });
            }
          });
          
        // Start the server
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

