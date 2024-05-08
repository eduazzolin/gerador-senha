import mysql from 'mysql2'

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin',
  database: 'gerador_senha'
}).promise()

export async function getSenhasById(idUsuario) {
  const [rows] = await pool.query("SELECT * FROM SENHA WHERE ID_USUARIO = ?", [idUsuario]);
  return rows;
}

export async function getSenha(id, idUsuario) {
  const [rows] =  await pool.query(`SELECT * FROM SENHA WHERE ID = ? AND ID_USUARIO = ?`, [id, idUsuario])
  return rows[0]
}

export async function insertSenha(nome, senha, idUsuario) {
  const [rows] = await pool.query(`INSERT INTO SENHA (NOME, SENHA, ID_USUARIO) VALUES (?, ?, ?)`, [nome, senha, idUsuario])
  const id = rows.insertId
  return getSenha(id)
}

export async function getUsuarioById(id) {
  const [rows] =  await pool.query(`SELECT * FROM USUARIO WHERE ID = ?`, [id])
  return rows[0]
}

export async function getUsuario(email, senha) {
  const [rows] =  await pool.query(`SELECT * FROM USUARIO WHERE EMAIL = ? and SENHA = ?`, [email, senha])
  return rows[0]
}

export async function existsUsuarioEmail(email) {
  const [rows] =  await pool.query(`SELECT * FROM USUARIO WHERE EMAIL = ?`, [email])
  return rows[0] != null
}

export async function existsSenhaNome(nome, idUsuario) {
  const [rows] =  await pool.query(`SELECT * FROM SENHA WHERE NOME = ? AND ID_USUARIO = ?`, [nome, idUsuario])
  return rows[0] != null
}

export async function insertUsuario(email, senha) {
  const [rows] = await pool.query(`INSERT INTO USUARIO (EMAIL, SENHA) VALUES (?, ?)`, [email, senha])
  const id = rows.insertId
  return getUsuarioById(id)
}

export async function removeSenha(id, userId) {
  const [rows] =  await pool.query(`DELETE FROM SENHA WHERE ID = ? AND ID_USUARIO = ?`, [id, userId])
  return rows[0]
}