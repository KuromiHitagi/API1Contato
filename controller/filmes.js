import * as repo from '../repositories/filme.js'
import express from 'express'
const api = express()
api.use(express.json())

//Tabela filme
//http://localhost:5000/filme
api.get('/filme', async (req, resp) => {
    let registros = await repo.listarFilme();
    resp.send(registros)
})
api.get('/filme/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await repo.listarIdFilme(id);
    resp.send(registros);
});

api.get('/filme/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repo.filtrarFilme(nome);
    resp.send(registros);
});
api.post('/filme', async (req, resp) => {
    let Nova = req.body;
    let id = await repo.adicionarFilme(Nova);
    resp.send({newId: id})
})
api.put('/filme/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await repo.alterarFilme(id, newC);
    resp.send();
})
api.delete('/filme/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await repo.deletarFilme(id);
    resp.send();
})

export default api;