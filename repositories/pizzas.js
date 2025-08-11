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

export async function alterarPizzas(id, newC) {
    const comando = `update pizzas
                     set nome = ?,
                         descricao = ?,
                         preco = ?,
                         tamanho = ?,
                         vegetariana = ?,
                         ingredientes = ?,
                         categoria = ?
                     where id = ?`;
    const [info] = await connection.query(comando, [
        newC.nome,
        newC.descricao,
        newC.preco,
        newC.tamanho,
        newC.vegetariana,
        newC.ingredientes,
        newC.categoria,
        id
    ]);
    return "Pizza alterada com sucesso!";
}

export async function deletarPizzas(id) {
    const comando = `delete from pizzas where id = ?`;
    const [info] = await connection.query(comando, [id]);
    return "Pizza deletada com sucesso!";
}
