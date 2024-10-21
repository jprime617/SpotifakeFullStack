import Express from "express";

const app = Express()
app.use(Express.json())

app.post('/registro', (req, res) => {
    const {nome, sobrenome, email, senha, dataNascimento} = req.body
    if(!nome || !sobrenome || !email || !senha || !dataNascimento) {
        res.send('tem que preencher tudo cabaço')
        return
    }
    
    res.send(`Nome: ${nome} ${sobrenome}\n Email: ${email}\n Senha: ${senha}\n Data De Nascimento: ${dataNascimento}`)
})

app.post('/login', (req, res) => {
    const { email, senha, } = req.body
    if(!email || !senha ) {
        res.send('tem que preencher tudo cabaço')
        return
    }
    

    res.send(`Email: ${email}\n Senha: ${senha}`)
})







app.listen(8000)