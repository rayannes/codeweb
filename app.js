
const express = require ('express')
const app = express()
const projetoRouter = require('./projetoRouter')
const handlebars =require ('express-handlebars')

app.engine('handlebars',handlebars({defaultLayout:null}))
app.set('view engine', 'handlebars') 

//questao um -- item um e dois -- com view
app.get('/projetoRouter/:codigo', projetoRouter.detalheProduto) //mandando para um cntralizador de rotas

  
app.listen(3000, () =>{//testando
	console.log('funcionando')
})