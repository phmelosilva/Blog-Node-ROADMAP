import express from 'express'

// Obtendo Controller
const BlogController = require('../controller/BlogController');
// Iniciando Router
const routes = express.Router();

// POST /posts
routes.post('/posts', BlogController.post);
routes.get('/posts', (req, res) => {
    res.send("Veja todos os posts aqui");
});


export default routes;