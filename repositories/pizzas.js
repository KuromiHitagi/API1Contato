import { connection } from "../api/connection.js";

export async function listarPizzas() {
    const comando = `select * from pizzas`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarPizzas(newC) {
    const comando = `insert into pizzas(nome, descricao, preco, tamanho, vegetariana, ingredientes, categoria) values(?,?,?,?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.nome,
        newC.descricao,
        newC.preco,
        newC.tamanho,
        newC.vegetariana,
        newC.ingredientes,
        newC.categoria
    ])
    return info.insertId;
}