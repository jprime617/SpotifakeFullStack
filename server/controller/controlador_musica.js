import { Artista } from "../db";

const getMusica = async (req, res) => {
    const info = req.body
    const receba = await Artista.findAll({ where: {nome: info.body}})
    res.send("Nossa Alek")
}

export { getMusica }