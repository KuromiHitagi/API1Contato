import express from 'express'
import * as repo from '../repositories/tenis.js'
const api = express()
api.use(express.json())

//Tabela Tenis
//http://localhost:5000/tenis
api.get('/tenis', async (req, resp) => {
    let registros = await repo.listarTenis();
    resp.send(registros)
})
api.get('/tenis/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await repo.listarIdTenis(id);
    resp.send(registros);
});

api.get('/tenis/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repo.filtrarTenis(nome);
    resp.send(registros);
});
api.post('/tenis', async (req, resp) => {
    let Nova = req.body;
    let id = await repo.adicionarTenis(Nova);
    resp.send({newId:id})
})
api.put('/tenis/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await repo.alterarTenis(id, newC)
    resp.send()
})
api.delete('/tenis/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await repo.deletarTenis(id);
    resp.send();
})

export default api;