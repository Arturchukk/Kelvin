const menu = document.querySelector('#menu');
const menuBtn = document.querySelector('#menu-btn');
const menuBtnImage = document.querySelector('#menu-btn__image');

menuBtn.onclick = () => {
   if (menu.classList.toggle('open')) {
      menuBtnImage.src = "img/nav-close.svg";

   }else {
      menuBtnImage.src = "img/nav-open.svg";
   }
}

AOS.init();