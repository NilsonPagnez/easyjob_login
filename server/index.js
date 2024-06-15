import express from 'express'
import db from './database/conection.js';
import cors from 'cors' 
import bcrypt from 'bcrypt'
const saltRounds = 10

const app = express();
app.use(express.json())
app.use(cors())

app.post("/register", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const password = req.body.password;

    // Validação do campo de nome

    // Verifica se o email já está cadastrado
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (!nome || nome.length < 3 || nome.length > 40) {
            return res.status(400).send({ msg: "Nome inválido. Deve conter entre 3 e 50 caracteres." });
        }    
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length == 0) {
            // bcrypt: criptografia de senha
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) {
                    return res.status(500).send(err);
                }
                db.query("INSERT INTO users (nome, email, password) VALUES (?, ?, ?)", [nome, email, hash], (err, response) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.send({ msg: "Cadastrado com sucesso!" });
                });
            });
        } else {
            res.status(400).send({ msg: "Usuário já cadastrado" });
        }
    });
});

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
            (err, result) =>{''
                if (result){
                    res.send(
                        {
                            msg:"Usuário logado com sucesso",
                            data: req.body
                        })
                }else{

                }
            })
        }else{
            res.send({msg: "Conta não encontrada!"})
        }
    })
})



export default app