import { connection } from "../api/connection.js";

export async function listarProduto() {
    const comando = `select * from produto`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarProduto(newC) {
    const comando = `insert into produto(id_categoria, nm_produto, vl_preco, vl_preco_promocional, bt_destaque, bt_promocao, bt_disponivel, qtd_estoque, ds_detalhes) values(?,?,?,?,?,?,?,?,?)`
    const [info] = await connection.query(comando, [
        newC.id_categoria,
        newC.nm_produto,
        newC.vl_preco,
        newC.vl_preco_promocional,
        newC.bt_destaque,
        newC.bt_promocao,
        newC.bt_disponivel,
        newC.qtd_estoque,
        newC.ds_detalhes
    ])
    return info.insertId;
}

export async function listarIdProduto(id){
    const comando = `select * from produto
                     where id = ?'`
    const [registros] = await connection.query(comando)
    return registros;
}

export async function filtrarProduto(nome){
    const comando = `select * from produto
                     where nome like ?`
    const [registros] = await connection.query(comando, ['%'+nome+'%'])
}

export async function alterarProduto(id, newC) {
    const comando = `update produto
                     set id_categoria = ?,
                         nm_produto = ?,
                         vl_preco = ?,
                         vl_preco_promocional = ?,
                         bt_destaque = ?,
                         bt_promocao = ?,
                         bt_disponivel = ?,
                         qtd_estoque = ?,
                         ds_detalhes = ?
                     where id = ?`;
    const [info] = await connection.query(comando, [
        newC.id_categoria,
        newC.nm_produto,
        newC.vl_preco,
        newC.vl_preco_promocional,
        newC.bt_destaque,
        newC.bt_promocao,
        newC.bt_disponivel,
        newC.qtd_estoque,
        newC.ds_detalhes,
        id
    ]);
    return "Produto alterado com sucesso!";
}

export async function deletarProduto(id) {
    const comando = `delete from produto where id = ?`;
    const [info] = await connection.query(comando, [id]);
    return "Produto deletado com sucesso!";
}
