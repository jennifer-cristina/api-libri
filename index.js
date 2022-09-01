const express = require('express')

const app = express();

app.use(express.json());

// Importação do arquivo de rotas de livros
const livrosController = require('./controller/livrosController')

app.use('/', livrosController)

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - hhtp://localhost:3000');
});