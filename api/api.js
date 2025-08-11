import express from 'express';
import { listarTurma, adicionarTurma } from "../repositories/turma.js";
import { listarAnimes, adicionarAnimes, alterarAnimes, deletarAnimes } from '../repositories/animes.js';
import { listarTimes, adicionarTimes, alterarTimes, deletarTimes } from '../repositories/times_futebol.js';
import { listarMotos, adicionarMotos } from '../repositories/trabalhos_motos.js';
import { adicionarPizzas, alterarPizzas, deletarPizzas, listarPizzas } from '../repositories/pizzas.js';
import { adicionarFuncionarios, alterarFuncionarios, deletarFuncionarios, listarFuncionarios } from '../repositories/funcionarios.js';
import { adicionarFilme, alterarFilme, deletarFilme, listarFilme } from '../repositories/filme.js';
import { adicionarProduto, alterarProduto, deletarProduto, listarProduto } from '../repositories/produtos.js';
import { listarPaciente, adicionarPaciente, deletarPaciente, alterarPaciente } from '../repositories/hospital.js';
import { adicionarTenis, alterarTenis, deletarTenis, listarTenis } from '../repositories/tenis.js';
const api = express();
api.use(express.json());

//Tabela Turma
//http://localhost:5000/turma
api.get('/turma', async (req, resp) => {
    let registros = await listarTurma();
    resp.send(registros)
})
api.post('/turma', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarTurma(Nova);
    resp.send({newId: id})
})

//Tabela Animes
//http://localhost:5000/animes
api.get('/animes', async (req, resp) => {
    let registros = await listarAnimes();
    resp.send(registros)
})
api.post('/animes', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarAnimes(Nova);
    resp.send({newId: id})
})
api.put('/animes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarAnimes(id, newC);
    resp.send();
})
api.delete('/animes/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarAnimes(id);
    resp.send();
})

//Tabela times_futebol
//http://localhost:5000/times_futebol
api.get('/times_futebol', async (req, resp) => {
    let registros = await listarTimes();
    resp.send(registros)
})
api.post('/times_futebol', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarTimes(Nova);
    resp.send({newId: id})
})
api.put('/times_futebol/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarTimes(id, newC);
    resp.send();
})
api.delete('/times_futebol/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarTimes(id);
    resp.send();
})

//Tabela trabalhos_motos
//http://localhost:5000/trabalhos_motos
api.get('/trabalhos_motos', async (req, resp) => {
    let registros = await listarMotos();
    resp.send(registros)
})
api.post('/trabalhos_motos', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarMotos(Nova);
    resp.send({newId: id})
})
api.put('/trabalhos_motos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarTimes(id, newC);
    resp.send();
})
api.delete('/trabalhos_motos/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarTimes(id);
    resp.send();
})

//Tabela pizzas
//http://localhost:5000/pizzas
api.get('/pizzas', async (req, resp) => {
    let registros = await listarPizzas();
    resp.send(registros)
})
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

//Tabela funcionarios
//http://localhost:5000/funcionarios
api.get('/funcionarios', async (req, resp) => {
    let registros = await listarFuncionarios();
    resp.send(registros)
})
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

//Tabela filme
//http://localhost:5000/filme
api.get('/filme', async (req, resp) => {
    let registros = await listarFilme();
    resp.send(registros)
})
api.post('/filme', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarFilme(Nova);
    resp.send({newId: id})
})
api.put('/filme/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarFilme(id, newC);
    resp.send();
})
api.delete('/filme/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarFilme(id);
    resp.send();
})

//Tabela Tenis
//http://localhost:5000/tenis
api.get('/tenis', async (req, resp) => {
    let registros = await listarTenis();
    resp.send(registros)
})
api.post('/tenis', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarTenis(Nova);
    resp.send({newId:id})
})
api.put('/tenis/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarTenis(id, newC)
    resp.send()
})
api.delete('/tenis/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarTenis(id);
    resp.send();
})

//Tabela produtos
//http://localhost:5000/produto
api.get('/produto', async (req, resp) => {
    let registros = await listarProduto();
    resp.send(registros)
})
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

//Tabela hospital
//http://localhost:5000/hospital
api.get('/hospital', async (req, resp) => {
    let registros = await listarPaciente();
    resp.send(registros)
})
api.post('/hospital', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarPaciente(Nova);
    resp.send({newId:id})
})
api.put('/hospital/:id', async (req, resp) => {
    let id = Number(req.params.id);
    let newC = req.body;

    await alterarPaciente(id, newC);
    resp.send();
})
api.delete('/hospital/:id', async (req, resp) => {
    let id = Number(req.params.id);
    await deletarPaciente(id);
    resp.send();
})

api.listen(5000, () => console.log("API rodando..."))