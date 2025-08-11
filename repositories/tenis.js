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

export async function alterarTenis(id, newC) {
    const comando = `update tenis
                     set nome = ?,
                         genero = ?,
                         episodios = ?,
                         ano_lancamento = ?,
                         estudio = ?,
                         avaliacao = ?
                     where id = ?`;
    const [info] = await connection.query(comando, [
        newC.nome,
        newC.genero,
        newC.episodios,
        newC.ano_lancamento,
        newC.estudio,
        newC.avaliacao,
        id
    ]);
    return "Tênis alterado com sucesso!";
}

export async function deletarTenis(id) {
    const comando = `delete from tenis where id = ?`;
    const [info] = await connection.query(comando, [id]);
    return "Tênis deletado com sucesso!";
}
