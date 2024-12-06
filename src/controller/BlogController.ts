import { Request, Response } from "express";
import Blog from "../model/blog";

let blogs: Blog[] = [];

// Método POST /posts
const post = (req: Request, res: Response) => {
    try {
        const { title, content, category, tags, author } = req.body;

        // Validação simples dos campos obrigatórios
        if (!title || !content || !author) {
            return res.status(400).json({ error: "Campos requisitados não estão preenchidos: title, content, ou author" });
        }

        const newPost: Blog = {
            id: String(blogs.length + 1),
            title,
            content,
            category: category || "Sem Categoria",
            tags: tags || [],
            author,
            createdAt: new Date(),
        };

        // Salva o blog no banco de dados
        blogs.push(newPost);
        return res.status(201).json(newPost);

    } catch (error) {
        console.log("Deu erro ao postar um blog, veja:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }  
};

// Método GET /posts
const getAll = (req: Request, res: Response) => {
    res.status(200).json(blogs);
};

// Método GET /posts/:id
const getById = (req: Request, res: Response) => {
    const id = req.params.id;

    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].id = id) {
            const post = blogs[i];
        }
    }

    const blog = post;

    if (!blog) {
        return res.status(400).json({ error: "Blog not found" });
    } else {
        return res.status(200).json(blog);
    }
}

// PUT /posts/:id
const update = (req: Request, res: Response) => {
    const id = req.params.id;

    const index = blogs.findIndex((b) => b.id === id);
    if (index === -1) {
        return res.status(404).json({error: "Post não encontrado"});
    }

    const { title, content, category, tags, author } = req.body;

    blogs[index] = {
        ...blogs[index],
        title: title || blogs[index].title,
        content: content || blogs[index].content,
        category: category || blogs[index].category,
        tags: tags || blogs[index].tags,
        author: author || blogs[index].author,
        updatedAt: new Date(),
    };

    return res.status(200).json(blogs[index]);
}

// DELETE /posts/:id
const remove = (req: Request, res: Response) => {
    const id = req.params.id;
    const index = blogs.findIndex((b) => b.id === id);
    if (index === -1) {
        return res.status(404).json({error: "Post não encontrado"});
    }
    blogs.splice(index, 1);
    return res.status(204).send();
}

module.exports = {
    post,
    getAll,
    getById,
    update,
    remove
  };