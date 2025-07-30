import { connection } from "../api/connection.js";

export async function listarProdutos() {
    const comando = `select * from produtos`
    const registros = await connection.query(comando)
    return registros;
}

export async function adicionarProdutos(newC) {
    const comando = `insert into produtos(id_categoria, nm_produto, vl_preco, vl_preco_promocional, bt_destaque, bt_promocao, bt_disponivel, qtd_estoque, ds_detalhes) values(?,?,?,?,?,?,?,?,?)`
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