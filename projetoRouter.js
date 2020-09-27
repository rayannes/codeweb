
//centralizador de rotas questao um item dois

function detalheProduto(req, res) {
	//res.type('html')
	//res.send('detalhe ' + req.params.codigo)
	res.render('projetoDetalhe',{dado: req.params.codigo})
}

module.exports = {detalheProduto}