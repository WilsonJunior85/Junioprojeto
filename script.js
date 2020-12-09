var menu1 = document.querySelector(".menu1");     /* criando uma variavel e buscando o menu1 */

/* Adicionar o evento addEventListener que vai ficar escutando o evento de click */
menu1.addEventListener("click", function() {
/* Criando uma variável com elemento sidebar, apartir da lista de classe add ou remover uma classe chamada show-menu */
var sidebar = document.querySelector(".container").classList.toggle("show-menu");


});