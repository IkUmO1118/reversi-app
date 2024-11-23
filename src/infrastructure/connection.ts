import mysql from 'mysql2/promise';

export async function connectMySQL() {
  return await mysql.createConnection({
    host: 'localhost',
    port: 3307,
    database: 'reversi',
    user: 'reversi',
    password: 'password',
  });
}
