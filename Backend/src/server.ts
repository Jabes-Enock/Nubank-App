import express from 'express'
import cors from 'cors'
import { v4 as uuid} from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())

interface UserData {
    id: string
    CPF: string
    senha: string
}

const users: UserData[] = []

app.get('/users', (request, response) => {
    const { CPF, senha} = request.body

    const userIndex = users.findIndex( user => user.CPF === CPF && user.senha === senha)

    if(userIndex < 0) {
        return response.json([users])
    }

    return response.json(['Usuário autorizado'])

})

app.post('/users', (request, response) => {
    const { CPF, senha} = request.body

    const userIndex = users.findIndex( user => user.CPF === CPF && user.senha === senha)

    if(userIndex < 0) {
        return response.json(['Usuário não encontrado'])
    }

    return response.json(['Usuário autorizado'])
})


app.post('/cadastro', (request, response) => {
    const {CPF, senha} = request.body

    const user = { id: uuid(), CPF, senha }

    users.push(user)

    return response.json(user)
})
app.put('/users', (request, response) => {})
app.delete('/users', (request, response) => {})

app.listen('3333', () => console.log('Started with successfully'))