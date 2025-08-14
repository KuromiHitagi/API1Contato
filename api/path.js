import Turma from '../controller/turma.js'
import Animes from '../controller/animes.js'
import Motos from '../controller/trabalhos_motos.js'
import Filmes from '../controller/filmes.js'
import Funcionarios from '../controller/funcionarios.js'
import Hospital from '../controller/hospital.js'
import Pizzas from '../controller/pizzas.js'
import produtos from '../controller/produtos.js'
import tenis from '../controller/tenis.js'
import times from '../controller/times_futebol.js'

export async function adicionarRota(api) {
    api.use(Turma)
    api.use(Animes)
    api.use(Motos)
    api.use(Filmes)
    api.use(Funcionarios)
    api.use(Hospital)
    api.use(Pizzas)
    api.use(produtos)
    api.use(tenis)
    api.use(times)
}