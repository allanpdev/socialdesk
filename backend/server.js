import mysql from 'mysql2'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'

const senhaDB = "$2b$10$U5va7a.0Ma1GWB1CoKgRveq7.wAhAZ4n8huvKhLAsVDc6DJ35duwa"

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
    
    connection.query("SELECT senha FROM usuarios where email = ?",
        [email],
        (err, result) => {
            if(err){
                return console.log('Erro ao realizar consulta no banco de dados: ', err)
            }
            if(result.length === 0){
                return res.json({message: "Email ou senha inválidos"})
            }

            bcrypt.compare(senha, result[0].senha).then((correctPass) => {
                if(!correctPass){
                    return res.json({ok: false})
                }
                return res.json({ok: true})
            })
        }
    )
})

app.post('/registrar-entrega', (req, res) => {
    const {nome, cpf, dataSolicitacao, dataEntrega, beneficio, dispositivo, bairro, endereco, tecnicoResponsavel} = req.body

    connection.query("INSERT INTO ENTREGAS(nome, cpf, data_solicitacao, data_entrega, beneficio, dispositivo, bairro, endereco, tecnico_responsavel) VALUES(?,?,?,?,?,?,?,?,?)",
        [nome, cpf, dataSolicitacao, dataEntrega, beneficio, dispositivo, bairro, endereco, tecnicoResponsavel],
        (err, results) => {
            if(err){
                console.log("Erro:", err)
            }
            console.log(results)
        }
    )
})

app.get('/entregas', (req, res) => {
    connection.query('SELECT * FROM entregas', (err, result) => {
        res.send(result)
    })
})

app.listen(3000, () => {
    console.log("Servidor rodando!")
})

connection.connect((err) => {
    if(err){
        console.error("Erro ao se conectar", err.message)
        return
    } 
    console.log('Conectado ao banco de dados!')
})