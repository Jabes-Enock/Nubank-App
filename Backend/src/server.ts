import express from 'express'
import cors from 'cors'
import { v4 as uuid} from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users', (request, response) => {})
app.post('/users', (request, response) => {})
app.put('/users', (request, response) => {})
app.delete('/users', (request, response) => {})

app.listen('3333', () => console.log('Started with successfully'))