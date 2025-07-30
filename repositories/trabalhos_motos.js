import { connection } from '../api/connection.js';

export async function listarMotos() {
    const comando = 'select * from trabalhos_motos'
    const [registros] = await connection.query(comando)
    return registros;
}

export async function adicionarMotos(newC) {
    const comando = `insert into trabalhos_motos(placa_moto, modelo, descricao_trabalho, data_entrada, status, valor) values(?,?,?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.placa_moto,
        newC.modelo,
        newC.descricao_trabalho,
        newC.data_entrada,
        newC.status,
        newC.valor
    ])
    return info.insertId;
}