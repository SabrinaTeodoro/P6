const validar = (dado) => {
    if(dado && dado.nome && dado.peso && dado.cor && dado.marca){
        return true;
    }
    return false;
}

module.exports = validar;