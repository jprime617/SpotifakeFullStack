import Express from "express";
import { getUser, deleteUser } from "../controller/controlador_usuarios.js";

const rotas_users = Express.Router()

rotas_users.get('/receber', getUser);
rotas_users.delete('/deletar', deleteUser)

export { rotas_users }

