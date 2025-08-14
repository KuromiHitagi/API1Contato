import * as repo from '../repositories/animes.js'
import express from 'express'
const api = express();
api.use(express.json());

//Tabela Animes
//http://localhost:5000/animes
api.get('/animes', async (req, resp) => {
    let registros = await repo.listarAnimes();
    resp.send(registros)
})
api.get('/animes/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await repo.listarIdAnime(id);
    resp.send(registros);
});

api.get('/animes/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repo.filtrarAnime(nome);
    resp.send(registros);
});
api.post('/animes', async (req, resp) => {
    let Nova = req.body;
    let id = await repo.adicionarAnimes(Nova);
    resp.send({newId: id})
})
api.put('/animes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await repo.alterarAnimes(id, newC);
    resp.send();
})
api.delete('/animes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await repo.deletarAnimes(id);
    resp.send();
})

export default api;