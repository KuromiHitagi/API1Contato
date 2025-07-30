import { connection } from "../api/connection.js";

export async function listarFilme() {
    const comando = `select * from animes`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarFilme(newC) {
    const comando = `insert into animes(titulo, genero, ano_lancamento, duracao_min) values(?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.titulo,
        newC.genero,
        newC.ano_lancamento,
        newC.duracao_min
    ])
    return info.insertId;
}