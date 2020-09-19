function imprimirParametros(...params){
  this.items = params;
  this.items.forEach(item => console.log(item));
}

const objeto = {};

//imprimirParametros.apply(objeto, [1,2,3,4]);

imprimirParametros.call(objeto, 1,2,3,4);

console.log(objeto)