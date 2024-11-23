// Importa a função conectarAoBanco do arquivo de configuração do banco de dados.
import conectarAoBanco from "../config/dbConfig.js";

// Cria uma conexão com o banco de dados usando a string de conexão fornecida em uma variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Define e exporta a função assíncrona getTodosPosts.
export async function getTodosPosts() {
    // Obtém a referência ao banco de dados chamado "imersao-instabytes".
    const db = conexao.db("imersao-instabytes");
    // Obtém a referência à coleção chamada "posts" dentro do banco de dados.
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção "posts" como um array.
    return colecao.find().toArray();
}