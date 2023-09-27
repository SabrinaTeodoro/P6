const validar = require("../validacoes/produto");

const produtos = [
    {
        nome: "Geladeira",
        preco: 4599.99,
        peso: 98.5,
        cor: "branca",
        marca: "Eletrolux",
        id: 1
    }
]
let ultimo_id = 1

const produtoRepositorio = () => {
    return {
        get: (id) => {
            const produtosFiltrados = produtos.filter(prod => prod.id == id)

            if(produtosFiltrados.length == 0){
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: ""
                }))
            }else{
                return produtosFiltrados[0]
            }
        },
        post: (dado) => {
            if(validar(dado)){
                ultimo_id++;
                dado.id = ultimo_id;
                produtos.push(dado)
                return produtos[ultimo_id - 1];
            }else{
                throw new Error(JSON.stringify({
                    status: 500,
                    msg: ""
                }))
            }
        },
        delete: (id) => {
            //se existe
            let index;
            for(let i = 0; i < produtos.length; i++){
                let p = produtos[i];
                if(p.id == id){
                    index = i;
                    break;
                }
            }
           
            if(index){//se encontrado
                //exclui
                const produtoExcluido = produtos.splice(index, 1);
                
                return produtoExcluido;
            }else{
                throw new Error(JSON.stringify({
                    status: 404,
                    msg: ""
                }))
            }
        }
    }
}

module.exports = {
    produtoRepositorio
}