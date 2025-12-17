import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "socialdesk"
})




app.post('/login', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    connection.query('select * from usuarios where email=? and senha = ?', [email, senha], (err, results) => {
        if(results.length == 1){
            res.json({success: true, message: 'Usuário encontrado', userId: results[0].id})
        }
    })
})

app.get('/', (req, res) => {
    res.send('response')
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})

connection.connect((err) => {
    if(err){
        console.error("Erro ao se conectar", err.message)
        return
    } 
    console.log('conectado com sucesso')
})