const nav = document.getElementById("visao")
const topoNav = nav.offsetTop;
const menu = document.querySelector('.nav')
const novo = document.querySelector('.newvision')
window.onscroll=function(){
    fixar()
    newNav()
}
function fixar(){
    if(window.pageYOffset >= topoNav){
        nav.classList.add("fixoNoTopo")
    }else{
        nav.classList.remove("fixoNoTopo")
    }
}
function newNav(){
    if(window.pageYOffset >= 400){
        menu.classList.add("newNav")
    }else{
        menu.classList.remove("newNav")
    }
}

function newnav(){
    novo.classList.toggle('active')
    // novo.style.marginTop = "6em";
}
function close(){

}