//Constructor
function Cliente(nome, idade){
  this.nome = nome;
  this.idade = idade;
};

//Implementando a função
Cliente.prototype.toString = function() {
  return `Cliente: ${this.nome}, idade: ${this.idade} anos(s)`
};


//Instanciando objeto
var cliente1 = new Cliente('Paulo', 24);
var cliente2 = new Cliente('Higor', 26);

//toString() será carregada uma vez e compartilhada pelos objetos
console.log(cliente1.toString());
console.log(cliente2.toString());