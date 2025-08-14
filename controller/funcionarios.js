import express from 'express'
import * as repo from '../repositories/funcionarios.js'
const api = express()
api.use(express.json())

//Tabela funcionarios
//http://localhost:5000/funcionarios
api.get('/funcionarios', async (req, resp) => {
    let registros = await listarFuncionarios();
    resp.send(registros)
})
api.get('/funcionarios/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await listarIdFuncionario(id);
    resp.send(registros);
});

api.get('/funcionarios/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarFuncionario(nome);
    resp.send(registros);
});
api.post('/funcionarios', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarFuncionarios(Nova);
    resp.send({newId: id})
})
api.put('/funcionarios/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarFuncionarios(id, newC);
    resp.send();
})
api.delete('/funcionarios/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarFuncionarios(id);
    resp.send();
})

export default api;