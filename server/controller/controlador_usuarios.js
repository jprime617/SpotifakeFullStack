import { where } from 'sequelize'
import { User } from '../db.js'

const getUser = async (req, res) => {
    const receba = await User.findAll()
    console.log(receba)
    res.send(receba)
}

const deleteUser = async (req, res) => {
    const { id } = req.body;
    const receba = await User.findOne({ where: { id: id }})
    res.send(receba)
    const apaga = await User.destroy({where: {id: id}})
}

export { getUser, deleteUser }