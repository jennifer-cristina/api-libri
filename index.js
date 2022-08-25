const express = require('express')

const app = express();

// Rora get de listagem de dentistas:
app.get('/', (req, res)=>{
    res.send('Resposta da rota raizs');
})

// Rora get de listagem de dentistas:
app.get('/listagemDentistas', (req, res)=>{
    res.send('Resposta de listagem de dentistas');
})

app.listen(3000, ()=>{
    console.log('APLICAÇÃO RODANDO EM - hhtp://localhost:3000');
});