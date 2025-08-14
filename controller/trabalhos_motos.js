import * as repo from '../repositories/trabalhos_motos.js'
import express from 'express'
const api = express()
api.use(express.json())

//Tabela trabalhos_motos
//http://localhost:5000/trabalhos_motos
api.get('/trabalhos_motos', async (req, resp) => {
    let registros = await repo.listarMotos();
    resp.send(registros)
})
api.get('/trabalhos_motos/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await repo.listarIdMotos(id);
    resp.send(registros);
});

api.get('/trabalhos_motos/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repo.filtrarMotos(nome);
    resp.send(registros);
});
api.post('/trabalhos_motos', async (req, resp) => {
    let Nova = req.body;
    let id = await repo.adicionarMotos(Nova);
    resp.send({newId: id})
})
api.put('/trabalhos_motos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await repo.alterarTimes(id, newC);
    resp.send();
})
api.delete('/trabalhos_motos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await repo.deletarTimes(id);
    resp.send();
})

export default api;