import Express from "express";
import { listUser, deleteUser, getUser, trocaSenha } from "../controller/controlador_usuarios.js";

const rotas_users = Express.Router()

rotas_users.get('/lista', listUser);
rotas_users.delete('/deletar', deleteUser);
rotas_users.get('/receber', getUser)
rotas_users.put('/atualiza', trocaSenha)

export { rotas_users }

