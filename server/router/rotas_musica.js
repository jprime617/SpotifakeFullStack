import Express from "express";
import { getMusica, getAlbum, getArtista } from "../controller/controlador_musica.js";

const rotas_musica = Express.Router()

rotas_musica.get('/artistas', getArtista);
rotas_musica.post('/musicas', getMusica);
rotas_musica.get('/albums', getAlbum);

export { rotas_musica }