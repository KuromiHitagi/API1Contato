import { connection } from '../api/connection.js';

export async function listarTurma() {
    const comando = 'select * from turma'
    const [registros] = await connection.query(comando)
    return registros;
}

export async function adicionarTurma(newC) {
    const comando = `insert into turma(turma,curso, ano_letivo, capacidade, ativo, data_inclusao) values(?,?,?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.turma,
        newC.curso,
        newC.ano_letivo,
        newC.capacidade,
        newC.ativo,
        newC.data_inclusao
    ])
    return info.insertId;
}