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