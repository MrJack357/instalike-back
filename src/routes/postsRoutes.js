// Importa o framework Express para criar a aplicação web
import express from "express";

// Importa a função 'listarPosts' do controlador de posts
import { listarPosts } from "../controllers/postsController.js";

// Define uma função para configurar as rotas da aplicação
const routes = (app) => {
        // Habilita o parser JSON para lidar com requisições com corpo JSON
    app.use(express.json());
    
    // Define uma rota GET para o endpoint '/posts'
    // Quando uma requisição GET for feita para esse endpoint, a função 'listarPosts' será chamada
    app.get("/posts", listarPosts);
    app.post("/posts", )
}

// Exporta a função 'routes' para ser usada em outros módulos
export default routes;