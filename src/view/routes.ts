import express from 'express'

// Obtendo Controller
const BlogController = require('../controller/BlogController');

// Iniciando Router
const routes = express.Router();

// POST /posts
routes.post('/posts', BlogController.post);

// GET /posts - Get all blogs
routes.get('/posts', BlogController.getAll);

// GET /posts/:id - Get a single blog post 
routes.get('/posts/:id', BlogController.getById);

// PUT /posts/:id - Update a blog post
routes.put('/posts/:id', BlogController.update);

// DELETE /posts/:id - Delete a blog post
routes.delete('/posts/:id', BlogController.remove); 

export default routes;