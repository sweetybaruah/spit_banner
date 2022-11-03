var item3 = document.querySelector('.item3')
var item2 = document.querySelector('.item2')

window.onload = function(){
    new Draggable('.item2', {revert: true,});
}