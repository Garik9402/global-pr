//  переходы по пунктам меню
const headerMenuItem = document.querySelectorAll(".header__nav-item-link");
for (let i = 0; i < headerMenuItem.length; i++) {
  headerMenuItem[i].addEventListener("click", function () {
    for (let y = 0; y < headerMenuItem.length; y++) {
      headerMenuItem[y].classList.remove("header__nav-item-link--active");
    }
    this.classList.add("header__nav-item-link--active");
  });
}
//  ограничения на ввод символов
 let searchNode = document.getElementById('search')
 let promptNode = document.getElementById('prompt')
 const simvolsNode = /['!','@','#','$','%','^','&','*','(',')']/g;
const promptTextNode = 'Недопустимый символ для ввода'
 searchNode.oninput = function(){
   this.value = this.value.slice(0, 12) 
  if (this.value.match(simvolsNode)) {
   this.value = this.value.replace(simvolsNode, '') 
   promptNode.innerHTML = promptTextNode
}
 else{
   promptNode.innerHTML = '';
 }
}
// открытие и закрытие бургер меню
const burgerNode = document.querySelector('.burger')
const mobMenuNode = document.querySelector('.m-menu')
const wrapperHeroNode = document.querySelector('.wrapper-hero')
burgerNode.addEventListener('click', function(){
       burgerNode.classList.toggle('burger--js-active')
       mobMenuNode.classList.toggle('m-menu--js-toggle')
       wrapperHeroNode.classList.toggle('wrapper-hero--js-toggle')

})






