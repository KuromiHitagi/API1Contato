import { connection } from "../api/connection.js";

export async function listarTenis() {
    const comando = `select * from tenis`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarTenis(newC) {
    const comando = `insert into tenis(nome, genero, episodios, ano_lancamento, estudio, avaliacao) values(?,?,?,?,?,?)`
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