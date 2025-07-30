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