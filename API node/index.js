const express = require('express');
const server=express();
const livros= require('./src/data/livros.json');

server.get('/livros', (req,res)=>{
 return res.json(livros)
});

server.listen(3000,()=>{
 console.log('Servidor está funcionado...')
});
