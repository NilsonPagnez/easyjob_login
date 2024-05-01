//Conexão com mysql

import mysql from "mysql"

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'nilson123',
    database: 'easyjob'
})

db.connect()

export default db