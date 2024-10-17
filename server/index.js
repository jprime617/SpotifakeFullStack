import { createServer } from 'node:http'



const servidor = createServer(( request, response) => {
    console.log('nossa')
    response.write('ta funfando 2')

    return response.end()
})

servidor.listen(8000)