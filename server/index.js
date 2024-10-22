import Express from "express";
import { criarTabelas, User } from "./db.js";
import bcryptjs from 'bcryptjs'

const app = Express()
app.use(Express.json())
// criarTabelas()

app.post('/registro', async (req, res) => {
    const { nome, sobrenome, email, senha, dataNascimento, cpf } = req.body
    if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send('tem que preencher tudo cabaço')
        return
    }
    const emailExist = await User.findOne({where: { email:email } })
    if (emailExist) {
        return res.send('Esse Email já Está Cadastrado')
    }
    // const cpfExist = await User.findOne({where: { cpf:cpf }})
    // if (cpfExist) {
    //     return res.send('Esse CPF já Está Cadastrado')
    // }




    const senhaCriptografada = bcryptjs.hashSync(senha, 10)
    const teste = await User.create({ nome, sobrenome, email, senha:senhaCriptografada, dataNascimento, cpf })



    res.send(`Nome: ${nome} ${sobrenome}\n Email: ${email}\n Senha: ${senha}\n Data De Nascimento: ${dataNascimento}\n CPF: ${cpf}\n Usuario Criado`)
})

app.post('/login', async (req, res) => {
    const { email, senha, } = req.body
    if (!email || !senha) {
        res.send('tem que preencher tudo cabaço')
        return
    }

    const userExist = await User.findOne({where: { email:email } })
    if (!userExist) {
        return res.send('Esse Usuario Não Existe')
    }
    const senhaValida = bcryptjs.compareSync(senha, userExist.senha)
    if(!senhaValida){
        return res.send('Senha invalida')
    }


    res.send(`Email: ${email}\n Senha: ${senha}`)
})







app.listen(8000)