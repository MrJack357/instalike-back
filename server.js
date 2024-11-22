import express from 'express';

const posts = [
    {
        id: 1,
        titulo: "Gato Millie em um dia ensolarado",
        imagem: "https://placecats.com/millie/300/150"
    },

    {
        id: 2,
        titulo: "Millie relaxando na janela",
        imagem: "https://placecats.com/millie/250/150"
    },

    {
        id: 3,
        titulo: "Millie explorando a caixa de papelão",
        imagem: "https://placecats.com/millie/500/150"
    },

    {
        id: 4,
        titulo: "Millie fazendo uma cara fofa",
        imagem: "https://placecats.com/millie/200/150"
    },

    {
        id: 5,
        titulo: "Millie brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },

    {
        id: 6,
        titulo: "Millie espreguiçando no sol da manhã",
        imagem: "https://placecats.com/millie/320/150"
    }
];


const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('servidor escutando...');
});

app.get('/posts', (req, res) => {
        res.status(200).json(posts);
});

function buscaarPostPorID(id) {
    return posts.findIndex((post)  => {
        return post.id === Number(id)
    })
}

app.get('/posts/:id', (req, res) => {
    const index = buscaarPostPorID(req.params.id    )
        res.status(200).json(posts[index]);
});