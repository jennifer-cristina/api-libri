// Importa o módulo do express
const express = require('express');

const livroModel = require('../model/livroModel');

// Configura um recurso de roteamento (Router)
const router = express.Router();

// Rota de listagem de livros
router.get('/listarLivros', (req, res) => {
    // res.send('Rota de listagem de livro');
    livroModel.findAll()
        .then(
            (livros) => {
                res.status(200).send(livros);
            }
        )
        .catch(
            (error) => {
                res.status(500).json({ "Mensagem": error })
            }
        );
});

// Rota de listagem de livros por id
router.get('/listarLivros/:codLivro', (req, res) => {

    let { codLivro } = req.params;

    livroModel.findAll({
        where: {
            codLivro
        }
    })
        .then(
            (livro) => {
                res.status(200).send(livro);
            }
        )
        .catch(
            (error) => {
                res.status(500).json({ "Mensagem": error })
            }
        );


    /* Por chave primária */
    // livroModel.findByPk(cod_livro)
    // .then(
    //     (livro) => {
    //         res.status(200).send(livro);
    //     }
    // )
    // .catch(
    //     (error) => {
    //         res.status(500).json({"Mensagem": error})
    //     }
    // )
})

// Rota de cadastro de livros
router.post('/cadastrarLivros', (req, res) => {
    // console.log(req.body);
    // res.send('Rota de cadastro de livro');

    let { titulo, descricao, imagem } = req.body;
    // console.log(req.body);
    livroModel.create({
        titulo,
        descricao,
        imagem
    }).then(
        () => {
            res.status(201).json({ "Mensagem": "Livro inserido com sucesso!" })
        }
    ).catch(
        (error) => {
            res.status(500).json({ "Mensagem": error })
        }
    )

});

// Rota de alteração de livros
router.put('/alterarLivros', (req, res) => {
    // res.send('Rota de edição de livro');

    let { titulo, descricao, imagem, codLivro } = req.body;

    livroModel.update(
        {
            titulo,
            descricao,
            imagem
        },
        { where: { codLivro } }
    )
        .then(
            () => {
                res.status(200).json({ "Mensagem": "Livro alterado com sucesso!" })
            }
        ).catch(
            (error) => {
                res.status(500).json({ "Mensagem": error })
            }
        )

});

// Rota de exclusão de livros
router.delete('/excluirLivros/:codLivro', (req, res) => {
    // res.send('Rota de exclusão de livro');

    let { codLivro } = req.params;

    livroModel.destroy({
        where: { codLivro }
    })
        .then(
            () => {
                res.status(200).json({ "Mensagem": "Livro apagado com sucesso!" })
            }
        ).catch(
            (error) => {
                res.status(500).json({ "Mensagem": error })
            }
        )
});

module.exports = router;