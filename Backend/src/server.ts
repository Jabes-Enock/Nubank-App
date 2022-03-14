import express from 'express'
import cors from 'cors'
import { v4 as uuid} from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())

interface UserData {
    id: string
    nome: string
    sobrenome: string
    CPF: string
    email: string
    senha: string
}

const users: UserData[] = []

app.get('/users', (request, response) => {
    
    return response.json(users)

})

app.post('/users', (request, response) => {
    const { CPF, senha } = request.body

    const userIndex = users.findIndex( user => user.CPF === CPF && user.senha === senha)

    if(userIndex < 0) {
        return response.json(['Usuário não encontrado'])
    }

    return response.json(users[userIndex])
})


app.post('/cadastrar', (request, response) => {
    const { nome, sobrenome, CPF, email, senha } = request.body

    const userIndex = users.findIndex( user => user.CPF === CPF )
    
    if(userIndex < 0) {
        const user = { id: uuid(),nome, sobrenome, CPF, email, senha }

        users.push(user)

        return response.json(user)
    }
    
    return response.json('Houve algum problema ao cadastrar o usuário')
    
})


app.put('/users', (request, response) => {
    const { CPF, email, senha } = request.body 

    const userIndex = users.findIndex( user => user.CPF === CPF  && user.senha === senha )

    if(userIndex < 0) {
        return response.json(['Houve um problema ao atualizar o usuário'])
    }

    users[userIndex].email = email

    return response.json(users[userIndex])
})


app.delete('/users/:CPF', (request, response) => {

    const { CPF } = request.params

    const userIndex = users.findIndex( user => user.CPF == CPF)

    if( userIndex < 0) {
        return response.json('Erro ao excluir usuário')
    }

    users.splice( userIndex, 1)

    return response.json('Usuário excluído com sucesso')
})

app.listen('3333', () => console.log('Started with successfully'))