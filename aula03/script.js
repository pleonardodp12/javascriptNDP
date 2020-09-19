var divBloco = window.document.getElementById('bloco');

function onClickDivBloco(){
  divBloco.innerText = ';)';
  divBloco.style.background = 'black';
};

divBloco.addEventListener('click', onClickDivBloco);

function onOutDivBloco(){
  divBloco.innerText="XXX";
  divBloco.style.background ='blueviolet';
};

divBloco.addEventListener('mouseout', onOutDivBloco);

function onEnterDivBloco(){
  divBloco.innerText= 'YYY';
  divBloco.style.background = 'red';
}

divBloco.addEventListener('mouseenter', onEnterDivBloco);


//console.log(divBloco);