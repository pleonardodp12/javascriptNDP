//Fabrica => dado

// function retornaPotencia(valor){
//   return valor**2; //quais modificações;  
// }

var CarroFactory = (function() {
  var Carro = function (modelo, ano, cor){
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
  };
  return function (modelo,ano, cor){
    return new Carro(modelo, ano, cor)
  };
})();

var mercedes = new CarroFactory("Busão", 1940, "amarelo");

console.log(mercedes)