require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3011;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoUri = process.env.MONGODB_URI;
mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Mongoose schema and model
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: { type: Date, default: Date.now },
    __v: { type: Number, default: 0 }
});

const Post = mongoose.model('Post', postSchema);

// GET /posts - Fetch all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching posts' });
    }
});

// GET /posts/:id - Fetch a specific post by ID
app.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error fetching post' });
    }
});

// POST /posts - Create a new post
app.post('/posts', async (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ message: 'Title, content, and author are required' });
    }

    try {
        const newPost = new Post({ title, content, author });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: 'Error creating post' });
    }
});

// PUT /posts/:id - Update an existing post
app.put('/posts/:id', async (req, res) => {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
        return res.status(400).json({ message: 'Title, content, and author are required' });
    }

    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content, author },
            { new: true, runValidators: true } // Ensure the updated document is returned and validators are run
        );
        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        console.error('Error updating post:', err); // Log the error for debugging
        res.status(500).json({ message: 'Error updating post', error: err.message });
    }
});

// DELETE /posts/:id - Delete a post
app.delete('/posts/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (deletedPost) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting post', error: err.message });
    }
});

// Default route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Simple Blog API!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Please use a different port.`);
    } else {
        console.error('Server error:', err);
    }
});