import * as repo from '../repositories/hospital.js'
import express from 'express'
const api = express()
api.use(express.json())

//Tabela hospital
//http://localhost:5000/hospital
api.get('/hospital', async (req, resp) => {
    let registros = await repo.listarPaciente();
    resp.send(registros)
})
api.get('/hospital/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await repo.ListarIdPaciente(id);
    resp.send(registros);
});

api.get('/hospital/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await repo.filtrarPaciente(nome);
    resp.send(registros);
});
api.post('/hospital', async (req, resp) => {
    let Nova = req.body;
    let id = await repo.adicionarPaciente(Nova);
    resp.send({newId:id})
})
api.put('/hospital/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await repo.alterarPaciente(id, newC);
    resp.send();
})
api.delete('/hospital/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await repo.deletarPaciente(id);
    resp.send();
})

api.listen(5000, () => console.log("API rodando..."))

export default api;