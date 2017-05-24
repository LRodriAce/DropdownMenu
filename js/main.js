var btnSmallMenu = document.querySelector('#js-btnMenu');
var menuSmall = document.querySelector('#js-menuSmall');

function showSmallMenu(){
  menuSmall.classList.toggle('hidden');
}

btnSmallMenu.addEventListener('click', showSmallMenu);
