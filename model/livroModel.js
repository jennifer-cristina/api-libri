// Importação do sequelize
const Sequelize = require('sequelize');

// Importação da conexão com o banco de dados;
const connection = require('../database/database')

/* 
Representação do modelo de dados tbl_livro
Parâmetros:
1 - Nome da tabela
2 - Objeto json contendo:
    Objeto json:
    Nome do campo
    Tipo de dado
    Regras do campo
*/

const livroModel = connection.define(
    'tbl_livro',
    {
        codLivro: {
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(100),
            allowNull: true,
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
        imagem: {
            type: Sequelize.STRING(500),
            allowNull: true,
        },
    }
);

//livroModel.sync({force:true});

module.exports= livroModel;