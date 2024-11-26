import { Artista, Album, Musica } from "../db.js";

const getArtista = async (req, res) => {
    const info = req.body
    const receba = await Artista.findAll({ where: {nome: info.nome}})
    res.json(receba)
};

const getAlbum = async (req, res) => {
    const info = req.body
    const receba = await Album.findAll({ where: {title: info.nome}})
    res.json(receba)
};

const getMusica = async (req, res) => {
    const info = req.body
    const receba = await Musica.findAll({ where: {titulo: info.nome}})
    res.json(receba)
};



export { getArtista, getMusica, getAlbum }