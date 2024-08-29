const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3011;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let posts = [];
let nextId = 1;

// GET /posts - Fetch all posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id - Fetch a specific post by ID
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// POST /posts - Create a new post
app.post('/posts', (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ message: 'Title, content, and author are required' });
    }

    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        createdAt: new Date()
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id - Update an existing post
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const { title, content, author } = req.body;

    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex] = { ...posts[postIndex], title, content, author };
        res.json(posts[postIndex]);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// DELETE /posts/:id - Delete a post
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

// Default route
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Simple Blog API!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});