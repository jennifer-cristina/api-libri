// Importação do módulo do sequelize
const Sequelize = require('sequelize');

/* Criação de uma instancia do sequelize e conexão com o banco de dados Mysql
 Parâmetros de conexão com o banco de dados
 1 - Nome
 2 - Usuário 
 3 - Senha 
 4 - Objeto Json - Determina as configurações de uso do banco de dados:
     4.1 - Local da instância do banco de dados (localhost)
     4.2 - Tipo do banco de dados (Mysql)
     4.3 - Definição do fuso horário do banco de dados 
*/

const connection = new Sequelize(
    'librids3t',
    'root',
    '12345678',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;