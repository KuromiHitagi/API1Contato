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

export async function alterarTurma(id, newC) {
    const comando = `update turma
                     set turma = ?,
                         curso = ?,
                         ano_letivo = ?,
                         capacidade = ?,
                         ativo = ?,
                         data_inclusao = ?
                     where id = ?`;
    const [info] = await connection.query(comando, [
        newC.turma,
        newC.curso,
        newC.ano_letivo,
        newC.capacidade,
        newC.ativo,
        newC.data_inclusao,
        id
    ]);
    return "Turma alterada com sucesso!";
}

export async function deletarTurma(id) {
    const comando = `delete from turma where id = ?`;
    const [info] = await connection.query(comando, [id]);
    return "Turma deletada com sucesso!";
}
