import request from 'supertest';
import { expect } from 'chai';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let posts = [];
let nextId = 1;

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

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

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Simple Blog API!');
});

describe('Simple Blog API', () => {
    beforeEach(() => {
        posts = [];
        nextId = 1;
    });

    it('GET /posts should return an empty array initially', async () => {
        const res = await request(app).get('/posts');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array').that.is.empty;
    });

    it('POST /posts should create a new post', async () => {
        const newPost = { title: 'Test Post', content: 'Test Content', author: 'Test Author' };
        const res = await request(app).post('/posts').send(newPost);
        expect(res.status).to.equal(201);
        expect(res.body).to.include(newPost);
        expect(res.body).to.have.property('id');
    });

    it('GET /posts/:id should return the post with the given ID', async () => {
        const newPost = { title: 'Test Post', content: 'Test Content', author: 'Test Author' };
        const postRes = await request(app).post('/posts').send(newPost);
        const postId = postRes.body.id;
        const res = await request(app).get(`/posts/${postId}`);
        expect(res.status).to.equal(200);
        expect(res.body).to.include(newPost);
    });

    it('PUT /posts/:id should update the post with the given ID', async () => {
        const newPost = { title: 'Test Post', content: 'Test Content', author: 'Test Author' };
        const postRes = await request(app).post('/posts').send(newPost);
        const postId = postRes.body.id;
        const updatedPost = { title: 'Updated Title', content: 'Updated Content', author: 'Updated Author' };
        const res = await request(app).put(`/posts/${postId}`).send(updatedPost);
        expect(res.status).to.equal(200);
        expect(res.body).to.include(updatedPost);
    });

    it('DELETE /posts/:id should delete the post with the given ID', async () => {
        const newPost = { title: 'Test Post', content: 'Test Content', author: 'Test Author' };
        const postRes = await request(app).post('/posts').send(newPost);
        const postId = postRes.body.id;
        const res = await request(app).delete(`/posts/${postId}`);
        expect(res.status).to.equal(204);
    });

    it('GET / should return a welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Welcome to the Simple Blog API!');
    });
});