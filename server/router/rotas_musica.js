import Express from "express";
import { getMusica, getAlbum, getArtista } from "../controller/controlador_musica.js";

const rotas_musica = Express.Router()

rotas_musica.post('/artistas', getArtista);
rotas_musica.post('/musicas', getMusica);
rotas_musica.post('/albums', getAlbum);

export { rotas_musica }