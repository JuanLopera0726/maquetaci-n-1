// constante = valores que no cambian, document voy a buscar algo del documento
const menuBtn = document.getElementById('menuBtn');
const aside = document.querySelector('aside');

menuBtn.addEventListener('click', function(){

    aside.classList.toggle('active');

})
