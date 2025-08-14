import express from 'express'
import * as repo from '../repositories/produtos.js'
const api = express()
api.use(express.json())

//Tabela produtos
//http://localhost:5000/produto
api.get('/produto', async (req, resp) => {
    let registros = await listarProduto();
    resp.send(registros)
})
api.get('/produto/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await listarIdProduto(id);
    resp.send(registros);
});

api.get('/produto/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarProduto(nome);
    resp.send(registros);
});

api.post('/produto', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarProduto(Nova);
    resp.send({newId:id})
})
api.put('/produto/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarProduto(id, newC);
    resp.send();
})
api.delete('/produto/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarProduto(id);
    resp.send();
})

export default api;