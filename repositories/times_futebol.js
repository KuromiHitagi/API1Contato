import { connection } from '../api/connection.js';

export async function listarTimes() {
    const comando = 'select * from times_futebol'
    const [registros] = await connection.query(comando)
    return registros;
}

export async function adicionarTimes(newC) {
    const comando = `insert into times_futebol(nome, cidade, estado, pais, ano_fundacao, estadio, capacidade_estadio, tecnico, liga) values(?,?,?,?,?,?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.nome,
        newC.cidade,
        newC.estado,
        newC.pais,
        newC.ano_fundacao,
        newC.estadio,
        newC.capacidade_estadio,
        newC.tecnico,
        newC.liga
    ])
    return info.insertId;
}

export async function listarIdTimes(id){
    const comando = `select * from times 
                     where id = ?'`
    const [registros] = await connection.query(comando)
    return registros;
}

export async function filtrarTimes(nome){
    const comando = `select * from times
                     where nome like ?`
    const [registros] = await connection.query(comando, ['%'+nome+'%'])
}

export async function alterarTimes(id, newC) {
    const comando = `update times_futebol
                     set nome = ?,
                         cidade = ?,
                         estado = ?,
                         pais = ?,
                         ano_fundacao = ?,
                         estadio = ?,
                         capacidade_estadio = ?,
                         tecnico = ?,
                         liga = ?
                     where id = ?`;
    const [info] = await connection.query(comando, [
        newC.nome,
        newC.cidade,
        newC.estado,
        newC.pais,
        newC.ano_fundacao,
        newC.estadio,
        newC.capacidade_estadio,
        newC.tecnico,
        newC.liga,
        id
    ]);
    return "Time alterado com sucesso!";
}

export async function deletarTimes(id) {
    const comando = `delete from times_futebol where id = ?`;
    const [info] = await connection.query(comando, [id]);
    return "Time deletado com sucesso!";
}
