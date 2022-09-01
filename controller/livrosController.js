// Importa o módulo do express
const express = require('express');

const livroModel = require('../model/livroModel');

// Configura um recurso de roteamento (Router)
const router = express.Router();

// Rota de listagem de livros
router.get('/listarLivros', (req, res) => {
    res.send('Rota de listagem de livro');
}); 

// Rota de cadastro de livros
router.post('/cadastrarLivros', (req, res) => {
    console.log(req.body);
    res.send('Rota de cadastro de livro');
});

// Rota de alteração de livros
router.put('/alterarLivros', (req, res) => {
    res.send('Rota de edição de livro');
});

// Rota de exclusão de livros
router.delete('/excluirLivros', (req, res) => {
    res.send('Rota de exclusão de livro');
});

module.exports = router;