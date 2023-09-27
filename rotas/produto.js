const { produtoRepositorio } = require('../repositorios/produto')
const repositorio = produtoRepositorio()

const Router = require('express').Router()

Router.get('/produto/:id', (req, res) => {
    try{
        const {id} = req.params
        const produto = repositorio.get(id)

        res.send(produto)
    }catch(err){
        console.log(err);
        
        res.status(err.status).send(err.msg);
    }
})
Router.post('/produtos', (req, res) => {
    try{
        const produto = req.body;
        const produtoCriado = repositorio.post(produto)
        res.send(produtoCriado)
    }catch(err){
        console.log(err);
        /* const erro = JSON.parse(err);
        console.log(erro); 
        res.status(JSON.parse(err).status);*/
    }
})
Router.delete('/produtos/:id', (req, res) => {
    try{
        const { id } = req.params;
        const produtoExcluido = repositorio.delete(id)

        res.send(produtoExcluido);

    }catch(err){
        console.log(err);
        /* const erro = JSON.parse(err);
        console.log(erro); 
        res.status(JSON.parse(err).status);*/
    }
})

module.exports = Router