import express from 'express';
import { listarTurma, adicionarTurma } from "../repositories/turma.js";
import { listarAnimes, adicionarAnimes } from '../repositories/animes.js';
import { listarTimes, adicionarTimes } from '../repositories/times_futebol.js';
import { listarMotos, adicionarMotos } from '../repositories/trabalhos_motos.js';
import { adicionarPizzas, listarPizzas } from '../repositories/pizzas.js';
import { adicionarFuncionarios, listarFuncionarios } from '../repositories/funcionarios.js';
import { adicionarFilme, listarFilme } from '../repositories/filme.js';
import { adicionarProdutos, listarProdutos } from '../repositories/produtos.js';
import { listarPaciente, adicionarPaciente } from '../repositories/hospital.js';
import { adicionarTenis, listarTenis } from '../repositories/tenis.js';
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

//Tabela produtos
//http://localhost:5000/produtos
api.get('/produtos', async (req, resp) => {
    let registros = await listarProdutos();
    resp.send(registros)
})
api.post('/produtos', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarProdutos(Nova);
    resp.send({newId:id})
})

//Tabela produtos
//http://localhost:5000/produtos
api.get('/produtos', async (req, resp) => {
    let registros = await listarProdutos();
    resp.send(registros)
})
api.post('/produtos', async (req, resp) => {
    let Nova = req.body;
    let id = await adicionarProdutos(Nova);
    resp.send({newId:id})
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

api.listen(5000, () => console.log("API rodando..."))