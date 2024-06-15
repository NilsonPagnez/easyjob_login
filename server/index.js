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

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (err) {
            res.send(err);
        } else if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if (err) {
                    res.send(err);
                } else if (isMatch) {
                    res.send({
                        msg: "Usuário logado com sucesso",
                        data: result[0] 
                    });
                } else {
                    res.send({ msg: "Senha incorreta!" });
                }
            });
        } else {
            res.send({ msg: "Conta não encontrada!" });
        }
    });
});

app.post("/update_user", (req, res) => {
    const {
        idusers,
        nome,
        email,
        cpf,
        situation,
        cargo,
        email_pessoal,
        telefone,
        cep,
        endereco,
        estado,
        cidade,
        descricao
    } = req.body;

    // Validar se todos os campos necessários foram recebidos
    if (!idusers) {
        return res.status(400).send({ msg: "O idusers é obrigatório para atualização." });
    }

    // Montar os campos que serão atualizados no banco de dados
    const updateFields = {
        nome,
        cpf,
        situation,
        cargo,
        email_pessoal,
        telefone,
        cep,
        endereco,
        estado,
        cidade,
        descricao
    };

    // Filtrar campos indefinidos para não atualizá-los
    Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

    // Se não houver campos para atualizar, retornar erro
    if (Object.keys(updateFields).length === 0) {
        return res.status(400).send({ msg: "Nenhum campo válido para atualização foi fornecido." });
    }

    // Consultar o banco de dados para atualizar o usuário
    db.query(
        "UPDATE users SET ? WHERE idusers = ?",
        [updateFields, idusers],
        (err, result) => {
            if (err) {
                console.error("Erro ao atualizar usuário:", err);
                return res.status(500).send({ msg: "Erro ao atualizar usuário." });
            }

            if (result.affectedRows > 0) {
                res.send({ msg: "Dados do usuário atualizados com sucesso." });
            } else {
                res.send({ msg: "Usuário não encontrado." });
            }
        }
    );
});


export default app