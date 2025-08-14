import express from 'express'
import * as repo from '../repositories/times_futebol.js'
const api = express()
api.use(express.json())

//Tabela times_futebol
//http://localhost:5000/times_futebol
api.get('/times_futebol', async (req, resp) => {
    let registros = await repo.listarTimes();
    resp.send(registros)
})
api.get('/times_futebol/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await repo.listarIdTimes(id);
    resp.send(registros);
});

api.get('/times_futebol/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repo.filtrarTimes(nome);
    resp.send(registros);
});
api.post('/times_futebol', async (req, resp) => {
    let Nova = req.body;
    let id = await repo.adicionarTimes(Nova);
    resp.send({newId: id})
})
api.put('/times_futebol/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await repo.alterarTimes(id, newC);
    resp.send();
})
api.delete('/times_futebol/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await repo.deletarTimes(id);
    resp.send();
})

export default api;