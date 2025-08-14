import {adicionarRota} from './path.js';
import express from 'express'
const api = express()
api.use(express.json())

adicionarRota(api)

api.listen(5010, () => console.log(`API subiu com sucesso. 5010`))