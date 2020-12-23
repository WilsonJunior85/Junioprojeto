



var menu1 = document.querySelector(".menu1");     /* criando uma variavel e buscando o menu1 */

/* Adicionar o evento addEventListener que vai ficar escutando o evento de click */
menu1.addEventListener("click", function() {
/* Criando uma variável com elemento sidebar, apartir da lista de classe add ou remover uma classe chamada show-menu */
var sidebar = document.querySelector(".container").classList.toggle("show-menu");



});

function Enviar(){
    let nome1 = document.querySelector('#nome').Value;
    let email1  = document.querySelector('#email').Value;
    let mensagem1 = document.querySelector('#mensagem').Value;
    let res = document.querySelector('#res').Value;
    
     
    if( nome1 == "" || email1 == "" || mensagem1 == "" ) {
    alert ("Favor preencha todos os campos");
    
    }else {

        document.querySelector('#res').innerHTML = ` Olá ${res} Funcionou!`;

    } 
    return 0;
}

function saibamais(){

location.href="index2.html"

}

function orcamento(){

    location.href="orcamento.html"
}

function videos(){
    location.href="video.html"

}

function contato (){
location.href="contato.html"

}