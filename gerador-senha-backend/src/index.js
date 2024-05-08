import express from 'express'
import * as database from '../database.js'
import cors from 'cors'

import dotenv from 'dotenv-safe';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/items', verifyJWT, async (req, res) => {
  const senhas = await database.getSenhasById(req.userId)
  res.send(senhas)
});

app.get('/item/:id', verifyJWT, async (req, res) => {
  const id = req.params.id
  const senha = await database.getSenha(id, req.userId)
  res.send(senha)
});
app.delete('/item/:id', verifyJWT, async (req, res) => {
  const id = req.params.id
  const senha = await database.removeSenha(id, req.userId)
  res.send(senha)
});

app.post('/items', verifyJWT, async (req, res) => {
  const { nome, senha } = req.body
  const idUsuario = req.userId
  const exists = await database.existsSenhaNome(nome, idUsuario)
  if (exists) return res.status(409).send('Já existe uma senha com este nome')
  const novaSenha = await database.insertSenha(nome, senha, idUsuario)
  res.status(201).send(novaSenha)
});

app.post('/usuario', async (req, res) => {
  const { email, senha } = req.body
  const exists = await database.existsUsuarioEmail(email)
  if (exists) return res.status(409).send('Email já cadastrado')
  const novoUsuario = await database.insertUsuario(email, senha)
  res.status(201).send(novoUsuario)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
})


//authentication
app.post('/login', async (req, res, next) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const usuario = await database.getUsuario(email, senha);
  if (!usuario) return res.status(401).send('No user found.');
  const id = usuario.id;

  const token = jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 1000
  });

  return res.json({ auth: true, token: token});
})

app.post('/logout', function(req, res) {
  res.json({ auth: false, token: null });
})

function verifyJWT(req, res, next){
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
    req.userId = decoded.id;
    next();
  });
}