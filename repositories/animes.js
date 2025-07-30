import { connection } from "../api/connection.js";

export async function listarAnimes() {
    const comando = `select * from animes`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarAnimes(newC) {
    const comando = `insert into animes(nome, genero, episodios, ano_lancamento, estudio, avaliacao) values(?,?,?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.nome,
        newC.genero,
        newC.episodios,
        newC.ano_lancamento,
        newC.estudio,
        newC.avaliacao
    ])
    return info.insertId;
}