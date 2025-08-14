import * as repo from '../repositories/turma.js'
import express from 'express'
const api = express();
api.use(express.json());

//Tabela Turma
//http://localhost:5000/turma
api.get('/turma', async (req, resp) => {
    let registros = await repo.listarTurma();
    resp.send(registros)
})
api.get('/turma/:id', async (req,resp) => {
    let id = req.params.id;
    let registros = await repo.listarIdTurma(id);
    resp.send(registros)
})
api.get('/turma/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repo.filtrarTurma(nome);
    resp.send(registros)
})
api.post('/turma', async (req, resp) => {
    let Nova = req.body;
    let id = await repo.adicionarTurma(Nova);
    resp.send({newId: id})
})
api.put('/turma/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await repo.alterarTurma(id, newC);
    resp.send();
})
api.delete('/turma/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await repo.deletarTurma(id);
    resp.send();
})

export default api;