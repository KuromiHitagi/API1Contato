import { connection } from "../api/connection.js";

export async function listarFuncionarios() {
    const comando = `select * from funcionarios`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarFuncionarios(newC) {
    const comando = `insert into funcionarios(nome, cpf, cargo, tempo_trabalhado, data_inicio) values(?,?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.nome,
        newC.cpf,
        newC.cargo,
        newC.tempo_trabalhado,
        newC.data_inicio
    ])
    return info.insertId;
}