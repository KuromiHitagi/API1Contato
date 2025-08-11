import { connection } from "../api/connection.js";

export async function listarFilme() {
    const comando = `select * from filme`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarFilme(newC) {
    const comando = `insert into filme(titulo, genero, ano_lancamento, duracao_min) values(?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.titulo,
        newC.genero,
        newC.ano_lancamento,
        newC.duracao_min
    ])
    return info.insertId;
}

export async function listarIdFilme(id){
    const comando = `select * from filme 
                     where id = ?'`
    const [registros] = await connection.query(comando)
    return registros;
}

export async function filtrarFilme(nome){
    const comando = `select * from filme
                     where nome like ?`
    const [registros] = await connection.query(comando, ['%'+nome+'%'])
}

export async function alterarFilme(id, newC) {
    const comando = `update filme
                     set titulo = ?,
                         genero = ?,
                         ano_lancamento = ?,
                         duracao_min = ?
                     where id = ?`
    const [info] = await connection.query(comando, [
        newC.titulo,
        newC.genero,
        newC.ano_lancamento,
        newC.duracao_min,
        id
    ])
    return "Alterado com sucesso!"
}

export async function deletarFilme(id) {
    const comando = `delete from filme
                     where id = ?`

    const [info] = await connection.query(comando, [id])
    return "Deletado com sucesso!"
}