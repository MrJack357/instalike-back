// Importa o framework Express, que facilita a criação e gerenciamento de servidores HTTP em Node.js.
import express from "express";

// Importa as rotas definidas no arquivo postsRoutes.js, que será responsável por gerenciar as rotas da aplicação.
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do Express, que é o servidor principal da aplicação.
const app = express();

// Chama a função `routes` passando a instância do servidor `app` para registrar as rotas na aplicação.
routes(app);

// Inicia o servidor na porta 3000 e define uma função de callback para ser executada quando o servidor estiver pronto.
app.listen(3000, () => {
    // Exibe no console uma mensagem indicando que o servidor está em execução.
    console.log("Servidor escutando...");
});
