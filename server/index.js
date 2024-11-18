import Express from "express";
import { criarTabelas } from "./db.js";
import cors from 'cors'
import { rotas } from './router/rotas_autenticacao.js'
import { rotas_users } from "./router/rotas_users.js";
import { rotas_musica } from "./router/rotas_musica.js";


const app = Express()
app.use(Express.json())
app.use(cors())
// criarTabelas()

app.use('/autenticacao', rotas)
app.use('/usuarios', rotas_users)
app.use('/musica', rotas_musica)

app.listen(8000)