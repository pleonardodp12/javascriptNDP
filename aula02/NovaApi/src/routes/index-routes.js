const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'Nova API',
    version: '1.0.0'
  });
});

router.get('/retornaCliente/:id_cliente', retornaCliente);

function retornaCliente(req, res, next){
  let id = req.params.id_cliente;

  if(id==1){
    var ret = {
      texto: `Você passou o id: ${id}`,
    }
  } else {
    var ret = {
      texto: `Você não passou um id especial`,
    }
  }

  let retorno = {
    cliente: 'cliente'
  }

  res.json(ret);
  next()
}

module.exports = router;