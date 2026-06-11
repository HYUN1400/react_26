import mysql from 'mysql2/promise';
// .env.local 호출 => 자동호출
// process.env

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: Number(process.env.MYSQL_PORT),
    database: process.env.MYSQL_DATABASE,
    connectionLimit:10,
    waitForConnections:true
})

export default db;