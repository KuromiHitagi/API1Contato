import { connection } from "../api/connection.js";

export async function listarPaciente(){
    const comando = `select * from hospital`;
    const [registros] = await connection.query(comando);
    return registros;
}; 

export async function adicionarPaciente(newC){
    const comando = `insert into hospital (paciente,medico, doenca, hospital, localizacao, consulta, curado) values(?,?,?,?,?,?,?)` 
    const [info] = await connection.query(comando, [
        newC.paciente,
        newC.medico,
        newC.doenca,
        newC.hospital,
        newC.localizacao,
        newC.consulta,
        newC.curado
    ]);
    return info.insertId;
}

export async function ListarIdHospital(id) {
    const comando = `select * from hospital where id = ?`;
    const [registros] = await connection.query(comando, [id]);
    return registros;
}

export async function filtrarHospital(nome){
    const comando = `select * from hospital where hospital = ?`;
    const [registros] = await connection.query(comando, [nome]);
    return registros;
}

export async function alterarPaciente(id, newC) {
    const comando = `update hospital
                     set paciente = ?,
                         medico = ?,
                         doenca = ?,
                         hospital = ?,
                         localizacao = ?,
                         consulta = ?,
                         curado = ?
                     where id = ?`;
    const [info] = await connection.query(comando, [
        newC.paciente,
        newC.medico,
        newC.doenca,
        newC.hospital,
        newC.localizacao,
        newC.consulta,
        newC.curado,
        id
    ]);
    return "Paciente alterado com sucesso!";
}

export async function deletarPaciente(id) {
    const comando = `delete from hospital where id = ?`;
    const [info] = await connection.query(comando, [id]);
    return "Paciente deletado com sucesso!";
}
