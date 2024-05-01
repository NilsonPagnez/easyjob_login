import express from 'express'
import db from './database/conection.js';
import cors from 'cors' 
import bcrypt from 'bcrypt'
const saltRounds = 10

const app = express();
app.use(express.json())
app.use(cors())


app.post("/register", (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    //VERIFICA SE O EMAIL JA ESTÁ LOGADO
    db.query("SELECT * FROM users WHERE email = ?", [email], 
    (err, result) =>{
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            //bcrypt: criptografia de senha
            bcrypt.hash(password, saltRounds, (err, hash)=>{
                db.query("INSERT INTO users (email, password) VALUES ( ?, ? )", [email, hash],
                (err, response) =>{
                    if(err){
                        res.send(err);
                    }
                    res.send({msg: "Cadastrado com sucesso!"})
                })
            })
        }else{
            res.send({msg: "Usuário já cadastrado"})
        }
    })
})

app.post("/login", (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    db.query("SELECT * FROM users WHERE email = ?",
    [email, password], (err, result) =>{
        if(err){
            res.send(err)
        }
        if (result.length > 0){
            bcrypt.compare(password,result[0].password,
            (err, result) =>{
                if (result){
                    res.send({msg:"Usuário logado com sucesso"})
                }else{

                }
            })
        }else{
            res.send({msg: "Conta não encontrada!"})
        }
    })
})



export default app