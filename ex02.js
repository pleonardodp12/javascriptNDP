//Constructor
function Cliente(nome, idade){
  this.nome = nome;
  this.idade = idade;

  this.toString = function() {
    return `Cliente: ${this.nome}, idade: ${this.idade} anos(s)`
  };
};


//Instanciando objeto
var cliente = new Cliente('Paulo', 24);

//toString() será carregada uma vez e compartilhada pelos objetos
console.log(cliente.toString());