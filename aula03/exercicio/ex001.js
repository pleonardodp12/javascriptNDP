//definindo uma função
// function minhFuncao(param){}

// minhFuncao(function(){console.log("Uma função enquanto parâmetro")})

// let obj = { start: function(){} }

// obj.minhFuncao = function(){};

function soma(p1,p2){
  const calculaSoma = p1 + p2;
  return calculaSoma;
}

(function(){return console.log('teste')})()
// console.log(soma(1,2))

// let soma = function(p1, p1){
//   return p1 + p2;
// }