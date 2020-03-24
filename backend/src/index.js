const express = require('express') // Importando o modulo express - variavel contem todas funcionalidades dele
const routes = require('./routes') // tem que passar o ./ para referenciar a pasta quando é um arquivo
const app = express()

// app.use(cors({
// 	origin: 'http://meuapp.com'
// }))

app.use(cors())
app.use(express.json()) // Obrigatório para transformar os JSON (requisções)
app.use(routes)

// Rota e Recurso
/**
 * Métodos HTTP:
 *  GET: BUSCAR/LISTAR UMA INFORMAÇÃO NO BACKEND
 * POST: CRIAR UMA INFORMAÇÃO NO BACKEND
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACKEND
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACKEND
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o '?' (Filtros, paginação)
 * Ex: localhost:3333/users?name=lucas&idade=21
 * 
 * Route Params: Parâmetros utilizados para identificar 'recursos'
 * Ex: localhost:3333/users/:id
 * 
 * Request Body: Corpo da requisição, utilizado para criar ou alterar 'recursos'
 * 
 * 
 *  
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, etc.
 * NoSQL: MongoDB, CouchDB, etc.
 * 
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 * 
 * 
 */





app.listen(3333) // Acesso via localhost 127.0.0.1

