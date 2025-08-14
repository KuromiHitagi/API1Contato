import express from 'express'
import * as repo from '../repositories/pizzas.js'
const api = express()
api.use(express.json())

//Tabela pizzas
//http://localhost:5000/pizzas
api.get('/pizzas', async (req, resp) => {
    let registros = await listarPizzas();
    resp.send(registros)
})
api.get('/pizzas/:id', async (req, resp) => {
    let id = req.params.id;
    let registros = await listarIdPizza(id);
    resp.send(registros);
});

api.get('/pizzas/filtro', async (req, resp) => {
    let nome = req.query.nome;
    let registros = await filtrarPizza(nome);
    resp.send(registros);
});
api.post('/pizzas', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarPizzas(Nova);
    resp.send({newId: id})
})
api.put('/pizzas/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarPizzas(id, newC);
    resp.send();
})
api.delete('/pizzas/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarPizzas(id);
    resp.send();
})

export default api;