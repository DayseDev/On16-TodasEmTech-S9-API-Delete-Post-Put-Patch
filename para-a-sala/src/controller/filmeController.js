const filmesJson = require('../models/filmes-barbie.json')
const express = require('express')
const { response } = require('express')
const app = express() //executar express

app.use(express.json()) //body parser

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}

// declaro minha constante de atualizar o titulo do filme 
const updateTitle = (request, response) => {

    // guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas) 
        const idRequest = request.params.id
    // guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)
        let novoTitulo = request.body.title
    
    // preciso filtrar o meu ''banco de dados'' para encontrar o id que a pessoa digitou
        filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)
    
    // depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado
        filmeFiltrado.title = novoTitulo
    
    // depois disso tudo, mando uma response dizendo q ta tudo OK e envio o filme com a alteraçao
        response.status(200).json([{
    
            "mensagem": "seu filme foi atualizado",
            filmeFiltrado
    
        }])
    
    }

    
    const updateMovie = (request, response) => {

        const idRequest = request.params.id
        let filmeRequest = request.body

        let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

        //está substituindo um elemento, a partir de INDEX ENCONTRADO e adicionando p FILME REQUEST no lugar   
        filmesJson.splice( indexEncontrado, 1, filmeRequest)

        response.status(200).json([{
            "message": "filme atualizado", filmesJson
        }])

    }

    const deleteFilme = (request, response) => {

        //pegar o indice(index) do filme que vai ser deletado
        const idRequest = request.params.id
        
    
        const indiceFilme = filmesJson.findIndex( filme => filme.id == idRequest)
        // retira o filme da array de filmes a partir do indice que eu disser
        //  // ARRAY.SPLICE(INDICE, NUMERO DE COISAS QUE VOU DELETAR, ITEM QUE VOU ADICIONAR)

        filmesJson.splice(indiceFilme,1)

        response.status(200).json([{

            "message": " filme deletado, mona",
            "deletado": idRequest,
            filmesJson


        }])
    }



    
    
    //exportando todas os funções do controller para ser usada no filmesRoutes.js
    module.exports = {
        getAll,
        updateTitle,
        updateMovie,
        deleteFilme
        
    }
    