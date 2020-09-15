const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Selecionar o conteúdo (content-item) de uma tab
function selectItem(e){
  removeBorder()
  removeShow()
  //add estilo "border" para a tab ativa
  this.classList.add('tab-border');

  //recuperando conteúdo via DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);

  //add estilo "show"
  tabContentItem.classList.add('show');
}


function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
};


//Remove a classe "show"
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
};


tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});